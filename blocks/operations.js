'use strict';

goog.provide('Blockly.Blocks.operations');

goog.require('Blockly.Blocks');

Blockly.Blocks['assignation'] = {
  init: function() {
    this.appendValueInput("left_assig")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("right_assig")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sum'] = {
  init: function() {
    this.appendValueInput("left_sum")
        .setCheck(["Number", "String"]);
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("right_sum")
        .setCheck(["Number", "String"]);
    this.setOutput(true, ["Number", "String"]);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['substraction'] = {
  init: function() {
    this.appendValueInput("left_substractor")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("-");
    this.appendValueInput("right_substractor")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['division'] = {
  init: function() {
    this.appendValueInput("nominator")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("÷");
    this.appendValueInput("denominator")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['multiplication'] = {
  init: function() {
    this.appendValueInput("left_multiplier")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("x");
    this.appendValueInput("right_multiplier")
        .setCheck("Number");
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
