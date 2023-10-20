import { NUM_LENGTH } from "../constants/constants.js";

function validateUserNum(userNum) {
  if (userNum.length !== NUM_LENGTH) return false;

  for (const num of userNum) {
    if (num < 1 || num > 9) return false;
  }

  const userSet = new Set(userNum);
  if (userSet.size !== NUM_LENGTH) return false;

  return true;
}

export default validateUserNum;
