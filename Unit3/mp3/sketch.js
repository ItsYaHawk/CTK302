let state = 0;
let sprite, sprite_win, sprite_lose, ghost;
let song;
let sound1, sound2;
let ghosts = [];
let spritePos;
let timerValue = 30 * 60;
let ghostTimer = 0;
let bg;
let cOffset = 0;

function preload() {
  song = loadSound("assets/nevermeant64.mp3");
  sound1 = loadSound("assets/boo.mp3");
  sound2 = loadSound("assets/cheers.mp3");
  song.loop();
  song.pause();
  sound1.pause();
  sound2.pause();
}

function setup() {
  createCanvas(800, 800);
  sprite = loadImage("assets/sprite.png");
  sprite_win = loadImage("assets/sprite_win.png");
  sprite_lose = loadImage("assets/sprite_lose.png");
  ghost = loadImage("assets/ghost.png");
  bg = loadImage("assets/bg.png");
  imageMode(CENTER);
  colorMode(HSB);

  for (let i = 0; i < 1; i++) {
    ghosts.push(new Ghost1());
    ghosts.push(new Ghost2());
    ghosts.push(new Ghost3());
    ghosts.push(new Ghost4());
  }


  spritePos = createVector(width / 2, height / 2);

}

function draw() {
  switch (state) {
    case 0:
      image(bg, width / 2, height / 2, width, height);
      fill('black');
      textSize(32);
      textAlign(CENTER);
      text('USE WASD OR ARROW KEYS\nClick to play', width / 2, height / 2);
      break;

    case 1:
      song.play();
      state = 2;

    case 2:
      game();
      break;

    case 3:
      fill('black');
      noStroke();
      textSize(32);
      textAlign(LEFT);
      text('PAUSED', 50, 50);
      break;

    case 4:
      sound1.play();
      state = 5;

    case 5:
      background('black');
      fill('white');
      stroke('black');
      strokeWeight(8);
      textSize(32);
      textAlign(CENTER);
      for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].display();
        //ghosts[i].move();
      }
      image(sprite_lose, spritePos.x, spritePos.y, 100, 100);
      text('GAME OVER', width / 2, 50);
      text('Click to try again', width / 2, height - 50);
      break;

    case 6:
      sound2.play();
      state = 7;

    case 7:
      colorBG();
      fill('black');
      noStroke();
      textSize(32);
      textAlign(CENTER);
      for (let i = 0; i < ghosts.length; i++) {
        ghosts[i].display();
        //ghosts[i].move();
      }
      image(sprite_win, spritePos.x, spritePos.y, 100, 100);
      text('YOU WIN!', width / 2, 50);
      text('Click to play again', width / 2, height - 50);
      break;

  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(keyCode = 65)) spritePos.x -= 5;
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(keyCode = 68)) spritePos.x += 5;
  if (keyIsDown(UP_ARROW) || keyIsDown(keyCode = 87)) spritePos.y -= 5;
  if (keyIsDown(DOWN_ARROW) || keyIsDown(keyCode = 83)) spritePos.y += 5;
}

function colorBG() {
  const inc = height / 100;
  for (let y = 0; y < height; y += inc) {
    let h = y / height * 360;
    fill(abs(h - cOffset) % 360, width, height);
    noStroke();
    rect(0, y - inc, width, y);
  }
  cOffset += 5;
}

function game() {
  image(bg, width / 2, height / 2, width, height);

  fill('black');
  noStroke();
  textSize(32);
  textAlign(RIGHT);
  text(timerValue, width - 50, 50);
  if (timerValue > 0) {
    timerValue--;
  }
  if (timerValue == 0) {
    state = 6;
    timerValue = 30 * 60;
  }

  if (ghostTimer < 5 * 60) {
    ghostTimer++;
  }
  if (ghostTimer == 5 * 60) {
    ghosts.push(new Ghost5());
    ghostTimer = 0;
  }


  for (let i = 0; i < ghosts.length; i++) {
    ghosts[i].display();
    ghosts[i].move();
    if (ghosts[i].pos.dist(spritePos) < 80) {
      state = 4;
    }
  }

  checkForKeys();

  if (spritePos.x > width) spritePos.x = 0;
  if (spritePos.x < 0) spritePos.x = width;
  if (spritePos.y > height) spritePos.y = 0;
  if (spritePos.y < 0) spritePos.y = height;

  image(sprite, spritePos.x, spritePos.y, 100, 100);
}

function resetGame() {
  ghosts = [];
  for (let i = 0; i < 1; i++) {
    ghosts.push(new Ghost1());
    ghosts.push(new Ghost2());
    ghosts.push(new Ghost3());
    ghosts.push(new Ghost4());
  }
  spritePos = createVector(width / 2, height / 2);
  timerValue = 30 * 60;
  ghostTimer = 0;

}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;
    case 2:
      state = 3;
      break;
    case 3:
      state = 2;
      break;
    case 5:
      resetGame();
      state = 2;
      break;
    case 7:
      resetGame();
      state = 2;
      break;
  }

}

class Ghost1 {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {
    image(ghost, this.pos.x, this.pos.y, 100, 100);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
class Ghost2 {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 700);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {
    image(ghost, this.pos.x, this.pos.y, 100, 100);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
class Ghost3 {

  // constructor and attributes
  constructor() {
    this.pos = createVector(700, 100);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {
    image(ghost, this.pos.x, this.pos.y, 100, 100);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
class Ghost4 {

  // constructor and attributes
  constructor() {
    this.pos = createVector(700, 700);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {
    image(ghost, this.pos.x, this.pos.y, 100, 100);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
class Ghost5 {

  // constructor and attributes
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(random(255), random(255), random(255));
    this.width = random(30, 70);
  }

  // methods

  display() {
    image(ghost, this.pos.x, this.pos.y, 100, 100);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
