import { ipcRenderer, contextBridge } from "electron";
import { IBridge } from '../types/IBridge';

console.log('bridge loaded');

const api: IBridge = {
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