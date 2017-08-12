import engine from '..';
import generateNumber from '../utils';

const rules = 'What number is missing in this progression?';
const formArray = (diapozoneStart, progression) => {
  const arr = [];
  let number = diapozoneStart;
  for (let i = 0; i < 10; i += 1) {
    arr.push(number);
    number += progression;
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
  }).join(' ');
  return question;
};
const getStepData = () => {
  const formaleteArr = formArray(generateNumber(1, 50), generateNumber(1, 10));
  const correct = getCorrectAnswer(formaleteArr);
  const inputQuestion = getQuestion(formaleteArr, correct);
  return {
    correctAnswer: `${correct}`,
    question: inputQuestion,
  };
};

const run = () => {
  engine(rules, getStepData);
};
export default run;
