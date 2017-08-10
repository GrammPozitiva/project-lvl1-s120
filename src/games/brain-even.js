import * as brainGame from '..';

export const rules = 'Answer "yes" if number even otherwise answer "no"';

const isEven = number => number % 2 === 0;

const correctAnswer = (number) => {
  const answer = isEven(number) ? 'yes' : 'no';
  return answer;
};

export const getStepData = () => {
  const number = brainGame.generateNumber();
  return {
    correctAnswer: correctAnswer(number),
    question: `${number}`,
  };
};


export const convertUserAnswer = answer => answer;
