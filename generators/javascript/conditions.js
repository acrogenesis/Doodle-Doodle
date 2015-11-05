'use strict';

goog.provide('Blockly.JavaScript.conditions');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['if'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statment = Blockly.JavaScript.statementToCode(block, 'statment');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['if_else'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statment = Blockly.JavaScript.statementToCode(block, 'statment');
  var statements_else_condition = Blockly.JavaScript.statementToCode(block, 'else_condition');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['equal_to'] = function(block) {
  var value_left_equal = Blockly.JavaScript.valueToCode(block, 'left_equal', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_equal = Blockly.JavaScript.valueToCode(block, 'right_equal', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['less_than'] = function(block) {
  var value_left_lt = Blockly.JavaScript.valueToCode(block, 'left_lt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_lt = Blockly.JavaScript.valueToCode(block, 'right_lt', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['greater_than'] = function(block) {
  var value_left_gt = Blockly.JavaScript.valueToCode(block, 'left_gt', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_gt = Blockly.JavaScript.valueToCode(block, 'right_gt', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['less_than_or_equal_to'] = function(block) {
  var value_left_lte = Blockly.JavaScript.valueToCode(block, 'left_lte', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_lte = Blockly.JavaScript.valueToCode(block, 'right_lte', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['greater_than_or_equal_to'] = function(block) {
  var value_left_gte = Blockly.JavaScript.valueToCode(block, 'left_gte', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_gte = Blockly.JavaScript.valueToCode(block, 'right_gte', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['not_equal_to'] = function(block) {
  var value_left_not_equal = Blockly.JavaScript.valueToCode(block, 'left_not_equal', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_not_equal = Blockly.JavaScript.valueToCode(block, 'right_not_equal', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['and'] = function(block) {
  var value_left_and = Blockly.JavaScript.valueToCode(block, 'left_and', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_and = Blockly.JavaScript.valueToCode(block, 'right_and', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['or'] = function(block) {
  var value_left_or = Blockly.JavaScript.valueToCode(block, 'left_or', Blockly.JavaScript.ORDER_ATOMIC);
  var value_right_or = Blockly.JavaScript.valueToCode(block, 'right_or', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};