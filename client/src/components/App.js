import React, { Component } from 'react';
import GameBoard from './GameBoard';
import ShipPlacer from './ShipPlacer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShipPlacer />
        <GameBoard />
      </div>
    );
  }
}

export default App;
