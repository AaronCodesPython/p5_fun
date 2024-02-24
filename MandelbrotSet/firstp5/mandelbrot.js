var minX = -2;
var maxX = 2;
var minY = -2;
var maxY = 2;
var rectX = 50;
var rectY = 50;
var curInp = false;
var inputs = [];
function setup() {
    rectMode(CENTER);
    createCanvas(400,400);
    pixelDensity(1);
    
    

}

function onInput(){}

function draw(){
    loadPixels();
    background(150);
    
    
    for(x= 0; x<width; x++){
        for(y = 0; y<height; y++){
            var a = map(x,0,width,minX,maxX);
            var b = map(y,0,width,minY,maxY);
            var ca = a;
            var cb = b;
            var n = 0;
            
            while(n<100){
                var new_a  = a*a - b*b;
                var new_b = 2*a*b;
                a = new_a+ca;
                b = new_b+cb;

                if(a*a + b*b > 16){
                    break;
                }
                n++;
            }
            var bright = map(n,0,100,0,255);

            var pix = (x+y*width)*4;
            pixels[pix + 0] = bright;
            pixels[pix + 1] = bright;
            pixels[pix + 2] = bright;
            pixels[pix + 3] = 255;
        }
        
    }
    updatePixels();
    fill(255,0,0,50);
    if(mouseX < width && mouseY < height && mouseY > 0){
        rect(mouseX,mouseY,rectX,rectY);
    } 
    
    fill(255,0,0);
    text(`-x/x: ${minX}/${maxX}`,10,10);
    text(`-y/y: ${minY}/${maxY}`,10,30);
}



function mouseClicked(){
    if(mouseX < width && mouseY < height && mouseY > 0){
        var c1 = map(mouseX+rectX/2,0,width, minX,maxX);
        var c2 = map(mouseX-rectX/2,0,width, minX,maxX);
        var c3 = map(mouseY+rectY/2,0,width, minY,maxY);
        var c4 = map(mouseY-rectY/2,0,width, minY,maxY);
        maxX = c1;
        minX = c2;
        maxY = c3;
        minY = c4;
    }
    // we are given the current real max and min coordinates, and
    // the current height and width and the new height and new width
    
}

function setRectSize(){
    var xSize = Number(document.getElementById("xSize").value);
    var ySize = Number(document.getElementById("ySize").value);
    rectX = xSize;
    rectY = ySize;
    console.log("wdawd")
}