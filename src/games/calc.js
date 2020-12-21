import readlineSync from 'readline-sync';

import {
  answersToWin, maxRandomNumder, askName, userNameThis, winLoose, acc, randomizer,
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
    const number1 = randomizer(0, maxRandomNumder);
    const number2 = randomizer(0, maxRandomNumder);
    const operation = operatinsMass[randomizer(0, 3)];
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
