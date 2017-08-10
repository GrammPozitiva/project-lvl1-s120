import readlineSync from 'readline-sync';

export const askName = () => readlineSync.question('May I have your name? ');

export const showGreet = (name) => {
  console.log(`Hello, ${name}!`);
};
export const showRulesGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');
};
export const isEven = number => number % 2 === 0;

export const generateNumber = () => Math.floor(Math.random() * 30);

export const showNumber = (number) => {
  console.log(`Question:  ${number}`);
};
export const askQuestion = () => readlineSync.question('Your answer: ');

export const correctAnswer = number => isEven(number) ? 'yes' : 'no';
