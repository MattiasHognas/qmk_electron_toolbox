import { IpcRenderer, ipcRenderer, contextBridge } from "electron";
import { Bridge } from './../types/bridge';

declare global {
  interface Window {
    ipcRenderer: IpcRenderer;
  }
}

console.log('bridge loaded');

const api: Bridge = {
  sendTestRequest() {
    ipcRenderer.send('test-request');
  },
  attachTestResponseListener(listener: (event: any, ...arg: any) => void) {
    ipcRenderer.on('test-response', listener);
  },
  removeTestResponseListener() {
    ipcRenderer.removeAllListeners('test-response');
  }
};

contextBridge.exposeInMainWorld(
  'api', api
);