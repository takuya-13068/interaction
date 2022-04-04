var changeFlg=false;
var color;

function setup(){
    createCanvas(windowWidth, windowHeight);
	frameRate(60);
    noFill();
    background(255);
    onemoveFlg = true;
    fill(0, 0, 0);
    color = [0,0,0];
    textSize(32);
    text('click to change color', 200 , 50 );
}

function mousePressed(){
    //randomBack();
    changeFlg =true;
}

function draw(){
    if(onemoveFlg){
        for(var i = 0; i < 7; i++){
            for(var j = 0; j<5; j++){
                makeshape(100+110*i,100+110*j,50,50);
            }
        }
        onemoveFlg=false;
    }
    if(frameCount % 30 == 0){
        makeshape(100+110* floor(random(7)),100+110* floor(random(5)),50,50);
    }
    console.log(color);
}