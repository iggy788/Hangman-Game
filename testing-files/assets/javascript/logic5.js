// Create an array of wordList that the user will guess from
// ========================================================================================================
var wordList = [
    "ron",
    "ben",
    "tom",
    "april",
    "andy",
];
// ========================================================================================================
// Choose a random word
var randWord = Math.floor(Math.random() * wordList.length); // gives me a random number for my array
var chosenWord = wordList[randWord];
var underScore = [];
// Right & Wrong word arrays
var wrongGuess = [];
var rightGuess = [];
// ========================================================================================================
// Testing
console.log(chosenWord);
console.log(underScore);
// ========================================================================================================
// update the DOM from our for loop
var domUnderScore = document.getElementById('underScore');
var domRightGuess = document.getElementById('rightLetter');
var domWrongGuess = document.getElementById('wrongLetter');
// ========================================================================================================
// Create underscores based on length of word
var generateUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());
// ========================================================================================================
// Get users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    // Check if guess is right
    if (chosenWord.indexOf(keyword) > -1) {
        // if right push to right array add to right guess array
        rightGuess.push(keyword);
        console.log('Selected the Right letter ' + rightGuess);
        // replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        domUnderScore.innerHTML = underScore.join(' ');
        domRightGuess.innerHTML = rightGuess.join(' ');
        console.log(underScore);
        // if the user guesses the entire chosenWord send alert that they win
        if (underScore.join('') === chosenWord) {
            alert('You Win');
        }
    } else {
        // if wrong push/add to wrongGuess array
        wrongGuess.push(keyword);
        console.log('Selected the Wrong letter ' + wrongGuess);
        domWrongGuess.innerHTML = wrongGuess.join(' ');
    }
});