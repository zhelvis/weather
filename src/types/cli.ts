export enum Command {
  HELP = "-h",
  MAIN = "-p",
}

export enum Service {
  METAWEATHER = "metaweather",
  OPENWEATHERMAP = "openweathermap",
}

export enum ErrorMessage {
  COMMAND_TYPE = "Invalid command",
  SERVICE_NAME = "Invalid service name",
  EMPTY_CITY_PARAM = "Empty city parameter",
  METAWEATHER_NETWORK_ERR = "Error while requesting data from www.metaweather.com",
  OPENWEATHERMAP_NETWORK_ERR = "Error while requesting data from api.openweathermap.org",
}
