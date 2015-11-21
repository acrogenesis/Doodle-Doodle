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

var current_quadruple = 0;

function writeToMemory(value, index){
	switch(index[0]){
		case 'i':
			switch(index[1]){
				case 't':
					vmint_vars.temporal[parseInt(index.substr(2))] = value;
					break;
				case 'l':
					vmint_vars.local[parseInt(index.substr(2))] = value;
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
					vmfloat_vars.local[parseInt(index.substr(2))] = value;
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
					vmstring_vars.local[parseInt(index.substr(2))] = value;
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
					vmboolean_vars.local[parseInt(index.substr(2))] = value;
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
					if(vmint_vars.local[parseInt(index.substr(2))] === undefined){
						insertIntoShell('Runtime Error - Variable has no value');
						throw('Runtime Error');
					}else{
						return vmint_vars.local[parseInt(index.substr(2))];
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
					if(vmfloat_vars.local[parseInt(index.substr(2))] === undefined){
						insertIntoShell('Runtime Error - Variable has no value');
						throw('Runtime Error');
					}else{
						return vmfloat_vars.local[parseInt(index.substr(2))];
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
					if(vmstring_vars.local[parseInt(index.substr(2))] === undefined){
						insertIntoShell('Runtime Error - Variable has no value');
						throw('Runtime Error');
					}else{
						return vmstring_vars.local[parseInt(index.substr(2))];
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
					if(vmboolean_vars.local[parseInt(index.substr(2))] === undefined){
						insertIntoShell('Runtime Error - Variable has no value');
						throw('Runtime Error');
					}else{
						return vmboolean_vars.local[parseInt(index.substr(2))];
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

function findBeginQuadruple(){
	var i;
	for(i=0; i<quadruples.length; i++){
		if(quadruples[i][0] === 35){
			current_quadruple = i;
			break;
		}
	}
}

function checkIndexType(index){
	var var_r = /^(i|f|s|b)(g|l|t)\d+$/;
	var param_r = /^(p)(i|f|s|b)\d+$/;
	if(index.match(var_r) || index.match(param_r)){
		return true;
	}
	return false;
}

function runProgram(){
	findBeginQuadruple();
	while(quadruples[current_quadruple][0] !== 36){
		switch(quadruples[current_quadruple][0]){
			case 0:
				break;
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			case 8:
				break;
			case 9:
				break;
			case 10:
				break;
			case 11:
				break;
			case 12:
				break;
			case 13:
				break;
			case 14:
				break;
			case 15:
				break;
			case 16:
				break;
			case 17:
				break;
			case 18:
				break;
			case 19:
				break;
			case 20:
				break;
			case 21:
				break;
			case 22:
				break;
			case 23:
				break;
			case 24:
				break;
			case 25:
				break;
			case 26:
				break;
			case 27:
				break;
			case 28:
				break;
			case 29:
				break;
			case 30:
				break;
			case 31:
				break;
			case 32:
				break;
			case 33:
				break;
			case 34:
				break;
			case 35:
				break;
			case 36:
				break;
			case 37:
				break;
			case 38:
				break;
			case 39:
				break;
		}
	}
}