import { Command, Service, ErrorMessage } from "./types";

export function readInput(args: string[]): void {
  const [key, ...params] = args;

  switch (key) {
    case Command.HELP:
      displayHelper();
      break;
    case Command.MAIN:
      readParams(params);
      break;
    default:
      throw new Error(ErrorMessage.COMMAND_TYPE);
  }
}

function displayHelper(): void {
  console.log(`
      -h — display list of available commands
      -p [service] [city] — retrieve current whether data for city
    `);
}

function readParams(params: string[]): void {
  const service = params[0];

  switch (service) {
    case Service.METAWEATHER:
      console.log(params);
      break;
    case Service.OPENWEATHERMAP:
      console.log(params);
      break;
    default:
      throw new Error(ErrorMessage.SERVICE_NAME);
  }
}
