function start(){
    var rect = new Rectangle(getWidth(), getHeight()/3);
        rect.setColor(Color.red);
        rect.setPosition(0,0);
        add(rect);
    var rect = new Rectangle(getWidth(), getHeight()/3);
    rect.setColor(Color.blue);
    rect.setPosition(0, getHeight()/3*2);
    add(rect);
}