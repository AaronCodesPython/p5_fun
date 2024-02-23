function setup() {
  createCanvas(800, 800);
  background(0);
  
  noStroke();
  
}

var x = 0;
var dx = 1;
var dy = 1;
var y = 0;
function draw() {
  fill(Math.random()*(255),Math.random()*(255),Math.random()*(255),255);
  if( dx > 2 || dx < -2 || dy >2 || dy <-2){
    dx /=2;
    dy /= 2;
  }
  if(x >=799 || y >= 799){
    dx *= -1-(Math.random()*(2-1));
    dy *= -1-(Math.random()*(2-1));
  }
  if(x < 0 || y <0){
    dx *= -1-(Math.random()*(2-1));
    dy *= -1-(Math.random()*(2-1));
  }
  ellipse(x,y,10,10);
  x+=dx;
  y+=dy;
}
function mousePressed(){
  dx = 0;
  dy = 0;
}
