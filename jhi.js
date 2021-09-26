#!/usr/bin/env node
if(!process.argv[2])
{
	console.log("Usage:\r\n\tjhi <file.hq9p> [-d|--debug]");
	process.exit(1);
};

var debug = false;

if(typeof process.argv[3] !== "undefined" && (process.argv[3] == "-d" || process.argv[3] == "--debug"))
	debug = true;;


const fs = require("fs");
const path = require("path");

function parseLexRun(code){
	var accumulator = 0;
	code.split("").forEach(function(token){
		switch(token)
		{
			case "H":
				console.log("Hello, World !");
				token = "";
				break;
			case "Q":
				console.log(code);
				token = "";
				break;
			case "9":
				for(let i = 99;i > 1;i--)
				{
					console.log(i.toString().concat(" bottles of beer on the wall, ".concat(i.toString()).concat(" bottles of beer.")));
					console.log("Take one down and pass it around, ".concat(i.toString()).concat(" bottles of beer on the wall.\r\n"));
				};
				console.log("1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n\nGo to the store, buy some more,\n99 bottles of beer on the wall.")
				token = "";
				break;
			case "+":
				accumulator += 1;
				token = "";
				break;
			default:
				token = "";
		};
	});
	if(debug)
		console.log("\r\n-----DEBUG-----\nAccumulator Value: ".concat(accumulator));
};

function main()
{
	fs.readFile(path.join(".", process.argv[2]), "utf-8", function(err, data){
		if(err)
			throw err;
		else
			parseLexRun(data);
	});
};

main();
