import { Console } from "@woowacourse/mission-utils.js";
import { EXIT_CODE, MESSAGE, REPLAY_CODE } from "../constants/constants.js";

async function getReplayCode() {
  try {
    const num = await Console.readLineAsync(MESSAGE.REPLAY_OR_EXIT);
    if (num == REPLAY_CODE || num == EXIT_CODE) return true;
    return false;
  } catch (error) {
    Console.print(ERROR_MESSAGE.ERROR);
  }
}

export default getReplayCode();
