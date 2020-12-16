import readlineSync from 'readline-sync';
import { answersToWin, maxRandomNumder } from '../src/index.js';;

export const gcd = () => {
    let userNameEven = '';
    const askName = () => {
        let userName = readlineSync.question('May I have your name? ');
        console.log('Hi ' + userName + '!');
        userNameEven = userName;
    };
    askName();
    console.log('Find the greatest common divisor of given numbers.');
    let acc = 0;
    const nod = (a, b) =>{
        if (b > a) return nod(b, a);
	    if (!b) return a;
	    return nod(b, a % b);
    };
    const g = () => {
        if (acc > answersToWin - 1) {
            console.log(`Congratulations, ${userNameEven}!`);
            return;
        };
        const number1 = Math.floor(Math.random() * (Math.floor(maxRandomNumder) - Math.ceil(0))) + Math.ceil(0) ;
        const number2 = Math.floor(Math.random() * (Math.floor(maxRandomNumder) - Math.ceil(0))) + Math.ceil(0) ;
        console.log(`Question: ${number1} ${number2}`);
        let answer = readlineSync.question('Your answer: ');
        const trueAnswer = nod(number1, number2);
        if (answer == trueAnswer) {
            console.log('Correct!');
            acc += 1;
            g();
           } else { 
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.
            Let's try again, ${userNameEven}!`);
            acc = 0;
        }
    }
    g();
};