import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, ERROR_MESSAGE, NUM_LENGTH } from "../constants/constants.js";

async function getUserNum() {
  const num = await Console.readLineAsync(MESSAGE.PROMPT);

  if (!/^[1-9]{3}$/.test(num)) {
    throw new Error(ERROR_MESSAGE.NUM_FORMAT_ERROR);
  }

  const uniqueNum = new Set(num);
  if (uniqueNum.size !== NUM_LENGTH) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_NUM_ERROR);
  }

  return Array.from(num, Number);
}

export default getUserNum;
