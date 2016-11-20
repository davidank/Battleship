import React, { Component } from 'react';
import OwnGrid from './OwnGrid';
import HitGrid from './HitGrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HitGrid />
        <OwnGrid />
      </div>
    );
  }
}

export default App;
