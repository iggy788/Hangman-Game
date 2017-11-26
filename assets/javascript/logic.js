// Create an array of Words
const word = ['hamburger','chicken nuggets','apple pie','milkshake','french fries']; 
// Choose word randomly
Let randNum = Math.floor(Math.random() * word.length);
Let choosenWord = word[randNum];
console.log(choosenWord);
/*
Let rightWord = [];
Let wrongWord = [];

Let underScore = [];

// Testing
console.log(choosenWord);

// Create underscores based on length of word
Let generateUnderscore = () => {
	for(Let i = 0; i < choosenWord.length; i++) {
		underScore.push('_');
	}
	return underScore;
}

console.log(generateUnderscore());
// Get user's guess
document.addEventListener('keypress',(event) => {
	Let keyword = String.fromCharCode(event.keyCode);
// if users guess is right
	if(choosenWord.indexOf(keyword) . -1) {
	// add to right words array
	rightWord.push(keyword);
	console.log(keyword);
	}
	wrongWord.push(keyword);
	console.log(keyword);
});
// Check if guess is right
// If right push to right array
// If wrong push to wrong array