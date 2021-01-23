import readlineSync from 'readline-sync';

// "getGameAttributes" is function, which returns array with gameQuestion and gameRightAnswer

const game = (gameRule, getGameAttributes) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  // eslint-disable-next-line no-restricted-syntax
  for (let i = 1; i <= 3; i += 1) {
    const gameAttributes = getGameAttributes();
    const gameQuestion = gameAttributes[0];
    // i need to compare rightAnswer with userAnswer (=string),so rightAnswer also should be string
    const gameRightAnswer = String(gameAttributes[1]);

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (gameRightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameRightAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
