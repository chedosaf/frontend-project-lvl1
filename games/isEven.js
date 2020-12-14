import readlineSync from 'readline-sync';
import { answersToWin, maxRandomNumder } from '../src/index.js';;

export const isEven = () => {
    let userNameThis = '';
    const askName = () => {
        let userName = readlineSync.question('May I have your name? ');
        console.log('Hi ' + userName + '!');
        userNameThis = userName;
    };
    askName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let acc = 0;
    const q = () => {
        if (acc > answersToWin - 1) {
            console.log(`Congratulations, ${userNameThis}!`);
            return;
        };
        const min = Math.ceil(1);
        const max = Math.floor(maxRandomNumder);
        const randomInt = Math.floor(Math.random() * (max - min)) + min ;
        console.log(`Question: ${randomInt}`);
        let answer = readlineSync.question('Your answer: ');
        if ((randomInt % 2 === 0 && answer === 'yes') || (randomInt % 2 === 1 && answer === 'no')) {
         console.log('Correct!');
         acc += 1;
            q();
        } else if (randomInt % 2 === 1 && answer !== 'no') { 
            console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.
            Let's try again, ${userNameThis}!`);
            acc = 0;
        } else if (randomInt % 2 === 0 && answer !== 'yes') { 
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
            Let's try again, ${userNameThis}!`);
            acc = 0;
        }
    };
    q();
};