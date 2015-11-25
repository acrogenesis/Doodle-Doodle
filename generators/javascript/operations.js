'use strict';

goog.provide('Blockly.JavaScript.operations');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['assignation'] = function(block) {
  var value_left_assig = Blockly.JavaScript.statementToCode(block, 'left_assig');
  var value_right_assig = Blockly.JavaScript.statementToCode(block, 'right_assig');

  var left_input = value_left_assig.input;
  var left_type = value_left_assig.type;
  var left_index = -1;
  var left_var_type;

  var right_input;
  if(Number(value_right_assig)) {
    right_input = value_right_assig;
  } else {
    right_input = value_right_assig.input;
  }
  var right_type = value_right_assig.type;
  var right_index;
  var right_var_type = right_type;

  checkVarSyntax(left_input);
  if (findVariable(left_input) === -1){
    insertIntoShell('Variable "' + left_input + '" not defined.');
    errorMessage('Semantic Error');
  } else {
    left_index = findVariable(left_input);
    left_var_type = indexToType(left_index);
  }

  if (right_type === 'var'){
    if (findVariable(right_input) === -1){
      insertIntoShell('Variable "' + right_input + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      right_index = findVariable(right_input);
      right_var_type = indexToType(right_index);
    }
  }else if (right_type === undefined) {
    right_var_type = indexToType(quadruples[right_input][3]);
    right_index = quadruples[right_input][3];
  } else {
    right_index = right_input;
  }

  if (left_var_type !== right_var_type){
    alert(left_input + ' and ' + right_var_type + ' must be same type');
    errorMessage('Type Mismatch Error');
  }

  if(value_left_assig.fnc === true){
    left_index = 'm' + left_index;
  }

  if(value_right_assig.fnc === true){
    right_index = 'm' + right_index;
  }

  quadruples.push([12, right_index, '', left_index]);
  return '';
};

//Function that handles the logic for the sum block
Blockly.JavaScript['sum'] = function(block) {
  var value_left_sum = Blockly.JavaScript.statementToCode(block, 'left_sum');
  var value_right_sum = Blockly.JavaScript.statementToCode(block, 'right_sum');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var right_value;
  var right_type;
  var right_index;
  var right_var_type;

  //We check if the left part of the sum is a number
  if (Number(value_left_sum)) {
    //That means we received a quadruple and we have to read the index
    left_quadruple = quadruples[value_left_sum][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    //Otherwise, we received a factor input so we read the properties of input and type
    left_value = value_left_sum.input;
    left_type = value_left_sum.type;
    left_var_type = left_type;
  }
  
  //We check if the right part of the sum is a number
  if (Number(value_right_sum)) {
    //That means we received a quadruple and we have to read the index
    right_quadruple = quadruples[value_right_sum][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    //Otherwise, we received a factor input so we read the properties of input and type
    right_value = value_right_sum.input;
    right_type = value_right_sum.type;
    right_var_type = right_type;
  }

  //If the left type is a variable
  if (left_type === 'var'){
    //We first check that it exists
    if (findVariable(left_value) === -1){
      insertIntoShell('Variable "' + left_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      //Then we find the index and type of the variable
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    //Otherwise we stay with the same value we had before
    left_quadruple = left_value;
  }

  //If the right type is a variable
  if (right_type === 'var'){
    //We first check that it exists
    if (findVariable(right_value) === -1){
      insertIntoShell('Variable "' + right_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      //Then we find the index and type of the variable
      right_index = findVariable(right_value);
      right_var_type = indexToType(right_index);
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    //Otherwise we stay with the same value we had before
    right_quadruple = right_value;
  }

  //We check the semantic cube to see the result type of the operation
  var result_quadruple = resultType(left_var_type, right_var_type, 0);

  //We check if one of the factors is a return value from a function
  if(value_left_sum.fnc === true){
    left_quadruple = 'm' + left_index;
  }

  if(value_right_sum.fnc === true){
    right_quadruple = 'm' + right_index;
  }

  //We generate the quadruple for the expression
  quadruples.push([0, left_quadruple, right_quadruple, result_quadruple]);

  //We return the quadruple number to the next block connected
  return quadruples.length-1;
};

Blockly.JavaScript['substraction'] = function(block) {
  var value_left_substractor = Blockly.JavaScript.statementToCode(block, 'left_substractor');
  var value_right_substractor = Blockly.JavaScript.statementToCode(block, 'right_substractor');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var right_value;
  var right_type;
  var right_index;
  var right_var_type;

  if (Number(value_left_substractor)) {
    left_quadruple = quadruples[value_left_substractor][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_substractor.input;
    left_type = value_left_substractor.type;
    left_var_type = left_type;
  }

  if (Number(value_right_substractor)) {
    right_quadruple = quadruples[value_right_substractor][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_substractor.input;
    right_type = value_right_substractor.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      insertIntoShell('Variable "' + left_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if (right_type === 'var'){
    if (findVariable(right_value) === -1){
      insertIntoShell('Variable "' + right_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      right_index = findVariable(right_value);
      right_var_type = indexToType(right_index);
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 1);

  if(value_left_substractor.fnc === true){
    left_quadruple = 'm' + left_index;
  }

  if(value_right_substractor.fnc === true){
    right_quadruple = 'm' + right_index;
  }

  quadruples.push([1, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};

Blockly.JavaScript['multiplication'] = function(block) {
  var value_left_multiplier = Blockly.JavaScript.statementToCode(block, 'left_multiplier');
  var value_right_multiplier = Blockly.JavaScript.statementToCode(block, 'right_multiplier');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var right_value;
  var right_type;
  var right_index;
  var right_var_type;

  if (Number(value_left_multiplier)) {
    left_quadruple = quadruples[value_left_multiplier][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_multiplier.input;
    left_type = value_left_multiplier.type;
    left_var_type = left_type;
  }

  if (Number(value_right_multiplier)) {
    right_quadruple = quadruples[value_right_multiplier][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_multiplier.input;
    right_type = value_right_multiplier.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      insertIntoShell('Variable "' + left_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if (right_type === 'var'){
    if (findVariable(right_value) === -1){
      insertIntoShell('Variable "' + right_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      right_index = findVariable(right_value);
      right_var_type = indexToType(right_index);
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 2);

  if(value_left_multiplier.fnc === true){
    left_quadruple = 'm' + left_index;
  }

  if(value_right_multiplier.fnc === true){
    right_quadruple = 'm' + right_index;
  }

  quadruples.push([2, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};

Blockly.JavaScript['division'] = function(block) {
  var value_nominator = Blockly.JavaScript.statementToCode(block, 'nominator');
  var value_denominator = Blockly.JavaScript.statementToCode(block, 'denominator');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var right_value;
  var right_type;
  var right_index;
  var right_var_type;

  if (Number(value_nominator)) {
    left_quadruple = quadruples[value_nominator][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_nominator.input;
    left_type = value_nominator.type;
    left_var_type = left_type;
  }

  if (Number(value_denominator)) {
    right_quadruple = quadruples[value_denominator][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_denominator.input;
    right_type = value_denominator.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      insertIntoShell('Variable "' + left_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if (right_type === 'var'){
    if (findVariable(right_value) === -1){
      insertIntoShell('Variable "' + right_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      right_index = findVariable(right_value);
      right_var_type = indexToType(right_index);
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 3);

  if(value_nominator.fnc === true){
    left_quadruple = 'm' + left_index;
  }

  if(value_denominator.fnc === true){
    right_quadruple = 'm' + right_index;
  }

  quadruples.push([3, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};
