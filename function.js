function defBack(num){
    if(num % 2 == 0)background(255);
    else background(155,155,0);
}

function mouseCircle(){
    for (var y = 0; y <= windowHeight; y += 20) {
        for (var x = 0; x <= windowWidth; x += 20) {
          // 対象のセルとカーソル位置との距離を計算する
          var d = dist(x, y, mouseX, mouseY);
      
          var sz = d * 0.03;
      
          ellipse(x, y, sz, sz);
        }
    }
}

function splashBrush(){
    for(var i=0; i<25; i++){
        var size = random(0,50);
        fill(0, 0, 0, random(100));
        noStroke();

        ellipse(
            mouseX + random(-45,45),
            mouseY + random(-45,45),
            size,size
        );
    }
}

function circle1(){
    while (n < 20){
        circle(mouseX, mouseY, n*10, n*10);
        n++;
    }
}

function rot(){

    angle += 0.05;
    var cx = windowWidth /2;
    var cy = windowHeight / 2;


    fill(0,0,0,200);
    line(cx, cy, cx+ 150*cos(angle), cy+150*sin(angle));
    ellipse(cx + 150*cos(angle), cy + 150*sin(angle), 20,20);

    ellipse(cx + 50*cos(angle), cy + 50*sin(angle), 20,20);

}
function rot2(){

    angle2 += 0.05;
    var cx = windowWidth * 2 /3;
    var cy = windowHeight * 2 / 3;


    fill(0,0,0,200);
    line(cx, cy, cx+ 0*cos(angle), cy+150*sin(angle));

    ellipse(cx + 0*cos(angle2), cy + 150*sin(angle2), 20,20);
}

function Lissajous(){
    var cx = windowWidth /4;
    var cy = windowHeight*2 / 4;

    var a = 7;
    var b = 2;

    fill(0,0,0,200);
    ellipse(cx + 200*cos(angle + a), cy + 150*sin(angle + b), 2,2);

}

function funcsin(){
    fill(0);
    for(var x = 0; x < windowWidth; x++){
        var y = windowHeight /2 + sin(x*0.01) * mouseY;
        ellipse(x, y, 2,2);
    }
}

function chaseFace(){
    fill(255);
    ellipse(width*2/5,height/2,100,100);
    ellipse(width*3/5,height/2,100,100);

    fill(0);
    ox1 = width*2/5;
    ox2 = width* 3/5;
    oy= height/2;
    var angleface = atan2(mouseY - height/2, mouseX - width*2/5);
    ellipse(ox1 + cos(angleface) * 20, oy + sin(angleface) * 20, 50,50);
    var angleface2 = atan2(mouseY - oy, mouseX - ox2);
    ellipse(ox2 + cos(angleface2) * 20, oy + sin(angleface2) * 20, 50,50);

    fill(255);
    ellipse(ox1 + cos(angleface) * 20 + 10, oy + sin(angleface) * 20 -7 , 7,7);
    ellipse(ox2 + cos(angleface2) * 20 + 10, oy + sin(angleface2) * 20-7, 7,7);
}

function changeColor(){
    fill(random(255),random(255),random(255),random(255));
}


function makeshape(x,y,width,height){
    var num = random(100);
    noStroke();
    fill(255);
    rect(x,y,width,height);
    randomColor(changeFlg);
    if(num < 30) ellipse(x+width/2,y+height/2,width,height);
    else rect(x,y,width,height)
}

function randomBack(){
    background(floor(random(256)),floor(random(256)),floor(random(256)));
}

function randomColor(flg){
    if(flg){ 
        color = [floor(random(256)),floor(random(256)),floor(random(256))];
        changeFlg=false;}
    fill(color[0],color[1],color[2]);
}

function moveCircle(basex,basey){
    for(var p=0; p<100; p++){
        theta = p/100*2*PI;
            /*size = sqrt(x**2 + y**2);
            corx= x / size;
            cory= y / size;
            console.log(cos(corx),sin(cory));*/
        r = sin(frameCount/20)*100;
        fill(color[0],color[1],color[2]);
        ellipse(basex + r*cos(theta), basey + r*sin(theta),4,4);
    }
    fill(0);
    textSize(29);
    text('want you change color??', 50, 50);
}

function spreadCircle(){
    //start
    if(onemoveFlg){
        loc=[mouseX,mouseY,frameCount];
        onemoveFlg=false;
    }
    for(var p=0; p<100; p++){
        theta = p/100*2*PI;
        r = (frameCount-loc[2])*40;
        fill(color[0],color[1],color[2]);
        ellipse(loc[0] + r*cos(theta), loc[1] + r*sin(theta),4,4);
    }
    //end
    if(frameCount-loc[2] >= 60){
        spreadFlg=false;
    }
}