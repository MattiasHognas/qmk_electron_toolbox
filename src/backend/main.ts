import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { echoShell } from './EchoShell';

let win: BrowserWindow | null = null;

function createWindow(): void {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'Preload.js'),
        },
        autoHideMenuBar: true,
    });

    if (isDev) {
        win.loadURL('http://localhost:3000/index.html');
    } else {
        win.loadURL(`file://${__dirname}/../index.html`);
    }

    win.on('closed', () => (win = null));

    // Hot Reloading
    if (isDev) {
        // 'node_modules/.bin/electronPath'
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('electron-reload')(__dirname, {
            electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
            forceHardReset: true,
            hardResetMethod: 'exit',
        });
    }

    // DevTools
    installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err));

    if (isDev) {
        win.webContents.openDevTools();
    }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

ipcMain.on('test-request', (event, message) => {
    const onDataCallback = function (chunk: object): void {
        dialog.showMessageBox({
            title: 'Data',
            type: 'info',
            message: 'Data: \r\n' + chunk.toString(),
        });
    };
    const onErrorCallback = function (error: Error | object): void {
        dialog.showMessageBox({
            title: 'Error',
            type: 'warning',
            message: 'Error occured in shell.\r\n' + error.toString(),
        });
    };
    const onCloseCallback = function (code: number): void {
        dialog.showMessageBox({
            title: 'Closed',
            type: 'info',
            message: 'Closed shell.\r\n' + code.toString(),
        });
        if (win !== null) {
            event.sender.send('test-response', 'Yay');
        }
    };
    event.sender.send('test-response', 'Main recieved message: ' + message);
    echoShell.execute('cmd', onDataCallback, onErrorCallback, onCloseCallback, ['ECHO hello']);
});
