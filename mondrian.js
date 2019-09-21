function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(240);
  strokeCap(SQUARE);
  noStroke();
  
    // Blue square
  fill('#719ED9');
  rect(300, 50, 250, 350);
  
    // Red square
  fill('#F2059F');
  rect(100, 0, 200, 50);
  
    // Skyblue square
  fill('#41F2E1');
  rect(100, 400, 200, 200);
  
  // green square
  fill('#B9F263');
  rect(0, 300, 100, 100);
  
  // green square small
  fill('#F2A25C');
  rect(0, 550, 100, 100);
  
   // green square small
  fill('#F2A25C');
  rect(300, 550, 250, 200);


stroke(0);
  strokeWeight(9);
  line(0, 50, 600, 50); // horizontal#1
  line(0, 300, 300, 300); // horizontal#2
  line(0, 400, 600, 400);// horizontal#3
   line(0, 550, 100, 550);// horizontal#4
   line(300, 550, 600, 550);// horizontal#5
  line(300,0, 300, 600);// vertical#2
 
  
 
stroke(0);
  strokeWeight(13); 
  line(100,0, 100, 50);// vertical#1
  line(100,300, 100, 600);// vertical#1-2
   line(550,50, 550, 600);// vertical#3
}
