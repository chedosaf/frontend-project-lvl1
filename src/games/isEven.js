import readlineSync from 'readline-sync';

import {
  rigthAnswerCount, maxRandomNumder, askName, randomizer, winLooseСompare,
} from '../index.js';

const isEven = () => {
  const acc = [0];
  const userNameThis = [];
  askName(userNameThis);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const evenFlow = () => {
    if (acc[0] > rigthAnswerCount - 1) {
      console.log(`Congratulations, ${userNameThis[0]}!`);
      return;
    }
    const randomInt = randomizer(1, maxRandomNumder);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    const trueAnswer = randomInt % 2 ? 'no' : 'yes';
    winLooseСompare(answer, trueAnswer, evenFlow, userNameThis, acc);
  };
  evenFlow();
};

export default isEven;
