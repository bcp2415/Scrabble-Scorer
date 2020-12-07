const { oldPointStructure } = require('../scrabble-scorer');
const solution = require('../scrabble-scorer');

describe("Scrabble Scorer solution", function() {

	// beforeEach(function(){
	// 	spyOn(console, 'log');
	// });

	// let sampleArr = [
	// 	{
	// 		name: "Scrabble"
	// 	},
	// 	{
	// 		name: "Simple Score"
	// 	},
	// 	{
	// 		name: "Bonus Vowels"
	// 	}
	// ];

	// initialPrompt tests //

	it("contains an initialPrompt function", function() {
		expect(solution.initialPrompt).toBeDefined;
	});

	it("initialPrompt prints messages to the console", function() {
		spyOn(console, 'log');
		solution.initialPrompt();
		expect(console.log).toHaveBeenCalled();
	});

	// transform tests //
	
	it("contains a transform function", function() {
		expect(solution.transform()).toBeDefined;
	});

	// Write a transform function that takes an object as a parameter. 
	// Calling transform(oldPointStructure) will return an object with 
	// lowercase letters as keys. The value for each key will be the points assigned to that letter.

	it("transform returns an object", function() {
		let transformedObj = solution.transform(solution.oldPointStructure);
		expect(transformedObj).toBeInstanceOf(Object);
	});

	it("transform returns an object with letter keys", function() {
		let transformedObj = solution.transform(solution.oldPointStructure);
		let letterKeys = Object.keys(transformedObj);
		let lettersEx = /[a-z]/g;
		// expect each value in letter keys to be a letter character
		// Object.keys(oldPointStructure).forEach(function(k){
		// 	console.log(instanceOf k);
		// })
		//letterKeys.toString
		//let stringKeys = Object.keys(oldPointStructure).toString();
		// letterKeys.forEach(function(k) {
		// 	console.log(lettersEx.test(k));
		// })
		// console.log(letterKeys);
		let expected = letterKeys.every(function(l) {
			return l.match(lettersEx);
		});
		//console.log(lettersEx.toString())

		// letterKeys.forEach(function(k) {
		// 	console.log(k);
		// });
		
		expect(expected).toBeTrue();
	})
 
	
 
 });