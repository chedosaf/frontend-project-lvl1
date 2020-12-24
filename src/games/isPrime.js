import readlineSync from 'readline-sync';

import {
  rigthAnswerCount, maxRandomNumder, askName, randomizer, winLooseСompare,
} from '../index.js';

const isPrime = () => {
  const acc = [0];
  const userNameThis = [];
  askName(userNameThis);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const primeFlow = () => {
    if (acc[0] > rigthAnswerCount - 1) {
      console.log(`Congratulations, ${userNameThis[0]}!`);
      return;
    }
    const randomInt = randomizer(1, maxRandomNumder);
    let trueAnswer = 'yes';
    for (let i = 2; i <= randomInt - 1; i += 1) {
      if (randomInt % i === 0) {
        trueAnswer = 'no';
      }
    }
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    winLooseСompare(answer, trueAnswer, primeFlow, userNameThis, acc);
  };
  primeFlow();
};

export default isPrime;
