import { services } from "../services";
import { ErrorMessage, ServiceName, AsyncCliAction } from "../types";

export const displayWeatherData: AsyncCliAction = async (params) => {
  if (!params) {
    throw new Error("displayWeatherData require params: [service] [city]");
  }

  const [serviceName, city] = params;

  const weatherService = services[serviceName as ServiceName];

  if (!weatherService) {
    console.error(ErrorMessage.INVALID_SERVICE_NAME);
    return;
  }

  if (!city) {
    console.error(ErrorMessage.EMPTY_CITY_PARAM);
    return;
  }

  try {
    console.log(await weatherService(city));
  } catch (e) {
    console.error(ErrorMessage.NETWORK_ERR);
  }
};
