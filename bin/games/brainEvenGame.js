export const evenRule = 'I will give you 3 numbers. Answer "yes" if the number is even, otherwise answer "no". If you answer is wrong - the game will be finished.';

export const getEvenAttributes = () => {
  // 1. GAME QUESTION
  const evenQuestion = Math.floor(Math.random() * 101);
  // 2. GAME RIGHT ANSWER
  const evenRightAnswer = evenQuestion % 2 === 0 ? 'yes' : 'no';
  // 3. GAME ATTRIBUTES
  const evenAttributes = [evenQuestion, evenRightAnswer];
  return evenAttributes;
};
