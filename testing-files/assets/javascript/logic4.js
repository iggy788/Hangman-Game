// Global Variables
var userChoice = '';
var wordList = ['ron', 'ben', 'leslie', 'tom', 'april', 'andy', 'ann', 'jerry', 'donna'];
var underScore = [];


// ================================================================================================
// Dom manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
// ================================================================================================
document.getElementById('start').onclick = function() {};
var chosenWord = wordList[randWord];

function startGame() {
    var randWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randWord);
    // Create underscores based on length of word
    for (var i = 0; i < randWord.length; i++) {
        underScore.push('_')
        console.log(chosenWord);
    }

    // Get user's guess
    document.onkeyup = function(event) {
        console.log(event);
        userGuesses = event.key;
    }
};