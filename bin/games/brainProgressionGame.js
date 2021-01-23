// the game is designed for ARITHMETIC PROGRESSION

export const progressionRule = 'What number is missing in the arithmetic progression?';

export const getProgressionAttributes = () => {
  // first integer of progression - integer between 1 and 20
  const initialTerm = Math.floor(Math.random() * 20 + 1);
  // integer between 1 and 5
  const commonDifference = Math.floor(Math.random() * 5 + 1);
  // progression length - between 5 to 10
  const numberOfTerms = Math.floor(Math.random() * 6 + 5);
  // index of hidden Term
  const hiddenTermIndex = Math.floor(Math.random() * (numberOfTerms - 4) + 5);

  // 1.2. GAME QUESTION & GAME ANSWER
  let arithmeticProgression = initialTerm;
  let hiddenTerm = '';
  for (let i = 2; i <= numberOfTerms; i += 1) {
    // Formula of nth term of an AP: a[n] = a[1] + (n-1) * d
    const newTerm = initialTerm + (i - 1) * commonDifference;
    if (i === hiddenTermIndex) {
      hiddenTerm = newTerm;
      arithmeticProgression = `${arithmeticProgression} ..`;
    } else {
      arithmeticProgression = `${arithmeticProgression} ${newTerm}`;
    }
  }

  // 3. GAME ATTRIBUTES
  const progressionAttributes = [arithmeticProgression, hiddenTerm];
  return progressionAttributes;
};
