/* Write a program that asks the user how far they ran (in miles)
 * and then how long it took them (in minutes), and print out
 * their speed in miles per hour. */
function start(){
    var miles = readInt(" How far did you run? ");
    var minutes = readInt("How many minutes ");
    var hours = minutes / 60;
    
    var speed = miles/ hours;
    println("Speed in mph: " +speed);
    }