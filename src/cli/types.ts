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
}
