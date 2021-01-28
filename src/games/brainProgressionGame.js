// the game is designed for ARITHMETIC PROGRESSION (AP)
import getRandomIntInclusive from '../utils/randomIntGenerator.js';
import runGame from '../index.js';

const progressionDescription = 'What number is missing in the arithmetic progression?';

const createProgression = (number1, progressionDifference, progressionLength) => {
  const progression = [number1];
  for (let i = 2; i <= progressionLength; i += 1) {
    const newNumber = number1 + (i - 1) * progressionDifference;
    progression.push(newNumber);
  }
  return progression;
};

const getProgressionData = () => {
  const number1 = getRandomIntInclusive(1, 20);
  const progressionDifference = getRandomIntInclusive(1, 10);
  const progressionLength = getRandomIntInclusive(5, 10);

  const progression = createProgression(number1, progressionDifference, progressionLength);

  const hiddenNumberIndex = getRandomIntInclusive(0, (progressionLength - 1));
  const answer = String(progression[hiddenNumberIndex]);

  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');

  const data = [question, answer];
  return data;
};

export default () => {
  runGame(progressionDescription, getProgressionData);
};
