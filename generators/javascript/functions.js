'use strict';

goog.provide('Blockly.JavaScript.functions');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['def_function'] = function(block) {
  scope = 'local';
  var text_func_name = block.getFieldValue('func_name');
  function_params_array = [];
  Blockly.JavaScript.statementToCode(block, 'params');
  var return_type = Blockly.JavaScript.statementToCode(block, 'return_type');
  functions_table[text_func_name] = [quadruples.length, function_params_array, return_type];
  Blockly.JavaScript.statementToCode(block, 'main');
  function_params_array = [];
  clearLocalAndTemporal();
  return '';
};

Blockly.JavaScript['call_function'] = function(block) {
  var function_name = block.getFieldValue('function_call_value');
  function_params_array = [];
  Blockly.JavaScript.statementToCode(block, 'params');
  functions_call_table.push([function_name, quadruples.length, function_params_array, 'no_return']);
  quadruples.push(['gotoFunk', '', '', 0]);
  function_params_array = [];
  return '';
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
  var param_name = block.getFieldValue('param_name');
  function_params_array.push({'type': dropdown_param_type, 'name': param_name});
  Blockly.JavaScript.statementToCode(block, 'next_param');
  return '';
};

Blockly.JavaScript['no_params'] = function(block) {
  function_params_array.push({'type': 'no_params', 'name': null});
  return '';
};


Blockly.JavaScript['return_value'] = function(block) {
  var dropdown_return_type = block.getFieldValue('return_type');
  return dropdown_return_type;
};

Blockly.JavaScript['return'] = function(block) {
  var value_return = Blockly.JavaScript.valueToCode(block, 'return', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};
