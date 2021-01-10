import readlineSync from 'readline-sync';

const roundsToWin = 3;

const maxRandomNumder = 100;

const launchGame = (gameDescription, getRound) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(gameDescription);
  const startGameRound = (remainingRounds) => {
    if (remainingRounds === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const nextRemainingRounds = remainingRounds - 1;
    const [answer, question] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
      startGameRound(nextRemainingRounds);
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
      Let's try again, ${userName}!`);
    }
  };
  startGameRound(roundsToWin);
};

export {
  maxRandomNumder, launchGame,
};
