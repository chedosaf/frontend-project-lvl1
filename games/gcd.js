import readlineSync from 'readline-sync';

import {
  answersToWin, maxRandomNumder, askName, userNameThis, winLoose, acc,
} from '../src/index.js';

const gcd = () => {
  askName();
  console.log('Find the greatest common divisor of given numbers.');
  const nod = (a, b) => {
    if (b > a) return nod(b, a);
    if (!b) return a;
    return nod(b, a % b);
  };
  const g = () => {
    if (acc > answersToWin - 1) {
      console.log(`Congratulations, ${userNameThis}!`);
      return;
    }
    const number1 = Math.floor(Math.random() * (Math.floor(maxRandomNumder) - Math.ceil(0))) + Math.ceil(0);
    const number2 = Math.floor(Math.random() * (Math.floor(maxRandomNumder) - Math.ceil(0))) + Math.ceil(0);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = nod(number1, number2);
    winLoose(answer, trueAnswer, g);
  };
  g();
};

export default gcd;
