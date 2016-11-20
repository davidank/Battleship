import React, { Component } from 'react';
import * as V  from '../lib/values';

class Box extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hit: this.props.value=== 1,
  //     occupied: this.props.value === 2,
  //     missed: this.props.value === 3
  //   }
  // }

  // hit() {
  //   this.setState({hit: true});
  // }
  //
  // missed() {
  //   this.setState({missed: true});
  // }
  //
  // occupy() {
  //   this.setState({occupied: true});
  // }

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
      <div className='box'>{content}</div>
    );
  }
}

export default Box;
