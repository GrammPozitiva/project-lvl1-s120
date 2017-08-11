import * as brainGame from '..';

export const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  const result = number2 ? gcd(number2, number1 % number2) : number1;
  return result;
};

export const getStepData = () => {
  const number1 = brainGame.generateNumber();
  const number2 = brainGame.generateNumber();

  return {
    correctAnswer: gcd(number1, number2),
    question: `${number1} ${number2}`,
  };
};

export const convertUserAnswer = answer => Number(answer);
