var d3 = require('d3');

d3.select('body')
	.data(window.model.body)
	.enter()
	.append('div')
	.text(function(d){return d.type; });
