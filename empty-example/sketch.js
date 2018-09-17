function setup() {
createCanvas(500,500);
}

function draw() {
	background(0,10);
	fill(mouseX,mouseY,80);
	if(mouseIsPressed){
	for(var i =0; i < 10; i++){
ellipse(mouseX+random(30),mouseY+random(30),30,30);
		}
	}
}