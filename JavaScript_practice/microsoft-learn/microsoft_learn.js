/*A game of Texas Hold'em can go on for many game rounds and 
usually finishes when one player has all the poker chips and the other players have lost theirs.*/

const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";
let gameHasEnded = false;

console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three 
players: ${playerOneName}, ${playerTwoName} and ${playerThreeName}. Each player has ${STARTING_POKER_CHIPS} in 
their pot. We have an exciting game ahead of us. May the best player win!`)

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 50;
playerTwoPoints -=25;
playerThreePoints +=75;

gameHasEnded = ((playerOnePoints + playerTwoPoints) == 0) || // three has won
               ((playerTwoPoints + playerThreePoints) == 0) ||  // one has won
               ((playerOnePoints + playerThreePoints) == 0);  // two has won 

console.log("Game has ended: ", gameHasEnded);
