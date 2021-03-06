// Division in JS always return float, let's return int
function intDiv(a, b){
  var result = a / b;
  if(result >= 0){
    return Math.floor(result);
  }else{
    return Math.ceil(result);
  }
}

// Check if a given number is int or float
function getNumberType(number){
  number = String(number);
  if (number.match(int_r)) {
    return 'integer';
  } else if (number.match(float_r)) {
    return 'float';
  }
}

//Checks the syntax of a string to see if it matches a variable
function checkVarSyntax(var_name){
  if (var_name.match(/^[a-z]+(\d|_|[a-z])*$/i) !== null){
    if(var_name.match(/^(true|false)$/i) !== null){
      insertIntoShell('Syntax Error - Variable name: "' + var_name + '" is a reserved word.');
      errorMessage('Syntax Error');
    }else{
      return true;
    }
  }else{
    insertIntoShell('Syntax Error - Variable name: "' + var_name + '" incorrect.');
    errorMessage('Syntax Error');
  }
}

// Comparison of arrays
function arraysEqual(a1,a2){
  return JSON.stringify(a1)==JSON.stringify(a2);
}

//Function that gets the type values out of the param array
function getHashTypeValues(arr){
  var values = [];
  arr.forEach(function(h){
    values.push(h.type);
  });
  return values;
}

//Function that gets the name values out of the param array
function getHashNameValues(arr){
  var values = [];
  arr.forEach(function(h){
    values.push(h.name);
  });
  return values;
}

//Check all the function calls to see if they are valid ones
function checkFunctionCalls(){
  //Go through all the array of function calls
  functions_call_table.forEach(function(call_array){
    var fc = call_array[0]; //Name of the function in the calls array
    var fd = functions_table[fc]; //Definition of the function in the functions array
    if(fd === undefined) {
      insertIntoShell('Function "' + fc + '" does not exist');
      errorMessage('Semantic Error');
    }else if (!arraysEqual(getHashTypeValues(call_array[2]), getHashTypeValues(fd[1]))) {
      insertIntoShell('Function "' + fc + '" parameters should be "' + getHashTypeValues(fd[1]) + '"');
      errorMessage('Semantic Error');
    }else if (call_array[3] !== fd[2]) {
      insertIntoShell('Call to function "' + fc + '" does not match return type: "' + fd[2] + '"');
      errorMessage('Semantic Error');
    } else {
      quadruples[call_array[1]][3] = fd[0]; //Fill out the jump to the function quadruple
    }
  });
}

//Clear local and temporal variables
function clearLocalAndTemporal(){
  int_vars.local = [];
  int_vars.temporal = [];

  float_vars.local = [];
  float_vars.temporal = [];

  string_vars.local = [];
  string_vars.temporal = [];

  boolean_vars.local = [];
  boolean_vars.temporal = [];
}

//Clear the local variables when a function finishes
function clearLocal(){
  int_vars.local = [];
  float_vars.local = [];
  string_vars.local = [];
  boolean_vars.local = [];
}

//Clear params table after calling a function
function clearParamsTable(){
  param_vars.integer = [];
  param_vars.float = [];
  param_vars.string = [];
  param_vars.boolean = [];
}

//Read the params that were passed to the function
function getNextParam(index){
  switch(index[0]){
    case 'i':
      return 'pi' + (index.substr(2));
    case 'f':
      return 'pf' + (index.substr(2));
    case 's':
      return 'ps' + (index.substr(2));
    case 'b':
      return 'pb' + (index.substr(2));
  }
}

//Check if a variable is present in a local scope
function findLocalVariable(var_name){
  var index = -1;
  if (int_vars.local.indexOf(var_name) !== -1) {
    index = int_vars.local.indexOf(var_name);
    index = 'il' + index;
  }

  if (float_vars.local.indexOf(var_name) !== -1) {
    index = float_vars.local.indexOf(var_name);
    index = 'fl' + index;
  }

  if (string_vars.local.indexOf(var_name) !== -1) {
    index = string_vars.local.indexOf(var_name);
    index = 'sl' + index;
  }

  if (boolean_vars.local.indexOf(var_name) !== -1) {
    index = boolean_vars.local.indexOf(var_name);
    index = 'bl' + index;
  }
  return index;
}

