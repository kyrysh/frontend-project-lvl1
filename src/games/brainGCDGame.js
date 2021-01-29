import getRandomIntInclusive from '../utils/randomIntGenerator.js';
import runGame from '../index.js';

const description = 'What is Find the greatest common divisor of given numbers.';

// finding greatest common divisor (GCD) of 2 integers with the help of Euclid's algorithm
const findGCD = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    const tmp = num1;
    num1 = num2;
    num2 = tmp;
  }
  return findGCD(num1, num2 - num1);
};

const getGCDdata = () => {
  const number1 = getRandomIntInclusive(1, 20);
  const number2 = getRandomIntInclusive(1, 20);

  const question = `${number1} ${number2}`;
  const answer = String(findGCD(number1, number2));

  return [question, answer];
};

export default () => {
  runGame(description, getGCDdata);
};
