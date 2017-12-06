// GLOBAL VARIABLES
// -----------------------------------------------------------------------------------------------
var wordList = ['ron', 'ben', 'tom', 'april', 'andy', 'leslie', 'ann', 'donna'];
var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game Counters
var winCount = 0;
var lassCount = 0;
var guessesLeft = 9;

// FUNCTIONS
// -----------------------------------------------------------------------------------------------
function startGame() {
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = chosenWord.split("");
    numBlanks = lettersInWord.length;

    // Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Generate underscores for blanks and successes
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Change HTML
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Testing
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] == letter) {
            isLetterInWord = true;
            alert('Letter found');
        }
    }
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    } else {
        wrongLetters.push(letter);
        numGuesses++
    }
    console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left");

    // Update HTML to say guesses left
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    // Check if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++
        alert("You Won!");

        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    } else if (numGuesses == 0) {
        lossCount++;
        alert("You Lost!");

        // Update HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
}
// MAIN PROCESS
// -----------------------------------------------------------------------------------------------
startGame();

//Register Keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    console.log(letterGuessed);
}