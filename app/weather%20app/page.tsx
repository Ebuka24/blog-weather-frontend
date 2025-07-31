"use client"

import { useState, useEffect } from "react";
import LocationForm from "../ui/weather%20app/LocationForm";
import { weatherDataType } from "../lib/weather/definitions";
import Image from "next/image";
 




export default function Page() {

    const [weather, setWeather] = useState<weatherDataType | null >(null);
    const [error, setError] = useState("");
    const [selectedLocation, setSelectedlocation] = useState("");
    const [selectedPlace, setSelectedPlace] = useState("");
    const [selectedCountryCode, setselectedCountryCode] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
          const res = await fetch('https://weather-app-96su.onrender.com/weather', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location: selectedLocation, selectedPlace, selectedCountryCode  }),
          });
    
          const data = await res.json();
          if (res.ok) {
            setWeather(data);
          } else {
            setWeather(null);
            setError(data.message || 'Invalid location'  );
          }
        } catch (err) {
          setError('Error fetching weather/ City not found');
        }
      };
    

    return(
        < > 
        <div className=""> 
        <section className="p-5 bg-gray-900 brightness-100  text-white rounded-xl  antialised border h-screen "> 
            <h1 className="mx-4 my-5 text-center text-3xl  ">Weather App</h1>
         

            <form className="flex justify-center w-full" onSubmit={handleSubmit}> 
            <div  className=" relative"> 
            <LocationForm onSelect={(val)=> {setSelectedlocation(val)}} placeSelect={(val)=> {setSelectedPlace(val)}} selectedNationCode={(val=> {setselectedCountryCode(val)})}/>
            </div>

            <button type="submit" className="border border-gray-500 h-9 font-sans text-center rounded-xl  my-3 p-1 leading-none sm:text-sm md:text-lg shadow transition duration-500 hover:bg-gray-300 hover:text-gray-900 hover:border hover:border-gray-300"> Get weather  </button>
            </form>

              {/* <div className="w-1/4  mx-3 border p-3 rounded-xl"> 
            As soon as you start typing this weather app prefetched a list of location related to what 
            you are typing make your choice and continue. 

            after choosing a country an input field will appear to choose a city or town please
            make sure you choose a known town or city because there is not specific weather details for certain
            places
           </div> */}

            
            {error && <p className="text-red-500"> {error} </p>}
            {weather && 
            <div className="border rounded-lg w-full md:w-2/4 lg:w-1/3  place-self-center text-center p-4 font-sans antialised mt-5">
              <div className="flex justify-center"> 
                <h2 className=" py-5 text-xl">Weather data for  {weather.cityName}, {weather.countryCode} </h2> 
                <Image className="" src={`${weather.imageURL}`} alt="weather image" width={70} height={30}/>
              </div>
              
              <p>Temperature: {weather.temp}°C </p>
              <p>weather description: {weather.weatherDescription}</p>
            </div>
            }
           
           
             
        </section>
            
        </div>
           
        
    
       
        </>
    )
}