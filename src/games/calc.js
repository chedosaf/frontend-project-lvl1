import readlineSync from 'readline-sync';

import {
  maxRandomNumder, engine, randomizer,
} from '../index.js';

const calc = () => {
  const question = 'What is the result of the expression?';
  const calcFlow = () => {
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
    return [answer, trueAnswer];
  };
  engine(question, calcFlow);
};

export default calc;
