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
  var value_left_sum = Blockly.JavaScript.statementToCode(block, 'left_sum');
  var value_right_sum = Blockly.JavaScript.statementToCode(block, 'right_sum');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var right_value;
  var right_type;
  var right_index;
  var right_var_type;

  if (Number(value_left_sum)) {
    left_quadruple = quadruples[Number(value_left_sum)][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_sum.split('†')[0];
    left_type = value_left_sum.split('†')[1];
    left_var_type = left_type;
  }

  if (Number(value_right_sum)) {
    right_quadruple = quadruples[Number(value_right_sum)][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_sum.split('†')[0];
    right_type = value_right_sum.split('†')[1];
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if (right_type === 'var'){
    if (findVariable(right_value) === -1){
      alert('Variable "' + right_value + '" not defined.');
      throw('Semantic Error');
    } else {
      right_index = findVariable(right_value);
      right_var_type = indexToType(right_index);
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 0);

  quadruples.push(['+', left_quadruple, right_quadruple, result_quadruple]);

  return '' + (quadruples.length-1);
};

Blockly.JavaScript['substraction'] = function(block) {
  var value_left_substractor = Blockly.JavaScript.statementToCode(block, 'left_substractor');
  var value_right_substractor = Blockly.JavaScript.statementToCode(block, 'right_substractor');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var right_value;
  var right_type;
  var right_index;
  var right_var_type;

  if (Number(value_left_substractor)) {
    left_quadruple = quadruples[Number(value_left_substractor)][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_substractor.split('†')[0];
    left_type = value_left_substractor.split('†')[1];
    left_var_type = left_type;
  }

  if (Number(value_right_substractor)) {
    right_quadruple = quadruples[Number(value_right_substractor)][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_substractor.split('†')[0];
    right_type = value_right_substractor.split('†')[1];
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if (right_type === 'var'){
    if (findVariable(right_value) === -1){
      alert('Variable "' + right_value + '" not defined.');
      throw('Semantic Error');
    } else {
      right_index = findVariable(right_value);
      right_var_type = indexToType(right_index);
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 1);

  quadruples.push(['-', left_quadruple, right_quadruple, result_quadruple]);

  return '' + (quadruples.length-1);
};

Blockly.JavaScript['multiplication'] = function(block) {
  var value_left_multiplier = Blockly.JavaScript.statementToCode(block, 'left_multiplier');
  var value_right_multiplier = Blockly.JavaScript.statementToCode(block, 'right_multiplier');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var right_value;
  var right_type;
  var right_index;
  var right_var_type;

  if (Number(value_left_multiplier)) {
    left_quadruple = quadruples[Number(value_left_multiplier)][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_multiplier.split('†')[0];
    left_type = value_left_multiplier.split('†')[1];
    left_var_type = left_type;
  }

  if (Number(value_right_multiplier)) {
    right_quadruple = quadruples[Number(value_right_multiplier)][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_multiplier.split('†')[0];
    right_type = value_right_multiplier.split('†')[1];
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if (right_type === 'var'){
    if (findVariable(right_value) === -1){
      alert('Variable "' + right_value + '" not defined.');
      throw('Semantic Error');
    } else {
      right_index = findVariable(right_value);
      right_var_type = indexToType(right_index);
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 2);

  quadruples.push(['*', left_quadruple, right_quadruple, result_quadruple]);

  return '' + (quadruples.length-1);
};

Blockly.JavaScript['division'] = function(block) {
  var value_nominator = Blockly.JavaScript.statementToCode(block, 'nominator');
  var value_denominator = Blockly.JavaScript.statementToCode(block, 'denominator');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var right_value;
  var right_type;
  var right_index;
  var right_var_type;

  if (Number(value_nominator)) {
    left_quadruple = quadruples[Number(value_nominator)][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_nominator.split('†')[0];
    left_type = value_nominator.split('†')[1];
    left_var_type = left_type;
  }

  if (Number(value_denominator)) {
    right_quadruple = quadruples[Number(value_denominator)][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_denominator.split('†')[0];
    right_type = value_denominator.split('†')[1];
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if (right_type === 'var'){
    if (findVariable(right_value) === -1){
      alert('Variable "' + right_value + '" not defined.');
      throw('Semantic Error');
    } else {
      right_index = findVariable(right_value);
      right_var_type = indexToType(right_index);
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 3);

  quadruples.push(['÷', left_quadruple, right_quadruple, result_quadruple]);

  return '' + (quadruples.length-1);
};
