const { ipcMain } = require('electron')
const robot = require('robotjs')
const vkey = require('vkey')
// console.log('------', process.versions)

function handleMouse (data) {
  let {clientX, clientY, screen, video} = data
  let x = clientX * screen.width / video.width
  let y = clientY * screen.height / video.height
  console.log(`x/y: ${x}/${y}`)
  robot.moveMouse(x, y)
  robot.mouseClick()
}

function handleKey (data) {
  // {keyCode, meta, alt, ctrl, shift}
  const modifiers = []
  data.meta && modifiers.push('meta')
  data.alt && modifiers.push('alt')
  data.ctrl && modifiers.push('ctrl')
  data.shift && modifiers.push('shift')
  let key = vkey[data.keyCode].toLowerCase()
  robot.keyTap(key, modifiers)
}


module.exports = function () {
  ipcMain.on('robot', (e, type, data) => {
    console.log('--====', type, data)
    if (type == 'mouse') {
      handleMouse(data)
    } else if (type == 'key') {
      handleKey(data)
    }
  })
}