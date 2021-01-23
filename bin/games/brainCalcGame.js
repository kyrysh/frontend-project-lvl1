export const calcRule = 'What is the result of the expression?';

export const getCaclAttributes = () => {
  // 1. GAME QUESTION
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const signs = ['+', '-', '*'];
  // Get a random item from an array
  const randomSign = signs[Math.floor(Math.random() * signs.length)];
  const calcQuestion = `${firstNumber} ${randomSign} ${secondNumber}`;

  // 2. GAME RIGHT ANSWER
  // eslint-disable-next-line no-eval
  const calcRightAnswer = eval(calcQuestion);

  // 3. GAME ATTRIBUTES
  const calcAttributes = [calcQuestion, calcRightAnswer];
  return calcAttributes;
};
