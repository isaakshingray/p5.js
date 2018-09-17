var ball = {
  x: 300, 
  y: 200, 
  xspeed: 8, 
  yspeed: 9
}

function setup() {
  createCanvas(windowWidth,windowHeight);background
  (0 );
}

function draw() {
 
  move();
  bounce();
  display();
  
  
}

function bounce() {
  
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  } 
  
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(ball.x, ball.y, 1, 1);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}