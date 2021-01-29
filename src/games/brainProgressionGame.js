// the game is designed for ARITHMETIC PROGRESSION (AP)
import getRandomIntInclusive from '../utils/randomIntGenerator.js';
import runGame from '../index.js';

const description = 'What number is missing in the arithmetic progression?';

const createProgression = (firstNumber, progressionDifference, progressionLength) => {
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    const currentNumber = firstNumber + (i - 1) * progressionDifference;
    progression.push(currentNumber);
  }
  return progression;
};

const getProgressionData = () => {
  const firstNumber = getRandomIntInclusive(1, 20);
  const progressionDifference = getRandomIntInclusive(1, 10);
  const progressionLength = getRandomIntInclusive(5, 10);

  const progression = createProgression(firstNumber, progressionDifference, progressionLength);

  const hiddenNumberIndex = getRandomIntInclusive(0, (progressionLength - 1));
  const answer = String(progression[hiddenNumberIndex]);

  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  runGame(description, getProgressionData);
};
