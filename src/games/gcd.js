import readlineSync from 'readline-sync';

import {
  rigthAnswerCount, maxRandomNumder, askName, winLooseСompare, randomizer,
} from '../index.js';

const gcd = () => {
  const acc = [0];
  const userNameThis = [];
  askName(userNameThis);
  console.log('Find the greatest common divisor of given numbers.');
  const nod = (a, b) => {
    if (b > a) return nod(b, a);
    if (!b) return a;
    return nod(b, a % b);
  };
  const gcdFlow = () => {
    if (acc[0] > rigthAnswerCount - 1) {
      console.log(`Congratulations, ${userNameThis[0]}!`);
      return;
    }
    const number1 = randomizer(0, maxRandomNumder);
    const number2 = randomizer(0, maxRandomNumder);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = nod(number1, number2);
    winLooseСompare(answer, trueAnswer, gcdFlow, userNameThis, acc);
  };
  gcdFlow();
};

export default gcd;
