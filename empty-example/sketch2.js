
var myX=0;
var myY=0;


function setup() {
createCanvas(600,600);
}

function draw() {
	if(myX-mouseX>10||mouseX-myX>10){
		if(myY-mouseY>10||mousey-myY>10){
		text("ruin",mouseX,mouseY);
		myX=mouseX;
		myY=mouseY;
}
}
}