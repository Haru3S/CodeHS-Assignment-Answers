//Declare a constant here to represent the cost of a tshirt
var COST_OF_SHIRT = 20;
function start(){
	println("This Program Tells You The Cost Per Shirt");
	var cost = readFloat("How many shirts do you want? ");
	
	var shirt = cost * COST_OF_SHIRT;
	
	println("$" + cost + " = " + shirt + " Amount");
	
}