'use strict';

goog.provide('Blockly.JavaScript.operations');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['assignation'] = function(block) {
  var value_left_assig = Blockly.JavaScript.valueToCode(block, 'left_assig', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_assig = Blockly.JavaScript.valueToCode(block, 'right_assig', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['sum'] = function(block) {
  var value_left_sum = Blockly.JavaScript.valueToCode(block, 'left_sum', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_sum = Blockly.JavaScript.valueToCode(block, 'right_sum', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['substraction'] = function(block) {
  var value_left_substractor = Blockly.JavaScript.valueToCode(block, 'left_substractor', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_substractor = Blockly.JavaScript.valueToCode(block, 'right_substractor', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['division'] = function(block) {
  var value_nominator = Blockly.JavaScript.valueToCode(block, 'nominator', Blockly.JavaScript.ORDER_ATOMIC);
  var value_denominator = Blockly.JavaScript.valueToCode(block, 'denominator', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['multiplication'] = function(block) {
  var value_left_multiplier = Blockly.JavaScript.valueToCode(block, 'left_multiplier', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_multiplier = Blockly.JavaScript.valueToCode(block, 'right_multiplier', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
