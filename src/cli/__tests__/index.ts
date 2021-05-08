import { readInput } from "../index";
import { Command, ErrorMessage, Service } from "../types";

describe("Test Input Handling", () => {
  test("Call helper", () => {
    expect(readInput([Command.HELP])).toBe(undefined);
  });

  test("Call openweathermap service", () => {
    expect(readInput([Command.MAIN, Service.OPENWEATHERMAP, "city"])).toBe(
      undefined
    );
  });

  test("Call metaweater service", () => {
    expect(readInput([Command.MAIN, Service.METAWEATHER, "city"])).toBe(
      undefined
    );
  });

  test("Call invalid command", () => {
    expect(() => {
      readInput(["invalid"]);
    }).toThrow(ErrorMessage.COMMAND_TYPE);
  });

  test("Call invalid service", () => {
    expect(() => {
      readInput([Command.MAIN, "invalid", "city"]);
    }).toThrow(ErrorMessage.SERVICE_NAME);
  });
});
