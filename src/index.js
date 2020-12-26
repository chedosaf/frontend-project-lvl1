import readlineSync from 'readline-sync';

const rigthAnswerCount = 3;

const maxRandomNumder = 100;

const randomizer = (min, max) => Math.floor(Math.random() * (Math.floor(max)
  - Math.ceil(min))) + Math.ceil(min);

const launchGame = (task, flowFunction) => {
  let acc = 0;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(task);
  const gameResultsСompare = () => {
    const questionAndAnswer = flowFunction();
    if (acc > rigthAnswerCount - 1) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(questionAndAnswer[1]);
    const answer = readlineSync.question('Your answer: ');
    if (String(questionAndAnswer[0]) === String(answer)) {
      console.log('Correct!');
      acc += 1;
      gameResultsСompare();
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${questionAndAnswer[0]}'.
      Let's try again, ${userName}!`);
    }
  };
  gameResultsСompare();
};

export {
  maxRandomNumder, launchGame, randomizer,
};
