function start(){
    // Moves by 1 tile.
    move();
    
    // Loops to take ball (100 times).
	for(var i = 0; i < 100; i++){
        takeBall();
    }
    
    // Moves by 1 tile.
    move();
}