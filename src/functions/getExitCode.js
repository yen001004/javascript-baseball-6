import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  EXIT_CODE,
  MESSAGE,
  REPLAY_CODE,
} from "../constants/constants.js";

const isEndCode = (num) => {
  return num === REPLAY_CODE || num === EXIT_CODE;
};

async function getExitCode() {
  const num = await Console.readLineAsync(MESSAGE.REPLAY_OR_EXIT);

  if (isNaN(num) || !isEndCode(num)) {
    throw new Error(ERROR_MESSAGE.EXIT_CODE_ERROR);
  }

  if (num === REPLAY_CODE) {
    return false;
  } else if (num === EXIT_CODE) {
    return true;
  }
}

export default getExitCode;
