const canvas = document.getElementById("myCanvas");
var x = 0;
var y = 0;
var dx = 5;
var dy = 5;

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight

function draw(){
    console.log(x)
    console.log(y)
    if(x < 0 || x >= window.innerWidth){
        
        dx *= -1; // Reverse horizontal direction
        x+=dx;
    }
    if(y < 0 || y >= window.innerHeight){
        
        dy *= -1; // Reverse vertical direction
        y+=dy;
    }
    else{
        ctx.fillRect(x, y, 3, 3);
        x+=dx+Math.random()* (5 - -1) + -1;
        y+=dy*+Math.random()* (-0.9 - 0) +Math.random()+Math.random()* (5 - -1) + -1;
    }
    
    requestAnimationFrame(draw);
}
draw();