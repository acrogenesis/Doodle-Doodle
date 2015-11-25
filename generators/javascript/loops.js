'use strict';

goog.provide('Blockly.JavaScript.loops');

goog.require('Blockly.JavaScript');

//Function that handles the logic for the repeat block
Blockly.JavaScript['repeat'] = function(block) {
  var value_n_times = Blockly.JavaScript.statementToCode(block, 'n_times');

  var left_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  //We check if we received a number as a return value
  if (Number(value_n_times)) {
    //In this case we received a quadruple number so we go to the last index to get the value
    left_quadruple = quadruples[value_n_times][3]; 
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    //Otherwise, we received a factor input so we read the properties of input and type
    left_value = value_n_times.input;
    left_type = value_n_times.type;
    left_var_type = left_type;
  }

  //If we received a variable
  if (left_type === 'var'){
    //We first check if the variable exists
    if (findVariable(left_value) === -1){
      insertIntoShell('Variable "' + left_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      //Then we find the index and type
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    //Otherwise we stay with the same value we had before
    left_quadruple = left_value;
  }

  //If the type is not an integer we throw an error
  if(left_var_type !== 'integer') {
    insertIntoShell('Repeat loop must have an integer');
    errorMessage('Type Mismatch');
  }

  if(value_n_times.fnc === true){
    left_quadruple = 'm' + left_quadruple;
  }

  //We initialize the variable that determines the number of repetitions
  var times = left_quadruple;
  var repeat_temporal = resultType('integer', 'integer', 0);
  //We push the quadruple that assigns to a new temporal the number of times
  quadruples.push([12, times, '', repeat_temporal]);

  var bool_repeat_temporal = resultType('integer', 'integer', 6);
  var jump_index = quadruples.length;
  var false_jump_index;
  //We push the quadruple that checks if the temporal variable is greater than zero
  quadruples.push([6, repeat_temporal, 0, bool_repeat_temporal]);

  //We substract 1 from the temporal variable
  quadruples.push([1, repeat_temporal, 1, repeat_temporal]);

  false_jump_index = quadruples.length;

  //We create a gotoF in case the condition is not met
  quadruples.push([37, bool_repeat_temporal, '', 0]);

  Blockly.JavaScript.statementToCode(block, 'statement');

  //We create a goto when we are inside the loop
  quadruples.push([38, '', '', jump_index]);

  //Finally we go back to the gotoF quadruple and fill out the jump index
  quadruples[false_jump_index][3] = quadruples.length;

  return '';
};

Blockly.JavaScript['while'] = function(block) {
  quadruples.push([21, '', '', '']);
  var jump_to_condition = quadruples.length;
  var value_expression = Blockly.JavaScript.statementToCode(block, 'expression');
  var false_jump_index = quadruples.length;
  quadruples.push([37, quadruples[value_expression][3], '', 0]);

  Blockly.JavaScript.statementToCode(block, 'statment');
  quadruples.push([38, '', '', jump_to_condition]);
  quadruples[false_jump_index][3] = quadruples.length;

  return '';
};

Blockly.JavaScript['do_while'] = function(block) {
  var true_jump_index = quadruples.length;
  Blockly.JavaScript.statementToCode(block, 'statment');
  Blockly.JavaScript.statementToCode(block, 'expression');

  quadruples.push([39, quadruples[quadruples.length - 1][3], '', true_jump_index]);
  return '';
};
