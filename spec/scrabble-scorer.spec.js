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

	// TODO: why is this matcher always passing?
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

		// .every() returns true if each item in the array passes the match
		let expected = letterKeys.every(function(l) {
			return l.match(lettersEx);
		});
		
		expect(expected).toBeTrue();
	});

	it("transform returns an object with integer values", function() {
		let transformedObj = solution.transform(solution.oldPointStructure);
		let numberVals = Object.values(transformedObj);

		let expected = numberVals.every(function(n) {
			return typeof n == 'number';
		});
		expect(expected).toBeTrue();
	});

	// newPointStructure tests //
	it("contains a newPointStructure object", function() {
		expect(solution.newPointStructure).toBeDefined;
	});

	it("newPointStructure holds the result of transform", function() {
		let transformedObj = solution.transform(solution.oldPointStructure);
		expect(solution.newPointStructure).toEqual(transformedObj);
	});

	it("newPointStructure contains the correct key-value pairs", function() {
		expect(solution.newPointStructure).toEqual(jasmine.objectContaining({
			a: 1,
			e: 1,
			i: 1,
			o: 1,
			u: 1,
			l: 1,
			n: 1,
			r: 1,
			s: 1,
			t: 1,
			d: 2,
			g: 2,
			b: 3,
			c: 3,
			m: 3,
			p: 3,
			f: 4,
			h: 4,
			v: 4,
			w: 4,
			y: 4,
			k: 5,
			j: 8,
			x: 8,
			q: 10,
			z: 10
		}));
	});

	// simpleScore tests //
	it("contains a simpleScore function", function() {
		expect(typeof solution.simpleScore).toBe('function');
	});

	it("simpleScore returns an integer score", function() {
		expect(typeof solution.simpleScore('foo')).toBe('number');
	});

	it("simpleScore returns a score equal to the length of its input", function() {
		expect(solution.simpleScore('foo')).toBe(3);
		expect(solution.simpleScore('')).toBe(0);
	});
	
	// it("contains a scoringAlgorithms array", function() {
	// 	console.log(typeof solution.scoringAlgorithms)
	// 	//expect(typeof solution.scoringAlgorithms).toBe('array');
	// 	//expect(solution.scoringAlgorithms).toBeDefined;
	// });

	
 
 });