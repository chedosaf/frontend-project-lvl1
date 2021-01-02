import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const gcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const nod = (a, b) => {
    if (b > a) return nod(b, a);
    if (!b) return a;
    return nod(b, a % b);
  };
  const getRound = () => {
    const number1 = generateRandomNumber(0, maxRandomNumder);
    const number2 = generateRandomNumber(0, maxRandomNumder);
    const question = `Question: ${number1} ${number2}`;
    const trueAnswer = nod(number1, number2);
    return [trueAnswer, question];
  };
  launchGame(gameDescription, getRound);
};

export default gcd;
