// Enable vimMode (vim keymap/bindings) in CodeMirror editor.
// Idea from: https://github.com/thomcom/autovim
// Directions: save as a Chrome snippet, load a page that has CodeMirror editor (eg, Pramp), and run snippet.

const CODEMIRROR_VERSION = '5.39.2'

const importVimJs = () => {
  let vimScriptElem = document.createElement('script')
  vimScriptElem.src = `https://cdnjs.cloudflare.com/ajax/libs/codemirror/${CODEMIRROR_VERSION}/keymap/vim.js`
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
