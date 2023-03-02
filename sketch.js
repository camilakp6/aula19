var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var wall1;
var wall2;
var climber;
var climberGroup;
var doorGroup;
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");

}

function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorGroup = new Group();
  climberGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
  wall1 = createSprite(10,0,10,1200);
  wall1.visible = false;
  wall2 = createSprite(590,0,10,1200);
  wall2.visible = false;


  
}

function draw(){
  background(0);

    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 3;
    }
    
    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 3;
    }
    
    if(keyDown("space")){
      ghost.velocityY = -10;
    }
    
    ghost.velocityY = ghost.velocityY + 0.8
    
    if(tower.y > 400){
      tower.y = 300
    }
   ghost.collide (wall1);
    ghost.collide (wall2);
    ghost.collide(climberGroup);
    spawnDoors();
    drawSprites();
    if (ghost.y<0||ghost.y>650){
      ghost.destroy()
      fill ("red");
      textSize(40);
      text("game over",230,250);
    }

}
 function spawnDoors(){
if (frameCount%300==0){
  door = createSprite (200,-50);
  door.addImage("door",doorImg);
  door.velocityY = 1;
  door.x = Math.round(random(120,400));
  climber = createSprite (200,10);
  climber.addImage("climber",climberImg);
  climber.velocityY = 1;
  climber.x = door.x;
  ghost.depth = door.depth;
  ghost.depth += 1;
  doorGroup.add(door);
  climberGroup.add(climber);
  door.lifetime = 650;
  climber.lifetime = 650;

}
 }            