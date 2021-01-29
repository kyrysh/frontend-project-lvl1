import getRandomIntInclusive from '../utils/randomIntGenerator.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getEvenData = () => {
  const question = getRandomIntInclusive(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  runGame(description, getEvenData);
};
