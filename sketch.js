var one,oneLeft,oneRight,oneTop;

function setup() {
  createCanvas(800,400);
 
 one = createSprite(400, 300, 500, 200);

 oneLeft=  createSprite(100,350,100,250);
 oneLeft.shapeColor= rgb(100,100,100);

 oneRight=  createSprite(700,350,100,250);
 oneRight.shapeColor= rgb(150,150,150);

 oneTop = createSprite(200,250);
}

function draw() {
  //background(random(0,255),random(0,255),random(0,255));  
  background("white");
  //graphics.drawPolygon(new int[] {10, 20, 30}, new int[] {100, 20, 100}, 3);
  
  drawSprites();
}