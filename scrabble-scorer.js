// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function initialPrompt(scoringAlgorithms) {
	console.log("Welcome to the Scrabble score calculator.\n")
	
	console.log("Which scoring algorithm would you like to use?\n");
	for (let i = 0; i < scoringAlgorithms.length; i++) {
	  let option = scoringAlgorithms[i];
	  console.log(i + " - " + option["name"]+": " + option["description"]);
	}
 
	return Number(input.question("Enter 0, 1, or 2:"));
}
 

function transform(lettersByScore) {
   const scoresByLetter = {};
   for (let score in lettersByScore) {
      let letters = lettersByScore[score];
      for (let i=0; i<letters.length; i++){
         scoresByLetter[letters[i].toLowerCase()] = Number(score);
      }         
   }
  return scoresByLetter;
}

let simpleScore = function(word){
   return word.length;
};

let vowelBonusScore = function(word){
   let score = 0;
   let vowels = 'aeiou';
   for (let i = 0; i < word.length; i++){
      if (vowels.includes(word[i].toLowerCase())){
         score += 3;
      } 
      else {
         score++;
      }
   }
   return score;
};

let scrabbleScore = function(word, letterPoints) {
   let score = 0;
   for (let i = 0; i < word.length; i++){
      score += letterPoints[word[i].toLowerCase()];
   }
   return score;
};

const scoringAlgorithms = [
   {
      name: "Simple",
      description: "One point per character",
      scoringFunction: simpleScore
   },
   {
      name: "Vowel Bonus",
      description: "Vowels are worth 3 points",
      scoringFunction: vowelBonusScore
   },
   {
      name: "Scrabble",
      description: "Uses scrabble point system",
      scoringFunction: scrabbleScore
   }
];

let newPointStructure = transform(oldPointStructure);

function runProgram() {
 
	let scorerIdx = initialPrompt(scoringAlgorithms);
	let scorer = scoringAlgorithms[scorerIdx];
	let word = '';
	console.log(`Using algorithm: ${scorer.name}\n`);
 
	while(word.toLowerCase() !== "stop") {
	  word = input.question("Enter a word to be scored, or 'Stop' to quit: ");
	  let score = scorer.scoringFunction(word, newPointStructure);
	  console.log(`Score for '${word}': ${score}\n`);
	}
}

module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
	scoringAlgorithms: scoringAlgorithms,
	newPointStructure: newPointStructure,
	runProgram: runProgram
};

