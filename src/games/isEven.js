import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRound = () => {
  const randomInt = generateRandomNumber(1, maxRandomNumder);
  const questionCondition = `${randomInt}`;
  const isEven = (number) => number % 2 === 0;
  const trueAnswer = isEven(randomInt) ? 'yes' : 'no';
  return [trueAnswer, questionCondition];
};

export default () => {
  launchGame(gameDescription, getRound);
};
