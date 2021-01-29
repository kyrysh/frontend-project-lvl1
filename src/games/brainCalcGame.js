import getRandomIntInclusive from '../utils/randomIntGenerator.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const calculateExpression = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getCalcData = () => {
  const number1 = getRandomIntInclusive(0, 20);
  const number2 = getRandomIntInclusive(0, 20);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomIntInclusive(0, 2)];

  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = String(calculateExpression(number1, randomOperator, number2));

  return [question, answer];
};

export default () => {
  runGame(description, getCalcData);
};
