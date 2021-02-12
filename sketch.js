
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(0);
	var ball = createSprite(80,600,16,16);
	var ground = createSprite(400,620,800,20);
	var binfloor = createSprite(600,600,90,10);
	var binright = createSprite(650,585,10,50);
	var binleft = createSprite(550,585,10,50);
	binfloor.shapeColor="white";
	binright.shapeColor="white";
	binleft.shapeColor="white";
	ball.shapeColor="#FF69B4";
	ground.shapeColor="yellow";
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  if (keyDown("space")) {
	  ball.setVelocity(4,4);
  }
  if(ball.y > 300){
	  ball.setVelocity(-4,-4);
  }
  if(ball.isTouching(binfloor)){
	  ball.setVelocity(0,0);
  }
  
  drawSprites();
 
}



