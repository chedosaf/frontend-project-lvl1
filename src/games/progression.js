import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (length, incr, firstMember) => {
  const progression = [];
  let progressionMember = firstMember;
  while (progression.length < length) {
    progressionMember += incr;
    progression.push(progressionMember);
  }
  return progression;
};

const getRound = () => {
  const increase = generateRandomNumber(1, 30);
  const progressionLength = generateRandomNumber(6, 11);
  const firstProgressionMember = generateRandomNumber(0, maxRandomNumder);
  const progressionItemToHide = generateRandomNumber(0, progressionLength);
  const progression = generateProgression(progressionLength, increase, firstProgressionMember);
  const answer = String(progression[progressionItemToHide]);
  progression[progressionItemToHide] = '..';
  const question = progression.join(' ');
  return [answer, question];
};

export default () => {
  launchGame(gameDescription, getRound);
};
