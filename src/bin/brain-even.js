import * as brainGame from '..'

console.log('Welcome to the Brain Games!');
brainGame.showRulesGame();

const name = brainGame.askName();

brainGame.showGreet(name);

const runGameEven = () =>{
  let answerUser = '';
  const iter = (number,count) => {
    if(count === 3){
      console.log(`Congratulations, ${name}!`);
      return;
    }
    brainGame.showNumber(number);
    answerUser = brainGame.askQuestion();

    if(brainGame.correctAnswer(number) === answerUser){
      console.log(`Correct!`);
      return iter(brainGame.generateNumber(),count+1)
    }else{
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${brainGame.correctAnswer(number)}".Let's try again, ${name}`);
      return;
    }

  }
  return iter(brainGame.generateNumber(),0);
}
runGameEven();
