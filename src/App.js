import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Inventory from './components/Inventory';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Inventory />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;




