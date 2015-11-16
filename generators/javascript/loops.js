'use strict';

goog.provide('Blockly.JavaScript.loops');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['repeat'] = function(block) {
  var value_n_times = Blockly.JavaScript.valueToCode(block, 'n_times', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement = Blockly.JavaScript.statementToCode(block, 'statement');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['while'] = function(block) {
  var value_expression = Blockly.JavaScript.statementToCode(block, 'expression');
  var jump_to_condition = quadruples.length - 1;
  var false_jump_index = quadruples.length;
  quadruples.push(['gotoF', quadruples[value_expression][3], '', 0]);

  Blockly.JavaScript.statementToCode(block, 'statment');
  quadruples.push(['goto', '', '', jump_to_condition]);
  quadruples[false_jump_index][3] = quadruples.length;

  return '';
};

Blockly.JavaScript['do_while'] = function(block) {
  var true_jump_index = quadruples.length;
  Blockly.JavaScript.statementToCode(block, 'statment');
  Blockly.JavaScript.statementToCode(block, 'expression');

  quadruples.push(['gotoV', quadruples[quadruples.length - 1][3], '', true_jump_index]);
  return '';
};
