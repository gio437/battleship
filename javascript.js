const ship = (lengthVal, pointsVal, sunkStat) => {
    let Ship = {
        length: lengthVal,
        //hit() {points += 1;},
        points: pointsVal,
        sunk: sunkStat
    };
    return Ship;
};

const isSunk = (Ship) => {
    if (Ship.length === Ship.points) {
        Ship.sunk = true;
        console.log(Ship);
    }
    return Ship;
};

const gameBoard = () => {
    for (let i = 0; i < 100; i++) {
        const grid = document.getElementById('grid');
        const secondGrid = document.getElementById('secondGrid');
        const box = document.createElement('div');
        const secondBox = document.createElement('div');
        box.id = 'p1';
        secondBox.id = 'p2';
        grid.appendChild(box);
        secondGrid.appendChild(secondBox);
    }
    box.addEventListener('click', () => {

    })
    secondBox.addEventListener('click', () => {

    })
}
gameBoard();

module.exports.ship = ship;
module.exports.isSunk = isSunk;