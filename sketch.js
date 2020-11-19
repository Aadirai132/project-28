
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango4;
var mango6,mango7,mango8,mango9;
var ground,slingshot;
var tree,stone;
var Leaf;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,650,800,50);

  Leaf = new leaf(700,250,300,350);

  tree = new Tree(700,430,35,400);

  boy = new Boy(200,500,50,300);

  stone = new Stone(160,500,15,15);
  
  mango1 = new Mango(700,290,25,35);
  mango2 = new Mango(630,390,20,30);
  mango3 = new Mango(780,390,20,30);
  mango4 = new Mango(650,250,20,35);
  mango5 = new Mango(730,240,25,30);
  mango6 = new Mango(610,170,20,30);
  mango7 = new Mango(580,259,25,30);
  mango8 = new Mango(785,222,20,30);
  mango9 = new Mango(790,180,20,30);
  
  slingshot = new Sling(stone.body,{x:160,y:300});

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("lightBlue");
  ground.display();
  boy.display();
  
  tree.display();
  Leaf.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  
  stone.display();

  slingshot.display();
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  
  drawSprites();
  
}
 function keyPressed()
{
    Matter.Body.setPosition(stone.body,{x:160,y:500})
    slingshot = new Sling(stone.body,{x:160,y:300});
 
}
 function mouseDragged()
 {
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
 }


function mouseReleased()
{
  slingshot.fly();
  
}
function detectCollision(object1,object2)
{
  var mangoPos = object2.body.position;
  var stonePos = object1.body.position;
  var stoneRadius = 15;
  var mangoRadius = 15;
  var distnce=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
  
  if(distnce<=stoneRadius+mangoRadius)
  {
     Matter.Body.setStatic(object2.body,false);
     
  }
}


