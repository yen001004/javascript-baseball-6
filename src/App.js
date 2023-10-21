import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, MESSAGE } from "./constants/constants.js";
import getUserNum from "./functions/getUserNum.js";
import generateNum from "./functions/generateNum.js";
import getExitCode from "./functions/getExitCode.js";
import getScore from "./functions/getScore.js";
import printScore from "./functions/printScore.js";

async function playGame() {
  const computerNum = generateNum();
  // Console.print(computerNum);

  while (true) {
    const userNum = await getUserNum();

    const score = getScore(computerNum, userNum);
    printScore(score);

    if (score.strike === 3) {
      Console.print(MESSAGE.SOLVED);
      try {
        const exit = await getExitCode();
        return exit;
      } catch (error) {
        Console.print(error);
        return true;
      }
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
