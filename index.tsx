import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App: React.FC = () => {
  return (
    <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0}}>
      <Hello />
    </div>
  );
}

render(<App />, document.getElementById('root'));
