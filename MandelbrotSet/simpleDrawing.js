
const canvas = document.getElementById("myCanvas");
var x = 0;
var y = 0;
var dx = 5;
var dy = 5;

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
console.log(viewportWidth);
console.log(viewportHeight);
function draw(){
    console.log(x)
    console.log(y)
    if(x < 0 || x+5 >= window.innerWidth){
        console.log("Hit horizontal border");
        console.log(x)
        console.log(y+"----")
        dx *= -1; // Reverse horizontal direction
    }
    if(y < 0 || y+15 >= window.innerHeight){
        console.log("Hit vertical border");
        console.log(x)
        console.log(y+"----")
        dy *= -1; // Reverse vertical direction
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 15, 15);
    x+=dx;
    y+=dy;
    setTimeout(draw, 0);
}
draw();