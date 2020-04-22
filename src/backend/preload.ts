import { ipcRenderer, contextBridge } from 'electron';
import { Bridge } from '../types/Bridge';

console.log('bridge loaded');

const api: Bridge = {
    sendTestRequest() {
        ipcRenderer.send('test-request');
    },
    attachTestResponseListener(listener: (event: Electron.IpcRendererEvent, ...arg: object[]) => void) {
        ipcRenderer.on('test-response', listener);
    },
    removeTestResponseListener() {
        ipcRenderer.removeAllListeners('test-response');
    },
};

contextBridge.exposeInMainWorld('api', api);
