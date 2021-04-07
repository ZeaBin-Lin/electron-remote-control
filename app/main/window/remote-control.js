const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let win
function createWin () {
  win = new BrowserWindow({
    width: 720,
    height: 450,
    title: 'remote-control',
    webPreferences: {
      // nodeIntegration: true,
      preload: path.join(__dirname, '../preload.js'),
      contextIsolation: false
    }
  })

  if (isDev) {
    win.webContents.openDevTools({mode: 'detach'})
    win.loadURL('http://localhost:8080/#/remotecontrol')
  } else {
    win.loadURL('../../renderer/pages/index.html#/remotecontrol')
  }
}

function send (channel, ...args) {
  win.webContents.send(channel, ...args)
}

module.exports = {
  createWin,
  send
}