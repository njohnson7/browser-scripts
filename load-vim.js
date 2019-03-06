// Enable vimMode in CodeMirror
// - idea from: https://github.com/thomcom/autovim

const importVimJs = () => {
  const vimScriptElem = document.createElement('script')
  vimScriptElem.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.2/keymap/vim.js'
  document.head.appendChild(vimScriptElem)
}

const setVimOptions = (elem) => {
  elem.CodeMirror.setOption('vimMode', true)
  elem.CodeMirror.options.keyMap = 'vim'
  elem.CodeMirror.options.showCursorWhenSelecting = 'vim'
  elem.CodeMirror.options.cursorBlinkRate = 0
}

const setVimMode = (elem) => {
  console.log('Enable vimMode')
  // If I receive focus again...
  elem.CodeMirror.on('focus', (cm) => {
    console.log(cm)
    setVimOptions(elem)
  })
  // In case I already have focus...
  setTimeout(() => {
    setVimOptions(elem)
  }, 200)
}

const loadVim = () => document.querySelectorAll('.CodeMirror').forEach(setVimMode)

importVimJs()
CodeMirror.defineInitHook(loadVim)
setTimeout(loadVim, 1000)

console.log('Injected load-vim.js...')



// #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#
// #~~~~~~~~~~~~~~~~~ ORIGINAL ~~~~~~~~~~~~~~~~~#
// #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#

//let vimScript = document.createElement('script')
//vimScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.39.2/keymap/vim.js'
//document.head.appendChild(vimScript)

//function loadVim() {
//  var turn_on = function (e) {
//    //console.log('Enable vimMode');
//    // If I receive focus again...
//    e.CodeMirror.on("focus", function(cm) {
//      console.log(cm);
//      e.CodeMirror.setOption("vimMode", true);
//      e.CodeMirror.options.keyMap = 'vim';
//      e.CodeMirror.options.showCursorWhenSelecting = 'vim';
//    });
//    // In case I already have focus...
//    setTimeout(function(){
//      e.CodeMirror.setOption("vimMode", true);
//      e.CodeMirror.options.keyMap = 'vim';
//      e.CodeMirror.options.showCursorWhenSelecting = 'vim';
//    },200);
//  }
//  document.querySelectorAll(".CodeMirror").forEach(function(e){ turn_on(e); });
//}

//CodeMirror.defineInitHook(enable_vim);
//console.log('injected load-vim.js...');
//setTimeout(loadVim, 1000);
