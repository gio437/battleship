// if the id modul 11 of the square pressed is >= 11 - ship.length, return if true
// if id modul 11 = 10, then make box class invisible || id is less than 11
const createGrid = () => {
    for (let i = 0; i < 100; i++) {
        const grid = document.querySelector('.grid');
        const box = document.createElement('div');
        box.id = i;
        box.classList.add('p1');
        grid.appendChild(box);
    }
    for (let j = 100; j < 200; j++) {
        const secondGrid = document.querySelector('.secondGrid');
        const secondBox = document.createElement('div');
        secondBox.id = j;
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

let playerCompleted = 0;
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
                            // playerCompleted = 0;
                            // usedCoords = [];
                            // placedShip = 0;
                            // enemyPlacedVal = 0;
                            // cpuUsedCoords = [];
                            // passedObj = 0;
                            // usedCpuMoves = [];
                            // playerArr = [];
                            // activateShipBtn();
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
                            // playerCompleted = 0;
                            // usedCoords = [];
                            // placedShip = 0;
                            // enemyPlacedVal = 0;
                            // cpuUsedCoords = [];
                            // passedObj = 0;
                            // usedCpuMoves = [];
                            // playerArr = [];
                            // activateShipBtn();
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
                            // playerCompleted = 0;
                            // usedCoords = [];
                            // placedShip = 0;
                            // enemyPlacedVal = 0;
                            // cpuUsedCoords = [];
                            // passedObj = 0;
                            // usedCpuMoves = [];
                            // playerArr = [];
                            // activateShipBtn();
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
                            // playerCompleted = 0;
                            // usedCoords = [];
                            // placedShip = 0;
                            // enemyPlacedVal = 0;
                            // cpuUsedCoords = [];
                            // passedObj = 0;
                            // usedCpuMoves = [];
                            // playerArr = [];
                            // activateShipBtn();
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
                            // playerCompleted = 0;
                            // usedCoords = [];
                            // placedShip = 0;
                            // enemyPlacedVal = 0;
                            // cpuUsedCoords = [];
                            // passedObj = 0;
                            // usedCpuMoves = [];
                            // playerArr = [];
                            // activateShipBtn();
                            console.log('all ships sunk');
                        }
                    }
                }
                return {carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard};
}


const startGame = () => {
    let shipBoards = gameBoard();
    let carrierBoard = shipBoards.carrierBoard;
    let battleshipBoard = shipBoards.battleshipBoard;
    let destroyerBoard = shipBoards.destroyerBoard;
    let submarineBoard = shipBoards.submarineBoard;
    let patrollerBoard = shipBoards.patrollerBoard;

    const placeShipBtn = document.getElementById('ships');
    placeShipBtn.removeEventListener('click', startGame);
    if (playerCompleted === 0) {
        player({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard});
    }
    playerCompleted = 1;
}

const activateShipBtn = () => {
    const placeShipBtn = document.getElementById('ships');
    placeShipBtn.addEventListener('click', startGame);
}
activateShipBtn();


let usedCoords = [];
let placedShip = 0;
const player = ({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard}) => {
    const direct = document.querySelectorAll('.p1');
    for (let i = 0; i < direct.length; i++) {
        direct[i].addEventListener('click', function placePlayerShip() {
        let firstBox = parseInt(this.id);
        console.log(firstBox);
        let ship = createShip();

// click new box
// check if box is occupied by looping through list of used coordinates
// also need to find a solution to make sure that boxes in the unclicked area aren't filled
        if (carrierBoard.placed === false && placedShip === 0 && isValidShipSelect(ship.carrier, firstBox)) {
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
            placedShip++;
        }
        else if (battleshipBoard.placed === false && placedShip === 1 && isValidShipSelect(ship.battleship, firstBox)) {
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
            placedShip++;
        }
        else if (destroyerBoard.placed === false && placedShip === 2 && isValidShipSelect(ship.destroyer, firstBox)) {
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
            placedShip++;
        }
        else if (submarineBoard.placed === false && placedShip === 3 && isValidShipSelect(ship.submarine, firstBox)) {
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
            placedShip++;
        }
        else if (patrollerBoard.placed === false && placedShip === 4 && isValidShipSelect(ship.patroller, firstBox)) {
            patrollerBoard.coordinates = firstBox;
            patrollerBoard.placed = true;
            let coords = document.getElementById(patrollerBoard.coordinates);
            coords.style.backgroundColor = 'black';
            coords = document.getElementById(patrollerBoard.coordinates + 1);
            coords.style.backgroundColor = 'black';
            console.log(patrollerBoard);
            usedCoords.push(firstBox);
            usedCoords.push(parseInt(patrollerBoard.coordinates) + 1);
            console.log(usedCoords);
            placedShip++;
            if (passedObj === 0) {
                storePlayerObj({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard});
                enemyShips();
            }
        }
    })
    }
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
        if (enemyPlacedVal === 5) {
            enemyPlacedVal = 8;
            attackBoard([enemyBoards.carrierBoard, enemyBoards.battleshipBoard, enemyBoards.destroyerBoard, enemyBoards.submarineBoard, enemyBoards.patrollerBoard]);
        }
}

