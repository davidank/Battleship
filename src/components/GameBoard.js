import React, { Component } from 'react';
import Grid from './Grid';
import util from './Utilities';
import * as V  from '../lib/values';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: util.makeEmptyMatrix(10, 10, V.EMPTY),
      enemyMatrix: util.makeEmptyMatrix(10, 10, V.EMPTY)
    }
  }
  render() {
    return (
      <div id='gameBoard'>
        <Grid title='Enemy' matrix={this.state.matrix} />
        <Grid title='You' matrix={this.state.enemyMatrix} />
     </div>
    );
  }
}

export default GameBoard;
