let cells = [];
let CellNumber = 100;
let simulationRunning = false;
function setup() {
  
  createCanvas(500, 500);
  for(i = 0;i<CellNumber;i++){
    temp = [];
    for(j=0;j<CellNumber;j++){
      let newCell = new Cell(false, (width/CellNumber)*j,(height/CellNumber)*i);
      temp.push(newCell);
    }
    cells.push(temp);
  }
  stroke(255,255,255,10);
  background(150);
  fill(0);
}
function mouseClicked(){
  let mx = mouseX;
  let my = mouseY;
  console.log(mouseX, mouseY)
  for(row of cells){
    for(cell of row){
      // we know its clicked when mouseX is in between this area
      
      if(mx <=cell.x+ (width/CellNumber) && mx>=cell.x && my <= cell.y+(height/CellNumber) && my >=cell.y){
        console.log("Cell found");
        cell.status = true;
        
      }
    }
  }
}
async function draw() {
  for(i = 0;i<cells.length;i++){
    for(j=0;j<cells.length;j++){
      cells[i][j].drawCell();
      if(simulationRunning){
        cells[i][j].checkCellState(i,j);
      }
    }
  }

}



function changeSimulationState(){
  simulationRunning = !simulationRunning;
}
class Cell{
  constructor(_status, _x,_y){
    this.status = _status;
    this.x = _x;
    this.y = _y;
  }
  toString(){
    return `status:${this.status}, x:${this.x}, y:${this.y}`
  }
  drawCell(){
    if(this.status){
      fill(255);
      stroke(255,0,0);
      rect(this.x,this.y,height/CellNumber);
    }
    else{
      fill(0);
      stroke(255,255,255,10);
      rect(this.x,this.y,height/CellNumber);
    }
  }

  checkCellState(indexI,indexJ){
    //let neighbours = []
    let aliveNeighbours = 0; 
    if(indexI -1 >= 0){
      //neighbours.push(cells[indexI-1][indexJ])
      if(cells[indexI-1][indexJ].status){
        aliveNeighbours+=1;
      }
      if(indexJ-1 >= 0){
        if(cells[indexI-1][indexJ-1].status){
          aliveNeighbours+=1;
        }
        //neighbours.push(cells[indexI-1][indexJ-1])
      }
      if(indexJ+1 < cells[0].length){
        //neighbours.push(cells[indexI-1][indexJ+1])
        if(cells[indexI-1][indexJ+1].status){
          aliveNeighbours+=1;
        }
      }
    }
    if(indexJ-1 >= 0){
      if(cells[indexI][indexJ-1].status){
        aliveNeighbours+=1;
      }
      //neighbours.push(cells[indexI][indexJ-1])
    }
    if(indexJ+1 < cells[0].length){
     // neighbours.push(cells[indexI][indexJ+1])
      if(cells[indexI][indexJ+1].status){
        aliveNeighbours+=1;
      }
    }
    if(indexI +1 < cells.length){
      //neighbours.push(cells[indexI+1][indexJ])
      if(cells[indexI+1][indexJ].status){
        aliveNeighbours+=1;
      }
      if(indexJ-1 >= 0){
        //neighbours.push(cells[indexI+1][indexJ-1])
        if(cells[indexI+1][indexJ-1].status){
          aliveNeighbours+=1;
        }
      }
      if(indexJ+1 < cells[0].length){
        if(cells[indexI+1][indexJ+1].status){
          aliveNeighbours+=1;
        }
        //neighbours.push(cells[indexI+1][indexJ+1])
      }
    }
    
    if(aliveNeighbours<2 || aliveNeighbours >3){
      this.status = false;
    }
    else if(aliveNeighbours == 3){
      this.status = true;
    }

  }
}