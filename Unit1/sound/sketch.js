let song1 ;

function preload() {
  song1 = loadSound("assets/sound.mp3");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  }
  else {
    song1.loop();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
