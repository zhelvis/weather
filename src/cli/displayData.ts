import { getMetaweatherData, getOpenweathermapData } from "../services";
import { ErrorMessage } from "../types";

export async function displayMetaweatherData(city: string): Promise<void> {
  if (!city) {
    console.error(ErrorMessage.EMPTY_CITY_PARAM);
    return;
  }

  try {
    console.log(await getMetaweatherData(city));
  } catch (e) {
    console.error(ErrorMessage.METAWEATHER_NETWORK_ERR);
  }
}

export async function displayOpenweathermapData(city: string): Promise<void> {
  if (!city) {
    console.error(ErrorMessage.EMPTY_CITY_PARAM);
    return;
  }

  try {
    console.log(await getOpenweathermapData(city));
  } catch (e) {
    console.error(ErrorMessage.OPENWEATHERMAP_NETWORK_ERR);
  }
}
