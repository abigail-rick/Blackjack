
let firstCard = 3;
let secondCard = 1;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
const cardEl = document.getElementById('card-el');

function getRandomCard(){
   let random = Math.floor(Math.random() * 21);
   }


function startGame(){
    renderGame();
}

function renderGame(){
    cardEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
    sumEl.textContent = "Sum: " + sum;
if (sum <= 20){
   messageEl.textContent = "Do you want to draw a new card?";
} else if (sum === 21){
    messageEl.textContent ="Wohoo! You've got Blackjack!";
    hasBlackjack = true;
} else {
   messageEl.textContent = "You're out of the game!";
    isAlive = false;
}
messageEl.textContent;
}

function newCard(){
    let thirdCard = 8;
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
    cardEl.textContent = "Cards: " + cards;
    
}
    