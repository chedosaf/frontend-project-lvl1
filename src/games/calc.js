import {
  maxRandomNumder, launchGame, randomizer,
} from '../index.js';

const calc = () => {
  const task = 'What is the result of the expression?';
  const calcFlow = () => {
    const operatinsMass = ['-', '+', '*'];
    const number1 = randomizer(0, maxRandomNumder);
    const number2 = randomizer(0, maxRandomNumder);
    const mathOperation = operatinsMass[randomizer(0, 3)];
    const question = `Question: ${number1} ${mathOperation} ${number2}`;
    const operation = {
      '-': (a, b) => a - b,
      '+': (a, b) => a + b,
      '*': (a, b) => a * b,
    };
    const trueAnswer = operation[mathOperation](number1, number2);
    return [trueAnswer, question];
  };
  launchGame(task, calcFlow);
};

export default calc;
