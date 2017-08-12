import readlineSync from 'readline-sync';

let iterations = 3;

const iterateGameSteps = (getStep) => {
  iterations -= 1;

  const step = getStep();
  console.log(`Question:  ${step.question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== step.correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${step.correctAnswer}".`);
    return false;
  }

  console.log('Correct!');

  if (iterations === 0) {
    return true;
  }

  return iterateGameSteps(getStep);
};
const runGame = (rules, getStep) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const result = iterateGameSteps(getStep);

  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default runGame;
