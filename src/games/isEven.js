import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const isEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getRound = () => {
    const randomInt = generateRandomNumber(1, maxRandomNumder);
    const question = `Question: ${randomInt}`;
    const trueAnswer = randomInt % 2 ? 'no' : 'yes';
    return [trueAnswer, question];
  };
  launchGame(gameDescription, getRound);
};

export default isEven;
