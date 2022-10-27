// Has One Function

function start() {
    rightOrLeft();
}

// Checks if facing East if yes it will use makeLeftSquare Function place the balls

// If not it will use the makeRightSquare Function but will check north before moving.
function rightOrLeft(){
    if (facingEast()){
        makeLeftSquare();
    } else {
        makeRightSquare();
    }
}

function makeLeftSquare(){
    
    putBall();
    move();
        
    turnLeft();
    putBall();
        
    move();
    turnLeft();
    putBall();
    
    move();
    turnLeft();
    putBall();
    
    move();
    turnLeft();
}

function makeRightSquare(){
    if (facingNorth()){
        putBall();
        move();
        
        turnRight();
        putBall();
        move();
        
        turnRight();
        putBall();
        move();
        
        turnRight();
        putBall();
        move();
        
        turnRight();
    }
}