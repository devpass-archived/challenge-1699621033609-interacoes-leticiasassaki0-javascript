const { sumArray, findMax, concatStrings } = require('./iterationUtils');

test('Calculate sum of array', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(sumArray(numbers)).toBe(15);
});

test('Find max value in array', () => {
  const values = [10, 20, 30, 40, 50];
  expect(findMax(values)).toBe(50);
});

test('Concatenate strings in array', () => {
  const strings = ['Hello', 'World', '!'];
  expect(concatStrings(strings)).toBe('Hello World !');
});