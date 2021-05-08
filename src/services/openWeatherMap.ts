import axios from "axios";
import { WeatherView, OpenWeatherMapDataRead } from "../types";
import { OPENWEATHERMAP_API_URL, OPENWEATHERMAP_API_KEY } from "../config";

export async function getOpenweathermapData(
  city: string
): Promise<WeatherView> {
  const { weather, main, wind } = await getRawWeatherData(city);

  return {
    weather_state_name: weather[0].main,
    min_temp: convertKelvinToCelsius(main.temp_min),
    max_temp: convertKelvinToCelsius(main.temp_max),
    wind_speed: wind.speed,
  };
}

async function getRawWeatherData(
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

function convertKelvinToCelsius(kelvin: number) {
  return kelvin - 273.15;
}
