import { WeatherView } from "./weatherView";

export enum ServiceName {
  METAWEATHER = "metaweather",
  OPENWEATHERMAP = "openweathermap",
}

export interface WeatherService {
  (city: string): Promise<WeatherView>;
}
