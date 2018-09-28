var song1;
var song2;
var fft;
var button1;
var button2;
var span;
var col=0



function preload() {
  song1 = loadSound('amajorscale.mp3');
  song2= loadSound('holocene.mp3')
  song3=loadSound('a minor pure.mp3')
}


function toggleSong() {
  if (song1.isPlaying()) {
    song1.pause();
    song2.play();
  } else {
    song1.play();
    song2.pause();
  }
}

function setup() {
  createCanvas(windowWidth-20, windowHeight-30);

  button = createButton('toggle');
  button.mousePressed(toggleSong);

  song1.play();
  song2.pause();
  fft = new p5.FFT(0.95,2048);
  amplitude = new p5.Amplitude();
  span= windowWidth/300;
  ///map(col,0,264,0,512)
}


function draw() {
   var level = amplitude.getLevel(); 
   background(255,80+level*450,80+level*450,70);

  var spectrum = fft.analyze();
  //stroke(255);
 
  for (var i = 0; i < spectrum.length-600; i++) {
    var slot = spectrum[i];
    var y = map(slot, 0,400,windowHeight-50,0);
    //line(i, windowHeight, i, y);
    

   /// console.log(spectrum);
   rect(i*span,y,span,windowHeight-y);
   //stroke(255);
   fill(slot+ slot-50,70-(slot*0.05),30)
   //fill(i-50,i-50,slot+i,);
   //fill(0);
   //stroke(255);
   //noStroke();
    }

    for (var i = 0; i < spectrum.length-600; i++) {
    var slot = spectrum[i];
    var y = map(slot, 0, 500,60,windowHeight-50);
    //line(i, windowHeight, i, y);
    

   /// console.log(spectrum);
   rect(i*span,-y,span,windowHeight-y);
   //stroke(255);
   fill(255-(slot+30),slot-50,i*0.4);
   //fill(255);
   //noStroke();
    }

}