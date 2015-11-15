'use strict';

goog.provide('Blockly.JavaScript.operations');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['assignation'] = function(block) {
  var value_left_assig = Blockly.JavaScript.statementToCode(block, 'left_assig').split('†');
  var value_right_assig = Blockly.JavaScript.statementToCode(block, 'right_assig').split('†');

  var left_input = value_left_assig[0];
  var left_type = value_left_assig[1];
  var left_index = -1;
  var left_var_type;

  var right_input = value_right_assig[0];
  var right_type = value_right_assig[1];
  var right_index;
  var right_var_type = right_type;

  checkVarSyntax(left_input);
  if (findVariable(left_input) === -1){
    alert('Variable "' + left_input + '" not defined.');
    throw('Semantic Error');
  } else {
    left_index = findVariable(left_input);
    left_var_type = indexToType(left_index);
  }
  if (right_type === 'var'){
    if (findVariable(right_input) === -1){
      alert('Variable "' + right_input + '" not defined.');
      throw('Semantic Error');
    } else {
      right_index = findVariable(right_input);
      right_var_type = indexToType(right_index);
    }
  }
  if (left_var_type !== right_var_type){
    alert(left_input + ' and ' + right_input + 'must be same type');
    throw('Type Mismatch Error');
  }
  quadruples.push(['=', (right_type === 'var' ? right_index : right_input), '', left_index]);
  return '';
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
