import { MetaWeatherDataRead, WeatherView, WeatherService } from "../types";
import { convertMilesPerHourToMetersPerSeconds } from "../utils";
import { getMetaWeatherLocationId, getRawMetaWeatherData } from "./requests";

export const getMetaweatherData: WeatherService = async (city) => {
  const id = await getMetaWeatherLocationId(city);
  const data = await getRawMetaWeatherData(id);
  return transformRawMetaWeatherDataToWeatherView(data);
};

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

  const minTemp = typeof min_temp === "number" ? min_temp : "No Data";
  const maxTemp = typeof max_temp === "number" ? max_temp : "No Data";
  const windSpeed =
    typeof wind_speed === "number"
      ? convertMilesPerHourToMetersPerSeconds(wind_speed)
      : "No Data";

  return {
    weather_state_name: weather_state_name || "No Data",
    min_temp: minTemp,
    max_temp: maxTemp,
    wind_speed: windSpeed,
  };
}
