
let houseFirstCard;
let houseSecondCard;
let playerCards = [];

let sum = 0;
let houseSum = 0;
let hasBlackjack = false;
let isAlive = false;
let chips = 100;
let currentChips = 0;
let message = "";
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
const cardEl = document.getElementById('card-el');
const resetBtn = document.getElementById('reset');
const stay = document.getElementById('stay');
let playerEl = document.getElementById("player");
let chipsEl = document.getElementById('chips-el');
let houseEl = document.getElementById('house-el');
let chipsToPlay = 10;



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
    let playerFirstCard = getRandomCard();
    let playerSecondCard = getRandomCard();    
    playerCards.push(playerFirstCard);
    playerCards.push(playerSecondCard);
    houseFirstCard = getRandomCard();
    houseSecondCard = getRandomCard();
    currentChips = chips - chipsToPlay;
    chipsEl.textContent = "Chips: $" + currentChips;
    houseSum = houseFirstCard + houseSecondCard;
    sum = playerFirstCard + playerSecondCard;
    houseEl.textContent = "The House's cards: ?, " + houseSecondCard;
    console.log(houseFirstCard, houseSecondCard);
    console.log(playerCards);
    renderGame();
    }

    stay.addEventListener("click", function() {
       houseEl.textContent = "The House's cards: " + houseFirstCard + " , " + houseSecondCard;
        messageEl.textContent = "The House draws a third card";
              if (houseSum <= 16 && sum > houseSum) {
                setTimeout(function() {
                let houseThirdCard = getRandomCard();  // House draws a third card
                houseSum += houseThirdCard;
                houseEl.textContent = "The House's cards: " + houseFirstCard + " , " + houseSecondCard + " , " + houseThirdCard;    
                renderGamePart2();
        }, 3000);  
    } else {
        renderGamePart2();
        }
    });

    

    function renderGame() {
    cardEl.textContent = "Cards: " + playerCards.join(", ");
    sumEl.textContent = "Sum: " + sum;
    if (sum > 21) {
        messageEl.textContent = "You're out of the game!";
        } else if (sum === 21) {
        hasBlackjack = true;
        chips += 25;  // Reward for Blackjack
        chipsEl.textContent = "Chips: $" + chips;  
        messageEl.textContent = "Wohoo! You've got Blackjack!";
    } else {
        messageEl.textContent = "Do you want to draw a new card?";
    }
}
function renderGamePart2(){
    if (houseSum > 21) {
        messageEl.textContent = "House busted!";
        chips += 10;  
        chipsEl.textContent = "Chips: $" + chips;  
    } else if (sum <= 21 && houseSum > sum) {
        messageEl.textContent = "The House wins with " + houseSum + "!";
        
    } else if (sum <= 21 && houseSum < sum) {
        messageEl.textContent = "You win!";
        chips += 10;  
        chipsEl.textContent = "Chips: $" + chips;  
}    
}

function newCard(){
    let thirdCard = getRandomCard();
    playerCards.push(thirdCard);
    sum += thirdCard;
    cardEl.textContent = "Cards: " + playerCards;
    renderGame();
}

resetBtn.addEventListener("click", function restart() {
    playerCards = [];
    houseFirstCard = houseSecondCard = houseThirdCard = null;
    sum = 0;
    houseSum = 0;
    currentChips = chips - chipsToPlay;

    messageEl.textContent = "Do you want to draw another card?";
    cardEl.textContent = "Cards:";
    sumEl.textContent = "Sum:";
    chipsEl.textContent = "Chips: $" + currentChips;

    startGame();
});
