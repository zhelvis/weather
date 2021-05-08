import axios from "axios";
import { LocationSearchRead, LocationDataRead, WeatherView } from "./types";

const apiUrl = "https://www.metaweather.com/";

export async function getMetaweatherData(city: string): Promise<WeatherView> {
  const id = await getLocationId(city);
  return await getLocationWeatherData(id);
}

async function getLocationId(city: string): Promise<number> {
  const { woeid } = await getRawLocationSearch(city);
  return woeid;
}

async function getLocationWeatherData(id: number): Promise<WeatherView> {
  const { consolidated_weather } = await getRawLocationData(id);
  const firstData = consolidated_weather[0];
  return {
    weather_state_name: firstData.weather_state_name,
    min_temp: firstData.min_temp,
    max_temp: firstData.max_temp,
    wind_speed: firstData.wind_speed,
  };
}

async function getRawLocationSearch(city: string) {
  const responce = await axios.get<LocationSearchRead[]>(
    `${apiUrl}/api/location/search`,
    {
      params: {
        query: city,
      },
    }
  );

  return responce.data[0];
}

async function getRawLocationData(id: number): Promise<LocationDataRead> {
  const responce = await axios.get<LocationDataRead>(
    `${apiUrl}/api/location/${id}`
  );

  return responce.data;
}
