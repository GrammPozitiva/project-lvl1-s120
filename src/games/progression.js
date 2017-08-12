import engine from '..';
import generateNumber from '../utils';

const rules = 'What number is missing in this progression?';
const makeArray = (start, step) => {
  const arr = [];
  let number = start;

  for (let i = 0; i < 10; i += 1) {
    arr.push(number);
    number += step;
  }

  return arr;
};
const getCorrectAnswer = arr => arr[generateNumber(2, 8)];

const getQuestion = (arr, x) => {
  const question = arr.map((el) => {
    if (el === x) {
      return '..';
    }
    return el;
  });
  return question;
};
const getStepData = () => {
  const arr = makeArray(generateNumber(1, 50), generateNumber(1, 10));
  const correct = getCorrectAnswer(arr);
  return {
    correctAnswer: `${correct}`,
    question: getQuestion(arr, correct).join(' '),
  };
};

const run = () => engine(rules, getStepData);

export default run;
