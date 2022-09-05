const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld( "api", {
    getNames: () => ipcRenderer.invoke('getNames'),
    ping: () => ipcRenderer.invoke('ping')
})