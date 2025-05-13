/*-------------------------------- Constants --------------------------------*/



//store id="livesCount" in variable livesCount
const livesCount = document.getElementById("livesCount");

//store id="scoreCount" in variable score
const scoreCount = document.getElementById("scoreCount");

//store id="time" in variable timeCount
const timeCount = document.getElementById("timeCount");

//store id="game-board" in variable gameBoard
const gameBoard = document.getElementById("game-board");

//store all button id="restart" in variable restartButtons
const restartButtons = document.querySelectorAll(".restart");

//store .overlay-text in variable overlayText
const overlayText = document.querySelector(".overlay-text");

//store input in variable input
const input = document.querySelector('input');

//store playerNameDisplay in variable playerName
const playerName = document.getElementById('playerNameDisplay');


//creat array of all suits cards with their keys
const cardValues = {
        "A": 14,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "jack": 11,
        "queen": 12,
        "king": 13,
        "joker": 15,
        "scrap": 0
};
console.log(cardValues);


const suits = ["heart", "club", "diamond", "spade"];
console.log(suits);


const cardNames = Object.keys(cardValues);
console.log(cardNames);

//object of 4 array of each suit------------------------------------------------
const allCards = {};
suits.forEach(suit => {
        allCards[suit] = cardNames.map(name => ({
                        value: cardValues[name],
                        name: name,
                        src: `images/${suit}/${name}.jpg`
        }));
});
console.log(allCards);


//shuffle function for array----------------------------------------------------
function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
}
 

//game state---------------------------------------------------------------------
// declears variable flippedCard
let flippedCards =[];
// get valiue of matchPairs = 0
let matchedPairs = 0;
//set the number of lives 6
let lives = 10;
//set the time on 100
let time = 100;
//set the timer start to countdown
let countdownInterval;
let timerStarted = false;
let boardLocked = false;



//start or reset game-------------------------------------------------------------
function startGame() {
    //clear the current board
    gameBoard.innerHTML ="";
    //clear the matched pairs
    matchedPairs = 0;
    //reset lives to 6
    lives = 10;
    //reset time to 100
    time = 100;
    //reset fliped card
    flippedCards = [];
    // start timer count down
    timerStarted = false;

    livesCount.textContent = lives;
    scoreCount.textContent = 0;
    timeCount.textContent = time;
    playerName.textContent = `Player: ${input.value.trim()}`;
    document.querySelector(".overlay-text").classList.remove("visible");
};


//start countdown------------------------------------------------------------------
function startCountdown() {
        clearInterval(countdownInterval);
        countdownInterval = setInterval(() => {
         time--;
         timeCount.textContent = time;

         if (time <= 0) {
                clearInterval(countdownInterval);
                document.getElementById("game-over-text").classList.add("visible");
         }
        }, 1000);
}


//load cards into the game board---------------------------------------------------
function loadBoard(deck) {
        gameBoard.innerHTML = "";

        deck.forEach(card => {
             const cardElement = document.createElement('div');
             cardElement.classList.add('card');

             cardElement.innerHTML = `
                 <div class="card-back card-face">
                   <img class="backside" src="images/back/back-face.png"/>
                </div>
                <div class="card-front card-face">
                  <img class="card-value" src="${card.imgSrc}"/> 
                </div>`;

                cardElement.addEventListener('click', flipCard);
                gameBoard.appendChild(cardElement);
        });
}


//flip cards rules----------------------------------------------------------------
function flipCard(event) {
        if (boardLocked) return;

        if (!timerStarted) {
                startCountdown();
                        timerStarted = true;
        };
        const card = event.currentTarget;
        if(flippedCards.length < 2 && !card.classList.contains("flipped")) {
           card.classList.add("flipped");
           flippedCards.push(card);
           if(flippedCards.length === 2) {
              boardLocked = true;
              setTimeout(() => {
                checkMatch();
                boardLocked = false;
              }, 700);
           }
        }
}


//match logic---------------------------------------------------------------------
function checkMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector(".card-value").src;
    const img2 = card2.querySelector(".card-value").src;
    if(img1 === img2) {
        matchedPairs++;
        flippedCards = [];
        const matchedValue = cardValues[card1.querySelector(".card-value").src.split('/').pop().split(".")[0]]
        scoreCount.textContent = parseInt(scoreCount.textContent) + matchedValue; 
        if(matchedPairs === 15) {
                document.getElementById("victory-text").classList.add("visible");
        }
    }else{
        lives--;
        livesCount.textContent = lives;
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }, 700);
        if(lives === 0) {
                document.getElementById("game-over-text").classList.add("visible");   
        }
        flippedCards = [];
    };
};


//suit button logic----------------------------------------------------------------
const suitButtons = document.querySelectorAll("#buttons button");
console.log(suitButtons);
suitButtons.forEach(button => {
        button.addEventListener('click', () => {
                if (!input.value.trim()) {
                        alert("please enter your name");
                        return;
                }
                const suit = button.id;//'heart', 'club', 'diamond', 'spade'
                const selectedCards = allCards[suit].slice(0, 15);
                const duplicatedCards = [...selectedCards, ...selectedCards]; 
                const shuffledDeck = shuffle(duplicatedCards.map(card => ({
                        imgSrc: card.src,
                        name: card.name
                })));

                console.log("Selected:", selectedCards);
                console.log("duplicated:", duplicatedCards);
                console.log("shuffled:", shuffledDeck);

                startGame();
                loadBoard(shuffledDeck);
        });       
});


//restart buttons logic--------------------------------------------------------------
restartButtons.forEach(btn => {
        btn.addEventListener("click", () => {
                document.getElementById("victory-text").classList.remove("visible");
                document.getElementById("game-over-text").classList.remove("visible");
                gameBoard.innerHTML = "";
                input.style.display = "inline";
                playerName.textContent = "";
                overlayText.classList.add("visible");
                clearInterval(countdownInterval);
                time = 100;
                timeCount.textContent = time;
                timerStarted = false;
        });   
});   


//start overlay click
overlayText.addEventListener("click", () => {
        overlayText.classList.remove("visible");
});
 
