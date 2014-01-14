var $ = require('jquery-browserify');
var vash = require('vash-runtime');
var templates = {
	VariableDeclaration: require('../ast-templates/VariableDeclaration.vash'),
	ExpressionStatement: require('../ast-templates/ExpressionStatement.vash'),
	CallExpression: require('../ast-templates/CallExpression.vash'),
	Literal: require('../ast-templates/Literal.vash')
};

var ast = global.model;

vash.helpers.go = function(o){
	if (!o || !o.type) return;
	var tmpl = templates[o.type];

	if (!tmpl) return ;
	return tmpl(o);

};

console.log(ast);
var tmpl = require('./start.vash');
$('body').append(tmpl(ast));

