import readlineSync from 'readline-sync';

import {
  rigthAnswerCount, maxRandomNumder, askName, winLooseСompare, randomizer,
} from '../index.js';

const progression = () => {
  const acc = [0];
  const userNameThis = [];
  askName(userNameThis);
  console.log('What number is missing in the progression?');
  const progressionFlow = () => {
    if (acc[0] > rigthAnswerCount - 1) {
      console.log(`Congratulations, ${userNameThis[0]}`);
      return;
    }
    const mass = [];
    const massLength = randomizer(5, 11);
    let randomNumber = randomizer(0, maxRandomNumder);
    const randomIncrease = randomizer(0, 30);
    const randomMassItem = randomizer(0, massLength);
    for (let i = 0; mass.length < massLength; i += 1) {
      randomNumber += randomIncrease;
      mass.push(randomNumber);
    }
    const trueAnswer = mass[randomMassItem];
    mass[randomMassItem] = '..';
    console.log(`Question: ${mass}`);
    const answer = readlineSync.question('Your answer: ');
    winLooseСompare(answer, trueAnswer, progressionFlow, userNameThis, acc);
  };
  progressionFlow();
};

export default progression;
