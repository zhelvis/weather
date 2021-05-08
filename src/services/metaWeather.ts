import axios from "axios";
import {
  MetaWeatherSearchRead,
  MetaWeatherDataRead,
  WeatherView,
} from "../types";
import { METAWEATHER_API_URL } from "../config";

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
  const responce = await axios.get<MetaWeatherSearchRead[]>(
    `${METAWEATHER_API_URL}/api/location/search`,
    {
      params: {
        query: city,
      },
    }
  );

  return responce.data[0];
}

async function getRawLocationData(id: number): Promise<MetaWeatherDataRead> {
  const responce = await axios.get<MetaWeatherDataRead>(
    `${METAWEATHER_API_URL}/api/location/${id}`
  );

  return responce.data;
}
