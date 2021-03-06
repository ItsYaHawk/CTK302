let x = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  push();
  translate(x,0);
  avatar();
  pop();

  x += 10;
  if (x > width) {
    x = -800;
  }
}

function avatar() {
  background(255);
  noStroke();

  if (mouseIsPressed) {
    background('#1a0000');
    //text
    fill(255);
    textSize(16);
    text('Jack has super-strength',85,400);
    text('Jill can run fast',595,340);
    text('John has ultra-elasticity',410,70);
    textAlign(CENTER);
    text('The baby does \nnothing',275,490);
    textSize(48);
    text('The \nUNBELIEVABLES!',225,200);
    //mom
    stroke('yellow');
    strokeWeight(100);
    line(400,400,400,500);
    fill(0);
    stroke('blue');
    strokeWeight(10);
    ellipse(width/2,height/2,100);
    stroke('yellow');
    strokeWeight(10);
    stroke(255);
    point(380,390);
    point(420,390);
    noFill();
    arc(400, 400, 50, 60, QUARTER_PI, HALF_PI);
    fill(0);
    stroke('blue');
    line(400,450,400,600);
    line(400,465,340,500);
    line(340,500,360,545);
    line(400,465,425,500);
    line(425,500,360,545);
    line(400,600,375,700);
    line(400,600,425,700);
    //baby
    fill(0);
    stroke('black');
    ellipse(340,450,40);
    fill('white');
    strokeWeight('8');
    triangle(365,460,325,475,370,535);
    line(333,433,325,415);
    stroke(255);
    point(325,448);
    point(350,440);
    //dad
    strokeWeight(10);
    stroke('blue');
    fill(0);
    line(440,170,440,110);
    line(460,170,460,110);
    line(480,170,480,110);
    line(500,170,500,110);
    line(520,170,520,110);
    line(540,170,540,110);
    ellipse(490,180,100);
    stroke(255);
    point(470,165);
    point(510,165);
    noFill();
    stroke(255);
    arc(490, 180, 50, 60, QUARTER_PI, HALF_PI);
    stroke('blue');
    line(490,235,490,500);
    line(490,260,420,350);
    line(490,260,540,470);
    line(490,500,460,700);
    line(490,500,530,700);
    //more text
    fill(255);
    textSize(16);
    textAlign(LEFT);
    noStroke();
    text('Jane can turn invisible',315,320);
    //son
    stroke('blue');
    line(138,465,138,420);
    line(158,465,158,420);
    line(178,465,178,420);
    line(198,465,198,420);
    fill(0);
    ellipse(170,470,65);
    stroke(255);
    point(150,460);
    point(190,460);
    noFill();
    stroke(255);
    arc(170, 460, 50, 60, QUARTER_PI, HALF_PI);
    stroke('blue');
    line(170,505,170,600);
    line(170,600,150,700);
    line(170,600,190,700);
    line(170,520,115,535);
    line(115,535,100,470);
    line(170,520,200,590);
    //daughter
    fill('brown');
    stroke('brown');
    strokeWeight(80);
    line(650,410,650,510);
    fill(0);
    stroke('blue');
    strokeWeight(10);
    ellipse(650,410,65);
    stroke(255);
    point(635,410);
    point(665,410);
    noFill();
    stroke(255);
    arc(650, 405, 50, 60, QUARTER_PI, HALF_PI);
    fill(0);
    stroke('blue');
    strokeWeight(10);
    line(650,445,650,600);
    line(650,585,630,700);
    line(650,585,670,700);
    line(650,460,600,500);
    line(650,460,660,550);
    line(600,500,650,580);
    line(660,550,650,580);
  }
  else {
    //text
    textSize(24);
    textAlign(CENTER);
    text('By day, John and Jane Doe raise a family of 3 kids. But by night, \nthey all fight crime as a superhero family known as...',400,50);
    //mom
    fill(0);
    stroke('yellow');
    strokeWeight(100);
    line(400,400,400,500);
    noStroke();
    ellipse(width/2,height/2,100);
    stroke('yellow');
    strokeWeight(10);
    line(400,350,350,400);
    line(400,350,450,400);
    stroke('white');
    point(380,390);
    point(420,390);
    noFill();
    stroke(255);
    arc(400, 400, 50, 60, QUARTER_PI, HALF_PI);
    fill(0);
    stroke(0);
    line(400,450,400,600);
    line(400,465,340,500);
    line(340,500,360,545);
    line(400,465,425,500);
    line(425,500,360,545);
    line(400,600,375,700);
    line(400,600,425,700);
    //baby
    ellipse(340,450,40);
    fill('white');
    strokeWeight('8');
    triangle(365,460,325,475,370,535);
    line(333,433,325,415);
    stroke('white');
    point(325,448);
    point(350,440);
    //dad
    strokeWeight(10);
    stroke(0);
    fill(0);
    line(440,170,440,110);
    line(460,170,460,110);
    line(480,170,480,110);
    line(500,170,500,110);
    line(520,170,520,110);
    line(540,170,540,110);
    ellipse(490,180,100);
    stroke(255);
    point(470,165);
    point(510,165);
    noFill();
    stroke(255);
    arc(490, 180, 50, 60, QUARTER_PI, HALF_PI);
    fill(0);
    stroke(0);
    line(490,235,490,500);
    line(490,260,420,350);
    line(490,260,540,470);
    line(490,500,460,700);
    line(490,500,530,700);
    //son
    line(138,465,138,420);
    line(158,465,158,420);
    line(178,465,178,420);
    line(198,465,198,420);
    ellipse(170,470,65);
    stroke(255);
    point(150,460);
    point(190,460);
    noFill();
    stroke(255);
    arc(170, 460, 50, 60, QUARTER_PI, HALF_PI);
    fill(0);
    stroke(0);
    line(170,505,170,600);
    line(170,600,150,700);
    line(170,600,190,700);
    line(170,520,115,535);
    line(115,535,100,470);
    line(170,520,200,590);
    //daughter
    fill('brown');
    stroke('brown');
    strokeWeight(80);
    line(650,410,650,510);
    fill(0);
    stroke(0);
    strokeWeight(10);
    ellipse(650,410,65);
    stroke('brown');
    line(650,375,615,410);
    line(650,375,685,410);
    stroke(255);
    point(635,410);
    point(665,410);
    noFill();
    stroke(255);
    arc(650, 405, 50, 60, QUARTER_PI, HALF_PI);
    fill(0);
    stroke(0);
    strokeWeight(10);
    line(650,445,650,600);
    line(650,585,630,700);
    line(650,585,670,700);
    line(650,460,600,500);
    line(650,460,660,550);
    line(600,500,650,580);
    line(660,550,650,580);
  }

  //fill(0);
  //stroke(255);
  //strokeWeight(5);
  //textAlign(LEFT);
  //textSize(12);
  //text(mouseX + ", " + mouseY, mouseX+10, mouseY);
}
