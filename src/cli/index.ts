import { Command, ErrorMessage, CliAction, AsyncCliAction } from "../types";
import { displayWeatherData } from "./displayWeatherData";
import { displayHelper } from "./displayHelper";

const cliActions: Record<Command, CliAction | AsyncCliAction> = {
  [Command.HELP]: displayHelper,
  [Command.MAIN]: displayWeatherData,
};

export function cli(args: string[]): void {
  const [key, ...params] = args;

  const cliAction = cliActions[key as Command];

  if (!cliAction) {
    console.error(ErrorMessage.INVALID_COMMAND_TYPE);
    return;
  }

  if (params.length > 0) {
    cliAction(params);
  } else {
    cliAction();
  }
}
