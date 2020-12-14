import readlineSync from 'readline-sync';
import { answersToWin, maxRandomNumder } from '../src/index.js';;

export const calc = () => {
    let userNameThis = '';
    const askName = () => {
        let userName = readlineSync.question('May I have your name? ');
        console.log('Hi ' + userName + '!');
        userNameThis = userName;
    };
    askName();
    console.log('What is the result of the expression?');
    let acc = 0;
    const c = () => {
        if (acc > answersToWin - 1) {
            console.log(`Congratulations, ${userNameThis}!`);
            return;
        };
        const operatinsMass = ['-', '+', '*'];
        const min = Math.ceil(0);
        const max = Math.floor(maxRandomNumder);
        const number1 = Math.floor(Math.random() * (max - min)) + min ;
        const number2 = Math.floor(Math.random() * (max - min)) + min ;
        const operation = operatinsMass[Math.floor(Math.random() * (Math.floor(3) - min)) + min];
        console.log(`Question: ${number1} ${operation} ${number2}`);
        let answer = readlineSync.question('Your answer: ');
        const trueAnswer = eval(`${number1} ${operation} ${number2}`);
        if (answer == trueAnswer) {
            console.log('Correct!');
            acc += 1;
            c();
           } else { 
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
            Let's try again, ${userNameThis}!`);
            acc = 0;
        }
    }
    c();
};