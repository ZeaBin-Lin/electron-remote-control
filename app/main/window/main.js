const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let win
function createWin () {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    title: 'main',
    webPreferences: {
      // nodeIntegration: true,
      preload: path.join(__dirname, '../preload.js'),
      contextIsolation: false
    }
  })

  if (isDev) {
    // win.webContents.openDevTools({mode: 'detach'})
    win.loadURL('http://localhost:8080/')
  } else {
    win.loadURL('../../renderer/pages/index.html')
  }
}

function send (channel, ...args) {
  win.webContents.send(channel, ...args)
}

module.exports = {
  createWin,
  send
}