'use strict';

goog.provide('Blockly.Blocks.conditions');

goog.require('Blockly.Blocks');

Blockly.Blocks['if'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("if");
    this.appendDummyInput()
        .appendField("then");
    this.appendStatementInput("statment")
        .setCheck(null);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean")
        .appendField("if");
    this.appendDummyInput()
        .appendField("then");
    this.appendStatementInput("statment")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("else");
    this.appendStatementInput("else_condition")
        .setCheck(null);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['equal_to'] = {
  init: function() {
    this.appendValueInput("left_equal")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("==");
    this.appendValueInput("right_equal")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['less_than'] = {
  init: function() {
    this.appendValueInput("left_lt")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("<");
    this.appendValueInput("right_lt")
        .setCheck("Number");
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['greater_than'] = {
  init: function() {
    this.appendValueInput("left_gt")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(">");
    this.appendValueInput("right_gt")
        .setCheck("Number");
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['less_than_or_equal_to'] = {
  init: function() {
    this.appendValueInput("left_lte")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("<=");
    this.appendValueInput("right_lte")
        .setCheck("Number");
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['greater_than_or_equal_to'] = {
  init: function() {
    this.appendValueInput("left_gte")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(">=");
    this.appendValueInput("right_gte")
        .setCheck("Number");
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['not_equal_to'] = {
  init: function() {
    this.appendValueInput("left_not_equal")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("!=");
    this.appendValueInput("right_not_equal")
        .setCheck(null);
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['and'] = {
  init: function() {
    this.appendValueInput("left_and")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("and");
    this.appendValueInput("right_and")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['or'] = {
  init: function() {
    this.appendValueInput("left_or")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("or");
    this.appendValueInput("right_or")
        .setCheck("Boolean");
    this.setOutput(true, "Boolean");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
