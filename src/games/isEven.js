import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const question = generateRandomNumber(1, maxRandomNumder);
  const isEven = (num) => num % 2 === 0;
  const answer = isEven(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => {
  launchGame(gameDescription, getRound);
};
