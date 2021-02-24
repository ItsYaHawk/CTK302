let numberOfTouches;
let image1, image2, image3, image4;

function setup() {
  createCanvas(400, 400);
  image1 = loadImage("assets/1.png");
  image2 = loadImage("assets/2.png");
  image3 = loadImage("assets/3.png");
  image4 = loadImage("assets/4.png");
  imageMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  textSize(20);
  text(numberOfTouches + ' touches', 5, 20);

  switch (numberOfTouches) {
    case 0:
      text("no fingees...", 5, 35);
      image(image1, width / 2, height / 2, 200, 200);
      break;

    case 1:
      text("one fingee?", 5, 35);
      image(image2, width / 2, height / 2, 200, 200);
      break;

    case 2:
      text("two fingees!", 5, 35);
      image(image3, width / 2, height / 2, 200, 200);
      break;

    case 3:
      text("three fingies!!!", 5, 35);
      image(image4, width / 2, height / 2, 200, 200);
      break;


  }

}
