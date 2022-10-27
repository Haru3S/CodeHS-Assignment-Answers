// Starting Functions

function start(){
	for(var i = 0; i < 5; i++){
        moveTwo();
        jumpHurdle();
        
    }
}

// Basic Funtions

function moveTwo(){
    move();
    move();
}

function jumpHurdle(){
    turnLeft();
    move();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}