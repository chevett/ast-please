var _ = require('lodash-node', 'shit');
var arr = [
	{name:'mike'},
	{name:'fulie'},
	{name:'underscore'},
	{name:'underscore'},
	{name:'lodash'},
	{name:'mike'}
];

var x = _.chain(arr)
	.map(function(o){ return o.name; })
	.uniq()
	.value();

console.log(x);

