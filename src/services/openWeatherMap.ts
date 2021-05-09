import axios from "axios";
import { WeatherView, OpenWeatherMapDataRead } from "../types";
import { OPENWEATHERMAP_API_URL, OPENWEATHERMAP_API_KEY } from "../config";
import {
  convertKelvinToCelsius,
  getMostFrequentElementOfStringArray,
  purgeNullsFromArray,
} from "../utils";

export async function getOpenweathermapData(
  city: string
): Promise<WeatherView> {
  const data = await getRawOpenWeatherMapData(city);
  return transformRawMOpenWeatherMapDataToWeatherView(data);
}

async function getRawOpenWeatherMapData(
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

function transformRawMOpenWeatherMapDataToWeatherView(
  data: OpenWeatherMapDataRead
): WeatherView {
  const { weather, main, wind } = data;

  const weatherStateNameArr = purgeNullsFromArray<string>(
    weather.map((el) => el.main)
  );

  const frequentWeatherStateName = getMostFrequentElementOfStringArray(
    weatherStateNameArr
  );

  return {
    weather_state_name: frequentWeatherStateName || "No Data",
    min_temp: convertKelvinToCelsius(main.temp_min),
    max_temp: convertKelvinToCelsius(main.temp_max),
    wind_speed: wind.speed,
  };
}
