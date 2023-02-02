// if the id modul 11 of the square pressed is >= 11 - ship.length, return if true
// if id modul 11 = 10, then make box class invisible || id is less than 11
const createGrid = () => {
    for (let i = 0; i < 100; i++) {
        const grid = document.getElementById('grid');
        const box = document.createElement('div');
        box.id = i;
        box.classList.add('p1');
        grid.appendChild(box);
    }
    for (let i = 100; i < 200; i++) {
        const secondGrid = document.getElementById('secondGrid');
        const secondBox = document.createElement('div');
        secondBox.id = i;
        secondBox.classList.add('p2');
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
                let carrierBoard = {
                    carrier: createShip().carrier,
                    placed: false,
                    coordinates: [], //replace with firstBox
                    missed: 0,
                    receiveAttack() {
                        if (carrier.coordinates) {
                            carrier.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame() {
                        if (carrier.sunk === true && battleship.sunk === true && destroyer.sunk === true && submarine.sunk === true && patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                let battleshipBoard = {
                    battleship: createShip().battleship,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack() {
                        if (battleship.coordinates) { // add a data attribute determining that there is a ship there?
                            battleship.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame() {
                        if (carrier.sunk === true && battleship.sunk === true && destroyer.sunk === true && submarine.sunk === true && patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                let destroyerBoard = {
                    destroyer: createShip().destroyer,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack() {
                        if (destroyer.coordinates) {
                            destroyer.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame() {
                        if (carrier.sunk === true && battleship.sunk === true && destroyer.sunk === true && submarine.sunk === true && patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                let submarineBoard = {
                    submarine: createShip().submarine,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack() {
                        if (submarine.coordinates) {
                            submarine.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame() {
                        if (carrier.sunk === true && battleship.sunk === true && destroyer.sunk === true && submarine.sunk === true && patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                let patrollerBoard = {
                    patroller: createShip().patroller,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack() {
                        if (patroller.coordinates) {
                            patroller.hit();
                        }
                        else {
                            missed += 1;
                        }
                    },
                    endGame() {
                        if (carrier.sunk === true && battleship.sunk === true && destroyer.sunk === true && submarine.sunk === true && patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                player({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard});
                //attackBoard();
                placeShipBtn.removeEventListener('click', getBox);
            })
}
gameBoard();

let usedCoords = [0];
let placed = 0;
const player = ({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard}) => {
    document.querySelectorAll('.p1').forEach(box => {
    box.addEventListener('click', () => {
        let firstBox = parseInt(box.id);
        console.log(firstBox);
// click new box
// check if box is occupied by looping through list of used coordinates
// also need to find a solution to make sure that boxes in the unclicked area aren't filled

        if (carrierBoard.placed === false && isValidShipSelect(carrierBoard, firstBox)) {
            carrierBoard.coordinates = firstBox;
            carrierBoard.placed = true;
            let carrierCoords = document.getElementById(carrierBoard.coordinates);
            carrierCoords.style.backgroundColor = 'black';
            carrierCoords = document.getElementById(carrierBoard.coordinates + 1);
            carrierCoords.style.backgroundColor = 'black';
            carrierCoords = document.getElementById(carrierBoard.coordinates + 2);
            carrierCoords.style.backgroundColor = 'black';
            carrierCoords = document.getElementById(carrierBoard.coordinates + 3);
            carrierCoords.style.backgroundColor = 'black';
            carrierCoords = document.getElementById(carrierBoard.coordinates + 4);
            carrierCoords.style.backgroundColor = 'black';
            console.log(carrierBoard);
            usedCoords.push(firstBox);
            usedCoords.push(parseInt(carrierBoard.coordinates) + 1);
            usedCoords.push(parseInt(carrierBoard.coordinates) + 2);
            usedCoords.push(parseInt(carrierBoard.coordinates) + 3);
            usedCoords.push(parseInt(carrierBoard.coordinates) + 4);
            console.log(usedCoords);
            placed++;
        }
        else if (battleshipBoard.placed === false && placed === 1 && isValidShipSelect(battleshipBoard, firstBox)) {
            console.log(usedCoords[0]);
            battleshipBoard.coordinates = firstBox;
            battleshipBoard.placed = true;
            let coords = document.getElementById(battleshipBoard.coordinates);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(battleshipBoard.coordinates + 1);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(battleshipBoard.coordinates + 2);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(battleshipBoard.coordinates + 3);
            coords.style.backgroundColor = 'black';
            console.log(battleshipBoard);
            usedCoords.push(firstBox);
            usedCoords.push(parseInt(battleshipBoard.coordinates) + 1);
            usedCoords.push(parseInt(battleshipBoard.coordinates) + 2);
            usedCoords.push(parseInt(battleshipBoard.coordinates) + 3);
            console.log(usedCoords);
            placed++;
        }
        else if (destroyerBoard.placed === false && placed === 2 && isValidShipSelect(destroyerBoard, firstBox)) {
            destroyerBoard.coordinates = firstBox;
            destroyerBoard.placed = true;
            let coords = document.getElementById(destroyerBoard.coordinates);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(destroyerBoard.coordinates + 1);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(destroyerBoard.coordinates + 2);
            coords.style.backgroundColor = 'black';
            console.log(destroyerBoard);
            usedCoords.push(firstBox);
            usedCoords.push(parseInt(destroyerBoard.coordinates) + 1);
            usedCoords.push(parseInt(destroyerBoard.coordinates) + 2);
            console.log(usedCoords);
            placed++;
        }
        else if (submarineBoard.placed === false && placed === 3 && isValidShipSelect(submarineBoard, firstBox)) {
            submarineBoard.coordinates = firstBox;
            submarineBoard.placed = true;
            let coords = document.getElementById(submarineBoard.coordinates);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(submarineBoard.coordinates + 1);
            coords.style.backgroundColor = 'black';
            console.log(submarineBoard);
            usedCoords.push(firstBox);
            usedCoords.push(parseInt(submarineBoard.coordinates) + 1);
            console.log(usedCoords);
            placed++;
        }
        else if (patrollerBoard.placed === false && placed === 4 && isValidShipSelect(patrollerBoard, firstBox)) {
            patrollerBoard.coordinates = firstBox;
            patrollerBoard.placed = true;
            let coords = document.getElementById(patrollerBoard.coordinates);
            coords.style.backgroundColor = 'black';
            console.log(patrollerBoard);
            usedCoords.push(firstBox);
            console.log(usedCoords);
            enemyShips([carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard]);
            attackBoard({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard});
        }
        })
    })
}

//let cpuUsedCoords = [];
const enemyShips = () => {
        let ships = createShip();
        let shipArr = [ships.carrier, ships.battleship, ships.destroyer, ships.submarine, ships.patroller];
        shipArr.forEach( () => {
            const randomShip = Math.floor(Math.random() * shipArr.length);
            const randomShipVal = shipArr[randomShip];
            console.log(randomShipVal);

            const randomBoxVal = Math.floor(Math.random() * (200 - 100 + 1) + 100);
            console.log(randomBoxVal);
            randomShipVal.coordinates = [];
            validateEnemyShips(randomShipVal, randomBoxVal);
        })
}

const validateEnemyShips = (randomShipVal, randomBoxVal) => {
    if (isValidShipSelect(randomShipVal, randomBoxVal)) {
        for (let i = 0; i < randomShipVal.length; i++) { // now put coords into seperate boxes
            randomShipVal.coordinates.push(randomBoxVal + i);
            let box = document.getElementById(randomBoxVal);
            box.append(randomShipVal.coordinates);
        }
    }
    else {
        enemyShips();
    }
    console.log(randomShipVal.coordinates);
    console.log(randomShipVal.length);
}

const attackBoard = ({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard}) => {
    document.querySelectorAll('.p2').forEach(box => {
        box.addEventListener('click', () => {
            let secondBox = parseInt(box.id);
            console.log(secondBox);
            if (secondBox === usedCoords[0] || secondBox === usedCoords[1] || secondBox === usedCoords[2] || secondBox === usedCoords[3] || secondBox === usedCoords[4]) {
                carrierBoard.hit();
                carrierBoard.endGame();
            }
            else {
                carrierBoard.missed += 1;
            }
            cpuMove();
        }
    )})
}

const cpuMove = () => {
    document.querySelectorAll('.p1').forEach(box => {
        const randomBoxVal = Math.floor(Math.random() * (200 - 0 + 100) + 0);
        console.log(randomBoxVal);
    })
}


// if the id modul 11 of the square pressed is >= 11 - ship.length, return if true
const isValidShipSelect = (ship, box) => {
    let placedId = box;
    for (let i = 0; i < ship.length; i++) {
        if (ship.coordinates.includes(box) || 10 - (placedId % 10) < ship.length) {
            return false;
        }
        box++;
    }
    return true;
}

// module.exports.createShip = createShip;
// module.exports.isSunk = isSunk;
// module.exports.gameBoard = gameBoard;
// module.exports.placeShip = placeShip;