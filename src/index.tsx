import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as WebFontLoader from 'webfontloader';
import { Bridge } from './types/Bridge';

WebFontLoader.load({
    google: {
        families: ['Roboto:300,400,500,700', 'Material Icons', 'Lato'],
    },
});

// TODO: Move to service (Add automocking?)
if (window.api === undefined) {
    console.log('NO BRIDGE');
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
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
