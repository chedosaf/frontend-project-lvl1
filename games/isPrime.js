import readlineSync from 'readline-sync';
import { answersToWin, maxRandomNumder } from '../src/index.js';;

export const isPrime = () => {
    let userNameThis = '';
    const askName = () => {
        let userName = readlineSync.question('May I have your name? ');
        console.log('Hi ' + userName + '!');
        userNameThis = userName;
    };
    askName();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let acc = 0;
    const p = () => {
        if (acc > answersToWin - 1) {
            console.log(`Congratulations, ${userNameThis}!`);
            return;
        };
        const randomInt = Math.floor(Math.random() * (Math.floor(maxRandomNumder) - Math.ceil(1))) + Math.ceil(1);
        let trueAnswer = 'yes';
        for(let i = 2; i <= randomInt - 1; i++) {
            if (randomInt % i === 0 ) {
                trueAnswer = 'no';
            }
        };
        console.log(`Question: ${randomInt}`);
        let answer = readlineSync.question('Your answer: ');
        if (answer == trueAnswer) {
            console.log('Correct!');
            acc += 1;
            p();
           } else { 
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
            Let's try again, ${userNameThis}!`);
            acc = 0;
        }
    };
    p();
};