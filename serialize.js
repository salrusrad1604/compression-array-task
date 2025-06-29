import { sepSym } from './helpers.js';

export function serializeOptimal(numbers) {
  let count = 1;
  let result = '';

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) {
      count++;
    } else {
      if (count < 5) {
        while (count > 0) {
          result += String.fromCharCode(numbers[i]);
          count--;
        }
      } else {
        result += `${sepSym}${count}${sepSym}${String.fromCharCode(numbers[i])}`;
      }
      count = 1;
    }
  }

  if (count === 1) {
    result += String.fromCharCode(numbers[numbers.length - 1]);
  } else {
    result += `${sepSym}${count}${sepSym}${String.fromCharCode(numbers[numbers.length - 1])}`;
  }

  return result;
}
