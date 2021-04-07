const { ipcRenderer, desktopCapturer } = require('electron')
const EventEmitter = require('events')

window.ipcRenderer = ipcRenderer
window.desktopCapturer = desktopCapturer
window.EventEmitter = EventEmitter