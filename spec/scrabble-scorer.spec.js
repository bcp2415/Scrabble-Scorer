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

	it("contains an initialPrompt function", function() {
		expect(solution.initialPrompt).toBeDefined;
	});

	// it("initialPrompt prints messages to the console", function() {
	// 	solution.initialPrompt(sampleArr);
	// 	expect(console.log).toHaveBeenCalled();
	// });
	
	it("contains a transform function", function() {
		expect(solution.transform()).toBeDefined;
	});
 
	
 
 });