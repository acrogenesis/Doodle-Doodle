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
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if(left_var_type !== 'integer') {
    alert('Repeat loop must have an integer');
    throw('Type Mismatch');
  }
  quadruples.push(['move', '', '', left_quadruple]);

  return '';
};

Blockly.JavaScript['turn'] = function(block) {
  var dropdown_directions = block.getFieldValue('directions');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['wall_in_front'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
