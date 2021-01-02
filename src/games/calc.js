import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

export default () => {
  const gameDescription = 'What is the result of the expression?';
  const getRound = () => {
    const optionsForOperations = ['-', '+', '*'];
    const number1 = generateRandomNumber(0, maxRandomNumder);
    const number2 = generateRandomNumber(0, maxRandomNumder);
    const mathOperation = optionsForOperations[generateRandomNumber(0, 3)];
    const question = `Question: ${number1} ${mathOperation} ${number2}`;
    const operation = {
      '-': (a, b) => a - b,
      '+': (a, b) => a + b,
      '*': (a, b) => a * b,
    };
    const trueAnswer = operation[mathOperation](number1, number2);
    return [trueAnswer, question];
  };
  launchGame(gameDescription, getRound);
};
