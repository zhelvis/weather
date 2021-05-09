import { getMetaweatherData } from "../metaWeather";

jest.mock("../requests");

describe("Test retriving data from MetaWeather API", () => {
  test("Get MetaWeather Data", async () => {
    const responce = await getMetaweatherData("city");
    expect(responce).toEqual({
      weather_state_name: "test",
      wind_speed: 0,
      max_temp: 0,
      min_temp: 0,
    });
  });
});
