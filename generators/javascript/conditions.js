'use strict';

goog.provide('Blockly.JavaScript.conditions');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['if'] = function(block) {
  var value_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var false_jump_index = quadruples.length;
  quadruples.push([37, quadruples[value_condition][3], '', 0]);
  Blockly.JavaScript.statementToCode(block, 'statment');
  quadruples[false_jump_index][3] = quadruples.length;

  return '';
};

Blockly.JavaScript['if_else'] = function(block) {
  var value_condition = Blockly.JavaScript.statementToCode(block, 'condition');
  var false_jump_index = quadruples.length;
  var jump_index;

  quadruples.push([37, quadruples[value_condition][3], '', 0]);

  Blockly.JavaScript.statementToCode(block, 'statment');
  jump_index = quadruples.length;
  quadruples.push([38, '', '', 0]);
  quadruples[false_jump_index][3] = quadruples.length;

  Blockly.JavaScript.statementToCode(block, 'else_condition');
  quadruples[jump_index][3] = quadruples.length;

  return '';
};

Blockly.JavaScript['equal_to'] = function(block) {
  var value_left_equal = Blockly.JavaScript.statementToCode(block, 'left_equal');
  var value_right_equal = Blockly.JavaScript.statementToCode(block, 'right_equal');

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

  if (Number(value_left_equal)) {
    left_quadruple = quadruples[value_left_equal][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_equal.input;
    left_type = value_left_equal.type;
    left_var_type = left_type;
  }

  if (Number(value_right_equal)) {
    right_quadruple = quadruples[value_right_equal][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_equal.input;
    right_type = value_right_equal.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
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
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 4);

  quadruples.push([4, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};

Blockly.JavaScript['less_than'] = function(block) {
  var value_left_lt = Blockly.JavaScript.statementToCode(block, 'left_lt');
  var value_right_lt = Blockly.JavaScript.statementToCode(block, 'right_lt');

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

  if (Number(value_left_lt)) {
    left_quadruple = quadruples[value_left_lt][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_lt.input;
    left_type = value_left_lt.type;
    left_var_type = left_type;
  }

  if (Number(value_right_lt)) {
    right_quadruple = quadruples[value_right_lt][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_lt.input;
    right_type = value_right_lt.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
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
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 5);

  quadruples.push([5, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};

Blockly.JavaScript['greater_than'] = function(block) {
  var value_left_gt = Blockly.JavaScript.statementToCode(block, 'left_gt');
  var value_right_gt = Blockly.JavaScript.statementToCode(block, 'right_gt');
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

  if (Number(value_left_gt)) {
    left_quadruple = quadruples[value_left_gt][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_gt.input;
    left_type = value_left_gt.type;
    left_var_type = left_type;
  }

  if (Number(value_right_gt)) {
    right_quadruple = quadruples[value_right_gt][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_gt.input;
    right_type = value_right_gt.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
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
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 6);

  quadruples.push([6, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};

Blockly.JavaScript['less_than_or_equal_to'] = function(block) {
  var value_left_lte = Blockly.JavaScript.statementToCode(block, 'left_lte');
  var value_right_lte = Blockly.JavaScript.statementToCode(block, 'right_lte');
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

  if (Number(value_left_lte)) {
    left_quadruple = quadruples[value_left_lte][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_lte.input;
    left_type = value_left_lte.type;
    left_var_type = left_type;
  }

  if (Number(value_right_lte)) {
    right_quadruple = quadruples[value_right_lte][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_lte.input;
    right_type = value_right_lte.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
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
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 7);

  quadruples.push([7, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};

Blockly.JavaScript['greater_than_or_equal_to'] = function(block) {
  var value_left_gte = Blockly.JavaScript.statementToCode(block, 'left_gte');
  var value_right_gte = Blockly.JavaScript.statementToCode(block, 'right_gte');

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

  if (Number(value_left_gte)) {
    left_quadruple = quadruples[value_left_gte][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_gte.input;
    left_type = value_left_gte.type;
    left_var_type = left_type;
  }

  if (Number(value_right_gte)) {
    right_quadruple = quadruples[value_right_gte][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_gte.input;
    right_type = value_right_gte.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
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
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 8);

  quadruples.push([8, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};


Blockly.JavaScript['not_equal_to'] = function(block) {
  var value_left_not_equal = Blockly.JavaScript.statementToCode(block, 'left_not_equal');
  var value_right_not_equal = Blockly.JavaScript.statementToCode(block, 'right_not_equal');

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

  if (Number(value_left_not_equal)) {
    left_quadruple = quadruples[value_left_not_equal][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_not_equal.input;
    left_type = value_left_not_equal.type;
    left_var_type = left_type;
  }

  if (Number(value_right_not_equal)) {
    right_quadruple = quadruples[value_right_not_equal][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_not_equal.input;
    right_type = value_right_not_equal.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
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
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 9);

  quadruples.push([9, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};

Blockly.JavaScript['and'] = function(block) {
  var value_left_and = Blockly.JavaScript.statementToCode(block, 'left_and');
  var value_right_and = Blockly.JavaScript.statementToCode(block, 'right_and');

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

  if (Number(value_left_and)) {
    left_quadruple = quadruples[value_left_and][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_and.input;
    left_type = value_left_and.type;
    left_var_type = left_type;
  }

  if (Number(value_right_and)) {
    right_quadruple = quadruples[value_right_and][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_and.input;
    right_type = value_right_and.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
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
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 10);

  quadruples.push([10, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};

Blockly.JavaScript['or'] = function(block) {
  var value_left_or = Blockly.JavaScript.statementToCode(block, 'left_or');
  var value_right_or = Blockly.JavaScript.statementToCode(block, 'right_or');

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

  if (Number(value_left_or)) {
    left_quadruple = quadruples[value_left_or][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_left_or.input;
    left_type = value_left_or.type;
    left_var_type = left_type;
  }

  if (Number(value_right_or)) {
    right_quadruple = quadruples[value_right_or][3];
    right_type = indexToType(right_quadruple[0]);
    right_var_type = right_type;
  } else {
    right_value = value_right_or.input;
    right_type = value_right_or.type;
    right_var_type = right_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
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
      right_quadruple = right_index;
    }
  } else if(right_quadruple === false) {
    right_quadruple = right_value;
  }

  var result_quadruple = resultType(left_var_type, right_var_type, 11);

  quadruples.push([11, left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};
