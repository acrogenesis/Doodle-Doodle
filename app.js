var workspace = Blockly.inject('blocklyDiv',
    {media: '../../media/',
     toolbox: document.getElementById('toolbox')});
Blockly.Xml.domToWorkspace(workspace,
    document.getElementById('startBlocks'));
document.getElementById('runCode').addEventListener('click', runCode);
document.getElementById('stopCode').addEventListener('click', stopCode);

function resetShell(){
  var shellBody = document.getElementById('shell-body');
  shellBody.innerHTML = '';
}

function insertIntoShell(text){
  text = JSON.stringify(text);
  var shellBody = document.getElementById('shell-body');
  var li = document.createElement('li');
  li.innerHTML = text;
  shellBody.appendChild(li);
  shellBody.scrollTop = shellBody.scrollHeight;
}

function runCode() {
  resetMaze();
  resetShell();
  // Generate JavaScript code and display it.
  pre_compilation = true;
  startCompilation();
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  pre_compilation = false;
  code = Blockly.JavaScript.workspaceToCode(workspace);
  checkFunctionCalls();
  runProgram();
  this.className = 'runCode hidden';
  document.getElementById('stopCode').className = 'stopCode';
}

function stopCode(){
  clearInterval(myInterval);
  this.className = 'stopCode hidden';
  document.getElementById('runCode').className = 'runCode';
  throw('Forced execution stop.');
}
