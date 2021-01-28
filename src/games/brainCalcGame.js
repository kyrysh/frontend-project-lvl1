import getRandomIntInclusive from '../utils/randomIntGenerator.js';
import runGame from '../index.js';

const calcDescription = 'What is the result of the expression?';

const countExpression = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'The operator is not defined!';
  }
};

const getCalcData = () => {
  const number1 = getRandomIntInclusive(0, 20);
  const number2 = getRandomIntInclusive(0, 20);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = String(countExpression(number1, randomOperator, number2));

  const data = [question, answer];
  return data;
};

export default () => {
  runGame(calcDescription, getCalcData);
};
