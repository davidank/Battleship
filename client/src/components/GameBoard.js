import React, { Component } from 'react';
import Grid from './Grid';
import util from './Utilities';
import * as V  from '../lib/values';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matrix: util.makeEmptyMatrix(10, 10, V.EMPTY),
      enemyMatrix: util.makeEmptyMatrix(10, 10, V.EMPTY),
      playerTurn: true
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
      target: matrix
    })
  }

  submitPos(pos, target) {

    // DEV HELPER
    // when box is clicked, pos = coordinates of box
    //-----textupdateMatrix-----
    // target = 'enemyMatrix';
    // let status = this.state[target][pos[1]][pos[0]];
    // status < 3 ? this.updateMatrix(pos, status + 1, target)
    //            : this.updateMatrix(pos, V.EMPTY, target);

  }

  togglePlayer() {
    // when playerTurn is false, all backgroundColor for box turn grey
    // when true, all backgroundColor turns blue
    this.setState({
      playerTurn: !this.state.playerTurn
    });
  }

  render() {
    return (
      <div id='gameBoard'>
        <Grid title='Enemy' matrix={this.state.enemyMatrix}
                            submitPos={this.submitPos.bind(this)}
                            playerTurn={this.state.playerTurn} />
        <Grid title='You' matrix={this.state.matrix}
                          playerTurn={this.state.playerTurn} />
     </div>
    );
  }
}

export default GameBoard;
