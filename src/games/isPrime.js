import {
  maxRandomNumder, launchGame,
} from '../index.js';

import { generateRandomNumber } from '../commonGameFunctions.js';

const isPrime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getRound = () => {
    const randomInt = generateRandomNumber(1, maxRandomNumder);
    let trueAnswer = 'yes';
    for (let i = 2; i <= randomInt - 1; i += 1) {
      if (randomInt % i === 0) {
        trueAnswer = 'no';
      }
    }
    const question = `Question: ${randomInt}`;
    return [trueAnswer, question];
  };
  launchGame(gameDescription, getRound);
};

export default isPrime;
