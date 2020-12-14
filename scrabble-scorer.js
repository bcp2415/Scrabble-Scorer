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

function initialPrompt() {
//   console.log(`
//    Welcome to the Scrabble score calculator.
//    Which scoring algorithm would you like to use?

//    0 - Scrabble: The traditional scoring algorithm.
//    1 - Simple Score: Each letter is worth 1 point.
//    2 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt.

//    Enter 0, 1, or 2:`);
}

function transform(lettersByScore) {
//    const scoresByLetter = {};
//    for (let score in lettersByScore) {
//       let letters = lettersByScore[score];
//       for (let i=0; i<letters.length; i++){
//          scoresByLetter[letters[i].toLowerCase()] = Number(score);
//       }         
//    }
//   return scoresByLetter;
}

let newPointStructure;
// let newPointStructure = transform(oldPointStructure);

let simpleScore = function(word){
   // return word.length;
};

let vowelBonusScore = function(word){
   // let score = 0;
   // let vowels = 'aeiou';
   // for (let i = 0; i < word.length; i++){
   //    if (vowels.includes(word[i].toLowerCase())){
   //       score += 3;
   //    } 
   //    else {
   //       score++;
   //    }
   // }
   // return score;
};

let scrabbleScore = function(word, letterPoints) {
   // let score = 0;
   // for (let i = 0; i < word.length; i++){
   //    score += letterPoints[word[i].toLowerCase()];
   // }
   // return score;
};

const scoringAlgorithms = [
   // {
   //    name: "",
   //    description: "",
   //    scoringFunction: simpleScore
   // },
   // {
   //    name: "",
   //    description: "",
   //    scoringFunction: vowelBonusScore
   // },
   // {
   //    name: "",
   //    description: "",
   //    scoringFunction: scrabbleScore
   // }
];



module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   newPointStructure: newPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms
};

