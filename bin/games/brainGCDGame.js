export const GCDrule = 'What is Find the greatest common divisor of given numbers.';

export const getGCDattributes = () => {
  // first and second numbers are random numbers between (can be equal to) 1 and 100
  let firstNumber = Math.floor(Math.random() * 100 + 1);
  let secondNumber = Math.floor(Math.random() * 100 + 1);

  // 1. GAME QUESTION
  const GCDquestion = `${firstNumber} ${secondNumber}`;

  // 2. GAME RIGHT ANSWER
  // finding greatest common divisor (GCD) of 2 integers with the help of Euclid's algorithm
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      const tmp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = tmp;
    }
    secondNumber -= firstNumber;
  }

  // 3. GAME ATTRIBUTES
  const GCDattributes = [GCDquestion, firstNumber];
  return GCDattributes;
};
