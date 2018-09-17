var mouseclicks = [];

function setup(){
	createCanvas(windowWidth,windowHeight);
	var button = createButton('boop');
	button.mousePressed(addparticle);
	noStroke();
	//setTimeout(1000, gosomeplaceelse);
}
/*
function gosomeplaceelse(){
	window.location = "www.google.ca";
}
*/
console.log("hello");
function draw(){
	//background(255);
	//translate(width/2, height/2);
	for(var i = 0; i < mouseclicks.length; i++){
		fill(mouseclicks[i].color);
		ellipse(mouseclicks[i].x, mouseclicks[i].y, 1);
		
		mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].xspeed;
		mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].yspeed;
	}
}

function addparticle(){
	var clickposition = {
		x: windowWidth/2,
		y: windowHeight/2,
		xspeed: random(-2,2),
		yspeed: random(-2,2),
		color: color(random(100,150), random(255), random(200,255))
	}
	mouseclicks.push(clickposition);
}

function mouseClicked(){
	
}