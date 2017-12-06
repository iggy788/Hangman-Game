<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <title>Rock Paper Scissors Part 1</title>
</head>

<body>
  <h1>Please enter r, p, or s</h1>
  <div id="game">

  </div>

  <script type="text/javascript">
    // Whenever a key is pressed, alert "pressed a button".
    var wins = 0;
    var losses = 0;
    var ties = 0;
    document.onkeyup = function(event) {
      console.log(event);
      var playerChoice = event.key; // holds the key entered...
      var choices = ["r", "p", "s"];
      var computerChoice = choices[Math.floor(Math.random() * choices.length)];

      // if playerchoice is valid, update the screen
      // otherwise do not update
      if (playerChoice === "r" || playerChoice === "p" || playerChoice === "s") {
        // determine a winner based on the following rules
        // winning combos  (playerchoice, computerchoice)=> sp rs pr
        // tie combos => ss pp rr
        var combo = playerChoice + computerChoice;
        if (combo === "sp" || combo === "rs" || combo === "pr") {
          wins++;
        } else if (combo === "ss" || combo === "pp" || combo === "rr") {
          ties++;
        } else {
          losses++;
        }

        // display user choice
        // getElement or build a string
        document.getElementById("game").innerHTML = `
          <h3>You Chose: ${playerChoice}</h3>
          <h3>Computer Chose: ${computerChoice}</h3>
          <hr />
          <h3>Wins ${wins}</h3>
          <h3>Losses ${losses}</h3>
          <h3>Ties ${ties}</h3>
        `;
      }

    };
  </script>

</body>

</html>
