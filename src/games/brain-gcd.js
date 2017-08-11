import engine from '..';
import generateNumber from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  const result = number2 ? gcd(number2, number1 % number2) : number1;
  return result;
};

const getStepData = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();

  return {
    correctAnswer: gcd(number1, number2),
    question: `${number1} ${number2}`,
  };
};

const convertUserAnswer = answer => Number(answer);

const run = () => {
  engine({
    rules,
    getStepData,
    convertUserAnswer,
  });
};
export default run;
