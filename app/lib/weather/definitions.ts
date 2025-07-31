

export type weatherDataType = {
  name:string
    icon: any
  imageURL: string,
  weatherDescription: string,
  temp: number,
  humidity: number,
  wind: {speed:number}
  cityName: string,
  countryCode:string
}

export interface weatherData {
  name:string;
  weather:{description:string}[];
  main:{temp:number};
}

// export interface GeoDBCity {
//   city:string;
//   countrycode:string;
// }
export interface GeoDBCountry {
  code:string;
  name:string;
}

export interface GeoDBCity {
    id:string;
    name:string;
    country: string;
    countryCode:string;
    region:string;

}

export interface fetchedRegion {
  id: string;
  name:string;
  isoCode:string,

}

export interface fetchedTown {
  id:string;
  name:string;
  population: number;
}

export interface GeoTownResponse {
  data:fetchedTown[]
}


export interface GeoDBCityResponse {
   data: GeoDBCity[];
}

export interface GeoCountryResponse {
  data: GeoCountryResponse[]
}