
# Battleships

Goal: create a light weight version of the battleships
board game. But allow two players to play this game against
each other using any browser

Start with a barebones working MVP, and if we are interested
in continuing development, we can add features at a pace we
prefer.


## Game Rules and Reference

https://en.wikipedia.org/wiki/Battleship_(game)

### Board

    10 x 10 grid (1 ownGrid & 1 hitGrid for each player)
    ownGrid: only the player can see their ownGrid.
    This is where the player places their Ships
    hitGrid: represents the grid of the enemy player.
    The player can track where he hits on the enemy player
    grids, and whether or not the player hit an enemy ship

### Ships

No / Ship Name / Size
1  / Carrier   / 5
2  / Battleship/ 4
3  / Cruiser   / 3
4  / Submarine / 3
5  / Destroyer / 2

### Before Start

    The 2 players place their ships on ownGrid.
    randomly choose first player. The first player takes the
    first turn.

    Win Condition: destroy all enemy battleships

    How to destroy a battleship: hit all the boxes that a
    battleship occupies.

    Box: location on the grid, specified by (x,y) coordinates

### Game Start

#### Turn Phases:
  1: Player selects a box on hitGrid that was not previously hit
  2: Inform the player if an enemy battleship was hit, or if the
     hit was a miss
  3: Update the enemy player ownGrid of the box that was selected
  4: Turn ends for current player

  Conduct Turn phases until a player reaches win Condition

## Client-Side Implementation

Use React component structure to present game state

Components:
App:
  GameBoard:
    hitGrid:
      Row x 10:
        Box x 10
    ownGrid(same as hitGrid)

Ships:
  Carrier(5 boxes)
  Battleship(4 boxes)
  Cruiser(3 boxes)
  Submarine(3 boxes)
  Destroyer(2 boxes)

ShipPlacement UI:
  button: toggle for verticle/horizonal align
  Ships: A varient of ships component that allow for placement on board
  by drag and drop
  placementStatus: displays the status of player placement
    if not all pieces are placed: informs player to place remaining ships
    if all pieces are placed: informs player to standby for enemy ship placement

Menu:
  Before game starts a container to hold select player Buttons
  Buttons:
   Select Red player
   Select Blue player



## Message Data

endpoint-url: ./player/gameBoard/hit

POST message

purpose: send the coordinates of hit attemp to server

message = {
  coordinates: [x, y]
}

---------------------------------------------------------------
endpoint-url: ./player/gameBoard/init

POST message

purpose: send placement of ships to server

message = {};

message.ships = {};

message.ships.[shipName] = {}

message.ship.[shipName][shipNum] = {
  verticle: true/false,
  coordinate: [x,y]
}


---------------------------------------------------------------

endpoint-url: ./player/gameBoard/check

GET message


message = {
  enemyGrid: [matrix],
  ownGrid: [matrix],
  ownShips: {
    carrier: 0-5,
    battleship: 0-4,
    cruiser: 0-3,
    destroyer: 0-2
  },
  enemyShips: {
    carrier: 0-5,
    battleship: 0-4,
    cruiser: 0-3,
    destroyer: 0-2
  },
  playerTurn: true/false,
  winCondition: true/false,
}

enemyGrid matrix data for each 'box':
0 -> not checked
1 -> checked but no hit
2 -> checked and hit enemy ship

ownGrid matrix data for each 'box':
0 -> enemy did not check
1 -> enemy did check but missed your ship
2 -> enemy hit your ship
3 -> your ship
