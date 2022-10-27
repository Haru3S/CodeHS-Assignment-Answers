// Functions

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

function collectCoins(){
    turnLeft();
    moveThird();
    takeBall();
    takeBall();
    turnAround();
    moveThird();
    turnLeft();
}

// Initialize

move();

collectCoins();
moveTwice();

collectCoins();
moveTwice();

collectCoins();
moveTwice();

collectCoins();

// End