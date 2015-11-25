'use strict';

goog.provide('Blockly.JavaScript.variables_and_constants');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['factor'] = function(block) {
  var input = block.getFieldValue('input');
  if (input.match(int_r) !== null){
    return {'input':parseInt(input), 'type':'integer'};
  }else if (input.match(float_r) !== null){
    return {'input':parseFloat(input), 'type':'float'};
  }else if (input.match(string_r) !== null){
    return {'input':input, 'type':'string'};
  }else if (input.match(boolean_r) !== null){
    return {'input':input === 'true', 'type':'boolean'};
  }else if (checkVarSyntax(input)){
    return {'input':input, 'type':'var'};
  }else{
    insertIntoShell('Not a valid expression: "' + input + '"');
    errorMessage('Syntax Error');
  }
};


Blockly.JavaScript['var'] = function(block) {
  var var_type = block.getFieldValue('var_dic');
  var var_name = block.getFieldValue('value');

  checkVarSyntax(var_name);
  if (scope == 'global'){
    if (findGlobalVariable(var_name) !== -1){
      insertIntoShell('Variable "' + var_name + '" already defined.');
      errorMessage('Semantic Error');
    }
  }else if (scope == 'local') {
    if (findLocalVariable(var_name) !== -1){
      insertIntoShell('Variable "' + var_name + '" already defined.');
      errorMessage('Semantic Error');
    }
  }

  pushVarToTable(var_name, var_type);
  return '';
};
