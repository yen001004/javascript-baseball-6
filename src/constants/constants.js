const REPLAY_CODE = "1";
const EXIT_CODE = "2";

const NUM_LENGTH = 3;
const MIN_NUM = 1;
const MAX_NUM = 9;

const MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  PROMPT: "숫자를 입력해주세요 : ",
  SOLVED: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  REPLAY_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
});

const ERROR_MESSAGE = Object.freeze({
  ERROR: "[ERROR]",
  NUM_FORMAT_ERROR: "[ERROR] 숫자가 잘못된 형식입니다.",
  EXIT_CODE_ERROR: "[ERROR] 잘못된 입력입니다.",
});

export {
  REPLAY_CODE,
  EXIT_CODE,
  NUM_LENGTH,
  MIN_NUM,
  MAX_NUM,
  MESSAGE,
  ERROR_MESSAGE,
};
