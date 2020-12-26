import {
  maxRandomNumder, launchGame, randomizer,
} from '../index.js';

const isEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenFlow = () => {
    const randomInt = randomizer(1, maxRandomNumder);
    const question = `Question: ${randomInt}`;
    const trueAnswer = randomInt % 2 ? 'no' : 'yes';
    return [trueAnswer, question];
  };
  launchGame(task, evenFlow);
};

export default isEven;
