function getScore(dst, src) {
  let ball = 0;
  let strike = 0;

  src.forEach((srcNum, srcIdx) => {
    const dstIdx = dst.findIndex((dstNum) => dstNum === srcNum);

    if (dstIdx === srcIdx) strike += 1;
    else if (dstIdx !== -1) ball += 1;
  });

  return { ball, strike };
}

export default getScore;
