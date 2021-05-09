import { MetaWeatherDataRead, WeatherView } from "../types";
import { convertMilesPerHourToMetersPerSeconds } from "../utils";
import { getMetaWeatherLocationId, getRawMetaWeatherData } from "./requests";

export async function getMetaweatherData(city: string): Promise<WeatherView> {
  const id = await getMetaWeatherLocationId(city);
  const data = await getRawMetaWeatherData(id);
  return transformRawMetaWeatherDataToWeatherView(data);
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
    weather_state_name: weather_state_name,
    min_temp: min_temp,
    max_temp: max_temp,
    wind_speed: convertMilesPerHourToMetersPerSeconds(wind_speed),
  };
}
