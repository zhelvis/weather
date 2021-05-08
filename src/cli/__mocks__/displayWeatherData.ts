import { ErrorMessage } from "../types";

export async function displayMetaweatherData(city: string): Promise<void> {
  if (!city) {
    console.error(ErrorMessage.EMPTY_CITY_PARAM);
  }

  return new Promise((resolve) => {
    console.log({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
    resolve();
  });
}

export async function displayOpenweathermapData(city: string): Promise<void> {
  if (!city) {
    console.error(ErrorMessage.EMPTY_CITY_PARAM);
  }

  return new Promise((resolve) => {
    console.log({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
    resolve();
  });
}
