// Global Variables
var wordBank = ['red', 'blue'];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
//var playerChoice = event.key;

// Dom manipulation Variables
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
var docGuessesLeft = document.getElementsByClassName('guessesLeft');
// function
//========================================================
function startGame() {
    // picks randow word
    var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randWord);
    for (var i = 0; i < randWord.length; i++) {
        underScores.push('_');
    }
    //Printing underscores to the screen
    docUnderScore[0].innerHTML = underScores.join(' ');

    docUnderScore[0].innerHTML = underScore.join(' ');

    //reset
    wrongLetter = [];
    guessesLeft = 9;

    //Guesses Left
    docGuessesLeft[0].innerHTML = guessesLeft;
}
document.onkeyup = function(event) {
    console.log(event);
    userGuesses = event.key;
};
//Main
//================================================


}
//startGame();
//https://www.youtube.com/watch?v=dvSKEXmYtMM