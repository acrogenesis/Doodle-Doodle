'use strict';

goog.provide('Blockly.JavaScript.functions');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['def_function'] = function(block) {
  scope = 'local';
  clearLocal();
  var text_func_name = block.getFieldValue('func_name');
  var return_type = Blockly.JavaScript.statementToCode(block, 'return_type');
  current_function = text_func_name;
  if(pre_compilation){
    checkVarSyntax(text_func_name);

    if (findGlobalVariable(text_func_name) !== -1){
      alert('Variable "' + text_func_name + '" already defined.');
      errorMessage('Semantic Error');
    }

    scope = 'global';
    if(return_type !== 'no_return'){
      pushVarToTable(text_func_name, return_type);
    }
    current_function = 'main';
    return '';
  }

  function_params_array = [];
  Blockly.JavaScript.statementToCode(block, 'params');
  var p_names = getHashNameValues(function_params_array);
  p_names.forEach(function(n){
    if(n !== null){
      checkVarSyntax(n);
    }
  });

  function_params_array.forEach(function(n){
    if(n !== null){
      if(findLocalVariable(n.name) !== -1){
        alert('Parameter with name ' + n.name + ' in function ' + text_func_name + ' already defined');
        errorMessage('Semantic Error');
      }
      pushVarToTable(n.name, n.type);
      quadruples.push([12, getNextParam(findLocalVariable(n.name)), '', findLocalVariable(n.name)]);
    }
  });
  clearParamsTable();

  functions_table[text_func_name] = [quadruples.length - function_params_array.length, function_params_array, return_type];
  Blockly.JavaScript.statementToCode(block, 'main');
  quadruples.push([34, '', '', '']);
  function_params_array = [];
  clearLocal();
  current_function = 'main';
  return '';
};

Blockly.JavaScript['call_function'] = function(block) {
  var function_name = block.getFieldValue('function_call_value');

  function_params_array = [];
  Blockly.JavaScript.statementToCode(block, 'params');
  function_params_array.forEach(function(p){
    if (p.type === 'integer'){
      if(p.name.match(int_r) !== null){
        pushToParamTable(parseInt(p.name), p.type);
      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {
          pushToParamTable(findVariable(p.name), indexToType(findVariable(p.name)));
        }else{
          alert('Params error: ' + p.name + ' is not an integer');
          errorMessage('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not an integer');
        errorMessage('Semantic Error');
      }
    }else if (p.type === 'float'){
      if(p.name.match(float_r) !== null){
        pushToParamTable(parseFloat(p.name), p.type);
      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {
          pushToParamTable(findVariable(p.name), indexToType(findVariable(p.name)));
        }else{
          alert('Params error: ' + p.name + ' is not a float');
          errorMessage('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a float');
        errorMessage('Semantic Error');
      }
    }else if (p.type === 'string'){
      if(p.name.match(string_r) !== null){
        pushToParamTable(p.name, p.type);
      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {
          pushToParamTable(findVariable(p.name), indexToType(findVariable(p.name)));
        }else{
          alert('Params error: ' + p.name + ' is not a string');
          errorMessage('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a string');
        errorMessage('Semantic Error');
      }
    }else if (p.type === 'boolean'){
      if(p.name.match(boolean_r) !== null){
        pushToParamTable(p.name === 'true', p.type);
      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {
          pushToParamTable(findVariable(p.name), indexToType(findVariable(p.name)));
        }else{
          alert('Params error: ' + p.name + ' is not a boolean');
          errorMessage('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a boolean');
        errorMessage('Semantic Error');
      }
    }
  });
  clearParamsTable();
  functions_call_table.push([function_name, quadruples.length, function_params_array, 'no_return']);
  quadruples.push([33, '', '', 0]);
  function_params_array = [];
  return '';
};

Blockly.JavaScript['return_function'] = function(block) {
  var function_name = block.getFieldValue('function_call_value');
  var return_type;

  function_params_array = [];
  Blockly.JavaScript.statementToCode(block, 'params');
  function_params_array.forEach(function(p){
    if (p.type === 'integer'){
      if(p.name.match(int_r) !== null){
        pushToParamTable(parseInt(p.name), p.type);
      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {
          pushToParamTable(findVariable(p.name), indexToType(findVariable(p.name)));
        }else{
          alert('Params error: ' + p.name + ' is not an integer');
          errorMessage('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not an integer');
        errorMessage('Semantic Error');
      }
    }else if (p.type === 'float'){
      if(p.name.match(float_r) !== null){
        pushToParamTable(parseFloat(p.name), p.type);
      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {
          pushToParamTable(findVariable(p.name), indexToType(findVariable(p.name)));
        }else{
          alert('Params error: ' + p.name + ' is not a float');
          errorMessage('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a float');
        errorMessage('Semantic Error');
      }
    }else if (p.type === 'string'){
      if(p.name.match(string_r) !== null){
        pushToParamTable(p.name, p.type);
      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {
          pushToParamTable(findVariable(p.name), indexToType(findVariable(p.name)));
        }else{
          alert('Params error: ' + p.name + ' is not a string');
          errorMessage('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a string');
        errorMessage('Semantic Error');
      }
    }else if (p.type === 'boolean'){
      if(p.name.match(boolean_r) !== null){
        pushToParamTable(p.name === 'true', p.type);
      }else if (findVariable(p.name) !== -1){
        if (indexToType(findVariable(p.name)) == p.type) {
          pushToParamTable(findVariable(p.name), indexToType(findVariable(p.name)));
        }else{
          alert('Params error: ' + p.name + ' is not a boolean');
          errorMessage('Semantic Error');
        }
      }else{
        alert('Params error: ' + p.name + ' is not a boolean');
        errorMessage('Semantic Error');
      }
    }
  });
  clearParamsTable();
  return_type = findVariable(function_name);
  if(return_type === -1){
    alert('Function ' + function_name + ' does not exist');
    errorMessage('Semantic Error');
  }
  return_type = indexToType(return_type);

  functions_call_table.push([function_name, quadruples.length, function_params_array, return_type]);
  quadruples.push([33, '', '', 0]);
  function_params_array = [];
  return {'input':function_name, 'type':'var', 'fnc':true};
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
    errorMessage('Syntax Error');
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
      errorMessage('Semantic Error');
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
    errorMessage('Syntax Error');
  }
  if(left_var_type !== indexToType(function_index)){
    alert('Return value of function ' + current_function + ' must be ' + indexToType(function_index));
    errorMessage('Semantic Error');
  }
  function_index = 'm' + (function_index);
  if(value_return.fnc === true){
    left_quadruple = 'm' + left_quadruple;
  }
  quadruples.push([12, left_quadruple, '', function_index]);
  quadruples.push([34, '', '', '']);
  return '';
};
