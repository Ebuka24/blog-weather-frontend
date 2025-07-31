import { useState, useEffect } from "react";
import { fetchedTown, GeoTownResponse } from "@/app/lib/weather/definitions";


export default function FetchPlaces(countryCode:string, placeInput:string) {
  const [fetchedTowns, setFetchedTowns] = useState<fetchedTown[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [placeLoading, setPlaceLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(placeInput);
    }, 500);
    return () => clearTimeout(handler);
  }, [placeInput]);

  useEffect(()=> {
    if(!countryCode || !debouncedQuery) return setFetchedTowns([]);

    const getTowns = async ()=> {
        setPlaceLoading(true);

        try {
            const res = await fetch(`/api/geodb/countries/${countryCode}/places?namePrefix=${debouncedQuery}`)

            const data:GeoTownResponse = await res.json();

            const towns  = data.data.map((town:any)=> ({
                id:town.id,
                name: town.name,
                population:town.population
            }))

            setFetchedTowns(towns);
        } catch (error) {
            console.error(error);
            setFetchedTowns([]);
        } finally {
            setPlaceLoading(false);
        }
    }
    getTowns();
  }, [countryCode, debouncedQuery]);

  return {fetchedTowns, placeLoading}
}