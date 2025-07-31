"use client"
import {useState, FormEvent, useEffect } from "react";
import { AutoComplete } from "@/app/hooks/weatherApp/useAutoComplete";
import { GeoDBCity } from "@/app/lib/weather/definitions";
import { off } from "process";
import FetchPlaces from "@/app/hooks/weatherApp/useFetchPlaces";

interface Props {
    onSelect : (value:string) => void;
    placeSelect: (value:string) => void
    selectedNationCode: (value:string) => void
    // selectedRegion: (value:string) => void;
    // selectedTown:(value:string)=> void;
}

export default function LocationForm({onSelect, placeSelect, selectedNationCode }: Props){
   
    const [countryInput, setCountryInput] = useState("");
    const [debouncedInput, setDebouncedInput] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<{code:string, name:string} | null>(null);


    const [placeInput, setPlaceInput] = useState("");
    const [selectedPlace, setSelectedPlace] = useState<string | null>(null);


    const {suggestedCountries, loading} = AutoComplete(countryInput);
    const {fetchedTowns, placeLoading} = FetchPlaces(countryCode, placeInput);


    useEffect (()=> {
        const handler = setTimeout(()=> {
            setDebouncedInput(countryInput);
        }, 500)
        return clearTimeout(handler);
    }, [countryInput]);
           
    return (
        <>
        <div className=" w-full ">
          
            <input 
            className="p-2 rounded-xl m-2 font-sans text-black mx-3 relative border"
            type="text"
            placeholder="Start typing your Country and select from the list of available options"
            value={countryInput }
            onChange={(e)=> {
            setCountryInput(e.target.value);
            setSelectedCountry(null)}}
            
            required
            />
         
            
        

        {loading && <p>fetching countries ...</p>}
        {suggestedCountries.length > 0 && !selectedCountry && (
            <ul style={{listStyleType:"none", padding:0}}>
              {suggestedCountries.map((country, code)=>(
                <li key={country.code}
                onClick={()=>{
                    setCountryInput(`${country.name}`);
                    onSelect(`${country.name}`);
                    setCountryCode(`${country.code}`);
                    setSelectedCountry({code:country.code, name:country.name});
                    selectedNationCode(`${country.code}`);
                }}
                style={{cursor:"pointer", padding:"5px", borderBottom:"1px solid #ccc"}}
                >
                       {country.name}
                </li>
              ))}
            </ul>
        )}
       

        {   selectedCountry &&  (
            <div className="bg-gray-50 text-black rounded-lg p-1"> 
                <h2 className="text-lg"> Towns/Cities in {countryInput}</h2>
                <input
            className="border p-2 w-full rounded-lg"
            value={placeInput}
            onChange={(e) => {
              setPlaceInput(e.target.value);
              setSelectedPlace(null);
            }}
            placeholder="Start typing a city/place..."
          />
             {placeLoading && <p> Fetching places ...</p>}
             { fetchedTowns.length > 0 && !selectedPlace && (
                <ul className="border mt-1">
              {fetchedTowns.map((town: any) => (
                <li
                  key={town.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedPlace(town.name);
                    setPlaceInput(town.name);
                    placeSelect(town.name);
                  }}
                >
                  {town.name}
                </li>
              ))}
            </ul>
             )   }
              

            </div>
            )}
        </div>
        
       
     
        </>
    );
}