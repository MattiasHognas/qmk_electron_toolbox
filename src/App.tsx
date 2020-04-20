import React from 'react';
import logo from './qmk_icon_48.png';
import './App.css';
import { Bridge } from './types/bridge';

declare global {
  interface Window {
    api: Bridge;
  }
}

if (window.api === undefined) {
  console.log('no bridge');
  window.api = {
    sendTestRequest() { },
    attachTestResponseListener(listener: (event: any, ...arg: any) => void) { },
    removeTestResponseListener() { }
  } as Bridge
}

export default class App extends React.Component {

  componentDidMount() {
    window.api.attachTestResponseListener((event, message) => {
      console.log('test-response recieved', event, message);
    });
  }

  componentWillUnmount() {
    window.api.removeTestResponseListener();
  }

  sendRequest() {
    window.api.sendTestRequest();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            QMK Electron Toolbox
            <button onClick={this.sendRequest}>test</button>
          </p>
        </header>
      </div>
    );
  }
}
