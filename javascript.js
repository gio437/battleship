// if the id modul 11 of the square pressed is >= 11 - ship.length, return if true
// if id modul 11 = 10, then make box class invisible || id is less than 11
const createGrid = () => {
    for (let i = 0; i < 100; i++) {
        const grid = document.getElementById('grid');
        const secondGrid = document.getElementById('secondGrid');
        const box = document.createElement('div');
        const secondBox = document.createElement('div');
        box.id = i;
        secondBox.id = i;
        box.classList.add('p1');
        secondBox.classList.add('p2');
        grid.appendChild(box);
        secondGrid.appendChild(secondBox);
    }
}
createGrid();

const createShip = () => {
    let carrier = {
        length: 5,
        points: 0,
        sunk: false,
        hit() {carrier.points += 1;},
        isSunk() {carrier.points === carrier.length ? carrier.sunk = true : false},
    };
    let battleship = {
        length: 4,
        points: 0,
        sunk: false,
        hit() {battleship.points += 1;},
        isSunk() {battleship.points === battleship.length ? battleship.sunk = true : false},
    };
    let destroyer = {
        length: 3,
        points: 0,
        sunk: false,
        hit() {destroyer.points += 1},
        isSunk() {destroyer.points === destroyer.length ? destroyer.sunk = true : false}
    };
    let submarine = {
        length: 3,
        points: 0,
        sunk: false,
        hit() {submarine.points += 1;},
        isSunk() {submarine.points === submarine.length ? submarine.sunk = true : false}
    };
    let patroller = {
        length: 2,
        points: 0,
        sunk: false,
        hit() {patroller.points += 1;},
        isSunk() {patroller.points === partroller.length ? true : false}
    };
    let ships = {carrier, battleship, destroyer, submarine, patroller};
    return ships;
};

const gameBoard = () => {
   const placeShipBtn = document.getElementById('ships');
   placeShipBtn.addEventListener('click', function getBox() {
        document.querySelectorAll('.p1').forEach(box => {
            box.addEventListener('click', () => {
                let firstBox = box.id;
                console.log(firstBox);
                function endGame() {
                    let carrier = createShip().carrier;
                    let battleship = createShip().battleship;
                    let destroyer = createShip().destroyer;
                    let submarine = createShip().submarine;
                    let patroller = createShip().patroller;
                    if (carrier.sunk === true && battleship.sunk === true && destroyer.sunk === true && submarine.sunk === true && patroller.sunk === true) {
                        console.log('all ships sunk');
                    }
                }

                let carrierBoard = {
                    carrier: createShip().carrier,
                    coordinates: firstBox, //replace with firstBox
                    attack: false,
                    missed: 0,
                    receiveAttack() {
                        if (attack === false) {
                            attack = true;
                            carrier.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame: endGame()
                }
                let battleshipBoard = {
                    battleship: createShip().battleship,
                    coordinates: 30,
                    missed: 0,
                    receiveAttack() {
                        if (coordinates.battleship === true) { // add a data attribute determining that there is a ship there?
                            battleship.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame: endGame()
                }
                let destroyerBoard = {
                    destroyer: createShip().destroyer,
                    coordinates: 30,
                    missed: 0,
                    receiveAttack() {
                        if (coordinates.destroyer === true) { // add a data attribute determining that there is a ship there?
                            destroyer.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame: endGame()
                }
                let submarineBoard = {
                    submarine: createShip().submarine,
                    coordinates: 30,
                    missed: 0,
                    receiveAttack() {
                        if (coordinates.submarine === true) { // add a data attribute determining that there is a ship there?
                            submarine.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame: endGame()
                }
                let patrollerBoard = {
                    patroller: createShip().patroller,
                    coordinates: 30,
                    missed: 0,
                    receiveAttack() {
                        if (coordinates. patroller === true) { // add a data attribute determining that there is a ship there?
                            patroller.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame: endGame()
                }
                player({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard});
            })
        })
        placeShipBtn.removeEventListener('click', getBox);
    })
}
gameBoard();

const player = ({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard}) => {
    let coords = document.getElementById(carrierBoard.coordinates);
    coords.style.backgroundColor = 'black';
    console.log(carrierBoard);

    document.querySelectorAll('.p2').forEach(box => {
        box.addEventListener('click', () => {
            let secondBox = box.id;
            console.log(secondBox);


        })
    })
}

// module.exports.createShip = createShip;
// module.exports.isSunk = isSunk;
// module.exports.gameBoard = gameBoard;
// module.exports.placeShip = placeShip;