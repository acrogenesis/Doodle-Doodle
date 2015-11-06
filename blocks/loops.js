'use strict';

goog.provide('Blockly.Blocks.loops');

goog.require('Blockly.Blocks');

Blockly.Blocks['repeat'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("factor")
        .appendField("repeat");
    this.appendDummyInput()
        .appendField("times");
    this.appendStatementInput("statement")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['while'] = {
  init: function() {
    this.appendValueInput("expression")
        .setCheck("boolean")
        .appendField("while");
    this.appendDummyInput()
        .appendField("do");
    this.appendStatementInput("statment")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['do_while'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("do");
    this.appendStatementInput("statment")
        .setCheck(null);
    this.appendValueInput("expression")
        .setCheck("boolean")
        .appendField("while");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
