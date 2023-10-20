import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, MESSAGE } from "./constants/constants.js";
import getUserNum from "./functions/getUserNum.js";
import generateNum from "./functions/generateNum.js";
import getExitCode from "./functions/getExitCode.js";
import getScore from "./functions/getScore.js";
import printScore from "./functions/printScore.js";
import validateUserNum from "./functions/validateUserNum.js";

async function playGame() {
  const computerNum = generateNum();
  Console.print(computerNum);

  while (true) {
    const userNum = await getUserNum();

    if (!validateUserNum(userNum)) {
      Console.print(ERROR_MESSAGE.NUM_FORMAT_ERROR);
      continue;
    }

    const score = getScore(computerNum, userNum);
    printScore(score);

    if (score.strike === 3) {
      const exit = await getExitCode();
      return exit;
    }
  }
}

class App {
  async play() {
    Console.print(MESSAGE.START);

    let isFinished = false;
    while (!isFinished) {
      isFinished = await playGame();
    }
  }
}

const app = new App();
app.play();

export default App;
