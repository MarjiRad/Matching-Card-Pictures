/*-------------------------------- Constants --------------------------------*/



//store id="livesCount" in variable livesCount
const livescount = document.getElementById("livesCount");

//store id="scoreCount" in variable score
const score = document.getElementById("scoreCount");

//store id="time" in variable timeCount
const timeCountDown = document.getElementById("timeCount");

//store id="game-board" in variable gameBoard
const gameBoard = document.getElementById("game-board");

//store id="restart" in variable restartButton
const restartButton = document.getElementById("restart");

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

const allCards = {};
suits.map(suit => {
        allCards[suit] = cardNames.map(name =>{
                return {
                        value: cardValues[name],
                        name: name,
                        src: `images/${suit}/${name}.jpg`
                };
        });
});
console.log(allCards);

//shuffle function
function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--){
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
}

const suitButtons = document.querySelectorAll("#buttons button");
console.log(suitButtons);
 

const cardBacks = document.querySelectorAll(".card-back");



//function to handle suit selection
suitButtons.forEach(button => {
        button.addEventListener('click', () => {
                const suit =button.id;//'heart', 'club', 'diamond', 'spade'
                const selectedCards = allCards[suit];
                const duplicatedCards = [...selectedCards, ...selectedCards]; 
                const shuffledCards = shuffle(duplicatedCards);
                const cardFrontImages = document.querySelectorAll('.card-front .name');
                cardFrontImages.forEach((img,index) => {
                   img.src = shuffledCards[index].src;
                cardBacks[index].addEventListener ("click", (event) => {
                        img.style.display = "flex";
                        console.log(img);
                        console.log("test");
                        cardBacks[index].style.display = "none"
                        
                });
                        
        
});
                console.log(suit);
                console.log(selectedCards);
                console.log(duplicatedCards);
        });
});




/*
function createBoard() {
    //clear the current board
    board.innerHtml ="";
    //clear the matched pairs
    matchedPairs = 0;
     //reset lives to 6
    lives = 6;
    //update  the display value of the lives left on the screen by settingin the current lives value
    lives.textContent = 'lives';
    cards.forEach((imgSrc, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;

        const img = document.createElement("img");
        img.src = `images/${imgSrc}`;
        img.atl = "cat Image";

        card.appendChild(img);
        board.appendChild(card);

        card.addEventListener("click", flipCard);
     });
}


// declears variable flippedCard
let flippedCards =[];
// get valiue of matchPairs = 0
let matchedPairs = 0;
//set the number of lives 6
let lives = 6;
//set the time on 100
let time = 100;









function flipCard() {
    if(flippedCards.length<2 && !this.classList.contains("flipped")){
        this.classList.add("fliopped");
        flippedCards.push(this);

        if(flippedCards.length === 2) {
            setTimeout(checkMatch, 700);
        }
    }
}



function checkMatch() {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector("img").src;
    const img2 = card2.querySelector("img").src;
    if(img1 === img2) {
        matchedPairs++;
        flippedCards = [];

        if(matchedPairs === images.length) {
          setTimeout(() => alert("You Win!"), 300);
        }
    }else{
        lives--;
        liveseCount.textContent = lives;
         setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }, 700);
        
        if(lives === 0) {
            setTimeout(() => alert("Game Over!"), 300);
        }
    }
    flippedCards = [];
}


restartButton.addEventListener("click", () => {
    cards.sort(() => 0.5 - Math.random());
    createBoard();
});

createBoard();










function readyToStart() {
        let overlays = Array.from(document.getElementsByClassName('overlay-text'));//make an array of overlay-text
        overlays.forEach(overlay => {
                overlay.addEventListener('click', () => {
                        overlay.classList.remove('visible');
                        //game.startGame();
                });
        });
        cards.forEach(card => {
                card.addEventListener('click', () => {
                        //game.flipCard(card);
                });
        });
}


;




function ready() {
        let overlays = Array.from(document.getElementsByClassName('overlay-text'));//make an array of overlay-text
        let cards = Array.from(document.getElementsByClassName('card'));//make an array of card

        overlays.forEach(overlay => {
                overlay.addEventListener('click', () => {
                        overlay.classList.remove('visible');
                        //game.startGame();
                });
        });
        cards.forEach(card => {
                card.addEventListener('click', () => {
                        //game.flipCard(card);
                });
        });
};


const gameBoard = document.getElementById("game-board");
console.log(gameBoard);





//function to handle suit selection
suitButtons.forEach(button => {
        button.addEventListener('click', () => {
                const suit =button.id;//'heart', 'club', 'diamond', 'spade'
                console.log(suit);
        });
});

//const cardNames = [
        "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "joker", "scrap"
]

function createShuffleDeck(suit) {
        //create 15 cards with file names
        const cards = cardNames.map(name => `${name}.jpg`);
        //duplicate cards
        const doubledCards = [...cards, ...cards];
        //shuffle
        for (let i = doubledCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [doubledCards[i], doubledCards[j]] = [doubledCards[j], doubledCards[i]];
        }
        return doubledCards.map(fileName => ({
                imgSrc: `images/${suit}/${fileName}`,
                name: fileName.split('.')[0]
        }))
}

function loadBoard(deck) {
        gameBoard.innerHTML = ""; //clear the board
        deck.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML =`
                  <div class="card-back card-face">
                     <img class="backside" src="images/back/back-face.png"/>
                  </div>
                  <div class="card-front card-face">
                     <img class="card-value" src="${card.imgSrc}" data-name="${card.name}"/> 
                  </div>`;
                gameBoard.appendChild(cardElement);
        });
}



//

/*function setupBoard(suit) {
        //clear board before setup
        gameBoard.innerHTML = ''
        //hide all suits
        document.querySelectorAll('#Heart, #club, #spade, #diamond').forEach(el => el.computedStyleMap.display = 'none');
        //get image sources from the selected suit
        const suitDiv = document.getElementById(capitalize(suit));
        console.log(suitDiv);
        const cardImages = Array.from(suitDiv.querySelectorAll('img')).map(img => img.src);
        //select 15 unique images and duplicate
        constSelectedCards = shuffle(cardImages).slice(0, 15);
        const gameCards = shuffle([...selectedCards, ...selectedCards]); //30 cards in total

        //add cards to the game board
        gameCards.forEach(src => {
                const card = document.createElement('div');
                card.classList.add('card');

                const front = document.createElement('img');
                front.scr = scr;
                front.classicList.add('front');

                const back = document.createElement('img');
                back.scr = document.querySelector('#backsideCard img').src;
                card.classList.add('back');
                card.appendChild(front);
                card.appendChild(back);
                card.addEventListener('click', () => flipCard(card));
                gameBoard.appendChild(card);
        });
};

function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
};

functionCapitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}*/




/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
