var data=[];
var color;


function setup(){
    createCanvas(windowWidth, windowHeight);
	frameRate(60);
    background(255);
    fill(0);
    noStroke();
    color= [0,0,0];

    for(var i =0; i<8; i++){
        for(var j=0; j<5; j++){
            data[i+j*8] = [];
            data[i+j*8][0]= 100+80*i;
            data[i+j*8][1]= 100+80*j;
            data[i+j*8][2]= floor(random(20));
            data[i+j*8][3]= floor(random(2));
        }
    }
}

function mousePressed(){
    changeFlg =true;
    randomColor(changeFlg);
}

function draw(){
    background(51,51,51,10);
    textSize(30);
    fill(255);
    text("click quickly!!", 30, 30);
    fill(color[0],color[1],color[2]);
    for(var i =0; i<8; i++){
        for(var j =0; j<5; j++){
            data[i+j*8]= scaleSquare(data[i+j*8][0], data[i+j*8][1], data[i+j*8][2], data[i+j*8][3]);
            rect(data[i+j*8][0], data[i+j*8][1], data[i+j*8][2], data[i+j*8][2], 0);
        }
    }
}