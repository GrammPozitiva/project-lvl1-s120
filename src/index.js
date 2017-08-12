import readlineSync from 'readline-sync';

const iter = (count, getStep) => {
  const step = getStep();
  console.log(`Question:  ${step.question}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer !== step.correctAnswer) {
    return {
      answer,
      step,
      status: false,
    };
  }

  console.log('Correct!');

  if (count === 2) {
    return {
      answer,
      step,
      status: true,
    };
  }

  return iter(count + 1, getStep);
};
const runGame = (rules, getStep) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const result = iter(0, getStep);
  if (result.status) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`"${result.answer}" is wrong answer ;(. Correct answer was "${result.step.correctAnswer}".Let's try again, ${name}!`);
  }
};

export default runGame;
