import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const getRound = () => {
  const number1 = generateRandomNumber(0, maxRandomNumder);
  const number2 = generateRandomNumber(0, maxRandomNumder);
  const operation = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
  };
  const mathOperation = Object.keys(operation)[generateRandomNumber(0,
    Object.keys(operation).length)];
  const questionCondition = `${number1} ${mathOperation} ${number2}`;
  const trueAnswer = String(operation[mathOperation](number1, number2));
  return [trueAnswer, questionCondition];
};

export default () => {
  launchGame(gameDescription, getRound);
};
