import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

export default () => {
  const gameDescription = 'What number is missing in the progression?';
  const getRound = () => {
    const mass = [];
    const massLength = generateRandomNumber(6, 11);
    let randomNumber = generateRandomNumber(0, maxRandomNumder);
    const randomIncrease = generateRandomNumber(0, 30);
    const randomMassItem = generateRandomNumber(0, massLength);
    for (let i = 0; mass.length < massLength; i += 1) {
      randomNumber += randomIncrease;
      mass.push(randomNumber);
    }
    const trueAnswer = mass[randomMassItem];
    mass[randomMassItem] = '..';
    const finishedMass = mass.join(' ');
    const question = `Question: ${finishedMass}`;
    return [trueAnswer, question];
  };
  launchGame(gameDescription, getRound);
};
