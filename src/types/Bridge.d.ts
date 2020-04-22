export interface Bridge {
    sendTestRequest: () => void;
    attachTestResponseListener: (listener: (event: Electron.IpcRendererEvent, ...arg: object[]) => void) => void;
    removeTestResponseListener: () => void;
}
