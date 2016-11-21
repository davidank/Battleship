import React, { Component } from 'react';
import Box from './Box';
import _ from 'underscore';

class Row extends Component {
  render() {
    return (
      <div className='row'>
        { _(10).times(i => <Box
          key={i}
          status={this.props.row[i]}
          pos={[i,this.props.rowNum]}
          submitPos={this.props.submitPos}
        />) }
      </div>
    );
  }
}

export default Row;
