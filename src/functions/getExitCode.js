import { Console } from "@woowacourse/mission-utils";
import { EXIT_CODE, MESSAGE, REPLAY_CODE } from "../constants/constants.js";

async function getExitCode() {
  try {
    const num = await Console.readLineAsync(MESSAGE.REPLAY_OR_EXIT);
    // TODO: 입력 코드 예외처리
    if (num == EXIT_CODE) return true;
    return false;
  } catch (error) {
    Console.print(ERROR_MESSAGE.ERROR);
  }
}

export default getExitCode;
