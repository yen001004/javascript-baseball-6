import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/constants.js";
import getUserNum from "./functions/getUserNum.js";
import generateNum from "./functions/generateNum.js";
import getReplayCode from "./functions/getReplayCode.js";
import getScore from "./functions/getScore.js";

async function playGame() {
  const computerNum = generateNum();
  Console.print(computerNum);

  while (true) {
    const userNum = await getUserNum();
    Console.print(userNum);

    const score = getScore(computerNum, userNum);
    Console.print(score);

    // TODO: 종료값 입력 받기
    // if 스트라이크3
    // const replay = getReplayCode();
    // return replay;
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
