import type { weatherDataType } from "./definitions";
import axios from "axios";



export async function weatherData() {
    try {
        const response = await axios.get("http://localhost:3008/clientweather");
        console.log(response.data);
  
        // Axios automatically parses the response JSON into `response.data`
         const { iconURL, Description, temp } = response.data;

        //  const data = await response.json();
        // console.log("Actual data:", data);

        // Check if the response was successful
        // if (!response.ok) {
        //     throw new Error(`Failed to fetch weather data. Status: ${response.status}`);
        // }

        // const weatherData:weatherDataType = await response.json();


        // console.log(weatherData);

        // Check if the required properties exist in the response
        // if (!weatherData.weather || !weatherData.main) {
        //     throw new Error("Invalid weather data structure.");
        // }

        // Extract the needed data from the response
        // const iconCode = weatherData?.iconCode;
        // const iconURL = weatherData?.iconURL;
        // const Description = weatherData?.Description;
        // const temp = weatherData?.temp;

         const neededData = { iconURL, Description, temp };

        // // Log the entire data object for debugging
        // console.log("Weather data:", neededData);

         return neededData;

    } 
    catch (error:any) {
        console.error("Backend/API error: ", error.message);
        throw new Error("Failed to fetch location data");
    }
}
