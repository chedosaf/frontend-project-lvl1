import readlineSync from 'readline-sync';

const answersToWin = 3;

const maxRandomNumder = 100;

const userNameThis = [];

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  userNameThis.push(userName);
};

const randomizer = (min, max) => {
  const n = Math.floor(Math.random() * (Math.floor(max)
  - Math.ceil(min))) + Math.ceil(min);
  return n;
};

const acc = [0];

const winLoose = (answer, trueAnswer, p) => {
  if (Number(answer) === Number(trueAnswer)) {
    console.log('Correct!');
    acc[0] += 1;
    p();
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
    Let's try again, ${userNameThis[0]}!`);
  }
};

export {
  answersToWin, maxRandomNumder, askName, userNameThis, winLoose, acc, randomizer,
};
