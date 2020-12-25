import readlineSync from 'readline-sync';

import {
  maxRandomNumder, engine, randomizer,
} from '../index.js';

const isPrime = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeFlow = () => {
    const randomInt = randomizer(1, maxRandomNumder);
    let trueAnswer = 'yes';
    for (let i = 2; i <= randomInt - 1; i += 1) {
      if (randomInt % i === 0) {
        trueAnswer = 'no';
      }
    }
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    return [answer, trueAnswer];
  };
  engine(question, primeFlow);
};

export default isPrime;
