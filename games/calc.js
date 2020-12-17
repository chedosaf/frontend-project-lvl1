import readlineSync from 'readline-sync';
import { answersToWin, maxRandomNumder, askName, userNameThis, winLoose, acc } from '../src/index.js';;

export const calc = () => {
    askName();
    console.log('What is the result of the expression?');
    const c = () => {
        if (acc > answersToWin - 1) {
            console.log(`Congratulations, ${userNameThis}!`);
            return;
        };
        const operatinsMass = ['-', '+', '*'];
        const number1 = Math.floor(Math.random() * (Math.floor(maxRandomNumder) - Math.ceil(0))) + Math.ceil(0);
        const number2 = Math.floor(Math.random() * (Math.floor(maxRandomNumder) - Math.ceil(0))) + Math.ceil(0);
        const operation = operatinsMass[Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0))) + Math.ceil(0)];
        console.log(`Question: ${number1} ${operation} ${number2}`);
        let answer = readlineSync.question('Your answer: ');
        const trueAnswer = eval(`${number1} ${operation} ${number2}`);
        winLoose(answer, trueAnswer, c);
    };
    c();
};
