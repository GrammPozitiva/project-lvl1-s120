import engine from '..';
import generateNumber from '../utils';

const rules = 'Balance the given number';

const balance = (number) => {
  const iter = (acc) => {
    acc.sort();
    const min = acc[0];
    const max = acc[acc.length - 1];

    if (max - min > 1) {
      acc[0] = Number(min) + 1;
      acc[acc.length - 1] = Number(max) - 1;
      return iter(acc);
    }

    return acc;
  };
  return Number(iter(`${number}`.split('')).join(''));
};

const getStepData = () => {
  const number = generateNumber(100, 5000);
  return {
    correctAnswer: `${balance(number)}`,
    question: `${number}`,
  };
};

const run = () => engine(rules, getStepData);
export default run;
