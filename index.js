var vash = require('vash'),
	esprima = require('esprima'),
	fs = require('fs'),
	concatStream = require('concat-stream'),
	browserify = require('browserify'),
	b = browserify(),
	pageTemplate = vash.compile(fs.readFileSync('./page.vash').toString());

var fileContents = fs.readFileSync(process.argv[2]);

b.add(__dirname + '/browser/main.js');
b.bundle().pipe(concatStream(function(bundle){
	var model = {
		ast: JSON.stringify(esprima.parse(fileContents)),
		bundle: bundle
	};

	process.stdout.write(pageTemplate(model));
}));
