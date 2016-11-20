import React, { Component } from 'react';
import OwnGrid from './OwnGrid';
import HitGrid from './HitGrid';

class GameBoard extends Component {
  render() {
    return (
      <div id='gameBoard'>
        <HitGrid/>
        <OwnGrid/>
      </div>
    );
  }
}

export default GameBoard;
