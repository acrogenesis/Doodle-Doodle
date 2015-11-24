var vmparam_vars = {
    'integer': [],
    'float': [],
    'string': [],
    'boolean': []
  };
var vmint_vars = {
    'global': [],
    'local': [],
    'temporal': []
  };

var vmfloat_vars = {
    'global': [],
    'local': [],
    'temporal': []
  };

var vmstring_vars = {
    'global': [],
    'local': [],
    'temporal': []
  };

var vmboolean_vars = {
    'global': [],
    'local': [],
    'temporal': []
  };

var jumps_array = [];
var param_count = [];

var pcount = 0;

var current_quadruple = 0;

var myInterval;

function writeToMemory(value, index){
  switch(index[0]){
    case 'i':
      switch(index[1]){
        case 't':
          vmint_vars.temporal[parseInt(index.substr(2))] = value;
          break;
        case 'l':
          vmint_vars.local[parseInt(index.substr(2)) + checkParamOffset()] = value;
          break;
        case 'g':
          vmint_vars.global[parseInt(index.substr(2))] = value;
          break;
      }
      break;
    case 'f':
      switch(index[1]){
        case 't':
          vmfloat_vars.temporal[parseInt(index.substr(2))] = value;
          break;
        case 'l':
          vmfloat_vars.local[parseInt(index.substr(2)) + checkParamOffset()] = value;
          break;
        case 'g':
          vmfloat_vars.global[parseInt(index.substr(2))] = value;
          break;
      }
      break;
    case 's':
      switch(index[1]){
        case 't':
          vmstring_vars.temporal[parseInt(index.substr(2))] = value;
          break;
        case 'l':
          vmstring_vars.local[parseInt(index.substr(2)) + checkParamOffset()] = value;
          break;
        case 'g':
          vmstring_vars.global[parseInt(index.substr(2))] = value;
          break;
      }
      break;
    case 'b':
      switch(index[1]){
        case 't':
          vmboolean_vars.temporal[parseInt(index.substr(2))] = value;
          break;
        case 'l':
          vmboolean_vars.local[parseInt(index.substr(2)) + checkParamOffset()] = value;
          break;
        case 'g':
          vmboolean_vars.global[parseInt(index.substr(2))] = value;
          break;
      }
      break;
    case 'p':
      switch(index[1]){
        case 'i':
          vmparam_vars.integer[parseInt(index.substr(2))] = value;
          break;
        case 'f':
          vmparam_vars.float[parseInt(index.substr(2))] = value;
          break;
        case 's':
          vmparam_vars.string[parseInt(index.substr(2))] = value;
          break;
        case 'b':
          vmparam_vars.boolean[parseInt(index.substr(2))] = value;
          break;
      }
      break;
  }
}

