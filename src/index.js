import readlineSync from 'readline-sync';


export const askName = () => readlineSync.question('May I have your name? ');

export const showGreet = (name) => {
  console.log(`Hello, ${name}!`);
};
export const showRulesGame = (rules) => {
  console.log(`${rules}`);
};


export const generateNumber = () => Math.floor(Math.random() * 30);

export const showQuestion = (question) => {
  console.log(`Question:  ${question}`);
};
export const askQuestion = () => readlineSync.question('Your answer: ');

export const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.rules);
  const name = askName();
  showGreet(name);

  const iter = (count) => {
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const data = game.getStepData();
    showQuestion(data.question);
    const answer = askQuestion();

    if (game.convertUserAnswer(answer) !== data.correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${data.correctAnswer}".Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    return iter(count + 1);
  };
  return iter(0);
};