// will continue to validate enemy ship placemant until all are placed, then, will run line 319 which will allow the player to attack enemy board
const validateEnemyShips = (ship, randomBoxVal) => {
    console.log(ship);
    if (isValidShipSelect(ship, randomBoxVal) && enemyPlacedVal < 5) {
        for (let i = 0; i < ship.length; i++) { // now put coords into seperate boxes
            //ship.coordinates.push(randomBoxVal + i);
            cpuUsedCoords.push(randomBoxVal + i);
            console.log(cpuUsedCoords);
            //  let box = document.getElementById(randomBoxVal + i);
            //  box.style.backgroundColor = 'black';
        }
        enemyPlacedVal++;
        //console.log(shipArr);
        //shipArr.splice(ship, 1); // use arr.prototype for a copy?
    }
    else {enemyShips();}
}

let turn = 0;
// attack board is being called multiple times on line 319
const attackBoard = ([carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard]) => {
     const enemyBox = document.querySelectorAll('.p2');
     for (let i = 0; i < enemyBox.length; i++) {
         enemyBox[i].addEventListener('click', function runBox() {
             this.removeEventListener('click', runBox);
             getBox([carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard], enemyBox[i]);
             makeMove();
             turn++;
             console.log(turn);
          })
     }
     // for end of game, do endGame = 1 removeEvent listener for each grid
}

const getBox = ([carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard], enemyBox) => {
            let secondBox = parseInt(enemyBox.id);
            console.log(secondBox);
            console.log(cpuUsedCoords);

            let hitBox = document.getElementById(secondBox);
            if (secondBox === cpuUsedCoords[0] || secondBox === cpuUsedCoords[1] || secondBox === cpuUsedCoords[2] || secondBox === cpuUsedCoords[3] || secondBox === cpuUsedCoords[4]) {
                battleshipBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;

                carrierBoard.receiveAttack();
                carrierBoard.endGame();
                hitBox.style.backgroundColor = 'green';
            }
            else if (secondBox === cpuUsedCoords[5] || secondBox === cpuUsedCoords[6] || secondBox === cpuUsedCoords[7] || secondBox === cpuUsedCoords[8]) {
                carrierBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(battleshipBoard);

                battleshipBoard.receiveAttack();
                battleshipBoard.endGame();
                hitBox.style.backgroundColor = 'green';
            }
            else if (secondBox === cpuUsedCoords[9] || secondBox === cpuUsedCoords[10] || secondBox === cpuUsedCoords[11]) {
                carrierBoard.missed += 1;
                battleshipBoard.miseed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(destroyerBoard);

                destroyerBoard.receiveAttack();
                destroyerBoard.endGame();
                hitBox.style.backgroundColor = 'green';
            }
            else if (secondBox === cpuUsedCoords[12] || secondBox === cpuUsedCoords[13] || secondBox === cpuUsedCoords[14]) {
                carrierBoard.missed += 1;
                destroyerBoard.missed += 1;
                battleshipBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(submarineBoard);

                submarineBoard.receiveAttack();
                submarineBoard.endGame();
                hitBox.style.backgroundColor = 'green';
            }
            else if (secondBox === cpuUsedCoords[15] || secondBox === cpuUsedCoords[16]) {
                carrierBoard.missed += 1;
                battleshipBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                console.log(submarineBoard);

                patrollerBoard.receiveAttack();
                patrollerBoard.endGame();
                hitBox.style.backgroundColor = 'green';
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

                hitBox.style.backgroundColor = 'red';
            }
             // if (endGameVal === 1) {
                //return?
                //box.removeEventListener()
            //}
}

