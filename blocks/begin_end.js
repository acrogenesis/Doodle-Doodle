'use strict';

goog.provide('Blockly.Blocks.begin_end');

goog.require('Blockly.Blocks');

Blockly.Blocks['begin_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("begin");
    this.appendStatementInput("main")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setColour(105);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
