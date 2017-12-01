// Global Variables
// ==========================================================
// Create an array of Words
const word = ['cheese burger', 'chicken nuggets', 'apple pie', 'chicken sandwich', 'sundae', 'happy meal'];
// Choose word randomly 

var choosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];
var numWrong = 0;
var numRight = 0;

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
    docUnderScore[0].innerHTML = underScore.join(' ');
}

//Printing underscores to the screen
function hang() {
    var ctx = document.getElementById("homeHangman").getContext('2d');
    if (numWrong === 1) {
        ctx.beginPath(); //head
        ctx.arc(150, 100, 20, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //left eye
        ctx.arc(143, 95, 3.5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //right eye
        ctx.arc(157, 95, 3.5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath(); //mouth
        ctx.arc(143, 95, 3.5, 0, 2 * Math.PI);
        ctx.stroke();

    }
    if (numWrong === 2) {
        ctx.beginPath(); //head
        ctx.moveTo(150, 120);
        ctx.lineTo(150, 190);
        ctx.stroke(); //left eye
    }
}
//document.onkeyup = function(event) {
//console.log(event);
//var playerChoice = event.key;

// Get user's guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    console.log(event);
    // if users guess is right //
    if (choosenWord.indexOf(keyword) > -1) {
        // add to right words array
        rightWord.push(keyword);
        // replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;

        // Checks to see if user word matches guesses
        if (underScore.join('') === choosenWord) {
            alert('You Win');
            // if none of IFs are true, push to wrong words array
        } else {
            wrongWord.push(keyword);
            underScore[choosenWord.indexOf(keyword)] = keyword;
            docWrongGuess[0].innerHTML = wrongWord;
        }
    }
});

docUnderScore[0].innerHtml = generateUnderscore().join(' ');
// Check if guess is right
// If right push to right array 
// If wrong push to wrong array