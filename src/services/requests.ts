import axios from "axios";
import {
  MetaWeatherSearchRead,
  MetaWeatherDataRead,
  OpenWeatherMapDataRead,
} from "../types";
import {
  METAWEATHER_API_URL,
  OPENWEATHERMAP_API_URL,
  OPENWEATHERMAP_API_KEY,
} from "../config";

export async function getMetaWeatherLocationId(city: string): Promise<number> {
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

export async function getRawMetaWeatherData(
  id: number
): Promise<MetaWeatherDataRead> {
  const responce = await axios.get<MetaWeatherDataRead>(
    `${METAWEATHER_API_URL}/api/location/${id}`
  );

  return responce.data;
}

export async function getRawOpenWeatherMapData(
  city: string
): Promise<OpenWeatherMapDataRead> {
  const responce = await axios.get<OpenWeatherMapDataRead>(
    `${OPENWEATHERMAP_API_URL}/data/2.5/weather`,
    {
      params: {
        q: city,
        appId: OPENWEATHERMAP_API_KEY,
      },
    }
  );
  return responce.data;
}
