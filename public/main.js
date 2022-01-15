const { app, BrowserWindow } = require("electron")

let mainWindow;

function createWindow() {
  let win = new BrowserWindow({width: 900, height: 680});
  win.loadURL(`http://localhost:3000`);
                     
  app.setAboutPanelOptions({
    applicationName: 'er-md',
    applicationVersion: '0.0.1',
  })
  
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
})

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});