function readFromMemory(index){
  switch(index[0]){
    case 'i':
      switch(index[1]){
        case 't':
          if(vmint_vars.temporal[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmint_vars.temporal[parseInt(index.substr(2))];
          }
          break;
        case 'l':
          if(vmint_vars.local[parseInt(index.substr(2)) + checkParamOffset()] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmint_vars.local[parseInt(index.substr(2)) + checkParamOffset()];
          }
          break;
        case 'g':
          if(vmint_vars.global[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmint_vars.global[parseInt(index.substr(2))];
          }
          break;
      }
      break;
    case 'f':
      switch(index[1]){
        case 't':
          if(vmfloat_vars.temporal[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmfloat_vars.temporal[parseInt(index.substr(2))];
          }
          break;
        case 'l':
          if(vmfloat_vars.local[parseInt(index.substr(2)) + checkParamOffset()] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmfloat_vars.local[parseInt(index.substr(2)) + checkParamOffset()];
          }
          break;
        case 'g':
          if(vmfloat_vars.global[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmfloat_vars.global[parseInt(index.substr(2))];
          }
          break;
      }
      break;
    case 's':
      switch(index[1]){
        case 't':
          if(vmstring_vars.temporal[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmstring_vars.temporal[parseInt(index.substr(2))];
          }
          break;
        case 'l':
          if(vmstring_vars.local[parseInt(index.substr(2)) + checkParamOffset()] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmstring_vars.local[parseInt(index.substr(2)) + checkParamOffset()];
          }
          break;
        case 'g':
          if(vmstring_vars.global[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmstring_vars.global[parseInt(index.substr(2))];
          }
          break;
      }
      break;
    case 'b':
      switch(index[1]){
        case 't':
          if(vmboolean_vars.temporal[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmboolean_vars.temporal[parseInt(index.substr(2))];
          }
          break;
        case 'l':
          if(vmboolean_vars.local[parseInt(index.substr(2)) + checkParamOffset()] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmboolean_vars.local[parseInt(index.substr(2)) + checkParamOffset()];
          }
          break;
        case 'g':
          if(vmboolean_vars.global[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmboolean_vars.global[parseInt(index.substr(2))];
          }
          break;
      }
      break;
    case 'p':
      switch(index[1]){
        case 'i':
          if(vmparam_vars.integer[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmparam_vars.integer[parseInt(index.substr(2))];
          }
          break;
        case 'f':
          if(vmparam_vars.float[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmparam_vars.float[parseInt(index.substr(2))];
          }
          break;
        case 's':
          if(vmparam_vars.string[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmparam_vars.string[parseInt(index.substr(2))];
          }
          break;
        case 'b':
          if(vmparam_vars.boolean[parseInt(index.substr(2))] === undefined){
            insertIntoShell('Runtime Error - Variable has no value');
            throw('Runtime Error');
          }else{
            return vmparam_vars.boolean[parseInt(index.substr(2))];
          }
          break;
      }
      break;
  }
}

function countLocals(){
  return vmint_vars.local.length +
          vmfloat_vars.local.length +
          vmstring_vars.local.length +
          vmboolean_vars.local.length;
}

function checkParamOffset(){
  var i;
  var sum = 0;
  for(i=0; i<param_count.length; i++){
    sum = sum + param_count[i];
  }
  return sum;
}

function findBeginQuadruple(){
  var i;
  var count_begins = 0;
  for(i=0; i<quadruples.length; i++){
    if(quadruples[i][0] === 35){
      current_quadruple = i;
      count_begins++;
    }
  }
  if (count_begins === 0){
    insertIntoShell('Syntax Error - You need to have a Begin-End block');
    throw('Syntax Error');
  }else if(count_begins >= 2){
    insertIntoShell('Syntax Error - You can only have one Begin-End block');
    throw('Syntax Error');
  }
}

function endProgram(){
  insertIntoShell('Program finished successfully');
  document.getElementById('runCode').className = 'runCode';
  document.getElementById('stopCode').className = 'stopCode hidden';
}

function checkIndexType(index){
  var var_r = /^(i|f|s|b)(g|l|t)\d+$/;
  var param_r = /^(p)(i|f|s|b)\d+$/;
  index = String(index);
  if(index.match(var_r) || index.match(param_r)){
    return true;
  }
  return false;
}

function loopThroughQuadruples(){
  switch(quadruples[current_quadruple][0]){
      case 0: // +
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf+rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 1: // -
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf-rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 2: // *
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf*rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 3: // ÷
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf/rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 4: // ==
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf===rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 5: // <
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf<rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 6: // >
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf>rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 7: // <=
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf<=rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 8: // >=
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf>=rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 9: // !=
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf!==rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 10: // and
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf&&rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 11: // or
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][2];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        writeToMemory(lf||rf, quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 12: // =
        lf = quadruples[current_quadruple][1];
        rf = quadruples[current_quadruple][3];

        if(rf[0] === 'p'){
          pcount++;
        }

        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }
        writeToMemory(lf, rf);
        current_quadruple++;
        break;
      case 13: // print
        rf = quadruples[current_quadruple][3];
        if(checkIndexType(rf)){
          rf = readFromMemory(rf);
        }
        insertIntoShell(rf);
        current_quadruple++;
        break;
      case 14: // say
        alert(quadruples[current_quadruple][3]);
        current_quadruple++;
        break;
      case 15: // moveRect
        lf = quadruples[current_quadruple][3];
        if(checkIndexType(lf)){
          lf = readFromMemory(lf);
        }

        for (var i = 0; i < lf; i++) {
          moveRect();
        }
        current_quadruple++;
        break;
      case 16: // turn
        lf = quadruples[current_quadruple][3];
        if (lf === 'right') {
          turnRight();
        }else if (lf === 'left') {
          turnLeft();
        }
        current_quadruple++;
        break;
      case 24: // wall in front?
        rf = quadruples[current_quadruple][3];

        //checa si hay una pared enfrente y guarda true o false en la variable lf
        lf = wallInFront();
        writeToMemory(lf, rf);

        current_quadruple++;
        break;
      case 33: // gotoFunk
        jumps_array.push(current_quadruple+1);
        if(pcount > 0){
          param_count.push(pcount);
          pcount = 0;
        }
        if(countLocals() > checkParamOffset()){
          param_count[param_count.length - 1] = param_count[param_count.length - 1] + (countLocals() - checkParamOffset());
        }
        current_quadruple = quadruples[current_quadruple][3];
        break;
      case 34: // return
        current_quadruple = jumps_array.pop();
        param_count.pop();
        if(jumps_array.length === 0){
          vmint_vars.local = [];
          vmfloat_vars.local = [];
          vmstring_vars.local = [];
          vmboolean_vars.local = [];
        }
        break;
      case 35: // Start of main
        current_quadruple++;
        break;
      case 36: // End of main
        clearInterval(myInterval);
        endProgram();
        break;
      case 37: // gotoF
        lf = quadruples[current_quadruple][1];
        lf = readFromMemory(lf);
        if(lf === false){
          current_quadruple = quadruples[current_quadruple][3];
        }else{
          current_quadruple++;
        }
        break;
      case 38: // goto
        current_quadruple = quadruples[current_quadruple][3];
        break;
      case 39: // gotoV
        lf = quadruples[current_quadruple][1];
        lf = readFromMemory(lf);
        if(lf === true){
          current_quadruple = quadruples[current_quadruple][3];
        }else{
          current_quadruple++;
        }
        break;
      case 40: // onGoal
        rf = quadruples[current_quadruple][3];

        //checa si hay un goal enfrente y guarda true o false en la variable lf
        lf = onGoal();
        writeToMemory(lf, rf);

        current_quadruple++;
        break;
    }
}

function runProgram(){
  findBeginQuadruple();
  var lf;
  var rf;
  jumps_array = [];
  param_count = [];
  pcount = 0;
  var speed = document.getElementById('runSpeed').value;
  if(document.getElementById('runSlow').checked){
    myInterval = setInterval(loopThroughQuadruples, speed);
  }else{
    while(quadruples[current_quadruple][0] !== 36){
      loopThroughQuadruples();
    }
    endProgram();
  }
}
