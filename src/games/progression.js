import readlineSync from 'readline-sync';

import {
  answersToWin, maxRandomNumder, askName, userNameThis, winLoose, acc,
} from '../index.js';

const progression = () => {
  askName();
  console.log('What number is missing in the progression?');
  const p = () => {
    if (acc > answersToWin - 1) {
      console.log(`Congratulations, ${userNameThis}`);
      return;
    }
    const mass = [];
    const massLength = Math.floor(Math.random() * (Math.floor(11) - Math.ceil(5))) + Math.ceil(5);
    let randomNumber = Math.floor(Math.random() * (Math.floor(maxRandomNumder)
     - Math.ceil(0))) + Math.ceil(0);
    const randomIncrease = Math.floor(Math.random() * (Math.floor(30)
     - Math.ceil(0))) + Math.ceil(0);
    const randomMassItem = Math.floor(Math.random() * (Math.floor(massLength)
     - Math.ceil(0))) + Math.ceil(0);
    for (let i = 0; mass.length < massLength; i += 1) {
      randomNumber += randomIncrease;
      mass.push(randomNumber);
    }
    const trueAnswer = mass[randomMassItem];
    mass[randomMassItem] = '..';
    console.log(`Question: ${mass}`);
    const answer = readlineSync.question('Your answer: ');
    winLoose(answer, trueAnswer, p);
  };
  p();
};

export default progression;
