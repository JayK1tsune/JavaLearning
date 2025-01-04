// Globals
let sum = 0;

// Utility Functions
function getRandomInt(min, max) {
    const minNumber = Math.ceil(min);
    const maxNumber = Math.floor(max);
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

// Game Logic
function GetFirstCards() {
    const firstCard = getRandomInt(2, 11);
    const secondCard = getRandomInt(2, 11);
    sum = firstCard + secondCard;
    return sum;
}

function blackjack() {
    const playerScore = document.getElementById('playerScore');
    const info = document.getElementById('infomation');

    playerScore.textContent = `Sum: ${sum}`;
    // ${sum} is a template literal, it allows you to insert variables into strings
    
    if (sum < 21) {
        info.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        info.textContent = "Blackjack!";
    } else {
        info.textContent = "You're out of the game!";
    }
}

function StartGame() {
    sum = GetFirstCards();
    blackjack();
}

function DrawCard() {
    const newCard = getRandomInt(2, 11);
    sum += newCard;
    blackjack();
}

function Reset() {
    sum = 0;
    document.getElementById('playerScore').textContent = "Sum: 0";
    document.getElementById('infomation').textContent = "";
    StartGame();
}
