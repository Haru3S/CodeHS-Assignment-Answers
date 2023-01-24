// Basic Var Values
var BOTTOM_RADIUS = 100;
var MID_RADIUS = 60;
var TOP_RADIUS = 30;
// Create Functions To Int
function start(){
    var bottomY = getHeight()- BOTTOM_RADIUS;
    var midY = bottomY - BOTTOM_RADIUS - MID_RADIUS;
    var topY = midY - MID_RADIUS - TOP_RADIUS;

    var circle = new Circle(BOTTOM_RADIUS);
        circle.setPosition(getWidth()/2, bottomY);
        circle.setColor(Color.gray);
        add(circle);
    var circle = new Circle(MID_RADIUS);
        circle.setPosition(getWidth()/2, midY);
        circle.setColor(Color.gray);
        add(circle);
    var circle = new Circle(TOP_RADIUS);
        circle.setPosition(getWidth()/2, topY);
        circle.setColor(Color.gray);
        add(circle);
}