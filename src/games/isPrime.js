import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getRound = () => {
    const randomInt = generateRandomNumber(1, maxRandomNumder);
    const isPrime = (number) => {
      if (number === 1) {
        return false;
      }
      for (let i = 2; i <= number - 1; i += 1) {
        if (number % i === 0) {
          return false;
        }
      } return true;
    };
    const trueAnswer = isPrime(randomInt) ? 'yes' : 'no';
    const question = `Question: ${randomInt}`;
    return [trueAnswer, question];
  };
  launchGame(gameDescription, getRound);
};
