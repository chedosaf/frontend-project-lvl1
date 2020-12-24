import readlineSync from 'readline-sync';

const rigthAnswerCount = 3;

const maxRandomNumder = 100;

const askName = (userNameThis) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  userNameThis.push(userName);
};

const randomizer = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (Math.floor(max)
  - Math.ceil(min))) + Math.ceil(min);
  return randomNumber;
};

const winLooseСompare = (answer, trueAnswer, flowFunction, userNameThis, acc) => {
  if (String(answer) === String(trueAnswer)) {
    console.log('Correct!');
    acc[0] += 1;
    flowFunction();
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
    Let's try again, ${userNameThis[0]}!`);
  }
};

export {
  rigthAnswerCount, maxRandomNumder, askName, winLooseСompare, randomizer,
};
