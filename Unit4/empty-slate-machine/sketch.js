let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      text("0", 100, 100);
      break;

    case 1:
      text("1", 100, 100);
      break;

    case 2:
      text("2", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
