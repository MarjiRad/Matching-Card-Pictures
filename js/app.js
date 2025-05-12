/*-------------------------------- Constants --------------------------------*/
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


const gameBoard = document.getElementById("game-board");
console.log(gameBoard);


const suitButtons = document.querySelectorAll("#buttons button");
console.log(suitButtons);


//function to handle suit selection
suitButtons.forEach(button => {
        button.addEventListener('click', () => {
                const suit =button.id;//'heart', 'club', 'diamond', 'spade'
                console.log(suit);
        });
});




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
