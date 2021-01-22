export const evenRule = 'I will give you 3 numbers. Answer "yes" if the number is even, otherwise answer "no". If you answer is wrong - the game will be finished.';

// returns a random integer from 0 to 100
export const getEvenQuestion = () => Math.floor(Math.random() * 101);

export const getEvenRightAnswer = (evenQuestion) => (evenQuestion % 2 === 0 ? 'yes' : 'no');
