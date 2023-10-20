import { Console } from "@woowacourse/mission-utils";
import {
  REPLAY_CODE,
  EXIT_CODE,
  MESSAGE,
  ERROR_MESSAGE,
} from "../constants/constants.js";

async function getUserNum() {
  try {
    const num = await Console.readLineAsync(MESSAGE.PROMPT);
    if (num == REPLAY_CODE || num == EXIT_CODE) return true;
    Console.print(num);
    return false;
  } catch (error) {
    Console.print(ERROR_MESSAGE.ERROR);
  }
}

export default getUserNum;
