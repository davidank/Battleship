import React, { Component } from 'react';
import Row from './Row';

class OwnGrid extends Component {
  render() {
    return (
      <div className='ownGrid'>
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

export default OwnGrid;
