import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, NUM_LENGTH } from "./constants/constants.js";
import getUserNum from "./functions/getUserNum.js";
import generateNum from "./functions/generateNum.js";
import getExitCode from "./functions/getExitCode.js";
import getScore from "./functions/getScore.js";
import printScore from "./functions/printScore.js";

class App {
  async startGame() {
    const computerNum = generateNum();

    while (true) {
      const userNum = await getUserNum();

      const score = getScore(computerNum, userNum);
      printScore(score);

      if (score.strike === NUM_LENGTH) {
        Console.print(MESSAGE.SOLVED);

        const exit = await getExitCode();
        return exit;
      }
    }
  }

  async play() {
    Console.print(MESSAGE.START);

    let isFinished = false;
    while (!isFinished) {
      isFinished = await this.startGame();
    }
  }
}

const app = new App();
app.play();

export default App;
