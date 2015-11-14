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
  var vars_table = {'integer':int_vars, 'float':float_vars, 'string':string_vars, 'boolean':boolean_vars};
  Object.keys(vars_table).forEach(function(var_type){
    var table = vars_table[var_type];
    Object.keys(table).forEach(function (key) {
      var value = table[key];
      if (value.indexOf(var_name) !== -1){
        index = value.indexOf(var_name);
        return var_type[0] + key[0] + index;
      }
    });
  });
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
