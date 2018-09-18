function setup(){
  createCanvas(windowWidth,windowHeight); 
  background(0);
;
}

function draw(){


  if(mouseIsPressed){dash()}
      if(mouseIsPressed){dash()}
  if(mouseIsPressed){dash()}

}

function dash(){

  line(mouseX,mouseY,random(0,windowWidth),random(0,windowHeight));
  stroke(random(0,255),random(0,5),random(0,255));
  strokeWeight(1);
}