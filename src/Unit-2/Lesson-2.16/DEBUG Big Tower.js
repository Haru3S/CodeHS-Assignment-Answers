/* This program draws a big tower from Karel's starting spot */
function start(){
    north();
    clear();
    putBall();
}

function clear(){
    while (frontIsClear()) {
        putBall();
        move();
    }
}

function north(){
    while (notFacingNorth()) {
        turnLeft();
    }
}