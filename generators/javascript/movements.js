'use strict';

goog.provide('Blockly.JavaScript.movements');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['move'] = function(block) {
  var value_move_blocks = Blockly.JavaScript.valueToCode(block, 'move_blocks', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['turn'] = function(block) {
  var text_turn_direction = block.getFieldValue('turn_direction');
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
