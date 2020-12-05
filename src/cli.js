import readlineSync from 'readline-sync';
const askName = () => {
let userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
};
export default askName;
