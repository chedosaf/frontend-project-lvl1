import {
  maxRandomNumder, launchGame, randomizer,
} from '../index.js';

const gcd = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const nod = (a, b) => {
    if (b > a) return nod(b, a);
    if (!b) return a;
    return nod(b, a % b);
  };
  const gcdFlow = () => {
    const number1 = randomizer(0, maxRandomNumder);
    const number2 = randomizer(0, maxRandomNumder);
    const question = `Question: ${number1} ${number2}`;
    const trueAnswer = nod(number1, number2);
    return [trueAnswer, question];
  };
  launchGame(task, gcdFlow);
};

export default gcd;
