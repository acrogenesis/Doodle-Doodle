'use strict';

goog.provide('Blockly.JavaScript.begin_end');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['begin_end'] = function(block) {
  var statements_main = Blockly.JavaScript.statementToCode(block, 'main');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};
