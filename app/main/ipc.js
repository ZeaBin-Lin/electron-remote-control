const { ipcMain } = require('electron')
const { send: sendMainWin } = require('./window/main')
const { createWin: createRemoteControlWin } = require('./window/remote-control')

module.exports = function () {
  ipcMain.handle('login', async () => {
    let code = Math.floor(Math.random() * (999999 - 100000)) + 100000
    return code
  })

  ipcMain.on('control', (event, remoteCode) => {
    sendMainWin('control-state-change', remoteCode, 1)
    createRemoteControlWin()
  })
}