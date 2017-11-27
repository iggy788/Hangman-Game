// Global Variables
// ==========================================================
// Create an array of Words
const word = ['cheese burger', 'chicken nuggets', 'apple pie', 'chicken sandwich', 'sundae', 'happy meal'];
// Choose word randomly 
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

// Dom manipulation
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

// Main
// ==========================================================
console.log(choosenWord);
// Create underscores based on length of word 
var generateUnderscore = () => {
    for (var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// Get user's guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    // if users guess is right //
    if (choosenWord.indexOf(keyword) > -1) {
        // add to right words array
        rightWord.push(keyword);
        // replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;

        // Checks to see if user word matches guesses
        if (underScore.join('') == choosenWord) {
            alert('You Win');
        } else {
            wrongWord.push(keyword);
            underScore[choosenWord.indexOf(keyword)] = keyword;
        }
    }
});

docUnderScore[0].innerHtml = generateUnderscore().join(' ');
// Check if guess is right
// If right push to right array 
// If wrong push to wrong array