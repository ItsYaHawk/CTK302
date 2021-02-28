let state = 0;
let timer = 0;
var mic;
var vol;
var c = 'white' ;

function setup() {
  createCanvas(400, 400);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(c);

  vol = (mic.getLevel()).toFixed(2);
  if (vol > .10) {
  c = color(random(255), random(255), random(255));
  }

  textSize(48);
  textAlign(CENTER);

  switch (state) {

    case 0:
      text("shhh!!!", width/2, height/2);
      if (vol>.10){
        state = 1;
      }
      break;

    case 1:
      text("QUIET DOWN!", width/2, height/2);
      if (vol<.10){
        timer++;
        if (timer > 3*60) {
          state = 0;
          timer = 0;
        }
      }
      break;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
