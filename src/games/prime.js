import engine from '..';
import generateNumber from '../utils';

const rules = 'Answer "yes" if number prime otherwise answer "no"';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  } else if (number === 2) {
    return true;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getStepData = () => {
  const number = generateNumber(1, 100);
  return {
    correctAnswer: isPrime(number) ? 'yes' : 'no',
    question: `${number}`,
  };
};

const run = () => engine(rules, getStepData);
export default run;
