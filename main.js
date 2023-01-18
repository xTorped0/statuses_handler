const { app, BrowserWindow } = require('electron');
const AutoLaunch = require('auto-launch');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      alwaysOnTop: true,
      titleBarStyle: 'hidden',
      title: 'Services handler',
    }
  })

  // win.openDevTools();
  win.setAlwaysOnTop(true, 'screen');
  win.on('closed', function() {
    // win = null;
  });

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

	app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  let autoLaunch = new AutoLaunch({
    name: 'Service Handlers',
    path: app.getPath('exe'),
  });
  autoLaunch.isEnabled().then((isEnabled) => {
    if (!isEnabled) autoLaunch.enable();
  });
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
