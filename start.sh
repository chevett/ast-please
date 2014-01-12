#! /usr/bin/env bash

function doBundle(){
	bundle=$(node ./node_modules/browserify/bin/cmd.js -t sassify2 -t vashify $1);
}





