'use strict';

goog.provide('Blockly.JavaScript.movements');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['move'] = function(block) {
  var value_move_blocks = Blockly.JavaScript.statementToCode(block, 'move_blocks');

  var left_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  if (Number(value_move_blocks)) {
    left_quadruple = quadruples[value_move_blocks][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_move_blocks.input;
    left_type = value_move_blocks.type;
    left_var_type = left_type;
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

  if(left_var_type !== 'integer') {
    insertIntoShell('Repeat loop must have an integer');
    errorMessage('Type Mismatch');
  }

  if(value_move_blocks.fnc === true){
    left_quadruple = 'm' + left_quadruple;
  }

  quadruples.push([15, '', '', left_quadruple]);

  return '';
};

Blockly.JavaScript['turn'] = function(block) {
  var dropdown_directions = block.getFieldValue('directions');
  quadruples.push([16, '', '', dropdown_directions]);
  return '';
};

Blockly.JavaScript['wall_in_front'] = function(block) {
  var next_bool = resultType('boolean', 'boolean', 4);
  quadruples.push([24, '', '', next_bool]);
  return quadruples.length-1;
};

Blockly.JavaScript['on_goal'] = function(block) {
  var next_bool = resultType('boolean', 'boolean', 4);
  quadruples.push([40, '', '', next_bool]);
  return quadruples.length-1;
};
