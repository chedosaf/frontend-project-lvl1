import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};

const getRound = () => {
  const question = generateRandomNumber(1, maxRandomNumder);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => {
  launchGame(gameDescription, getRound);
};
