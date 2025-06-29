const numberRange = [1, 300];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArrayBySize(size, min = numberRange[0], max = numberRange[1]) {
  return Array.from({ length: size }, () => getRandomInt(min, max));
}

export function getArrayByCountNumber(count, min = numberRange[0], max = numberRange[1]) {
  const res = [];

  for (let i = min; i <= max; i++) {
    for (let j = 0; j < count; j++) {
      res.push(i);
    }
  }

  return res;
}
