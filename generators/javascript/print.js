'use strict';

goog.provide('Blockly.JavaScript.print');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['print'] = function(block) {
  var value_print_expression = Blockly.JavaScript.valueToCode(block, 'print_expression', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['say'] = function(block) {
  var text_say_value = block.getFieldValue('say_value');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};
