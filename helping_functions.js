function checkVarSyntax(var_name){
  if (var_name.match(/^[a-z]+(\d|_|[a-z])*$/i) !== null){
    return true;
  }else{
    alert('Syntax Error - Variable name: "' + var_name + '" incorrect.');
    throw('Syntax Error');
  }
}
function findVariable(var_name){
  var index = -1;
  if (int_vars.temporal.indexOf(var_name) !== -1) {
    index = int_vars.temporal.indexOf(var_name);
    index = 'it' + index;
  }else if (int_vars.local.indexOf(var_name) !== -1) {
    index = int_vars.local.indexOf(var_name);
    index = 'il' + index;
  } else if (int_vars.global.indexOf(var_name) !== -1) {
    index = int_vars.global.indexOf(var_name);
    index = 'ig' + index;
  }

  if (float_vars.temporal.indexOf(var_name) !== -1) {
    index = float_vars.temporal.indexOf(var_name);
    index = 'ft' + index;
  }else if (float_vars.local.indexOf(var_name) !== -1) {
    index = float_vars.local.indexOf(var_name);
    index = 'fl' + index;
  } else if (float_vars.global.indexOf(var_name) !== -1) {
    index = float_vars.global.indexOf(var_name);
    index = 'fg' + index;
  }

  if (string_vars.temporal.indexOf(var_name) !== -1) {
    index = string_vars.temporal.indexOf(var_name);
    index = 'st' + index;
  }else if (string_vars.local.indexOf(var_name) !== -1) {
    index = string_vars.local.indexOf(var_name);
    index = 'sl' + index;
  } else if (string_vars.global.indexOf(var_name) !== -1) {
    index = string_vars.global.indexOf(var_name);
    index = 'sg' + index;
  }

  if (boolean_vars.temporal.indexOf(var_name) !== -1) {
    index = boolean_vars.temporal.indexOf(var_name);
    index = 'bt' + index;
  }else if (boolean_vars.local.indexOf(var_name) !== -1) {
    index = boolean_vars.local.indexOf(var_name);
    index = 'bl' + index;
  } else if (boolean_vars.global.indexOf(var_name) !== -1) {
    index = boolean_vars.global.indexOf(var_name);
    index = 'bg' + index;
  }
  return index;
}

function pushVarToTable(var_name, var_type){
  var table = varTypeToInt(var_type);
  switch (table) {
    case 29:
      int_vars[scope].push(var_name);
      break;
    case 30:
      float_vars[scope].push(var_name);
      break;
    case 31:
      string_vars[scope].push(var_name);
      break;
    case 32:
      boolean_vars[scope].push(var_name);
      break;
    default:
      break;
  }
}

function varTypeToInt(var_type){
  if (var_type === 'integer'){
    return 29;
  }else if(var_type === 'float'){
    return 30;
  }else if(var_type === 'string'){
    return 31;
  }else if(var_type === 'boolean'){
    return 32;
  }
}

function indexToNextTemporal(var_int){
  switch(var_int) {
    case 29:
      int_vars.temporal.push('it' + int_vars.temporal.length);
      return 'it' + (int_vars.temporal.length - 1);
    case 30:
      float_vars.temporal.push('ft' + float_vars.temporal.length);
      return 'ft' + (float_vars.temporal.length - 1);
    case 31:
      string_vars.temporal.push('st' + string_vars.temporal.length);
      return 'st' + (string_vars.temporal.length - 1);
    case 32:
      boolean_vars.temporal.push('bt' + boolean_vars.temporal.length);
      return 'bt' + (boolean_vars.temporal.length - 1);
  }
}

function indexToType(index){
  switch (index[0]) {
    case 'i':
      return 'integer';
    case 'f':
      return 'float';
    case 's':
      return 'string';
    case 'b':
      return 'boolean';
    default:
      alert('Invalid variable type');
      throw('Variable Type Error');
  }
}

function resultType(type1, type2, op){
  var result_index = checkSemantic(reserved_words[type1], reserved_words[type2], op);
  if (result_index === -1) {
    alert('Invalid Operation: ' + reserved_words[type1] + ' and ' + reserved_words[type2]);
    throw('Semantic Error');
  };
  return indexToNextTemporal(result_index);
}