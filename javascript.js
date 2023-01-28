const createGrid = () => {
    for (let i = 0; i < 100; i++) {
        const grid = document.getElementById('grid');
        const secondGrid = document.getElementById('secondGrid');
        const box = document.createElement('div');
        const secondBox = document.createElement('div');
        box.id = i;
        secondBox.id = i;
        box.classList.add('p1');
        secondBox.classList.add('p1');
        grid.appendChild(box);
        secondGrid.appendChild(secondBox);
    }
}
createGrid();

const createShip = () => {
    let carrier = {
        length: 5,
        hit() {points += 1;},
        points: 0,
        sunk: false
    };
    let battleship = {
        length: 4,
        hit() {points += 1;},
        points: 0,
        sunk: false
    };
    let destroyer = {
        length: 3,
        hit() {points += 1;},
        points: 0,
        sunk: false
    };
    let submarine = {
        length: 3,
        hit() {points += 1;},
        points: 0,
        sunk: false
    };
    let patroller = {
        length: 2,
        hit() {points += 1;},
        points: 0,
        sunk: false
    };
    let ships = {carrier, battleship, destroyer, submarine, patroller};
    return ships;
};

const isSunk = (ship) => {
    if (ship.length === ship.points) {
        ship.sunk = true;
        console.log(ship);
    }
    return ship;
};

const gameBoard = () => {
   const placeShip = document.getElementById('ships');
   placeShip.addEventListener('click', () => {
        console.log(location);
        let ships = createShip();
        console.log(ships);
        let carrierObj = ships.carrier;
        console.log(carrierObj);
        let carrierVal = window.prompt('place carrier using coordinates');
        console.log(carrierVal);
        return ships;
     })
}
gameBoard();

const receiveAttack = () => {
    if (attacked === 0) {
        carrierObj.hit();
    }
    else {
        //let missedShot = this.id;
        console.log(missedShot);
    }
}

const endGame = () => {
    if (ships.carrier.sunk === true && ships.battleship.sunk === true && ships.destroyer.sunk === true && ships.submarine.sunk === true && ships.patroller.sunk === true) {
        console.log('all ships sunk');
    }
}

module.exports.createShip = createShip;
module.exports.isSunk = isSunk;
module.exports.gameBoard = gameBoard;