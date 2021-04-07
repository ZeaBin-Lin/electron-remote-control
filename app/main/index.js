const { app } = require('electron')
const handleIPC = require('./ipc')
const { createWin } = require('./window/main')
const { createWin: createRemote } = require('./window/remote-control')
const robotIPC = require('./robot')

app.on('ready', () => {
  // createWin()
  createRemote()
  robotIPC()
  handleIPC()
})