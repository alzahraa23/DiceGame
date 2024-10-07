
# Dice Game

This is a two-player dice game built using HTML, CSS, and JavaScript. The goal of the game is to roll the dice and accumulate points. The player with the higher score when the timer reaches zero wins the game.

## Features

- **Two-player mode**: Players take turns rolling a dice to accumulate points.
- **Timer**: A 10-minute countdown timer that starts when the first dice is rolled.
- **Switching Players**: The active player switches when a player rolls a 1.
- **End Game**: When the timer hits 00:00, the game compares both players' scores and declares the winner.
- **New Game**: A button to reset the game and start over without the timer continuing from the previous game.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Play

1. Open the `index.html` file in any web browser.
2. Player 1 starts by clicking the "Roll Dice" button to roll a dice.
3. The player accumulates points unless they roll a 1, in which case it switches to the other player.
4. The game ends when the 10-minute timer reaches zero, and the scores are compared.
5. To start a new game, click the "New Game" button.

## Instructions

1. Clone or download the repository.
2. Open `index.html` in a web browser to start the game.
3. Use the "Roll Dice" button to play and "New Game" to reset the game.

## Game Logic

- The game uses a `setInterval` function to count down from 10 minutes.
- The player scores are tracked using an array, and the active player is switched using a toggle mechanism.
- When the timer reaches zero, the game compares the scores and displays the winner.

## Notes

- The timer is paused and reset when "New Game" is clicked.
- The game disables the roll button once the timer hits zero to prevent further actions.
