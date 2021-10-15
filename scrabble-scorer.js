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

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  let wordScore = 0;
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
      
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
      wordScore += Number(pointValue);
		 }
	  }
	}
	// old return line: return '\n' + letterPoints;
  return wordScore;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function isValid(word) {
  let valid = true;

  for (let i = 0; i < word.length; i++) {
    console.log(`The character code at letter ${i} is ${word.charCodeAt(i)}.`)
    if (word.toLowerCase().charCodeAt(i) < 97) {
      valid = false;
    } else if (word.toLowerCase().charCodeAt(i) > 122) {
      valid = false;
    };
  }

  return valid;
}

function initialPrompt() {
  let userWord = input.question("Let's play some scrabble! Enter a word: ");
  let isWordValid = isValid(userWord);
  while (isWordValid === false) {
    userWord = input.question("Invalid entry. Please enter a word: ");
    isWordValid = isValid(userWord);
  }
  return userWord;
};


function simpleScore(word) {
  let score = word.length;  
  return score;
};

function vowelBonusScore(word) {
  let score = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (letter of word) {
    if (vowels.includes(letter.toLowerCase())) {
      score += 3;
    } else {
      score += 1;
    }
  }
  return score;
};

function scrabbleScore(word) {
  word = word.toLowerCase();
  let score = 0;
  for (letter of word) {
    score += Number(newPointStructure[`${letter}`]);
  };
  return score;
};

const scoringAlgorithms = [
  {
    name: 'Simple Score',
    description: 'Each letter is worth 1 point.',
    scoringFunction: simpleScore
  },
  {
    name: 'Bonus Vowels',
    description: 'Vowels are 3 pts, consonants are 1 pt.',
    scoringFunction: vowelBonusScore
  },
  {
    name: 'Scrabble',
    description: 'The traditional scoring algorithm.',
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt() {
  let choiceOfScorer = input.question(`Which scoring algorithm would you like to use?\n\n0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\nEnter 0, 1, or 2: `);
  return scoringAlgorithms[choiceOfScorer];
}

function transform(someObject) {
  let newPointStructure = {};
  for (pointValue in someObject) {
    for (letter of someObject[pointValue]) {
      newPointStructure[`${letter.toLowerCase()}`] = pointValue;
    };
  };
  return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   const userWord = initialPrompt();
   const algorithm = scorerPrompt();
   const score = algorithm.scoringFunction(userWord);
   console.log(`Score for \'${userWord}': ${score}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

