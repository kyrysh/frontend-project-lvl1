export const calcRule = 'What is the result of the expression?';

export const getCalcQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const signs = ['+', '-', '*'];

  // Get a random item from an array
  const randomSign = signs[Math.floor(Math.random() * signs.length)];
  const calcQuestion = `${firstNumber} ${randomSign} ${secondNumber}`;
  return calcQuestion;
};

export const getCalcRightAnswer = (calcQuestion) => {
  // eslint-disable-next-line no-eval
  const calcRightAnswer = String(eval(calcQuestion));
  return calcRightAnswer;
};
