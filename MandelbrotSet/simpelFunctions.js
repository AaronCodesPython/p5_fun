const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
var width  = window.innerWidth;
var height = window.innerHeight;
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
canvas.width = width;
canvas.height = height;

function f1(x){
    return (height-(x*2));
}
function f2(x){
    return (height-(x*4));
}
function f3(x){
    return ((x));
}
var funcs = [f1, f2,f3]
var lastx = null;
var lasty = null;
function drawFunctions(){
    for(f of funcs){
        console.log(f(1));
        for(i = height; i>=0;i--){
            y = f(i);
            
            if(y > height){
                continue;
            }
            else{
                ctx.fillRect(i, y, 5, 5);
                /*if(lastx != null && lasty != null){
                    ctx.beginPath();
                    ctx.moveTo(i, y);
                    ctx.lineTo(lastx, lasty);
                    ctx.stroke();
                }*/
                
    
    
                lastx = i;
                lasty = y;
            }
        }
    }
}

var x = 0;
var ty = 0;
dx =1;
dy =1;
function draw(){
    if(x < 0 || x+15 >= window.innerWidth){
        dx *= -1; // Reverse horizontal direction
    }
    if(ty < 0 || ty+15 >= window.innerHeight){
        dy *= -1; // Reverse vertical direction
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFunctions();
    ctx.fillRect(x, ty, 15, 15);
    x+=dx;
    ty+=dy;
    setTimeout(draw, 0);
}
draw();