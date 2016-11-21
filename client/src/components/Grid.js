import React, { Component } from 'react';
import Row from './Row';
import _ from 'underscore';

class Grid extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='grid'>
        <div className='gridTitle'>{this.props.title}</div>
        { _(10).times(i => <Row
          key={i}
          playerTurn={this.props.playerTurn}
          row={this.props.matrix[i]}
          rowNum={i}
          submitPos={this.props.submitPos} />) }
      </div>
    );
  }
}

export default Grid;
