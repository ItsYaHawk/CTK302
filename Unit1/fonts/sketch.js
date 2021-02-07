var f1, f2, f3, f4, f5, f6;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  f1 = loadFont("assets/Hallington.ttf");
  f2 = loadFont("assets/Nathalia.ttf");
  f3 = loadFont("assets/PotterFuseLetter-Normal.ttf");
  f4 = loadFont("Sunnday.ttf");
  f5 = loadFont("vgafix.fon");
  f6 = loadFont("wingding.ttf");
}

function draw() {
  background(100);
  textSize(48);
  textFont(f1);
  text("hello", width/2, height/2);
  textFont(f2, 32);
  text("world", width/2, height/2+50);
}
