var vash = require('vash'),
	esprima = require('esprima'),
	fs = require('fs'),
	concatStream = require('concat-stream'),
	browserify = require('browserify'),
	b = browserify(),
	pageTemplate = vash.compile(fs.readFileSync('./page.vash').toString());

var fileContents = fs.readFileSync('./example/1.js');

b.bundle().pipe(concatStream(function(bundle){
	var model = {
		ast: esprima.parse(fileContents),
		bundle: bundle
	};

	process.stdout.write(pageTemplate(model));
}));
