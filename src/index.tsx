import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as WebFontLoader from 'webfontloader';
import { IBridge } from './types/IBridge';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

// TODO: Move to service (Add automocking?)
if (window.api === undefined) {
  console.log('NO BRIDGE');
  const mockBridge: IBridge = {
    sendTestRequest(): void { console.log('NO BRIDGE: sendTestRequest called'); },
    attachTestResponseListener(listener: (event: any, ...arg: any) => void): void { console.log('NO BRIDGE: attachTestResponseListener called'); },
    removeTestResponseListener(): void { console.log('NO BRIDGE: removeTestResponseListener called'); }
  };
  window.api = mockBridge;
};


ReactDOM.render(<App simplifiedMenu={false} />, document.getElementById('root'));

serviceWorker.unregister();
