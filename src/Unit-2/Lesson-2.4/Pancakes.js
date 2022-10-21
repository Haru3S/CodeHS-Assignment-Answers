// Functions

function turnRight() {
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

function makePancakes(){
    putBall();
    putBall();
    putBall();
}

// Initialize

move();
makePancakes();

moveTwice();
makePancakes();

moveTwice();
makePancakes();

move();

// End