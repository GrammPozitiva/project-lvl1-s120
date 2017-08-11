import engine from '..';
import generateNumber from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const correctAnswer = (number) => {
  const answer = isEven(number) ? 'yes' : 'no';
  return answer;
};

const getStepData = () => {
  const number = generateNumber();
  return {
    correctAnswer: correctAnswer(number),
    question: `${number}`,
  };
};

const run = () => {
  engine({
    rules,
    getStepData,
  });
};
export default run;
