import axios from "axios";
import {
  MetaWeatherSearchRead,
  MetaWeatherDataRead,
  WeatherView,
} from "../types";
import { METAWEATHER_API_URL } from "../config";
import { convertMilesPerHourToMetersPerSeconds } from "../utils";

export async function getMetaweatherData(city: string): Promise<WeatherView> {
  const id = await getLocationId(city);
  const data = await getRawMetaweatherData(id);
  return transformRawMetaWeatherDataToWeatherView(data);
}

async function getLocationId(city: string): Promise<number> {
  const responce = await axios.get<MetaWeatherSearchRead[]>(
    `${METAWEATHER_API_URL}/api/location/search`,
    {
      params: {
        query: city,
      },
    }
  );

  return responce.data[0].woeid;
}

async function getRawMetaweatherData(id: number): Promise<MetaWeatherDataRead> {
  const responce = await axios.get<MetaWeatherDataRead>(
    `${METAWEATHER_API_URL}/api/location/${id}`
  );

  return responce.data;
}

function transformRawMetaWeatherDataToWeatherView(
  data: MetaWeatherDataRead
): WeatherView {
  const { consolidated_weather } = data;

  const {
    weather_state_name,
    min_temp, // Celsius
    max_temp, // Celsius
    wind_speed, //  Miles per hour
  } = consolidated_weather[0]; // The first element of consolidated weather array is "Today" data

  return {
    weather_state_name: weather_state_name || "No data",
    min_temp: min_temp || "No data",
    max_temp: max_temp || "No data",
    wind_speed: wind_speed
      ? convertMilesPerHourToMetersPerSeconds(wind_speed)
      : "No data",
  };
}
