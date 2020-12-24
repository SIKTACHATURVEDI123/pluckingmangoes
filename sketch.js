
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Mango  ,Stone  , boy , boy1 ,  tree ;



function preload()
{
	boy1 =loadImage("Plucking+mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy =createSprite(200 , 350 , 50 , 70 )
boy.addImage(boy1)

World.add(world , boy)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



