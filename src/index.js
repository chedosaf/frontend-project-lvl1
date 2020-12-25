import readlineSync from 'readline-sync';

const rigthAnswerCount = 3;

const maxRandomNumder = 100;

const randomizer = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (Math.floor(max)
  - Math.ceil(min))) + Math.ceil(min);
  return randomNumber;
};

const engine = (question, flowFunction) => {
  let userNameThis = '';
  let acc = 0;
  const askName = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hi ${userName}!`);
    userNameThis = userName;
  };
  askName();
  console.log(question);
  const gameEngine = () => {
    if (acc > rigthAnswerCount - 1) {
      console.log(`Congratulations, ${userNameThis}!`);
      return;
    }
    const gameAnswers = flowFunction();
    if (String(gameAnswers[0]) === String(gameAnswers[1])) {
      console.log('Correct!');
      acc += 1;
      gameEngine();
    } else {
      console.log(`'${gameAnswers[0]}' is wrong answer ;(. Correct answer was '${gameAnswers[1]}'.
      Let's try again, ${userNameThis}!`);
    }
  };
  gameEngine();
};

export {
  maxRandomNumder, engine, randomizer,
};
