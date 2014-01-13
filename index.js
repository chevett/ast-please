var vash = require('vash'),
	esprima = require('esprima'),
	esCodeGen = require('escodegen'),
	fs = require('fs'),
	m = require('merle'),
	concatStream = require('concat-stream'),
	browserify = require('browserify');

function getScriptBundle(cb){
	var b = browserify();
	b.add(__dirname + '/browser/main.js');
	b.bundle().pipe(concatStream(function(bundle){
		cb(bundle);
	}));
}

function getDataForFile(file){
	var fileContents = fs.readFileSync(file),
	ast = esprima.parse(fileContents);

	m(ast, function(){
		if (!this.value || !this.value.type) return;
		
		this.value.code = esCodeGen.generate(this.value);
	});

	return ast;
}

var strPageTemplate = fs.readFileSync('./page.vash').toString();
var pageTemplate = vash.compile(strPageTemplate);
var data = getDataForFile(process.argv[2]);

getScriptBundle(function(bundle){
	var model = {
		ast: JSON.stringify(data),
		bundle: bundle
	};

	process.stdout.write(pageTemplate(model));
});
