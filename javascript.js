const ship = (lengthVal, pointsVal, sunkStat) => {
    let Ship = {
        length: lengthVal,
        // hit() {
        //     points += 1;
        // },
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

module.exports.ship = ship;
module.exports.isSunk = isSunk;