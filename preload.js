const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld( "api", {
    getNames: () => ipcRenderer.invoke('getNames'),
    getUnits: () => ipcRenderer.invoke('getUnits'),
    ping: () => ipcRenderer.invoke('ping')
})