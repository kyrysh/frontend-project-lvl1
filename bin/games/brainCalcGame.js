export const brainCalcGameRule = 'What is the result of the expression?';

export const getBrainCalcGameQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const signs = ['+', '-', '*'];

  // Get a random item from an array
  const randomSign = signs[Math.floor(Math.random() * signs.length)];
  const brainCalcGameQuestion = `${firstNumber} ${randomSign} ${secondNumber}`;
  return brainCalcGameQuestion;
};

export const getBrainCalcGameRightAnswer = (brainCalcGameQuestion) => {
  // eslint-disable-next-line no-eval
  const brainCalcGameRightAnswer = String(eval(brainCalcGameQuestion));
  return brainCalcGameRightAnswer;
};
