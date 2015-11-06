'use strict';

goog.provide('Blockly.Blocks.variables_and_constants');

goog.require('Blockly.Blocks');

Blockly.Blocks['factor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "input");
    this.setOutput(true, "factor");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("var")
        .appendField(new Blockly.FieldDropdown([["int", "integer"], ["float", "float"], ["bool", "boolean"], ["string", "string"]]), "var_dic")
        .appendField("name:")
        .appendField(new Blockly.FieldTextInput(""), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
