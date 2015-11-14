function checkVarSyntax(var_name){
  if (var_name.match(/^[a-z]+(\d|_|[a-z])*$/i) !== null){
    return true;
  }else{
    alert("Syntax Error - Variable name: " + var_name + " incorrect.");
    throw("Syntax Error");
  }
}
