'use strict';

goog.provide('Blockly.JavaScript.begin_end');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['begin_end'] = function(block) {
  current_function = 'main';
  if(pre_compilation){
  	return '';
  }
  scope = 'global';
  quadruples.push([35]);
  Blockly.JavaScript.statementToCode(block, 'main');
  quadruples.push([36]);
  clearLocalAndTemporal();
  return true;
};
