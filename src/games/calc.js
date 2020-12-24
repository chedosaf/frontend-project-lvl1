import readlineSync from 'readline-sync';

import {
  rigthAnswerCount, maxRandomNumder, askName, winLooseСompare, randomizer,
} from '../index.js';

const calc = () => {
  const acc = [0];
  const userNameThis = [];
  askName(userNameThis);
  console.log('What is the result of the expression?');
  const calcFlow = () => {
    if (acc[0] > rigthAnswerCount - 1) {
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
    winLooseСompare(answer, trueAnswer, calcFlow, userNameThis, acc);
  };
  calcFlow();
};

export default calc;
