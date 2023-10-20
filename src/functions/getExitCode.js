import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  EXIT_CODE,
  MESSAGE,
  REPLAY_CODE,
} from "../constants/constants.js";

async function getExitCode() {
  while (true) {
    try {
      const num = await Console.readLineAsync(MESSAGE.REPLAY_OR_EXIT);

      if (num === REPLAY_CODE) {
        return false;
      } else if (num === EXIT_CODE) {
        return true;
      } else {
        Console.print(ERROR_MESSAGE.EXIT_CODE_ERROR);
      }
    } catch (error) {
      Console.print(ERROR_MESSAGE.ERROR);
    }
  }
}

export default getExitCode;
