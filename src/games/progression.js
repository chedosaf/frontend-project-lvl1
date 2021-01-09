import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const massLength = generateRandomNumber(6, 11);

const generateIncrease = () => generateRandomNumber(0, 30);

const generateFirstProgressionMember = () => generateRandomNumber(0, maxRandomNumder);

const generateProgressionItem = () => generateRandomNumber(0, massLength);

const generateProgression = () => {
  const progression = [];
  const increase = generateIncrease();
  let firstProgressionMember = generateFirstProgressionMember();
  for (let i = 0; progression.length < massLength; i += 1) {
    firstProgressionMember += increase;
    progression.push(firstProgressionMember);
  }
  return progression;
};

const getRound = () => {
  const progressionItem = generateProgressionItem();
  const progression = generateProgression();
  const trueAnswer = String(progression[progressionItem]);
  progression[progressionItem] = '..';
  const finishedMass = progression.join(' ');
  const questionCondition = `${finishedMass}`;
  return [trueAnswer, questionCondition];
};

export default () => {
  launchGame(gameDescription, getRound);
};
