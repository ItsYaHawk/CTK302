// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0 ;
var temperature = 0;
var feelslike = 0;
var humidity = 0;
var pressure = 0;
var bg, font;


function setup() {
  createCanvas(400, 400);
  bg = loadImage("forrest.jpg");
  font = loadFont("Hallington.ttf");
  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?zip=61741,us&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=a3802e021a79fd4e1275a551a7e8869c'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString ;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  feelslike = weather.main.feels_like;
  humidity = weather.main.humidity;
  pressure = weather.main.pressure;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      stroke('white');
      strokeWeight(4);
      image(bg, 0, 0, 400, 400);
      fill('black');
      textFont(font, 24);
      text("What is the weather in " + weather.name + "?", 20, 25);
      text("windspeed is " + windspeed + "mph", 20, 50);
      text("temperature is " + temperature + "°F, feels like " + feelslike + "°F", 20, 75);
      text("humidity is " + humidity + "%, pressure is " + pressure + "hPa", 20, 100);


      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed/3;
      if (x > width) x = 0;

      //thermometer
      fill('#0068ff');
      rect(0,375,400,25);
      fill('red');
      rect(0,375,temperature,25);
      fill('black');
      stroke('black');
      strokeWeight(2);
      line(0,375,400,375);
      line(100,375,100,400);
      line(200,375,200,400);
      line(300,375,300,400);

      break;

  }
}
