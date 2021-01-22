export const GCDrule = 'What is Find the greatest common divisor of given numbers.';

export const getGCDquestion = () => {
  // first and second numbers are random numbers between (can be equal to) 1 and 100
  const firstNumber = Math.floor(Math.random() * 100 + 1);
  const secondNumber = Math.floor(Math.random() * 100 + 1);
  const GCDquestion = `${firstNumber} ${secondNumber}`;
  return GCDquestion;
};

export const getGCDrightAnswer = (GCDquestion) => {
  // GCDquestion is a string - turning it into array
  const numbers = GCDquestion.split(' ');
  let firstNumber = Number(numbers[0]);
  let secondNumber = Number(numbers[1]);

  // finding greatest common divisor (GCD) of 2 integers with the help of Euclid's algorithm
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      const tmp = firstNumber;
      firstNumber = secondNumber;
      secondNumber = tmp;
    }
    secondNumber -= firstNumber;
  }

  return String(firstNumber);
};
