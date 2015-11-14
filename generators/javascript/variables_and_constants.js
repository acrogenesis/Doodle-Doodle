'use strict';

goog.provide('Blockly.JavaScript.variables_and_constants');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['factor'] = function(block) {
  var text_input = block.getFieldValue('input');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
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
