import './App.css';

import { w3cwebsocket as W3CWebSocket } from 'websocket';
import React from 'react';

const client = new W3CWebSocket('ws://bad-api-assignment.reaktor.com/rps/live');

const App = () => {
  const [result, setResult] = React.useState<any>('');

  client.onmessage = (message: any) => {
    setResult(() => JSON.parse(message.data));
  };

  console.log(result !== '' ? JSON.parse(result) : null);
  return (
    <div className='App'>
      <header className='App-header'>
        <p className='App-header1'>Hello React</p>
      </header>
    </div>
  );
};

export default App;
