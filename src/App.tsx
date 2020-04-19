import React from 'react';
import logo from './qmk_icon_48.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          QMK Electron Toolbox
        </p>
      </header>
    </div>
  );
}

export default App;
