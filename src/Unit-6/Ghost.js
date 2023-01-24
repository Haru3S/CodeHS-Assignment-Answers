// Constants for main ghost body
var HEAD_RADIUS = 70;
var BODY_WIDTH = HEAD_RADIUS * 2;
var BODY_HEIGHT = 120;
var NUM_FEET = 3;
var FOOT_RADIUS = (BODY_WIDTH) / (NUM_FEET * 2);
var BODY_COLOR = Color.red;

// Constants for eyes
var PUPIL_RADIUS = 8;
var PUPIL_LEFT_OFFSET = 16;
var PUPIL_RIGHT_OFFSET = 40;
var EYE_RADIUS = 20;
var EYE_OFFSET = 28;
var EYE_COLOR = Color.white;
var PUPIL_COLOR = Color.blue;

/* This program draws a ghost on the canvas. */
function start(){
    var centerX = getWidth()/2;
    var centerY = getHeight()/2;
    drawGhost(centerX, centerY, Color.red);
    drawGhost(100, 100, Color.green);
    drawGhost(300, 200, Color.black);
    drawGhost(40, 300, Color.orange);
    drawGhost(300, 50, Color.yellow);
}

function drawGhost(centerX, centerY, color){
    var body = new Rectangle(BODY_WIDTH, BODY_HEIGHT);
    var x = centerX-BODY_WIDTH/2;
    var y = centerY+BODY_HEIGHT/2;
    body.setPosition(x, y);
    body.setColor(color);
    add(body);
    var head = new Circle(HEAD_RADIUS);
    head.setPosition(centerX, y);
    head.setColor(color);
    add(head);
    var eyeLeft = new Circle(EYE_RADIUS);
    eyeLeft.setColor(Color.white);
    eyeLeft.setPosition(x, y);
    add(eyeLeft);
    eyeLeft.move(20, 0)
    var eyeRight = new Circle(EYE_RADIUS)
    eyeRight.setColor(Color.white);
    eyeRight.setPosition(x, y);
    add(eyeRight);
    eyeRight.move(50, 0);
    var pupil1 = new Circle(PUPIL_RADIUS +1);
    pupil1.setColor(Color.blue);
    pupil1.setPosition(x, y);
    add(pupil1);
    pupil1.move(25, 0)
    var pupil2 = new Circle(PUPIL_RADIUS +1);
    pupil2.setColor(Color.blue)
    pupil2.setPosition(x + 25, y,);
    add(pupil2);
    pupil2.move(30, 0)
    var footMiddle = new Circle(FOOT_RADIUS);
    footMiddle.setPosition(centerX, centerY + BODY_HEIGHT+FOOT_RADIUS*2.5);
    footMiddle.setColor(color);
    
    
}