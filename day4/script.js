var color;
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
	frameRate(60);
    color=[0,204,204];
}

function mousePressed(){
    changeColor2();
}

function draw(){
    background(0);

    if(frameCount%300==150) changeColor2();
    
    //rotateSq();

    //normal Materials
    //normalMaterial();

    //アンビエントマテリアル
    ambientLight(127);
    pointLight(255, 255, 255, -100, -200, 400);
    specularMaterial(255);
    noStroke();

    //rotateTwo();
    rotateY(frameCount/400);
    rotateX(frameCount/600);
    rotateZ(frameCount/800);
    
    for(var i =0; i<30; i++){
        push();
        ambientMaterial((i*5+color[0])%255, color[1], 255 - (i*5+color[2])%255);
        rotateX(frameCount/240 + i *20);
        rotateY(frameCount/240 + i *22);
        rotateZ(frameCount/240 + i *45);
        box(width/5);
        pop();
    }
    
}