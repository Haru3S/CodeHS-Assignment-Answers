function start(){
	rightSide();
}

function rightSide(){
    if (facingSouth()){
        turnLeft();
    } else {
        planB();
    }
}

function planB(){
    if (facingWest()){
        turnAround();
    }
}