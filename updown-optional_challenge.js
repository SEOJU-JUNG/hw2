function setup() {
  createCanvas(600, 600);
}


//sky
var ball ={
x:300, 
y:200,
xspeed:7,
yspeed:9
}

//yellow
var ball2 ={
x:300, 
y:500,
xspeed:3,
yspeed:9
}
//Blue
var ball3 ={
x:600, 
y:190,
xspeed:3.5,
yspeed:4.9
}


function draw() {
  background('#fff');
  noStroke();
  fill('#05DBF2');
  //sky
  ellipse(ball.x, ball.y, 34);
  
  if(ball.x >width || ball.x <0){
  ball.xspeed=ball.xspeed*-1;
  }
  if (ball.y> height||ball.y<0){
  ball.yspeed=ball.yspeed*-1;
  }
  
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y +ball.yspeed;
  
  
  //yellow
  fill('#F2E205');
  
  ellipse(ball2.x, ball2.y, 54);
  
  if(ball2.x >width || ball2.x <0){
  ball2.xspeed=ball2.xspeed*-1;
  }
  if (ball2.y> height||ball2.y<0){
  ball2.yspeed=ball2.yspeed*-1;
  }
  
  ball2.x = ball2.x + ball2.xspeed;
  ball2.y = ball2.y +ball2.yspeed;
  
  //blue
  fill('#447EF2');
  ellipse(ball3.x, ball3.y, 94);
  
  if(ball3.x >width || ball3.x <0){
  ball3.xspeed=ball3.xspeed*-1;
  }
  if (ball3.y> height||ball3.y<0){
  ball3.yspeed=ball3.yspeed*-1;
  }
  
  ball3.x = ball3.x + ball3.xspeed;
  ball3.y = ball3.y +ball3.yspeed;
}
