import readlineSync from 'readline-sync';

const rigthAnswerCount = 3;

const maxRandomNumder = 100;

const randomizer = (min, max) => Math.floor(Math.random() * (Math.floor(max)
  - Math.ceil(min))) + Math.ceil(min);

const launchGame = (task, flowFunction) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(task);
  let acc = 0;
  const gameResultsСompare = () => {
    if (acc > rigthAnswerCount - 1) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [trueAnswer, question] = flowFunction();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (String(trueAnswer) === String(answer)) {
      console.log('Correct!');
      acc += 1;
      gameResultsСompare();
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
      Let's try again, ${userName}!`);
    }
  };
  gameResultsСompare();
};

export {
  maxRandomNumder, launchGame, randomizer,
};
