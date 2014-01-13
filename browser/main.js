var d3 = require('d3');
var ast = global.model;


d3.select('body')
	.transition()
	.duration(750)
	.style('background-color', 'black');
d3.select('body')
	.data(ast.body)
	.enter()
	.append('div')
	.transition()
	.duration(750)
	.delay(function(d, i) { return i * 200; })
	.style('color', function(d){
		switch (d.type){
			case 'VariableDeclaration':
				return 'cyan';

			default:
				return 'white';
		}
	})
.text(function(d){return d.type ; });
