import { getOpenweathermapData } from "../openWeatherMap";

jest.mock("../requests");

describe("Test retriving data from OpenWeatherMap API", () => {
  test("Get OpenWeatherMap Data", async () => {
    const responce = await getOpenweathermapData("city");
    expect(responce).toEqual({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
  });
});
