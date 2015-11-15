'use strict';

goog.provide('Blockly.JavaScript.variables_and_constants');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['factor'] = function(block) {
  var input = block.getFieldValue('input');
  var int_r = /^\d+$/;
  var float_r = /^\d*\.\d+$/;
  var string_r = /^"[^"]*"$/;
  var boolean_r = /^(true|false)$/;
  if (input.match(int_r) !== null){
    return input + '†integer';
  }else if (input.match(float_r) !== null){
    return input + '†float';
  }else if (input.match(string_r) !== null){
    return input + '†string';
  }else if (input.match(boolean_r) !== null){
    return input + '†boolean';
  }else if (checkVarSyntax(input)){
    return input + '†var';
  }else{
    alert('Not a valid expression: ' + input);
    throw('Syntax Error');
  }
};


Blockly.JavaScript['var'] = function(block) {
  var var_type = block.getFieldValue('var_dic');
  var var_name = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  checkVarSyntax(var_name);
  if (findVariable(var_name) !== -1){
    alert('Variable "' + var_name + '" already defined.');
    throw('Semantic Error');
  }
  pushVarToTable(var_name, var_type);
  return '';
};
