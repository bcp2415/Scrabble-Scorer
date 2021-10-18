// This version passes all 17 Jasmine tests, but at cost of commenting out one line that solved (I think) the bonus problem (allowing blank tiles as well as letter tiles in words).

var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    "**/*[sS]pec.js"
  ],
  "helpers": [
	  "helpers/**/*.js"
	],
	"stopSpecOnExpectationFailure": false,
	"random": true
});

jasmine.execute();