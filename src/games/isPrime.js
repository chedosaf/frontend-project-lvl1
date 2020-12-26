import {
  maxRandomNumder, launchGame, randomizer,
} from '../index.js';

const isPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const primeFlow = () => {
    const randomInt = randomizer(1, maxRandomNumder);
    let trueAnswer = 'yes';
    for (let i = 2; i <= randomInt - 1; i += 1) {
      if (randomInt % i === 0) {
        trueAnswer = 'no';
      }
    }
    const question = `Question: ${randomInt}`;
    return [trueAnswer, question];
  };
  launchGame(task, primeFlow);
};

export default isPrime;
