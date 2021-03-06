import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const nod = (a, b) => {
  if (!b) return a;
  return nod(b, a % b);
};

const getRound = () => {
  const number1 = generateRandomNumber(0, maxRandomNumder);
  const number2 = generateRandomNumber(0, maxRandomNumder);
  const question = `${number1} ${number2}`;
  const answer = nod(number1, number2).toString();
  return [answer, question];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => {
  launchGame(gameDescription, getRound);
};
