var fp = require('loadsh/fp');

const EMPTY = 0,
      OCCUPY = 1,
      HIT = 2,
      MISS = 3;

class BattleShipsBoard {

  constructor(n, m, fill = EMPTY) {
    this._board = fp.map (_ => fp.times (fp.fill (fill) (Array(n))) (fp.range(1, m + 1));
  }

  set(i, j, v) {
    this._board[i][j] = v;
  }

  get(i, j) {
    return this._board[i][j];
  }

  // Orientation: place ships 'horizontal' or 'vertical'
  placeShip(i, j, length, orientation) {
    fp.
  }
}

class BattleShips {
  constructor({players,}) {
    this._boards = fp.map (x => new BattleShipsBoard(10, 10, x)) ([0,0]);
  }

  placeShip(i, j, length, orientation) {

  }
}
