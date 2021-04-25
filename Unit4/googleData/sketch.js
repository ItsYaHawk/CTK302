// https://docs.google.com/spreadsheets/d/16pYzCbvT4H-CmKOxpUuJ3xIE1ZFYtO0mFiM4WS8hf8Q/edit?usp=sharing
// https://forms.gle/xvkwQYi3H2j4YgwY8

let bubbles = [];
let hamburger, hotdog, bg, song;

function preload() {
  song = loadSound("song.flac");
}

function setup() {
  hamburger = loadImage("hamburger.png");
  hotdog = loadImage("hotdog.png");
  bg = loadImage("bg.jpg");
  song.loop();
  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '16pYzCbvT4H-CmKOxpUuJ3xIE1ZFYtO0mFiM4WS8hf8Q'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Food)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  // background('blue');
  image(bg, 0, 0, width, height);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
}


// my Bubble class
class Bubble {

  constructor(myName, myFood) {
    this.name = myName;
    this.food = myFood;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-1, 1), random(-1, 1));

  }


  display() {
    if (this.food == "Hot Dog") {
      // rect(this.pos.x, this.pos.y, 50, 50);
      image(hotdog, this.pos.x, this.pos.y, 50, 50);
    } else {
      // ellipse(this.pos.x, this.pos.y, 50, 50);
      image(hamburger, this.pos.x, this.pos.y, 50, 50);
    }

    text(this.name, this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
