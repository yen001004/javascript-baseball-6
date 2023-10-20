import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/constants.js";
import getUserNum from "./functions/getUserNum.js";

class App {
  async play() {
    Console.print(MESSAGE.START);

    let isFinished = false;
    while (!isFinished) {
      isFinished = await getUserNum();
    }
  }
}

const app = new App();
app.play();

export default App;
