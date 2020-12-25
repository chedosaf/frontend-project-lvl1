import readlineSync from 'readline-sync';

import {
  maxRandomNumder, engine, randomizer,
} from '../index.js';

const isEven = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  const evenFlow = () => {
    const randomInt = randomizer(1, maxRandomNumder);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = randomInt % 2 ? 'no' : 'yes';
    return [answer, trueAnswer];
  };
  engine(question, evenFlow);
};

export default isEven;
