/* eslint-disable @typescript-eslint/no-empty-function */
import { cli } from "../index";
import { helperText } from "../displayHelper";
import { Command, ErrorMessage, ServiceName } from "../../types";

jest.mock("../displayWeatherData");

describe("Test Input Handling", () => {
  test("Call helper", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    cli([Command.HELP]);
    expect(log).toHaveBeenCalledWith(helperText);
    log.mockReset();
  });

  test("Call openweathermap ServiceName", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    cli([Command.MAIN, ServiceName.OPENWEATHERMAP, "city"]);
    expect(log).toHaveBeenCalledWith({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
    log.mockReset();
  });

  test("Call metaweater ServiceName", () => {
    const log = jest.spyOn(console, "log").mockImplementation(() => {});
    cli([Command.MAIN, ServiceName.METAWEATHER, "city"]);
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
    expect(error).toHaveBeenCalledWith(ErrorMessage.INVALID_COMMAND_TYPE);
    error.mockReset();
  });

  test("Call invalid ServiceName", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    cli([Command.MAIN, "invalid", "city"]);
    expect(error).toHaveBeenCalledWith(ErrorMessage.INVALID_SERVICE_NAME);
    error.mockReset();
  });

  test("Pass invalid value in metaweather ServiceName", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    cli([Command.MAIN, ServiceName.METAWEATHER]);
    expect(error).toHaveBeenCalledWith(ErrorMessage.EMPTY_CITY_PARAM);
    error.mockReset();
  });

  test("Pass invalid value in openweathermap ServiceName", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    cli([Command.MAIN, ServiceName.OPENWEATHERMAP]);
    expect(error).toHaveBeenCalledWith(ErrorMessage.EMPTY_CITY_PARAM);
    error.mockReset();
  });
});
