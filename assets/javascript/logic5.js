// Letter the user selects
var userChoice = "";
var underScore = [];
var wrongGuess = [];
var rightGuess = [];
var score = [];
// Create an array
var wordList = [
    "ron",
    "ben",
    "leslie",
    "tom",
    "april",
    "andy",
    "ann",
    "jerry",
    "donna",
];

// choose a random word
var randWord = wordList[Math.floor(Math.random() * wordList.length)]; // gives me a random number for my array

// display all the dashes
// Beginning the Game
var begin = document.getElementById('startGame');
begin.onclick = function() {
    alert('Generating AWord');
    var dashes = (document.getElementById('underScore').innerHTML = '_ _ _ _');
};

// for loop to iterate over the array
var chosenWord = wordList[0];
for (var i = 0; i < randWord.length; i++) {
    underScore.push("_");
    html = `< div class="underscore">${wordList[i]}</div>`;
    document.getElementById('underScore').innerHTML = underScore.join(' ');
    console.log(randWord);
}
// I have dashed word already, take the users (EVENTS) and any dashes with the correct letter
var html = "i";
// if statement that does special formatting
// update the DOM from our for loop
if (wordList[i] === 'ron') {
    // do something special - add an extra message
    html = `< div class="underscore">${wordList[i]}</div>`;
    document.getElementById('rightLetter').innerHTML = rightGuess.join(' ');
} else if (wordList[i] === 'leslie') {
    html = `< div class="score">${wordList[i]}</div>`;
    document.getElementById('currentScore').innerHTML = score.join(' ');
} else {
    // display the band
    html = `< div class="wrongGuess">${wordList[i]}</div>`;
    document.getElementById('wrongLetter').innerHTML = wrongGuess.join(' ');
};