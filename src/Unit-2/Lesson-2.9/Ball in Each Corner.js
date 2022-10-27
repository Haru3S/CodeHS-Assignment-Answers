// Start Functions

function start () {
    for(var i = 0; i < 4; i++){
        moveFive();
        turnLeft();
        putBall();
    }
    
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

function moveFive(){
    move();
    move();
    move();
    move();
    move();
}

function flip(){
    turnLeft();
    turnLeft();
    turnLeft();
    turnLeft();
}