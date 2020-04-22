export interface IBridge {
    sendTestRequest: () => void,
    attachTestResponseListener: (listener: (event: any, ...arg: any) => void) => void,
    removeTestResponseListener: () => void
}