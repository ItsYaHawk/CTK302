/* For mobile phones - accesses accelerometer and gyroscope.
Make sure you turn on orientation lock on your iPhone or Android device. */

let alpha = 0, beta = 0 , gamma = 0; // gyroscope variables
let x = 0.0, y = 0.0, z = 0.0 ; // accelerometer variables
let cars = [];
let image;
let xPosition = 0;
let yPosition = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);

  image = createImg("assets/flander.gif", "flander");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

}

function draw() {

  background('white');

  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);

  push(); // before you use translate, rotate, or scale commands, push and then pop after

  translate(xPosition, yPosition); // move everything over by x, y

  rotate(radians(alpha)); // rotate the bunny depending on the alpha intake

  image.position(xPosition-325, yPosition-100);
  image.size(500, 500);
  pop();

  // Text commands that display debugging data
  // textAlign(LEFT);
  // textSize(20);
  // fill('black');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x.toFixed(2), 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y.toFixed(2), 25, 170);
  // text("z = " + z.toFixed(4), 25, 190);

  // Text that makes CTK type in the background
  // fill('white');
  // noStroke();
  // textSize(300);
  // textAlign(CENTER);
  // text("ctk", width / 2, height / 2);

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0)
    {
      cars.splice(i, 1);
    }
  }
  // rect(0, 0, 100, 100) ;

}

class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(25,25);
    this.vel = createVector(random(5), random(5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.s = random(5, 25);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    textSize(this.s);
    text("DANCE", this.pos.x, this.pos.y);

  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}

// Read in gyroscope data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

// Read in accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
