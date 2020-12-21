import readlineSync from 'readline-sync';

import {
  answersToWin, maxRandomNumder, askName, userNameThis, winLoose, acc,
} from '../index.js';

const calc = () => {
  askName();
  console.log('What is the result of the expression?');
  const c = () => {
    if (acc[0] > answersToWin - 1) {
      console.log(`Congratulations, ${userNameThis[0]}!`);
      return;
    }
    const operatinsMass = ['-', '+', '*'];
    const number1 = Math.floor(Math.random() * (Math.floor(maxRandomNumder)
     - Math.ceil(0))) + Math.ceil(0);
    const number2 = Math.floor(Math.random() * (Math.floor(maxRandomNumder)
     - Math.ceil(0))) + Math.ceil(0);
    const operation = operatinsMass[Math.floor(Math.random() * (Math.floor(3)
     - Math.ceil(0))) + Math.ceil(0)];
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    let trueAnswer = '';
    if (operation === '-') {
      trueAnswer = number1 - number2;
    } else if (operation === '+') {
      trueAnswer = number1 + number2;
    } else {
      trueAnswer = number1 * number2;
    }
    winLoose(answer, trueAnswer, c);
  };
  c();
};

export default calc;
