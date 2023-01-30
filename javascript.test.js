const createShip = require('./javascript').createShip;
const isSunk = require('./javascript').isSunk;
const gameBoard = require('./javascript').gameBoard;
const placeShip = require('./javascript').placeShip;
test('ship obj creation', () => {
  expect(createShip(2, 1, false)).toStrictEqual({length: 2, points: 1, sunk: false});
});
// let ships = ship(2, 2, false);
// let ships2 = ship(2, 2 , true);
// const isSunk = require('./javascript');
test('ship is sunk', () => {
    // console.log(ships);
  expect(isSunk({length: 2, points: 2, sunk: false})).toStrictEqual({length: 2, points: 2, sunk: true});
});

test('gets ships in coordinates', () => {;
  expect(placeShip).toStrictEqual(ships);
});