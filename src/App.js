import { Console } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  EXIT_CODE,
  MESSAGE,
  REPLAY_CODE,
} from "./constants/constants";

async function getNumber() {
  try {
    const num = await Console.readLineAsync(MESSAGE.PROMPT);
    if (num == REPLAY_CODE || num == EXIT_CODE) return true;
    Console.print(num);
    return false;
  } catch (error) {
    Console.print(ERROR_MESSAGE.ERROR);
  }
}

class App {
  async play() {
    Console.print(MESSAGE.START);

    let isFinished = false;
    while (!isFinished) {
      isFinished = await getNumber();
    }
  }
}

const app = new App();
app.play();

export default App;
