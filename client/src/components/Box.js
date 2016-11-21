import React, { Component } from 'react';
import * as V  from '../lib/values';

class Box extends Component {

  render() {
    let content;

    if (this.props.status === V.OCCUPY) {
      content = 'O';
    } else if (this.props.status === V.HIT) {
      content = '#';
    } else if (this.props.status === V.MISS) {
      content = 'X';
    }

    return (
      <div className='box' onClick={() => {
        if (this.props.submitPos !== undefined) {
          this.props.submitPos(this.props.pos);
        } else {
          console.log('cannot send guess on own board');
        }
      }}>{content}</div>
    );
  }
}

export default Box;
