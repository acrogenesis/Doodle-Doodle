'use strict';

goog.provide('Blockly.JavaScript.print');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['print'] = function(block) {
  var value_print_expression = Blockly.JavaScript.statementToCode(block, 'print_expression');

  var left_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  if (Number(value_print_expression)) {
    left_quadruple = quadruples[value_print_expression][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_print_expression.input;
    left_type = value_print_expression.type;
    left_var_type = left_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      errorMessage('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if(value_print_expression.fnc === true){
    left_quadruple = 'm' + left_index;
  }

  quadruples.push([13, '', '', left_quadruple]);
  return '';
};

Blockly.JavaScript['say'] = function(block) {
  var text_say_value = block.getFieldValue('say_value');
  quadruples.push([14, '', '', text_say_value]);
  return '';
};
