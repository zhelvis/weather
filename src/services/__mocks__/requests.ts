/* eslint-disable @typescript-eslint/no-unused-vars */
import { MetaWeatherDataRead, OpenWeatherMapDataRead } from "../../types";

const mockMetaWeatherDataResponce = {
  consolidated_weather: [
    {
      weather_state_name: "test",
      min_temp: 0,
      max_temp: 0,
      wind_speed: 0,
    },
  ],
};

const mockOpenWeatherMapDataResponce = {
  weather: [
    {
      main: "test",
    },
  ],
  main: {
    temp_min: 273.15,
    temp_max: 273.15,
  },
  wind: {
    speed: 0,
  },
};

export async function getMetaWeatherLocationId(_city: string): Promise<number> {
  return new Promise((resolve) => {
    resolve(2);
  });
}

export async function getRawMetaWeatherData(
  _id: number
): Promise<MetaWeatherDataRead> {
  return new Promise((resolve) => {
    resolve(mockMetaWeatherDataResponce as MetaWeatherDataRead);
  });
}

export async function getRawOpenWeatherMapData(
  _city: string
): Promise<OpenWeatherMapDataRead> {
  return new Promise((resolve) => {
    resolve(mockOpenWeatherMapDataResponce as OpenWeatherMapDataRead);
  });
}
