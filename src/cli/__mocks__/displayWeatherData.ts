import { ErrorMessage, ServiceName, AsyncCliAction } from "../../types";
import { services } from "../../services";

const mockResponce = {
  weather_state_name: "test",
  wind_speed: 0,
  max_temp: 0,
  min_temp: 0,
};

export const displayWeatherData: AsyncCliAction = async (params) => {
  if (!params) {
    throw new Error("displayWeatherData require params: [service] [city]");
  }

  const [serviceName, city] = params;

  const weatherService = services.get(serviceName as ServiceName);

  if (!weatherService) {
    console.error(ErrorMessage.INVALID_SERVICE_NAME);
  }

  if (!city) {
    console.error(ErrorMessage.EMPTY_CITY_PARAM);
  }

  return new Promise((resolve) => {
    console.log(mockResponce);
    resolve();
  });
};
