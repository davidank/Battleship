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
    // this.updateMatrix([1,0], V.OCCUPY);
    // this.updateMatrix([5,0], V.OCCUPY, 'matrix');
  }

  updateMatrix(pos, status, target) {
    // pos is an x,y tuple, status is V.*
    // target = 'enemyMatrix'/'matrix'
    if (target === undefined) target = 'enemyMatrix';
    let matrix = this.state[target];
    matrix[pos[1]][pos[0]] = status;
    this.setState({
      matrix: matrix
    })
  }

  submitPos(pos) {
    let log = 'XY-Coordinate: ('+ pos[0] + ',' + pos[1] + ')';
    console.log(log);
  }

  render() {
    return (
      <div id='gameBoard'>
        <Grid title='Enemy' matrix={this.state.enemyMatrix} submitPos={this.submitPos.bind(this)} />
        <Grid title='You' matrix={this.state.matrix} />
     </div>
    );
  }
}

export default GameBoard;
