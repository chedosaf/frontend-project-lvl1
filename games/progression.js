import readlineSync from 'readline-sync';
import { answersToWin, maxRandomNumder } from '../src/index.js';

export const progression = () => {
    let userNameThis = '';
    const askName = () => {
        let userName = readlineSync.question('May I have your name? ');
        console.log('Hi ' + userName + '!');
        userNameThis = userName;
    };
    askName();
    console.log('What number is missing in the progression?');
    let acc = 0;
    const p = () => {
        if (acc > answersToWin - 1) {
            console.log(`Congratulations, ${userNameThis}`);
            return;
        };
        let mass = [];
        const massLength = Math.floor(Math.random() * (Math.floor(11) - Math.ceil(5))) + Math.ceil(5);
        let randomNumber = Math.floor(Math.random() * (Math.floor(maxRandomNumder) - Math.ceil(0))) + Math.ceil(0);
        const randomIncrease = Math.floor(Math.random() * (Math.floor(30) - Math.ceil(0))) + Math.ceil(0);
        const randomMassItem = Math.floor(Math.random() * (Math.floor(massLength) - Math.ceil(0))) + Math.ceil(0);
        for (let i = 0; mass.length < massLength; i ++) {
            randomNumber = randomNumber + randomIncrease;
            mass.push(randomNumber);
        }
        let trueAnswer = mass[randomMassItem];
        mass[randomMassItem] = '..';
        console.log(`Question: ${mass}`);
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
    }
    p();
};