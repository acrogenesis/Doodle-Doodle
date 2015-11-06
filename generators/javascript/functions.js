'use strict';

goog.provide('Blockly.JavaScript.functions');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['def_function'] = function(block) {
  var text_func_name = block.getFieldValue('func_name');
  var value_params = Blockly.JavaScript.valueToCode(block, 'params', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_main = Blockly.JavaScript.statementToCode(block, 'main');
  var value_return_type = Blockly.JavaScript.valueToCode(block, 'return_type', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['call_function'] = function(block) {
  var text_function_call_value = block.getFieldValue('function_call_value');
  var value_params = Blockly.JavaScript.valueToCode(block, 'params', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['return_function'] = function(block) {
  var text_function_call_value = block.getFieldValue('function_call_value');
  var value_params = Blockly.JavaScript.valueToCode(block, 'params', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['param'] = function(block) {
  var dropdown_param_type = block.getFieldValue('param_type');
  var text_param_name = block.getFieldValue('param_name');
  var value_next_param = Blockly.JavaScript.valueToCode(block, 'next_param', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['no_params'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['return_value'] = function(block) {
  var dropdown_return_type = block.getFieldValue('return_type');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['return'] = function(block) {
  var value_return = Blockly.JavaScript.valueToCode(block, 'return', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};