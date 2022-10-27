// The Start Function
/* It will check if moving front is clear if not planB will activate.
* planB will check if it's facingSouth if yes it will turnLeft and move.
*/
function start() {
    safeMove();
    planB();
}

function safeMove() {
    if(frontIsClear()){
        move();
    }
}

function planB(){
    if(facingSouth()){
        turnLeft();
        move();
    }
}