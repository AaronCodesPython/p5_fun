let layers = [];
let adjacencyList = {
  "A": ["B1", "B2"],
  "B1": ["C1", "C2", "C3", "C4"],
  "B2": ["C1", "C2", "C3", "C4"],
  "C1": [],
  "C2": [],
  "C3": [],
  "C4": []
};

const layerN = 3;
const nodesPerLayer =[1,2,4] // ith index has number of nodes in ith layer
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  
}

function draw() {

}

class Layer{
  constructor(_xWidth,_yWidth, _x,_y){
    this.xWidth = _xWidth;
    this.yWidth = _yWidth;
    this.x = _x;
    this.y = _y;
    this.children = [];
  }

  showLayer(){
    fill(255,0,0,100);
    rect(this.x,this.y,this.xWidth,this.yWidth);
    this.children.forEach(n => {
      n.showNode();
    });
  }
}

class LayerNode{
  constructor(_ind,_x,_y, _w){
    this.ind = _ind;
    this.x = _x;
    this.y = _y;
    this.w = _w;
  }

  showNode(){
    fill(0);
    ellipse(this.x,this.y,this.w);
    fill(255);
    text(this.ind,this.x,this.y)
  }
}