#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('I will give you 3 numbers. Answer "yes" if the number is even, otherwise answer "no". If you answer is wrong - the game will be finished.');

// Returns an Array of three random numbers
const randomNumbers = [...Array(3)].map(() => Math.floor(Math.random() * 20) + 1);
const isNumberEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const brainEvenGame = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const number of randomNumbers) {
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isNumberEven(number) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isNumberEven(number)}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

brainEvenGame();
