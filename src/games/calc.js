import {
  maxRandomNumder, launchGame,
} from '../index.js';

import generateRandomNumber from '../helpers.js';

const gameDescription = 'What is the result of the expression?';

const getRound = () => {
  const number1 = generateRandomNumber(0, maxRandomNumder);
  const number2 = generateRandomNumber(0, maxRandomNumder);
  const operationsInstructions = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
  };
  const operations = Object.keys(operationsInstructions);
  const position = generateRandomNumber(0, operations.length);
  const operation = operations[position];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(operationsInstructions[operation](number1, number2));
  return [answer, question];
};

export default () => {
  launchGame(gameDescription, getRound);
};
