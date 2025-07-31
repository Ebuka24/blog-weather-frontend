import { useEffect, useState } from "react";
import { GeoDBCityResponse, GeoDBCity, GeoDBCountry, GeoCountryResponse } from "@/app/lib/weather/definitions";



export function AutoComplete(query: string) {
    const [suggestedCountries, setsuggestedCountries] = useState<GeoDBCountry[]>([])
    const [loading, setLoading] = useState(false);
    const [debouncedQuery, setDebouncedQuery] = useState("");
    // const [countryCode, setCountryCode] = useState<GeoDBCity[]>([]);


    useEffect(()=> {
        const handler = setTimeout(()=> {
            setDebouncedQuery(query);
        }, 500);
        return () => clearTimeout(handler)
    }, [query]);

    useEffect(()=> { 
        if(!debouncedQuery) return setsuggestedCountries([]);

        const fetchSuggestions = async ()=> {
            setLoading(true);
            try {
                const res = await fetch(`/api/geodb/countries?namePrefix=${debouncedQuery}`) 
        

                    const data:GeoCountryResponse = await res.json()
                    console.log("GEODB data full response :", data);
                    const countries = data.data.map((country: any)=> ({
                       code: country.code,
                       name: country.name
                    }) );
                    // `${city.city}, ${city.countryCode}`
                    setsuggestedCountries(countries);
                   

            } catch (error) {
                setsuggestedCountries([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestions();
    }, [debouncedQuery]);

    return {suggestedCountries, loading}


}

