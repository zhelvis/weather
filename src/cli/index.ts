import { Command, Service, ErrorMessage } from "../types";
import {
  displayMetaweatherData,
  displayOpenweathermapData,
} from "./displayWeatherData";

export const helperText = `
-h — display list of available commands
-p [service] [city] — retrieve current whether data for city
`;

export function cli(args: string[]): void {
  const [key, ...params] = args;

  switch (key) {
    case Command.HELP:
      console.log(helperText);
      break;
    case Command.MAIN:
      readParams(params);
      break;
    default:
      console.error(ErrorMessage.COMMAND_TYPE);
  }
}

function readParams(params: string[]): void {
  const [service, city] = params;

  switch (service) {
    case Service.METAWEATHER:
      displayMetaweatherData(city);
      break;
    case Service.OPENWEATHERMAP:
      displayOpenweathermapData(city);
      break;
    default:
      console.error(ErrorMessage.SERVICE_NAME);
  }
}
