var circle = {
  x: 2, 
  y: 2, 
  xspeed: 4, 
  yspeed: 4,

}

function setup() {
  createCanvas(windowWidth,windowHeight);background
  (0 );
  frameRate(60);
}

function draw() {
 
  move();

  display();
  
  
}
function display() {
  stroke(255,[0.01]);
  strokeWeight(1);
  noFill();
  ellipse(windowWidth/2,windowHeight/2,circle.x,circle.y);
 ellipse(windowWidth/2+50,windowHeight/2+50,circle.x,circle.y);
 ellipse(windowWidth/2+50,windowHeight/2-50,circle.x,circle.y);
 ellipse(windowWidth/2-50,windowHeight/2+50,circle.x,circle.y);
 ellipse(windowWidth/2-50,windowHeight/2-50,circle.x,circle.y);
  frameRate(20);
}

function move() {
  circle.x = circle.x + circle.xspeed;
  circle.y = circle.y + circle.yspeed;
  
}