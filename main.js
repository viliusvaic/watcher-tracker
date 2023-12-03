const { app, BrowserWindow } = require("electron");
let isDev = require("electron-is-dev");
const path = require("path");

function createWindow() {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // isDev = false;

  if (isDev) {
    window.loadURL("http://localhost:5173");
    window.webContents.openDevTools();
  } else {
    window.loadURL(
      path.join("file://", __dirname, "/dist-frontend/index.html")
    );
  }
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
