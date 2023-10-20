import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR_MESSAGE } from "../constants/constants.js";

async function getUserNum() {
  try {
    const num = await Console.readLineAsync(MESSAGE.PROMPT);
    return [...num].map(Number);
  } catch (error) {
    Console.print(ERROR_MESSAGE.ERROR);
  }
}

export default getUserNum;
