'use strict';

goog.provide('Blockly.Blocks.functions');

goog.require('Blockly.Blocks');

Blockly.Blocks['def_function'] = {
  init: function() {
    this.appendValueInput("params")
        .setCheck(["param", "no_params"])
        .appendField("function")
        .appendField(new Blockly.FieldTextInput("name"), "func_name")
        .appendField("   params:");
    this.appendStatementInput("main")
        .setCheck(null);
    this.appendValueInput("return_type")
        .setCheck("return_value")
        .appendField("end")
        .appendField("                       ")
        .appendField("return:");
    this.setInputsInline(false);
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['call_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("call function")
        .appendField(new Blockly.FieldTextInput("function_name"), "function_call_value");
    this.appendValueInput("params")
        .setCheck(["param", "no_params"])
        .appendField("params");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['return_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return value from")
        .appendField(new Blockly.FieldTextInput("function_name"), "function_call_value");
    this.appendValueInput("params")
        .setCheck(["param", "no_params"])
        .appendField("params");
    this.setInputsInline(true);
    this.setOutput(true, "factor");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['param'] = {
  init: function() {
    this.appendValueInput("next_param")
        .setCheck("param")
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["boolean", "boolean"], ["string", "string"]]), "param_type")
        .appendField(new Blockly.FieldTextInput("name"), "param_name");
    this.setInputsInline(false);
    this.setOutput(true, "param");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['no_params'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("no params");
    this.setOutput(true, "no_params");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['return_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["int", "int"], ["float", "float"], ["string", "string"], ["boolean", "boolean"], ["no return", "no_return"]]), "return_type");
    this.setOutput(true, "return_value");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.appendValueInput("return")
        .setCheck("factor")
        .appendField("return");
    this.setPreviousStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
