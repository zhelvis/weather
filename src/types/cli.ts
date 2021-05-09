export enum Command {
  HELP = "-h",
  MAIN = "-p",
}
export interface CliAction {
  (params?: string[]): void;
}

export interface AsyncCliAction {
  (params?: string[]): Promise<void>;
}

export enum ErrorMessage {
  INVALID_COMMAND_TYPE = "Invalid command",
  INVALID_SERVICE_NAME = "Invalid service name",
  EMPTY_CITY_PARAM = "Empty city parameter",
  NETWORK_ERR = "Error while requesting data from API",
}
