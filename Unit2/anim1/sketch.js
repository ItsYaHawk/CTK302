let x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
  fill(0);
  rect(x, height/2 ,100, 100);
  x += 5;
  if (x > width) {
    x = -100;
  }
}
