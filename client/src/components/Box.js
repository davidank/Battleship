import React, { Component } from 'react';
import * as V  from '../lib/values';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    let content, style, chooseColor;

    // text displayed based on block status
    if (this.props.status === V.OCCUPY) {
      content = 'O';
    } else if (this.props.status === V.HIT) {
      content = '#';
    } else if (this.props.status === V.MISS) {
      content = 'X';
    }

    // logic block for deciding which color to display
    chooseColor = () => {
      if (this.state.hover) return this.props.playerTurn ? '#ddeaff' : '#cecece';
      else return this.props.playerTurn ? 'rgb(113, 161, 237)' : '#999';
    }

    style = {
      'backgroundColor': chooseColor()
    }

    return (
      <div className='box'
        onClick={() => {
            if (this.props.submitPos !== undefined) {
              this.props.submitPos(this.props.pos);
            } else {
              console.log('cannot send guess on own board');
            }
          }
        }
        onMouseLeave={() => this.toggleHover()}
        onMouseOver={() => this.toggleHover()}
        style={style}
    >{content}</div>
    );
  }
}

export default Box;