//Check if a variable is present in a global scope
function findGlobalVariable(var_name){
  var index = -1;
  if (int_vars.global.indexOf(var_name) !== -1) {
    index = int_vars.global.indexOf(var_name);
    index = 'ig' + index;
  }

  if (float_vars.global.indexOf(var_name) !== -1) {
    index = float_vars.global.indexOf(var_name);
    index = 'fg' + index;
  }

  if (string_vars.global.indexOf(var_name) !== -1) {
    index = string_vars.global.indexOf(var_name);
    index = 'sg' + index;
  }

  if (boolean_vars.global.indexOf(var_name) !== -1) {
    index = boolean_vars.global.indexOf(var_name);
    index = 'bg' + index;
  }
  return index;
}

//Check if a variable is present in the var table
function findVariable(var_name){
  var index = -1;
  if (int_vars.local.indexOf(var_name) !== -1) {
    index = int_vars.local.indexOf(var_name);
    index = 'il' + index;
  } else if (int_vars.global.indexOf(var_name) !== -1) {
    index = int_vars.global.indexOf(var_name);
    index = 'ig' + index;
  }

  if (float_vars.local.indexOf(var_name) !== -1) {
    index = float_vars.local.indexOf(var_name);
    index = 'fl' + index;
  } else if (float_vars.global.indexOf(var_name) !== -1) {
    index = float_vars.global.indexOf(var_name);
    index = 'fg' + index;
  }

  if (string_vars.local.indexOf(var_name) !== -1) {
    index = string_vars.local.indexOf(var_name);
    index = 'sl' + index;
  } else if (string_vars.global.indexOf(var_name) !== -1) {
    index = string_vars.global.indexOf(var_name);
    index = 'sg' + index;
  }

  if (boolean_vars.local.indexOf(var_name) !== -1) {
    index = boolean_vars.local.indexOf(var_name);
    index = 'bl' + index;
  } else if (boolean_vars.global.indexOf(var_name) !== -1) {
    index = boolean_vars.global.indexOf(var_name);
    index = 'bg' + index;
  }
  return index;
}

//Push a var to the var table
function pushVarToTable(var_name, var_type){
  var table = varTypeToInt(var_type);
  switch (table) {
    case 29:
      int_vars[scope].push(var_name);
      break;
    case 30:
      float_vars[scope].push(var_name);
      break;
    case 31:
      string_vars[scope].push(var_name);
      break;
    case 32:
      boolean_vars[scope].push(var_name);
      break;
    default:
      break;
  }
}

//Push the param to the param table
function pushToParamTable(var_index, var_type){
  param_vars[var_type].push(var_index);
  var param_index = 'p' + (var_type[0]) + (param_vars[var_type].length-1);
  quadruples.push([12, var_index, '', param_index]);
}

//Map the variable type to a number
function varTypeToInt(var_type){
  if (var_type === 'integer'){
    return 29;
  }else if(var_type === 'float'){
    return 30;
  }else if(var_type === 'string'){
    return 31;
  }else if(var_type === 'boolean'){
    return 32;
  }
}

//Get the next available temporal
function indexToNextTemporal(var_int){
  switch(var_int) {
    case 29:
      int_vars.temporal.push('it' + int_vars.temporal.length);
      return 'it' + (int_vars.temporal.length - 1);
    case 30:
      float_vars.temporal.push('ft' + float_vars.temporal.length);
      return 'ft' + (float_vars.temporal.length - 1);
    case 31:
      string_vars.temporal.push('st' + string_vars.temporal.length);
      return 'st' + (string_vars.temporal.length - 1);
    case 32:
      boolean_vars.temporal.push('bt' + boolean_vars.temporal.length);
      return 'bt' + (boolean_vars.temporal.length - 1);
  }
}

//Transform a memory index to a variable type
function indexToType(index){
  switch (index[0]) {
    case 'i':
      return 'integer';
    case 'f':
      return 'float';
    case 's':
      return 'string';
    case 'b':
      return 'boolean';
    default:
      insertIntoShell('Invalid variable type');
      errorMessage('Variable Type Error');
  }
}

//Check to see if an operation between 2 factors is valid
function resultType(type1, type2, op){
  var result_index = checkSemantic(reserved_words[type1], reserved_words[type2], op);
  if (result_index === -1) {
    insertIntoShell('Invalid Operation: "' + type1 + '" and "' + type2 + '"');
    errorMessage('Semantic Error');
  }
  return indexToNextTemporal(result_index);
}
