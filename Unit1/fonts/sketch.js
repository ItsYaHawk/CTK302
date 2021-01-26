var f1 ;

unction setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/Hallington.ttf")
}

function draw() {
  background(100);
  textSize(48);
  textFont(f1);
  text("hello", width/2, height/2);
}
