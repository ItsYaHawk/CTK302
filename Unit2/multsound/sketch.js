let state = 0;
let song1, song2, song3;

function preload(){
  song1 = loadSound("assets/Genesis.mp3");
  song2 = loadSound("assets/I_Remember.mp3");
  song3 = loadSound("assets/Yellow.mp3");
  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  textAlign(CENTER);
  textSize(40);
  switch (state) {
    case 0:
    song1.play();
    state = 1;
    break;
    case 1:
    text("Genesis\nby Grimes", width/2, height/2);
    break;
    case 2:
    song2.play();
    state = 3;
    break;
    case 3:
    text("I Remember\nby deadmau5", width/2, height/2);
    break;
    case 4:
    song3.play();
    state = 5;
    break;
    case 5:
    text("Yellow\nby Coldplay", width/2, height/2);
    break;

  }
}

function mouseReleased() {
  state++;
  if (state>5) {
    state = 0;
  }
  song1.pause();
  song2.pause();
  song3.pause();
}
