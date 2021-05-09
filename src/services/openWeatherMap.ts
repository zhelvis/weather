import { WeatherView, OpenWeatherMapDataRead, WeatherService } from "../types";
import { getRawOpenWeatherMapData } from "./requests";
import {
  convertKelvinToCelsius,
  getMostFrequentElementOfStringArray,
  purgeNullsFromArray,
} from "../utils";

export const getOpenweathermapData: WeatherService = async (city) => {
  const data = await getRawOpenWeatherMapData(city);
  return transformRawMOpenWeatherMapDataToWeatherView(data);
};

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
    weather_state_name: frequentWeatherStateName as string,
    min_temp: convertKelvinToCelsius(main.temp_min),
    max_temp: convertKelvinToCelsius(main.temp_max),
    wind_speed: wind.speed,
  };
}
