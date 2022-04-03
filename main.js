var sound;
function preload(){
    music1 = loadSound('assets/sound/sample1.mp3');
}

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
}

function mousePressed(){
    var n = 1;
    //circle1();
    //splashBrush();
    music1.play();
}

function mouseDragged(){

}

function draw(){
    background(255);
    rot();
    //rot2();
    Lissajous();
    //mouseCircle();
    funcsin();
    chaseFace();
}
