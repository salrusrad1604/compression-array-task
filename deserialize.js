import { sepSym } from './helpers.js';

export function deserializeOptimal(string) {
  const numbers = [];
  const size = string.length;
  let i = 0;

  while (i < size) {
    if (string[i] === sepSym) {
      let idx = i + 1;
      let count = '';

      while (string[idx] !== sepSym) {
        count += string[idx];
        idx++;
      }

      count = +count;
      idx++;

      while (count > 0) {
        numbers.push(string.charCodeAt(idx));
        count--;
      }

      i = ++idx;
    } else {
      numbers.push(string.charCodeAt(i));
      i++;
    }
  }

  return numbers;
}
