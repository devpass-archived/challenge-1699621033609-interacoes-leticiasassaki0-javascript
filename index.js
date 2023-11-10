const { sumArray, findMax, concatStrings } = require('./iterationUtils');

const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log('Sum:', sum);

const values = [10, 20, 30, 40, 50];
const max = findMax(values);
console.log('Max:', max);

const strings = ['Hello', 'World', '!'];
const result = concatStrings(strings);
console.log('Result:', result);