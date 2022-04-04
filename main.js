
function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(50);
    noFill();
    background(255);

    stroke(0);
    angle = 0;
    angle2 = 0;

    const width = windowWidth;
    const height = windowHeight;

    backcolor = 0;
}

function mousePressed(){
    var n = 1;
    //circle1();
    //splashBrush();
    click.play();
    backcolor++;
}

function mouseDragged(){

}

function draw(){
    defBack(backcolor);
    rot();
    //rot2();
    Lissajous();
    //mouseCircle();
    funcsin();
    chaseFace();
}
