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