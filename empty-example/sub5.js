var spin=1


function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);
translate(windowWidth/2,windowHeight/2);
 background(0);
}

function draw(){



  rotateX((frameCount+mouseX) * 0.005);
  rotateY((frameCount+mouseY) * 0.005);
  box(5*(frameCount*0.03));
 if(mouseIsPressed){dash();}
}

function dash(){
background(0);
}
var spin=spin+1;
