# unit-1-Project
Game: Matching card picture

// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button





This is a single player game matching cards
In this game we have 4 group of card, each group indicates a different suit. 
When player chose the suit the other suit will disapper to show the chose of the group card
The board has 30 squers 6 in columns and 5 rows
There are 13 cards: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King. Jocker, and Scrap card
Each card presents a different Value:(A = 14), (King = 13), (Queen = 12), (Jack =11 ), (10 = 10), (9 = 9), (8 = 8), (7 = 7), (6 = 6), (5 = 5), 
Computer duplicates  cards 
Computer randomly filles the squares with cards 
Each card has a face side and back side
We have 3 displayer above the board: Time, Score, Life which indicate the game rule
When the player clicks on the first choic Timer starts countdown.

When the player clicks the first card the first card flip and the player can see the face side of the card
The Player click on the second card of its choice the second card will flip and shows the face of the card
If the card are matched the player get the value of the card on the score and the card stay in the face side


If cards are matched the Value of the card will add to the score value, both cards will stay on face side and they will be uncickable

If the cards are not matched both cards flips to back side after 2 sec clicking  on the second card.
If cards aren't matched the value of the life will be subtracted 1.

If player matched the joker card the value of the life will be added 1 and all cards' face will be appeared for 2 seconds.

If Playere click on the Scrap card the value of life will be subtracted 2, and card will stay in face side.

Player will be win if player matchs A, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King card
If the timer gets the value of 0 the player is lose
If the value of life get the 0 the player is lose 

If Player lose, all cards will flip and on the displayer shows "YOU LOST" 
If Player win, all card will flip and on the displayer shows "YOU WIN"
After 5 second of text result appears on the displayer text result change to restart bottun. 

<!-- As a user I want to inter my name and see my name as a player-->
<!-- As a user I want to have an option to chose my cards' suit -->
<!-- As a user I want to be able to click on, HEART, DIAMOOND, CLUBS, SPADE on landing page -->
<!-- As a user I want visual feedback after making a selection -->
<!-- As a user I want to see the TIME, SCORE, LIFE -->
<!-- As a user I want to be presented with a clear message indecating the winning of the game, so I can immediately understand the outcome -->
<!-- As a user I want to have an option to play another round, so I can try to improve my record -->
