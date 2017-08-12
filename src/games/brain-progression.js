import engine from '..';
import generateNumber from '../utils';

const rules = 'What number is missing in this progression?';
const formArray = (diapozoneStart,progression) => {
  const arr = [];
  for(let i = 0; i < 10;i++){
    arr.push(diapozoneStart);
    diapozoneStart+=progression;
  }
  return arr;
};
const getCorrectAnswer = (arr) => {
  return arr[generateNumber(2,8)];
};
const getQuestion = (arr, x) => {
  return arr.map((el,index) => {
     if (el === x) {
        el = '..';
     }
     return el;
   }).join(' ');
};
const getStepData = () => {
  const formaleteArr = formArray(generateNumber(1, 50), generateNumber(1,10))
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
