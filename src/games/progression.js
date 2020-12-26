import {
  maxRandomNumder, launchGame, randomizer,
} from '../index.js';

const progression = () => {
  const task = 'What number is missing in the progression?';
  const progressionFlow = () => {
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
    const question = `Question: ${mass}`;
    return [trueAnswer, question];
  };
  launchGame(task, progressionFlow);
};

export default progression;
