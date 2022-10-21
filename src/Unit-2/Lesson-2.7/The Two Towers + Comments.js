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

function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
}

function turnAround(){
    turnLeft();
    turnLeft();
}

function moveTwice(){
    move();
    move();
}

function moveThird(){
    move();
    move();
    move();
}