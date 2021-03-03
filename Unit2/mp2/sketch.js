let state = 0;
let timer = 0;
let img1, img2, img3, img4;
var mic;
var vol;
var c = 'white' ;

function setup() {
  createCanvas(800, 800);
  img1 = loadImage("assets/state1.png");
  img2 = loadImage("assets/state2.png");
  img3 = loadImage("assets/state3.png");
  img4 = loadImage("assets/state4.png");

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {



  background(c);

//  fill('purple');
//  rect(102,472,163,108);
  vol = (mic.getLevel()).toFixed(2);
  if (vol > .10) {
  c = color(random(255), random(255), random(255));
  }

  textSize(48);
  textAlign(CENTER);

  switch (state) {
    case 0:
      image(img1,0,0,800,800);
      text("Shhh, he's sleeping...", width/2, height/4);
      if (vol>.10){
        state = 2;
      }
      break;

    case 1:
      image(img3,0,0,800,800);
      timer++;
      if (timer > 3*60) {
        state = 0;
        timer = 0;
      }
      if (vol>.10){
        state = 2;
      }
      break;

      case 2:
        image(img2,0,0,800,800);
        text("AAAAAAAAAA!", width/2, height/4);
        if (vol<.10){
            state = 3;
          }
        break;

      case 3:
        image(img4,0,0,800,800);
        text("Stop that!", width/2, height/4);
        timer++;
        if (timer > 3*60) {
          state = 0;
          timer = 0;
        }
        if (vol>.10){
          state = 2;
        }
        break;
  }
}

function mouseReleased() {
  if ((mouseX>102)&&(mouseX<265)&&(mouseY>472)&&(mouseY<580)) {
    state = 1;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
