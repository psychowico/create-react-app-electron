import React, { Component } from 'react';
import './App.css';
import Test from './Test';
import { ipcRenderer } from '../electron-bridge';

class App extends Component<{}, { number: number }> {
    render() {
        return (
            <div className="App">
                <button onClick={() => ipcRenderer.send('test', 'show me')}>
                    {' '}
                    Test me{' '}
                </button>
                <header className="App-header">
                    <img src={''} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <Test />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
