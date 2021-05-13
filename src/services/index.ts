import { ServiceName, WeatherService } from "../types";
import { getMetaweatherData } from "./metaWeather";
import { getOpenweathermapData } from "./openWeatherMap";

export const services: Record<ServiceName, WeatherService> = {
  [ServiceName.METAWEATHER]: getMetaweatherData,
  [ServiceName.OPENWEATHERMAP]: getOpenweathermapData,
};
