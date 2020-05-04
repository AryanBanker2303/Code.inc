var player, bulletGroup;

function setup(){
createCanvas(1500,700);
player = createSprite(width/2, height/2,20,20);
player.shapeColor = "green"
}

function draw(){
background("lime");
if(frameCount % 50  === 0){
spawnEnemiesTop();
spawnEnemiesLeft();
spawnEnemiesBottom();
spawnEnemiesRight();
}
if(keyWentDown(UP_ARROW)){
spawnBullets();
}
if(keyDown(RIGHT_ARROW)){
  player.rotation = player.rotation + 5;
}
if(keyDown(LEFT_ARROW)){
  player.rotation = player.rotation -5;
}

if(keyDown("w")){
player.velocityY = -4;
}

if(keyDown("s")){
  player.velocityY = 4;
  }
  
if(keyDown("a")){
  player.velocityX = -4;
  }
  
if(keyDown("d")){
  player.velocityX = 4;
  }
drawSprites();
}

function spawnEnemiesTop(){
var enemy = createSprite(random(0,1500),0,random(20,40),random(20,40));
enemy.shapeColor = "red";
enemy.velocityY = 10;
}
function spawnEnemiesLeft(){
  var enemy = createSprite(0,random(0,700),random(20,40),random(20,40));
  enemy.shapeColor = "violet";
  enemy.velocityX = 10;
  }``
  function spawnEnemiesBottom(){
    var enemy = createSprite(random(0,1500),700,random(20,40),random(20,40));
    enemy.shapeColor = "orange";
    enemy.velocityY = -10;
    }
    function spawnEnemiesRight(){
      var enemy = createSprite(1500,random(0,700),random(20,40),random(20,40));
      enemy.shapeColor = "blue";
      enemy.velocityX = -10;
      }

function spawnBullets(){
var bullet  = createSprite(player.x,player.y,10,30);
bullet.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
bullet.velocityY = random(-20,20);
bullet.velocityX = random(-20,20);
}      