var color;
var changeFlg=false;
var spreadFlg=false;
var onemoveFlg=false;
var loc=[0,0];
function setup(){
    createCanvas(windowWidth, windowHeight);
	frameRate(60);
    background(255);
    fill(0);
    noStroke();
    color= [0,0,0];
}

function mousePressed(){
    changeFlg =true;
    randomColor(changeFlg);
    spreadFlg=true;
    onemoveFlg=true;
}

function draw(){
    background(255);
    moveCircle(200,200);
    if(spreadFlg){
        spreadCircle();
    }
}