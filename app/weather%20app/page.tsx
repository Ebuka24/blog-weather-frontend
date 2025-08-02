"use client"

import { useState, useEffect } from "react";
import LocationForm from "../ui/weather%20app/LocationForm";
import { weatherDataType } from "../lib/weather/definitions";
import Image from "next/image";
 




export default function Page() {

    const [weather, setWeather] = useState<weatherDataType | null >(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [selectedLocation, setSelectedlocation] = useState("");
    const [selectedPlace, setSelectedPlace] = useState("");
    const [selectedCountryCode, setselectedCountryCode] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
          const res = await fetch('https://weather-app-96su.onrender.com/weather', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location: selectedLocation, selectedPlace, selectedCountryCode  }),
          });
    
          const data = await res.json();
          if (res.ok) {
            setWeather(data);
            setLoading(false)
          } else {
            setWeather(null);
            setError(data.message || 'Invalid location'  );
          }
        } catch (err) {
          setError('Error fetching weather/ City not found, please refresh your browser and choose a different town/city');
        }
      };
    

    return(
        < > 
        <div className=" border border-gray-500"> 
        <section className="p-5 bg-gray-900 brightness-100  text-white rounded-xl  antialised border h-screen "> 
            <h1 className="mx-4 my-5 text-center text-3xl  ">Weather App</h1>
         

            <form className="flex justify-center w-full" onSubmit={handleSubmit}> 
            <div  className=""> 
            <LocationForm onSelect={(val)=> {setSelectedlocation(val)}} placeSelect={(val)=> {setSelectedPlace(val)}} selectedNationCode={(val=> {setselectedCountryCode(val)})}/>
            </div>
            <div className=" "> 
            <button type="submit" className=" border border-gray-500 font-sans text-center rounded-xl  my-3 p-1 leading-none text-sm md:text-lg shadow transition duration-500 hover:bg-gray-300 hover:text-gray-900 hover:border hover:border-gray-300"> Get weather  </button>
             </div>
            
            </form>
           
            {loading && 
            <p className="text-center place-self-center font-sans antialised mt-5"> Please wait, weather data is loading ...</p>}
            {error && <p className="text-red-500 text-center place-self-center"> {error} </p>}
            {weather && 
            <div className="rounded-lg w-full border border-gray-500 md:w-2/4 lg:w-1/3 place-self-center  text-center p-4 font-sans antialised mt-5">
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