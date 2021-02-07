let image1, image2, image3;

function setup() {
  createCanvas(800, 800);
  image1 = loadImage("assets/anavenadepolothology.jpg");
  image2 = loadImage("assets/debut.jpg");
  image3 = loadImage("assets/sophomore.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(0);
  image(image2, width/2, height/2, 200, 200);
  image(image1, width/2, height/2 - 200, 200, 200);
  image(image3, width/2, height/2 + 200, 200, 200);
}
