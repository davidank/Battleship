import React, { Component } from 'react';
import Row from './Row';
import _ from 'lodash/fp';

class Grid extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='grid'>
        <div className='gridTitle'>{this.props.title}</div>
        { _.times(i => 
          <Row key={i}
               playerTurn={this.props.playerTurn}
               row={this.props.matrix[i]}
               rowNum={i}
               submitPos={this.props.submitPos} />, 10) }
      </div>
    );
  }
}

export default Grid;
