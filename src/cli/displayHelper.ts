import { CliAction } from "../types";

export const helperText = `
cli: 

    -h                      display helper text
    -p [service] [city]     retrieve current whether data for city

list of services:

    metaweather
    openweathermap

example:

    weather -p metaweather moscow
`;

export const displayHelper: CliAction = () => {
  console.log(helperText);
};
