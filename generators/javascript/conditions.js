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

  quadruples.push(['==', left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
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

  quadruples.push(['!=', left_quadruple, right_quadruple, result_quadruple]);

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

  quadruples.push(['and', left_quadruple, right_quadruple, result_quadruple]);

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

  quadruples.push(['or', left_quadruple, right_quadruple, result_quadruple]);

  return quadruples.length-1;
};