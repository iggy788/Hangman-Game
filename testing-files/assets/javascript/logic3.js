//Var arr ="___".split("")
//Arr.join"
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//var fruits = ['Apple', 'Banana'];
//console.log(fruits.length);// 2
//================================================================================================
//gandalf["real name"].split("");
//(7) ["G", "a", "n", "d", "a", "l", "f"]
//gandalf["real name"].split("").indexOf("G");
//0
//gandalf['real name'].split('')[0];
//('G');
//================================================================================================
// Global Variables
//================================================================================================
//var win = 0;
//var loss = 0;
//var wrongLetter = [];
//var guessesLeft = 9;
//var underScores = [];
//var userGuesses = [];
//var randWord;

// Whenever a key is pressed, populate a random word on the page

document.onkeyup = function(event) {
    console.log(event);
    var playerChoice = event.key;
    var choices = ["r", "p", "s"];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // if playerchoice is valid, update the screen
    // other wise do not update
    if (playerChoice === "r" || playerChoice === "p" || playerChoice === "s") {
        // determine winner based on the following rules
        // winning combos (playerchoice, computerchoice) => sp rs pr

        var combo = playerChoice + computerChoice;
        if (combo === "sp" || combo === "rs" || combo === "pr") {
            alert("You win!");
        } else if (combo === "ss" || combo === "pp" || combo === "rr") {
            alert("you tie!");
        } else {
            alert("You lose!");
        }
        // Display user choice
        // getElement or build a string
        document.getElementById("game").innerHTML = `
                <h3>You Chose: ${playerChoice}</h3>
                <h3>Computer Chose: ${computerChoice}</h3>
                `;
    }
    alert("pressed a button");
};

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);
}