import React, { Component } from 'react';
import Row from './Row';

class HitGrid extends Component {
  render() {
    return (
      <div className='hitGrid'>
        <div className='gridTitle'>Player Grid</div>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}

export default HitGrid;
