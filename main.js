const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    transparent: true,
      icon:'assets/images/icon.ico',
      title: 'To Do App',
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 700,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('index.html');

 

  ipcMain.on('closed',()=>{
    win.close();
   });
  
   ipcMain.on('min',()=>{
    win.minimize();
   });
   ipcMain.on('max',()=>{
    if(win.isMaximized()){
      win.unmaximize();
    }else{
      win.maximize();
    }
   });
}



app.whenReady().then(() => {
  createWindow()
});



