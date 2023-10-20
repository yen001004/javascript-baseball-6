import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/constants.js";
import getUserNum from "./functions/getUserNum.js";
import generateNum from "./functions/generateNum.js";

async function playGame() {
  const computerNum = generateNum();
  Console.print(computerNum);

  while (true) {
    const userNum = await getUserNum();

    // 스트라이크, 볼

    // if 스트라이크
    // getReplayCode
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
