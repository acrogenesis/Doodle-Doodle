'use strict';

goog.provide('Blockly.JavaScript.begin_end');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['begin_end'] = function(block) {
  scope = 'global';
  current_function = 'main';
  quadruples.push(['BEGIN']);
  Blockly.JavaScript.statementToCode(block, 'main');
  quadruples.push(['END']);
  clearLocalAndTemporal();
  return true;
};
