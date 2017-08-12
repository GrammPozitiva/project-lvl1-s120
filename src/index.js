import readlineSync from 'readline-sync';

const runGame = (rules, getStep) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const iter = (count) => {
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const step = getStep();
    console.log(`Question:  ${step.question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== step.correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${step.correctAnswer}".Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
    return iter(count + 1);
  };
  return iter(0);
};

export default runGame;
