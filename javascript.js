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
        hit: function () {carrier.points += 1;},
        isSunk() {carrier.points >= carrier.length ? carrier.sunk = true : false},
    };
    let battleship = {
        length: 4,
        points: 0,
        sunk: false,
        hit: function () {battleship.points += 1;},
        isSunk() {battleship.points >= battleship.length ? battleship.sunk = true : false},
    };
    let destroyer = {
        length: 3,
        points: 0,
        sunk: false,
        hit: function () {destroyer.points += 1},
        isSunk() {destroyer.points >= destroyer.length ? destroyer.sunk = true : false}
    };
    let submarine = {
        length: 3,
        points: 0,
        sunk: false,
        hit: function () {submarine.points += 1;},
        isSunk() {submarine.points >= submarine.length ? submarine.sunk = true : false}
    };
    let patroller = {
        length: 2,
        points: 0,
        sunk: false,
        hit: function () {patroller.points += 1;},
        isSunk() {patroller.points >= patroller.length ? patroller.sunk = true : false}
    };
    let ships = {carrier, battleship, destroyer, submarine, patroller};
    return ships;
};

const gameBoard = () => {
            let ships = createShip();
                let carrierBoard = {
                    carrier: ships.carrier,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack: function () {ships.carrier.hit(); ships.carrier.isSunk();},
                    endGame: function () {
                        if (ships.carrier.sunk === true && ships.battleship.sunk === true && ships.destroyer.sunk === true && ships.submarine.sunk === true && ships.patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                let battleshipBoard = {
                    battleship: ships.battleship,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack: function (){ships.battleship.hit(); ships.battleship.isSunk();},
                    endGame: function () {
                        if (ships.carrier.sunk === true && ships.battleship.sunk === true && ships.destroyer.sunk === true && ships.submarine.sunk === true && ships.patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                let destroyerBoard = {
                    destroyer: ships.destroyer,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack: function () {ships.destroyer.hit(); ships.destroyer.isSunk();},
                    endGame: function () {
                        if (ships.carrier.sunk === true && ships.battleship.sunk === true && ships.destroyer.sunk === true && ships.submarine.sunk === true && ships.patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                let submarineBoard = {
                    submarine: ships.submarine,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack: function () {ships.submarine.hit(); ships.submarine.isSunk();},
                    endGame: function () {
                        if (ships.carrier.sunk === true && ships.battleship.sunk === true && ships.destroyer.sunk === true && ships.submarine.sunk === true && ships.patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                let patrollerBoard = {
                    patroller: ships.patroller,
                    placed: false,
                    coordinates: [],
                    missed: 0,
                    receiveAttack: function () {ships.patroller.hit(); ships.patroller.isSunk();},
                    endGame: function () {
                        if (ships.carrier.sunk === true && ships.battleship.sunk === true && ships.destroyer.sunk === true && ships.submarine.sunk === true && ships.patroller.sunk === true) {
                            console.log('all ships sunk');
                        }
                    }
                }
                placeShipBtn.removeEventListener('click', gameBoard);
                player({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard});
                return {carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard};
}

const placeShipBtn = document.getElementById('ships');
placeShipBtn.addEventListener('click', gameBoard);

let usedCoords = [];
let placed = 0;
const player = ({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard}) => {
    document.querySelectorAll('.p1').forEach(box => {
    box.addEventListener('click', () => {
        let firstBox = parseInt(box.id);
        console.log(firstBox);
        let ship = createShip();
// click new box
// check if box is occupied by looping through list of used coordinates
// also need to find a solution to make sure that boxes in the unclicked area aren't filled

        if (carrierBoard.placed === false && isValidShipSelect(ship.carrier, firstBox)) {
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
        else if (battleshipBoard.placed === false && placed === 1 && isValidShipSelect(ship.battleship, firstBox)) {
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
        else if (destroyerBoard.placed === false && placed === 2 && isValidShipSelect(ship.destroyer, firstBox)) {
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
        else if (submarineBoard.placed === false && placed === 3 && isValidShipSelect(ship.submarine, firstBox)) {
            submarineBoard.coordinates = firstBox;
            submarineBoard.placed = true;
            let coords = document.getElementById(submarineBoard.coordinates);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(submarineBoard.coordinates + 1);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(submarineBoard.coordinates + 2);
            coords.style.backgroundColor = 'black';
            console.log(submarineBoard);
            usedCoords.push(firstBox);
            usedCoords.push(parseInt(submarineBoard.coordinates) + 1);
            usedCoords.push(parseInt(submarineBoard.coordinates) + 2);
            console.log(usedCoords);
            placed++;
        }
        else if (patrollerBoard.placed === false && placed === 4 && isValidShipSelect(ship.patroller, firstBox)) {
            patrollerBoard.coordinates = firstBox;
            patrollerBoard.placed = true;
            let coords = document.getElementById(patrollerBoard.coordinates);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(patrollerBoard.coordinates + 1);
            coords.style.backgroundColor = 'black';
            console.log(patrollerBoard);
            usedCoords.push(firstBox);
            usedCoords.push(parseInt(submarineBoard.coordinates) + 1);
            console.log(usedCoords);
            enemyShips();
        }
        })
    })

}

let enemyPlacedVal = 0;
let cpuUsedCoords = [];
const enemyShips = () => {
    let enemyBoards = gameBoard();
    let shipArr = [enemyBoards.carrierBoard.carrier, enemyBoards.battleshipBoard.battleship, enemyBoards.destroyerBoard.destroyer, enemyBoards.submarineBoard.submarine, enemyBoards.patrollerBoard.patroller];
        while (enemyPlacedVal < 5) {
            // const randomShip = Math.floor(Math.random() * shipArr.length);
            // const randomShipVal = shipArr[randomShip];
            // console.log(randomShipVal);

            const randomBoxVal = Math.floor(Math.random() * (199 - 100 + 1) + 100);
            console.log(randomBoxVal);
            //ship.coordinates = [];
            validateEnemyShips(shipArr[enemyPlacedVal], randomBoxVal);
        }
        if (enemyPlacedVal >= 5) {
            attackBoard([enemyBoards.carrierBoard, enemyBoards.battleshipBoard, enemyBoards.destroyerBoard, enemyBoards.submarineBoard, enemyBoards.patrollerBoard]);
        }
}


const validateEnemyShips = (ship, randomBoxVal) => {
    console.log(ship);
    if (isValidShipSelect(ship, randomBoxVal) && enemyPlacedVal < 5) {
        for (let i = 0; i < ship.length; i++) { // now put coords into seperate boxes
            //ship.coordinates.push(randomBoxVal + i);
            cpuUsedCoords.push(randomBoxVal + i);
            console.log(cpuUsedCoords);
            let box = document.getElementById(randomBoxVal + i);
            box.style.backgroundColor = 'black';
            //box.append(ship.coordinates);
        }
        enemyPlacedVal++;
        //console.log(shipArr);
        //shipArr.splice(ship, 1); // use arr.prototype for a copy?
    }
    else {enemyShips();}
}

const attackBoard = ([carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard]) => {
    document.querySelectorAll('.p2').forEach(box => {
        box.addEventListener('click', () => {
            let secondBox = parseInt(box.id);
            console.log(secondBox);
            console.log(cpuUsedCoords);

            //let shipBoards = new createEnemyBoards();

            if (secondBox === cpuUsedCoords[0] || secondBox === cpuUsedCoords[1] || secondBox === cpuUsedCoords[2] || secondBox === cpuUsedCoords[3] || secondBox === cpuUsedCoords[4]) {
                battleshipBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;

                carrierBoard.receiveAttack();
                carrierBoard.endGame();
            }
            else if (secondBox === cpuUsedCoords[5] || secondBox === cpuUsedCoords[6] || secondBox === cpuUsedCoords[7] || secondBox === cpuUsedCoords[8]) {
                carrierBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(battleshipBoard);

                battleshipBoard.receiveAttack();
                battleshipBoard.endGame();
            }
            else if (secondBox === cpuUsedCoords[9] || secondBox === cpuUsedCoords[10] || secondBox === cpuUsedCoords[11]) {
                carrierBoard.missed += 1;
                battleshipBoard.miseed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(destroyerBoard);

                destroyerBoard.receiveAttack();
                destroyerBoard.endGame();
            }
            else if (secondBox === cpuUsedCoords[12] || secondBox === cpuUsedCoords[13] || secondBox === cpuUsedCoords[14]) {
                carrierBoard.missed += 1;
                destroyerBoard.missed += 1;
                battleshipBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(submarineBoard);

                submarineBoard.receiveAttack();
                submarineBoard.endGame();
            }
            else if (secondBox === cpuUsedCoords[15] || secondBox === cpuUsedCoords[16]) {
                carrierBoard.missed += 1;
                battleshipBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                console.log(submarineBoard);

                patrollerBoard.receiveAttack();
                patrollerBoard.endGame();
            }
            else {
                carrierBoard.missed += 1;
                battleshipBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(carrierBoard);
                console.log(battleshipBoard);
                console.log(destroyerBoard);
                console.log(submarineBoard);
                console.log(patrollerBoard);
            }
             // if (endGameVal === 1) {
                //return?
                //box.removeEventListener()
            //}
        }
        //cpuMove();
    )})
}

const cpuMove = () => {
    document.querySelectorAll('.p1').forEach(box => {
        const randomBoxVal = Math.floor(Math.random() * (199 - 0 + 100) + 0);
        console.log(randomBoxVal);
    })
}


// if the id modul 11 of the square pressed is >= 11 - ship.length, return if true
const isValidShipSelect = (ship, box) => {
    let placedId = box;
    for (let i = 0; i < ship.length; i++) {
        if (usedCoords.includes(box) || cpuUsedCoords.includes(box) || 10 - (placedId % 10) < ship.length) {
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