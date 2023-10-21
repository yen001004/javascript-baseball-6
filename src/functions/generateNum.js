import { MissionUtils } from "@woowacourse/mission-utils";
import { MAX_NUM, MIN_NUM, NUM_LENGTH } from "../constants/constants.js";

function generateNum() {
  const computer = [];

  while (computer.length < NUM_LENGTH) {
    const number = MissionUtils.Random.pickNumberInRange(MIN_NUM, MAX_NUM);

    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

export default generateNum;
