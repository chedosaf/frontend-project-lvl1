import readlineSync from 'readline-sync';

import {
  maxRandomNumder, engine, randomizer,
} from '../index.js';

const gcd = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  const nod = (a, b) => {
    if (b > a) return nod(b, a);
    if (!b) return a;
    return nod(b, a % b);
  };
  const gcdFlow = () => {
    const number1 = randomizer(0, maxRandomNumder);
    const number2 = randomizer(0, maxRandomNumder);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = nod(number1, number2);
    return [answer, trueAnswer];
  };
  engine(question, gcdFlow);
};

export default gcd;
