'use strict';

goog.provide('Blockly.Blocks.movements');

goog.require('Blockly.Blocks');

Blockly.Blocks['move'] = {
  init: function() {
    this.appendValueInput("move_blocks")
        .setCheck("factor")
        .appendField("move");
    this.appendDummyInput()
        .appendField("blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
  }
};

Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left", "left"], ["right", "right"]]), "directions");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
  }
};

Blockly.Blocks['wall_in_front'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wall in front?");
    this.setOutput(true, "boolean");
    this.setColour(210);
    this.setTooltip('');

  }
};

Blockly.Blocks['on_goal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("on goal?");
    this.setOutput(true, "boolean");
    this.setColour(210);
    this.setTooltip('');

  }
};
