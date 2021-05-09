/* eslint-disable @typescript-eslint/no-empty-function */
import { cli, helperText } from "../index";
import { Command, ErrorMessage, Service } from "../../types";

jest.mock("../displayWeatherData");

describe("Test Input Handling", () => {
  test("Call helper", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    cli([Command.HELP]);
    expect(log).toHaveBeenCalledWith(helperText);
    log.mockReset();
  });

  test("Call openweathermap service", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    cli([Command.MAIN, Service.OPENWEATHERMAP, "city"]);
    expect(log).toHaveBeenCalledWith({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
    log.mockReset();
  });

  test("Call metaweater service", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    cli([Command.MAIN, Service.METAWEATHER, "city"]);
    expect(log).toHaveBeenCalledWith({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
    log.mockReset();
  });

  test("Call invalid command", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    cli(["invalid"]);
    expect(error).toHaveBeenCalledWith(ErrorMessage.COMMAND_TYPE);
    error.mockReset();
  });

  test("Call invalid service", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    cli([Command.MAIN, "invalid", "city"]);
    expect(error).toHaveBeenCalledWith(ErrorMessage.SERVICE_NAME);
    error.mockReset();
  });

  test("Pass invalid value in metaweather service", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    cli([Command.MAIN, Service.METAWEATHER]);
    expect(error).toHaveBeenCalledWith(ErrorMessage.EMPTY_CITY_PARAM);
    error.mockReset();
  });

  test("Pass invalid value in openweathermap service", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    cli([Command.MAIN, Service.OPENWEATHERMAP]);
    expect(error).toHaveBeenCalledWith(ErrorMessage.EMPTY_CITY_PARAM);
    error.mockReset();
  });
});
