import readlineSync from 'readline-sync';

const game = (gameRule, getGameQuestion, gameRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  // eslint-disable-next-line no-restricted-syntax
  for (let i = 1; i <= 3; i += 1) {
    const gameQuestion = getGameQuestion();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (gameRightAnswer(gameQuestion) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameRightAnswer(gameQuestion)}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
