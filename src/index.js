import readlineSync from 'readline-sync';

const answersToWin = 3;

const maxRandomNumder = 100;

let userNameThis = '';

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  userNameThis = userName;
};

let acc = 0;

const winLoose = (answer, trueAnswer, p) => {
  if (answer == trueAnswer) {
    console.log('Correct!');
    acc += 1;
    p();
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
    Let's try again, ${userNameThis}!`);
  }
};

export {
  answersToWin, maxRandomNumder, askName, userNameThis, winLoose, acc,
};
