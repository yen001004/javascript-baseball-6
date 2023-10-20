import { Console } from "@woowacourse/mission-utils";

function printScore({ ball, strike }) {
  if (ball > 0 && strike > 0) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  } else if (ball > 0) {
    Console.print(`${ball}볼`);
  } else if (strike > 0) {
    Console.print(`${strike}스트라이크`);
  } else {
    Console.print("낫싱");
  }
}

export default printScore;
