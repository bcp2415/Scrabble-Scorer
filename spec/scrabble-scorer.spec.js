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

	// TODO: is it worth it to test passing anything into transform that is not solution.oldPointStructure?
	it("transform returns an object", function() {
		let transformedObj = solution.transform(solution.oldPointStructure);
		expect(transformedObj).toBeInstanceOf(Object);
	});

	it("transform returns an object that is not empty", function() {
		let transformedObj = solution.transform(solution.oldPointStructure);
		expect(Object.keys(transformedObj)).not.toBeNull();
	});

	it("transform returns an object with letter keys", function() {
		let transformedObj = solution.transform(solution.oldPointStructure);
		let letterKeys = Object.keys(transformedObj);
		
		// TODO: ask someone to check this regex :D//
		let lettersEx = /[a-z]/g;
		console.log(letterKeys);
		letterKeys.push("4");

		// .every() returns true if each item in the array passes the match
		let expected = letterKeys.every(function(l) {
			return l.match(lettersEx);
		});
		
		expect(expected).toBeTrue();
	});
 
	
 
 });