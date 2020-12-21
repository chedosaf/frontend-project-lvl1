import readlineSync from 'readline-sync';

import {
  answersToWin, maxRandomNumder, askName, userNameThis, randomizer,
} from '../index.js';

const isEven = () => {
  askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let acc = 0;
  const e = () => {
    if (acc > answersToWin - 1) {
      console.log(`Congratulations, ${userNameThis[0]}!`);
      return;
    }
    const randomInt = randomizer(1, maxRandomNumder);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomInt % 2 === 0 && answer === 'yes') || (randomInt % 2 === 1 && answer === 'no')) {
      console.log('Correct!');
      acc += 1;
      e();
    } else if (randomInt % 2 === 1 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.
      Let's try again, ${userNameThis}!`);
      acc = 0;
    } else if (randomInt % 2 === 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
      Let's try again, ${userNameThis}!`);
    }
  };
  e();
};

export default isEven;
