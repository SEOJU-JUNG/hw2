function setup() {
  createCanvas(600, 600);
}

var ballX = 30;
var ballSpeed = 4;

var ballX2 = 370;
var ballSpeed2 = 8;

var ballX3 = 20;
var ballSpeed3 = 12;

var ballX4 = 20;
var ballSpeed4 = 4;

var ballX5 = 120;
var ballSpeed5 = 7;

function draw() {
  background('#fff');
  noStroke();
  
  //X Yellow Big ball
  fill('#F2E205');
  ellipse( 200,ballX, 300);
  
  //X2 Sky ball
  fill('#05DBF2');
  ellipse(200, ballX2, 150);
  
  //X3 Blue ball
  fill('#447EF2');
  ellipse(ballX3, 500, 90);
  

  
  //Orange ball
  fill('#F2A444');
  ellipse(350,ballX5, 100);
  
  
  //Red ball
  fill('#F20530');
  ellipse(ballX2, ballX2, 30);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  ballX3 = ballX3 + ballSpeed3;
  ballX4 = ballX4 + ballSpeed4;
   ballX5 = ballX5 + ballSpeed5;

  //yellow
  if (ballX >= 450) {
    ballSpeed = -3;
  }
  
  if (ballX <= 150) {
    ballSpeed = 3;
  }

  //sky 
  if (ballX2 >= 525) {
    ballSpeed2 = -5;
  }
    if (ballX2 <= 75) {
    ballSpeed2 = 8;
  }
  
  // blue ball
  if (ballX3 >= 600) {
    ballSpeed3 = -12;
  }


  if (ballX3 <= 0) {
    ballSpeed3 = 12;
  }
  
  
  //blue big ball- horizontal 
   if (ballX4 >= 600) {
    ballSpeed4 = 2;
  }
  
   if (ballX4 <= 0) {
    ballSpeed4 = 3;
  }
  
  //orange ball- vertical
   if (ballX5 >= 600) {
    ballSpeed5 = -8;
  }
  
   if (ballX5 <= 0) {
    ballSpeed5 = 8;
  }

}
