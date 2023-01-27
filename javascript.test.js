const ship = require('./javascript').ship;
const isSunk = require('./javascript').isSunk;
test('ship obj creation', () => {
  expect(ship(2, 1, false)).toStrictEqual({length: 2, points: 1, sunk: false});
});
// let ships = ship(2, 2, false);
// let ships2 = ship(2, 2 , true);
// const isSunk = require('./javascript');
test('ship is sunk', () => {
    // console.log(ships);
  expect(isSunk({length: 2, points: 2, sunk: false})).toStrictEqual({length: 2, points: 2, sunk: true});
});