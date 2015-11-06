'use strict';

goog.provide('Blockly.Blocks.operations');

goog.require('Blockly.Blocks');

Blockly.Blocks['assignation'] = {
  init: function() {
    this.appendValueInput("left_assig")
        .setCheck("factor");
    this.appendDummyInput()
        .appendField("=");
    this.appendValueInput("right_assig")
        .setCheck(null);
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
        .setCheck("factor");
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("right_sum")
        .setCheck("factor");
    this.setOutput(true, "factor");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['substraction'] = {
  init: function() {
    this.appendValueInput("left_substractor")
        .setCheck("factor");
    this.appendDummyInput()
        .appendField("-");
    this.appendValueInput("right_substractor")
        .setCheck("factor");
    this.setOutput(true, "factor");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['division'] = {
  init: function() {
    this.appendValueInput("nominator")
        .setCheck("factor");
    this.appendDummyInput()
        .appendField("÷");
    this.appendValueInput("denominator")
        .setCheck("factor");
    this.setOutput(true, "factor");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['multiplication'] = {
  init: function() {
    this.appendValueInput("left_multiplier")
        .setCheck("factor");
    this.appendDummyInput()
        .appendField("x");
    this.appendValueInput("right_multiplier")
        .setCheck("factor");
    this.setOutput(true, "factor");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
