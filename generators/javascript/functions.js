'use strict';

goog.provide('Blockly.JavaScript.functions');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['def_function'] = function(block) {
  scope = 'local';
  var text_func_name = block.getFieldValue('func_name');
  current_function = text_func_name;
  checkVarSyntax(text_func_name);
  if (functions_table[text_func_name] !== undefined){
    alert('Function ' + text_func_name + ' already defined');
    throw('Semantic Error');
  }

  if (findGlobalVariable(text_func_name) !== -1){
      alert('Variable "' + text_func_name + '" already defined.');
      throw('Semantic Error');
  }

  function_params_array = [];
  Blockly.JavaScript.statementToCode(block, 'params');
  var p_names = getHashNameValues(function_params_array);
  p_names.forEach(function(n){
    if(n !== null){
      checkVarSyntax(n);
    }
  });

  var return_type = Blockly.JavaScript.statementToCode(block, 'return_type');

  scope = 'global';
  if(return_type !== 'no_return'){
    pushVarToTable(text_func_name, return_type);
  }
  scope = 'local';
  functions_table[text_func_name] = [quadruples.length, function_params_array, return_type];
  Blockly.JavaScript.statementToCode(block, 'main');
  quadruples.push(['RETURN', '', '', '']);
  function_params_array = [];
  clearLocalAndTemporal();
  current_function = 'main';
  return '';
};

Blockly.JavaScript['call_function'] = function(block) {
  var function_name = block.getFieldValue('function_call_value');
  var int_r = /^\d+$/;
  var float_r = /^\d*\.\d+$/;
  var string_r = /^"[^"]*"$/;
  var boolean_r = /^(true|false)$/;

  function_params_array = [];
  Blockly.JavaScript.statementToCode(block, 'params');
  function_params_array.forEach(function(p){
    if (p.type === 'integer'){
      if(p.name.match(int_r) !== null){

      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {

        }else{
          alert('Params error: ' + p.name + ' is not an integer');
          throw('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not an integer');
        throw('Semantic Error');
      }
    }else if (p.type === 'float'){
      if(p.name.match(float_r) !== null){

      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {

        }else{
          alert('Params error: ' + p.name + ' is not a float');
          throw('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a float');
        throw('Semantic Error');
      }
    }else if (p.type === 'string'){
      if(p.name.match(string_r) !== null){

      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {

        }else{
          alert('Params error: ' + p.name + ' is not a string');
          throw('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a string');
        throw('Semantic Error');
      }
    }else if (p.type === 'boolean'){
      if(p.name.match(boolean_r) !== null){

      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {

        }else{
          alert('Params error: ' + p.name + ' is not a boolean');
          throw('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a boolean');
        throw('Semantic Error');
      }
    }
  });
  functions_call_table.push([function_name, quadruples.length, function_params_array, 'no_return']);
  quadruples.push(['gotoFunk', '', '', 0]);
  function_params_array = [];
  return '';
};

Blockly.JavaScript['return_function'] = function(block) {
  var text_function_call_value = block.getFieldValue('function_call_value');
  var value_params = Blockly.JavaScript.valueToCode(block, 'params', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['param'] = function(block) {
  var dropdown_param_type = block.getFieldValue('param_type');
  var param_name = block.getFieldValue('param_name');
  function_params_array.push({'type': dropdown_param_type, 'name': param_name});
  Blockly.JavaScript.statementToCode(block, 'next_param');
  return '';
};

Blockly.JavaScript['no_params'] = function(block) {
  function_params_array.push({'type': 'no_params', 'name': null});
  return '';
};


Blockly.JavaScript['return_value'] = function(block) {
  var dropdown_return_type = block.getFieldValue('return_type');
  return dropdown_return_type;
};

Blockly.JavaScript['return'] = function(block) {
  if(current_function === 'main'){
    alert('Begin - End block cannot contain a return statement');
    throw('Syntax Error');
  }
  var value_return = Blockly.JavaScript.statementToCode(block, 'return');
  var left_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  var function_index;

  if (value_return === parseInt(value_return,10)) {
    left_quadruple = quadruples[value_return][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_return.input;
    left_type = value_return.type;
    left_var_type = left_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }
  function_index = findVariable(current_function);
  if(function_index === -1){
    alert('Function ' + current_function + ' should not have a return statement');
    throw('Syntax Error');
  }
  if(left_var_type !== indexToType(function_index)){
    alert('Return value of function ' + current_function + ' must be ' + indexToType(function_index));
    throw('Semantic Error');
  }
  quadruples.push(['=', left_quadruple, '', function_index]);

  return '';
};
