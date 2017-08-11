import engine from '..';
import generateNumber from '../utils';

const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const generateOperation = arrayOperat => arrayOperat[generateNumber(0, arrayOperat.length - 1)];

const getStepData = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const operation = generateOperation(operations);

  const data = {
    correctAnswer: 0,
    question: `${number1} ${operation} ${number2}`,
  };

  switch (operation) {
    case '*':
      data.correctAnswer = `${number1 * number2}`;
      break;
    case '-':
      data.correctAnswer = `${number1 - number2}`;
      break;

    default: data.correctAnswer = `${number1 + number2}`;
  }

  return data;
};

const run = () => {
  engine(rules, getStepData);
};
export default run;
