import * as brainGame from '..';

export const rules = 'What is the result of the expression?';

const generateOperation = () => {
  let operation = 0;
  const arrayOperations = ['+', '-', '*'];
  operation = Math.floor(Math.random() * arrayOperations.length);
  return arrayOperations[operation];
};

const calc = (number1, number2, operation) => {
  let result = 0;
  switch (operation) {
    case '*': result = number1 * number2;
      break;

    case '+': result = number1 + number2;
      break;

    case '-': result = number1 - number2;
      break;

    default: result = 0;
  }
  return result;
};

export const getStepData = () => {
  const number1 = brainGame.generateNumber();
  const number2 = brainGame.generateNumber();
  const operation = generateOperation();
  return {
    correctAnswer: calc(number1, number2, operation),
    question: `${number1} ${operation} ${number2}`,
  };
};

export const convertUserAnswer = answer => Number(answer);
