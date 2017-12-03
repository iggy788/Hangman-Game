//[which element].[event name] = function (event) {
//	
//}
document.onkeyup = function (event) {
	var userChoice = event.key; //<-- here is what they typed, which key.
	console.log(event);

	if (userChoice === "s") {	
		// create an array
		var bands = ["Queens of the Stoneage", "Foo Fighters", "Animals As Leaders"];
		// for loop to iterate over the array

		for (var i = 0; i < bands.length; i++) {
			var html = "";
			// if statement that does special formatting
			// update DOM from our for loop
			if (bands[i] === "Foo Fighters") {
				// do something special - add an extra message
				html = `<div class="col-md-12"><h1>#1 ${bands[i]}</h1></div>`;
				document.getElementById("row1").innerHTML = html;
			} else if (bands[i] === "Queens of the Stoneage") {
				html = `<div class="col-md-12"><h2>#2 ${bands[i]}</h2></div>`;
				document.getElementById("row2").innerHTML = html;
			}
			else {
				// display band
				html = `<div class="col-md-12"><h3>#3 ${bands[i]}</h3></div>`;
				document.getElementById("row3").innerHTML = html;
			}
		}
	}
}