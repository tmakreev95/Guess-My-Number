'use strict';
//Functions
function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

const displayMessage = message => document.querySelector('.message').textContent = message;
//Functions

//Variables
let highscoreNode = document.querySelector('.highscore');
let bodyNode = document.querySelector('body');
let numberNode =  document.querySelector('.number');
let scoreNode = document.querySelector('.score');

let secretNumber = getRandomArbitrary(1, 20);
let score = Math.trunc(Number(scoreNode.textContent)); //20 From html
let highscore = Math.trunc(Number(highscoreNode.textContent)); //0 From html

let checkButtonNode = document.querySelector('.check');
let againButtonNode = document.querySelector('.again');

//Variables
checkButtonNode.addEventListener('click', function() {
    const guess = Math.trunc(Number(document.querySelector('.guess').value));

    if (!guess) {
        displayMessage('⛔ No number!)');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');

        bodyNode.style.backgroundColor = '#60b347'; 
        numberNode.style.width = '30rem';
        numberNode.textContent = guess;
        
        if(score > highscore) {
            highscore = score;
            highscoreNode.textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high number!' : '📉 Too low number!');
            score--;
            scoreNode.textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            scoreNode.textContent = 0;
        }
    }     
});

againButtonNode.addEventListener('click', function() {
    secretNumber = getRandomArbitrary(1, 20);
    score = 20;
    numberNode.style.width = '15rem';
    numberNode.textContent = '?';
    bodyNode.style.backgroundColor = '#222'; 
    scoreNode.textContent = score;
    document.querySelector('.guess').value = '';
    
    displayMessage('❓ Start guessing!');
});