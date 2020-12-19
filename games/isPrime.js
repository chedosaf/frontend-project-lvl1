import readlineSync from 'readline-sync';
import { answersToWin, maxRandomNumder, askName, userNameThis, winLoose, acc } from '../src/index.js';;

export const isPrime = () => {
    askName();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
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
        winLoose(answer, trueAnswer, p);
    };
    p();
};