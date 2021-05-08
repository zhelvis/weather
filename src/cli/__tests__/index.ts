import { cli, helperText } from "../index";
import { Command, ErrorMessage, Service } from "../../types";

jest.mock("../displayWeatherData");

describe("Test Input Handling", () => {
  test("Call helper", () => {
    const consoleSpy = jest.spyOn(console, "log");
    cli([Command.HELP]);
    expect(consoleSpy).toHaveBeenCalledWith(helperText);
  });

  test("Call openweathermap service", () => {
    const consoleSpy = jest.spyOn(console, "log");
    cli([Command.MAIN, Service.OPENWEATHERMAP, "city"]);
    expect(consoleSpy).toHaveBeenCalledWith({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
  });

  test("Call metaweater service", () => {
    const consoleSpy = jest.spyOn(console, "log");
    cli([Command.MAIN, Service.METAWEATHER, "city"]);

    expect(consoleSpy).toHaveBeenCalledWith({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
  });

  test("Call invalid command", () => {
    const consoleSpy = jest.spyOn(console, "error");
    cli(["invalid"]);
    expect(consoleSpy).toHaveBeenCalledWith(ErrorMessage.COMMAND_TYPE);
  });

  test("Call invalid service", () => {
    const consoleSpy = jest.spyOn(console, "error");
    cli([Command.MAIN, "invalid", "city"]);
    expect(consoleSpy).toHaveBeenCalledWith(ErrorMessage.SERVICE_NAME);
  });

  test("Pass invalid value in metaweather service", () => {
    const consoleSpy = jest.spyOn(console, "error");
    cli([Command.MAIN, Service.METAWEATHER]);
    expect(consoleSpy).toHaveBeenCalledWith(ErrorMessage.EMPTY_CITY_PARAM);
  });

  test("Pass invalid value in openweathermap service", () => {
    const consoleSpy = jest.spyOn(console, "error");
    cli([Command.MAIN, Service.OPENWEATHERMAP]);
    expect(consoleSpy).toHaveBeenCalledWith(ErrorMessage.EMPTY_CITY_PARAM);
  });
});
