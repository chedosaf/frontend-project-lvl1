import readlineSync from 'readline-sync';

import {
  answersToWin, maxRandomNumder, askName, userNameThis, randomizer,
} from '../index.js';

const isPrime = () => {
  askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let acc = 0;
  const p = () => {
    if (acc > answersToWin - 1) {
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
    if (answer === trueAnswer) {
      console.log('Correct!');
      acc += 1;
      p();
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
      Let's try again, ${userNameThis[0]}!`);
    }
  };
  p();
};

export default isPrime;
