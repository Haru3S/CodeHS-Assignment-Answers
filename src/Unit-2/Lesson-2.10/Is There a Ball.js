function start() {
	moveWhen();
	move();
}

function moveWhen(){
    if(noBallsPresent()){
        putBall();
    }
}