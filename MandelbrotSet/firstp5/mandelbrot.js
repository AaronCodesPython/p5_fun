let slider1;
let slider2;
let slider3;
let slider4;
function setup() {
    createCanvas(400,400);
    pixelDensity(1);
    slider1 = createSlider(-2, 0);
    slider1.position(10, 10);
    slider1.size(80);
    slider1.value(-2);

    slider2 = createSlider(0.0001, 2);
    slider2.position(100, 10);
    slider2.size(80);
    slider2.value(2);

    slider3 = createSlider(-10, 10);
    slider3.position(10, 40);
    slider3.size(80);
    slider3.value(-2);

    slider4 = createSlider(2, 3);
    slider4.position(100, 40);
    slider4.size(80);
    slider4.value(2);
}
function draw(){
    loadPixels();
    background(150);
    /*var minX = slider1.value();
    var maxX = slider2.value();
    var minY = slider3.value();
    var maxY = slider4.value();
*/
    var minX = 0.42;
    var maxX = 0.43;
    var minY = -0.2;
    var maxY = -0.22;
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
    
}