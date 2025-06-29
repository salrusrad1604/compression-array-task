import { serializeOptimal } from './serialize.js';
import { deserializeOptimal } from './deserialize.js';
import { getRandomArrayBySize, getArrayByCountNumber } from './test-data.js';

function runTest(data) {
  const serialized = serializeOptimal(data);
  const deserialized = deserializeOptimal(serialized);

  console.log('Исходные данные:', data);
  console.log('Сжатая строка:', serialized);

  if (JSON.stringify(data) != JSON.stringify(deserialized)) {
    throw Error('Данные не совпадают, ошибка сериализации или десериализации');
  }

  const baseSerializedSize = data.join(',').length;
  const serializedSize = serialized.length;

  const ratio = ((1 - serializedSize / baseSerializedSize) * 100).toFixed(2);
  console.log(`Коэффициент сжатия: ${ratio}%`);
}

const testData = [
  getRandomArrayBySize(50),
  getRandomArrayBySize(100),
  getRandomArrayBySize(500),
  getRandomArrayBySize(1000),
  getRandomArrayBySize(50, 1, 9),
  getRandomArrayBySize(100, 1, 9),
  getRandomArrayBySize(500, 1, 9),
  getRandomArrayBySize(1000, 1, 9),
  getRandomArrayBySize(50, 10, 99),
  getRandomArrayBySize(100, 10, 99),
  getRandomArrayBySize(500, 10, 99),
  getRandomArrayBySize(1000, 10, 99),
  getRandomArrayBySize(50, 100, 300),
  getRandomArrayBySize(100, 100, 300),
  getRandomArrayBySize(500, 100, 300),
  getRandomArrayBySize(1000, 100, 300),
  getArrayByCountNumber(3, 1, 300),
  getArrayByCountNumber(5, 1, 200),
  getArrayByCountNumber(1000, 1, 1),
];

for (let data of testData) {
  runTest(data);
}
