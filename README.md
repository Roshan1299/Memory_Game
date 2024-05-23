# Memory_Game

This is a simple memory game built with HTML, CSS, and JavaScript. The game involves matching pairs of cards with images of different food items. When the game starts, all cards are displayed face down. The player flips two cards at a time to find matching pairs. The goal is to find all pairs in the shortest time possible.

## Game Rules

1. The game board consists of a grid with an even number of cards, all initially face down.
2. Each card has a matching pair.
3. Players can flip two cards at a time.
4. If the two cards match, they remain face up.
5. If the two cards do not match, they are flipped back face down.
6. The game continues until all pairs are found.

## How to Play

1. Open the index.html file in a web browser.
2. The game board will be displayed with all cards face down.
3. Click on any two cards to flip them and reveal the images.
4. If the images match, the cards will stay face up. If not, they will be flipped back after a short delay.
5. Continue flipping cards until all pairs are found.
6. The score and game status will be displayed at the top of the page.

## Files Description

### index.html

This file sets up the basic structure of the webpage, including: <br>

A heading to display the score and status of the game.<br>
A div with the id grid where the game board will be displayed.<br>
Links to the stylesheet styles.css and the JavaScript file app.js.<br>

### styles.css
This file contains the CSS to style the game board and other elements of the page. Customize it to change the appearance of the game.

### app.js
This is the main JavaScript file that includes the logic for the memory game. It contains:<br>

An array of card objects with name and img properties.<br>
Functions to create the game board, flip cards, and check for matches.<br>
Event listeners to handle user interactions.<br>


## Customization

To customize the game, you can modify the following:<br>

Card Images: Update the cardArray in app.js with new images and names.<br>
Grid Size: Adjust the number of cards in the cardArray to change the grid size.<br>
Styling: Modify styles.css to change the look and feel of the game.<br>
