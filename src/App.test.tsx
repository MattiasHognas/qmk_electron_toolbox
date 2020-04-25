import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Bridge } from './types/Bridge';

const mockBridge: Bridge = {
    sendTestRequest(): void {
        console.log('NO BRIDGE: sendTestRequest called');
    },
    attachTestResponseListener(): void {
        console.log('NO BRIDGE: attachTestResponseListener called');
    },
    removeTestResponseListener(): void {
        console.log('NO BRIDGE: removeTestResponseListener called');
    },
};
window.api = mockBridge;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
