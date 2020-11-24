var wall ,thickness
var Bullet,speed,weight

function setup() {
  createCanvas(600,600);

  speed = random(50,100)
  weight = random(400,1500)

  thickness=random(55,100)

  Bullet=createSprite(50,200,50,5);
  Bullet.velocityX=speed;
  Bullet.shapeColor="black"

  wall=createSprite(550,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}
function hascollided(){
  BulletRightEdge=lBullet.x+Bullet.width;
  wallLeftEdge=lwall.x;
  if(BulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;

if(hascollided(Bullet,wall)){
  Bullet.velocityX=0;
  var damage=0.5*width*speed*speed/(thickness*thickness*thickness)
}

if(damage>10)
{
  wall.shapeColor="red"
}

if(damage<10)
{
  wall.shapeColor="green"
}

}

function draw(){

  background(255);
  Bullet.display();
  wall.display();

}