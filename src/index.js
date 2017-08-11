import readlineSync from 'readline-sync';


const askName = () => readlineSync.question('May I have your name? ');

const showGreet = (name) => {
  console.log(`Hello, ${name}!`);
};

const showQuestion = (question) => {
  console.log(`Question:  ${question}`);
};
const askQuestion = () => readlineSync.question('Your answer: ');

const runGame = (rules, getStep) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = askName();
  showGreet(name);

  const iter = (count) => {
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }
    const step = getStep();
    showQuestion(step.question);
    const answer = askQuestion();

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
