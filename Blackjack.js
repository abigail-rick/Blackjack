
let playerCards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let chips = 100;
let message = "";
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
const cardEl = document.getElementById('card-el');
const resetBtn = document.getElementById('reset');
let playerEl = document.getElementById("player");
let chipsEl = document.getElementById('chips-el');
let houseEl = document.getElementById('house-el');
let chipsToPlay = 10;
let currentChips = chips - chipsToPlay;


function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1){
        return 11;
   } else if (randomCard > 10){
    return 10;
   } else {
    return randomCard;
   }
 }

 
function startGame(){
    resetBtn.innerHTML = "RESET";
    isAlive = true;
    let playerFirstCard = getRandomCard();
    let playerSecondCard = getRandomCard();
    playerCards.push(playerFirstCard);
    playerCards.push(playerSecondCard);
    chipsEl.textContent = "Chips: $" + currentChips;
    sum = playerFirstCard + playerSecondCard;
    renderGame();
    }

function renderGame(){
    cardEl.textContent = "Cards: " + playerCards[0] + ", " + playerCards[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20){
   messageEl.textContent = "Do you want to draw a new card?";
} else if (sum === 21){
    hasBlackjack = true;
    currentChips += 25;
    chipsEl.textContent = "Chips: $" + currentChips;
    messageEl.textContent ="Wohoo! You've got Blackjack!";
} else { 
   messageEl.textContent = "You're out of the game!";
    isAlive = false;
}
messageEl.textContent;
}

function newCard(){
    if(isAlive === true && hasBlackjack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    playerCards.push(thirdCard);
    renderGame();
    cardEl.textContent = "Cards: " + playerCards;
    } else {
    return "You are already out of the game!";
    }
}
resetBtn.addEventListener("click", function restart(){
        playerCards = [];
        sum = 0;
        currentChips = chips - chipsToPlay;
        messageEl.textContent = "Do you want to draw another card?";
        cardEl.textContent = "Cards:";
        sumEl.textContent = "Sum:";
        chipsEl.textContent = "Chips: $" + currentChips;
        startGame();

});

