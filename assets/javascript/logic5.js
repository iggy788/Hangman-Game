// Letter the user selects
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

// Choose a random word
var randWord = Math.floor(Math.random() * wordList.length); // gives me a random number for my array
var chosenWord = wordList[randWord];
var underScore = [];
// Right & Wrong word arrays
var wrongGuess = [];
var rightGuess = [];

// Testing
console.log(chosenWord);
console.log(underScore);

// Create underscores based on length of word
var generateUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());

// Get users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    // Check if guess is right
    if (chosenWord.indexOf(keyword) > -1) {
        // if right push to right array add to right guess array
        rightGuess.push(keyword);
        console.log('Selected the Right letter ' + rightGuess);
    } else {
        // if wrong push/add to wrongGuess array
        wrongGuess.push(keyword);
        console.log('Selected the Wrong letter ' + wrongGuess);
    }
});