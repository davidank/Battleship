import React, { Component } from 'react';
import clickDrag from 'react-clickdrag';

class ShipPlacer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='placerUI'>
        <div id='placerTitle'>Place Your Ships: Right Click to Orient</div>
        <ShipList />
      </div>
    );
  }
}

class ShipList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carrier: 1,
      battleship: 2,
      cruiser: 3,
      submarine: 4,
      destroyer: 5,
    };
  }

  render() {
    return (
      <div id='placerContainer'>
        <Ship shipCount={this.state.carrier} shipName={'Carrier'} />
        <Ship shipCount={this.state.battleship} shipName={'Battleship'} />
        <Ship shipCount={this.state.cruiser} shipName={'Cruiser'} />
        <Ship shipCount={this.state.submarine} shipName={'Submarine'} />
        <Ship shipCount={this.state.destroyer} shipName={'Destroyer'} />
      </div>
    );
  }
}

class Ship extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastPositionX: 0,
      lastPositionY: 0,
      currentX: 0,
      currentY: 0
    };
  }

  render() {
    return (
      <div className='ship'>{this.props.shipCount} {this.props.shipName}</div>
    );
  }
}

class ExampleComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lastPositionX: 0,
            lastPositionY: 0,
            currentX: 0,
            currentY: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.dataDrag.isMoving) {
            this.setState({
                currentX: this.state.lastPositionX + nextProps.dataDrag.moveDeltaX,
                currentY: this.state.lastPositionY + nextProps.dataDrag.moveDeltaY
            });
        }
        else {
            this.setState({
                lastPositionX: this.state.currentX,
                lastPositionY: this.state.currentY
            });
        }
    }

    render() {
        var translation = 'translate('+this.state.currentX+'px, '+this.state.currentY+'px)';

        return React.createElement('div', {
            style: {width: '200px', height: '200px', backgroundColor: 'red', transform: translation}
        });
    }
}

var ClickDragExample = clickDrag(ExampleComponent, {touch: false});

export default ShipPlacer;
