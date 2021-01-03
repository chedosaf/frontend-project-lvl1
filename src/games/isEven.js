import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getRound = () => {
    const randomInt = generateRandomNumber(1, maxRandomNumder);
    const question = `Question: ${randomInt}`;
    const isEven = (number) => number % 2 === 0;
    const trueAnswer = isEven(randomInt) ? 'yes' : 'no';
    return [trueAnswer, question];
  };
  launchGame(gameDescription, getRound);
};
