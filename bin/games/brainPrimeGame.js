export const primeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getPrimeAttributes = () => {
  // 1. GAME QUESTION
  const primeQuestion = Math.floor(Math.random() * 21);

  // 2. GAME RIGHT ANSWER
  let primeRightAnswer = 'yes';
  if (primeQuestion < 2) {
    primeRightAnswer = 'no';
  }
  for (let i = 2; i <= primeQuestion / 2; i += 1) {
    if (primeQuestion % i === 0) {
      primeRightAnswer = 'no';
    }
  }

  // 3. GAME ATTRIBUTES
  const primeAttributes = [primeQuestion, primeRightAnswer];
  return primeAttributes;
};
