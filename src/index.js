import readlineSync from 'readline-sync';

const roundsToWin = 3;

const maxRandomNumder = 100;

const launchGame = (gameDescription, flowFunction) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(gameDescription);
  const startGameRound = (remainingRounds) => {
    if (remainingRounds === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const nextRemainingRounds = remainingRounds - 1;
    const [trueAnswer, question] = flowFunction();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (String(trueAnswer) === String(answer)) {
      console.log('Correct!');
      startGameRound(nextRemainingRounds);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
      Let's try again, ${userName}!`);
    }
  };
  startGameRound(roundsToWin);
};

export {
  maxRandomNumder, launchGame,
};