// enemy board is clicked for player move
// this triggers the computer move function
// this gets the Board objects
// runs cpu function


const makeMove = () => {
    // if (passedObj === 0) {
    //     let shipBoards = gameBoard();
    //     let newCarrier = shipBoards.carrierBoard;
    //     let newBattleship = shipBoards.battleshipBoard;
    //     let newDestroyer = shipBoards.destroyerBoard;
    //     let newSubmarine = shipBoards.submarineBoard;
    //     let newPatroller = shipBoards.patrollerBoard;
    //     cpuMove(newCarrier, newBattleship, newDestroyer, newSubmarine, newPatroller);
    // }
    // else {cpuMove();} // the issue is it being called here repeately
    cpuMove();
}

let playerArr = [];
const storePlayerObj = ({carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard}) => {
    this.carrierBoard = carrierBoard;
    this.battleshipBoard = battleshipBoard;
    this.destroyerBoard = destroyerBoard;
    this.submarineBoard = submarineBoard;
    this.patrollerBoard = patrollerBoard;

    playerArr.push(carrierBoard, battleshipBoard, destroyerBoard, submarineBoard, patrollerBoard);
    console.log(playerArr);
}

let passedObj = 0;
let usedCpuMoves = [];
const cpuMove = () => {
    passedObj = 1;
    const randomBoxVal = Math.floor(Math.random() * (99 - 0));
    console.log(randomBoxVal);
    console.log(carrierBoard);
    let selectedBox = document.querySelector(`.p1[id='${randomBoxVal}']`);
        selectedBox = parseInt(selectedBox.id);
        if (usedCpuMoves.includes(selectedBox)) {
            cpuMove();
            return;
        }
        usedCpuMoves.push(selectedBox);

        let hitBox = document.getElementById(selectedBox);
            if (selectedBox === usedCoords[0] || selectedBox === usedCoords[1] || selectedBox === usedCoords[2] || selectedBox === usedCoords[3] || selectedBox === usedCoords[4]) {
                battleshipBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;

                console.log('cpu hit');
                carrierBoard.receiveAttack();
                carrierBoard.endGame();
                hitBox.style.backgroundColor = 'green';
            }
            else if (selectedBox === usedCoords[5] || selectedBox === usedCoords[6] || selectedBox === usedCoords[7] || selectedBox === usedCoords[8]) {
                carrierBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(battleshipBoard);

                console.log('cpu hit');
                battleshipBoard.receiveAttack();
                battleshipBoard.endGame();
                hitBox.style.backgroundColor = 'green';
            }
            else if (selectedBox === usedCoords[9] || selectedBox === usedCoords[10] || selectedBox === usedCoords[11]) {
                carrierBoard.missed += 1;
                battleshipBoard.miseed += 1;
                submarineBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(destroyerBoard);

                console.log('cpu hit');
                destroyerBoard.receiveAttack();
                destroyerBoard.endGame();
                hitBox.style.backgroundColor = 'green';
            }
            else if (selectedBox === usedCoords[12] || selectedBox === usedCoords[13] || selectedBox === usedCoords[14]) {
                carrierBoard.missed += 1;
                destroyerBoard.missed += 1;
                battleshipBoard.missed += 1;
                patrollerBoard.missed += 1;
                console.log(submarineBoard);

                console.log('cpu hit');
                submarineBoard.receiveAttack();
                submarineBoard.endGame();
                hitBox.style.backgroundColor = 'green';
            }
            else if (selectedBox === usedCoords[15] || selectedBox === usedCoords[16]) {
                carrierBoard.missed += 1;
                battleshipBoard.missed += 1;
                destroyerBoard.missed += 1;
                submarineBoard.missed += 1;
                console.log(submarineBoard);

                console.log('cpu hit');
                patrollerBoard.receiveAttack();
                patrollerBoard.endGame();
                hitBox.style.backgroundColor = 'green';
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

                console.log('cpu miss');
                hitBox.style.backgroundColor = 'red';
        }
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