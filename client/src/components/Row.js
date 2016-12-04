import React, { Component } from 'react';
import Box from './Box';
import _ from 'lodash/fp';

class Row extends Component {
  render() {
    return (
      <div className='row'>
        { _.times(i =>
            <Box key={i}
                 playerTurn={this.props.playerTurn}
                 status={this.props.row[i]}
                 pos={[i,this.props.rowNum]}
                 submitPos={this.props.submitPos}/>, 10) }
      </div>
    );
  }
}

export default Row;
