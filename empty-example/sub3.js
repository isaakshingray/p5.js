var rectangle = {
  x: 2, 
  y: 2, 
  xspeed: 4, 
  yspeed: 4,

}
var spin=1

function setup() {
createCanvas(windowWidth,windowHeight);
  background(255 );
  frameRate(60);
  rectMode(CENTER);


}
spin=spin+1;
function draw() {
 
  move();

  display();
  
  
}

function display() {
  stroke(0,[0.01]);
  strokeWeight(1);
  noFill();

  translate(windowWidth/2,windowHeight/2);
  rotate(millis()/1000);
  rect(0,0,rectangle.x,rectangle.y);

  
  frameRate(20);
}

function move() {
rectangle.x = rectangle.x + rectangle.xspeed;
rectangle.y = rectangle.y + rectangle.yspeed;

}