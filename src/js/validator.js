// data set rules for every state
stateDataSets = {
	// array of all possible accepted parameter sets
	N   : [],
	O   : [],
	G21 : [],
	G98 : [],
	M08 : [],
	M09 : [],
	M30 : [],
	M05 : [],
	G00 : ['xz', 'x', 'z'],
	G01 : ['xzf', 'xz', 'x', 'z'],
	G02 : ['xzikf', 'xzrf', 'xzik', 'xzr'],
	G03 : ['xzikf', 'xzrf', 'xzik', 'xzr'],
	G04 : ['x', 'p'],
	G28 : ['xzf'],
	G70 : ['pq'],
	G71 : ['pquwfs', 'pquwf', 'ur'],
	G72 : ['pquwfs', 'pquwf', 'wr'],
	G75 : ['xzpqf', 'r'],
	G76 : ['pqr', 'xzpqf'],
	G90 : ['xzrf', 'xzf', 'zr', 'x'],
	M03 : ['s'],
	M04 : ['s'],
	M06 : ['t']
};

/* --------------------  BEGIN - Data Checking  -------------------- */

// function to check if required set of params exist
var isDataSuffice = function (state, data) {
	if (!stateDataSets.hasOwnProperty(state))
		throw "Error: State not found for which the data is provided";
	if(stateDataSets[state].length == 0) return true;
	for(var i = 0, property = true; i < stateDataSets[state].length; i++, property = true) {
		var checkStr = stateDataSets[state][i];
		for (var j = 0; j < checkStr.length; j++) {
			if(!data.hasOwnProperty(checkStr[j]))
				property = false;
		}
		if (property) return checkStr;
	}
	return false;
};

var trailingNewlines = function (inputStr) {
	for (var i = 0; i < inputStr.length; i++) {
		if(inputStr[i] == '\n' && inputStr[i+1] == '\n')
			return i+1;
	}
};

var validateTokens = function (tokens) {
  // validate the tokens and throw exceptions if any errors
  // catch the exceptions and display errors on screen

  // return the valid tokens
  return tokens;
};

/* --------------------  END - Data Checking  -------------------- */

/* -------------------------------------------------------------------------- */

/* -------------------- BEGIN - G71 Processing -------------------- */

var processG71 = function(tokensArray, geometry) {
	var processedArray = new Array();
	return processedArray;
};

var get_z_at_x = function (geometry, x) {
	// geometry will be a set of points
};

var getGeometry = function (codeBlock) {
	var geometry = new Array(), state;
	
	for (var i = 0; i < codeBlock.length; i++) {
		// if (codeBlock[i].type == 'BD')
		//		state = codeBlock[i].value;
		// else if (codeBlock[i].type == 'PM') {
		// 	if (state == null)
		// 		throw "Error: Invalid geometry for the code "+ Env.state;
		// 	if (!opCodeParamHandlers.hasOwnProperty(state))
		// 		paramError(value[0]);
		// 	opCodeParamHandlers[state](value);	// handle parameters
		// } else if (type == 'EB') {
		// 		if (state == null)
		// 		throw "Error: Invalid geometry for the code "+ Env.state;
		// 		if (!eobHandlers.hasOwnProperty(state))
		// 			throw "Error: Property not found for state" + state;

		// 		// check if input data is suffice
		// 		if(!isDataSuffice(state, tempData))
		// 			throw "Error: Data not sufficent for the state: "+ state;

		// 		eobHandlers[state](tempData);	// handle end of block
		// 		tempData = new Object();	// reset tempData

		// 		if (Env.state == 'M30')		// if state M30 then return the points
		// 			return points;			// and stop the program execution
		// 	} else throw "Alert: Unknown token type found!"
	}
	
	return geometry;
};

var replaceBlock = function (tokensArray, startIndex, endIndex, replaceArray) {
	// use splice function to do the stuff...
};

var getLineBlock = function (tokens, line) {
	var lineBlock = new Array();
	for (var i = 0; i < tokens.length; i++) {
		if (record) {
			lineBlock.push(tokens[i]);
			lineBlock[lineBlock.length - 1].index = i+1;
			if (tokens[i+1].value[0] == 'N')
				break;
		}
		if (tokens[i].value == line) 
			var record = true;
	}
	return lineBlock;
};

/* --------------------  END - G71 Processing  -------------------- */

/* -------------------------------------------------------------------------- */

/* -------------------- BEGIN - G70 Processing -------------------- */

var getParam = function (tokensArray, blockDesc, param) {
	for (var i = 0; i < tokensArray.length; i++) {
		if (tokensArray[i].value == blockDesc && 
			tokensArray[i+1].value[0] == param) {
			return tokensArray[i+1].slice(1);
		}
	}
};

var processG70 = function(tokensArray) {
	var lineNum = getParam(tokensArray, 'G70', 'P');
	codeBlock = getLineBlock(tokensArray, lineNum);
	// remove G70 line & insert code block
	// replaceBlock(tokensArray, .., .., codeBlock);	
	return tokensArray
};
