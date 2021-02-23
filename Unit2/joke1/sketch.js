let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  switch (state) {
    case 0:
      background('grey');
      text("I like telling dad jokes...", width/2, height/2);
    break;

    case 1:
      background('yellow');
      text("Sometimes he laughs!", width/2, height/2);
    break;

  }
}

function mouseReleased(){
  state = state + 1;
  if (state > 1) {
    state = 0;
  }
}
