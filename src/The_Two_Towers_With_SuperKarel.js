/* The differnce with this code is turnRight(); and turnAround();
* are removed for Super Karel to work.
*/

// Main Functions

function start(){
    move();
    buildTower();
    moveTwice();
    buildTowerLast();
}

function buildTower(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    turnAround();
    moveThird();
    turnLeft();
}

function buildTowerLast(){
    turnLeft();
    putBall();
    move();
    putBall();
    move();
    putBall();
    move();
    turnRight();
}

// Basic Functions

function moveTwice(){
    move();
    move();
}

function moveThird(){
    move();
    move();
    move();
}