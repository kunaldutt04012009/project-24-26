
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bin1;
var paperball;
var dustbinImg,paperImg

function preload(){
	dustbinImg=loadImage("dustbn.png");
	paperball=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	

	 bin1=new Bin();
	 paperball=new Paper();
	 
	 

	Engine.run(engine);
	
}


function draw() {
	background(0);
    Engine.update(engine);
    rectMode(CENTER);
  
  
  drawSprites();
  bin1.display();
  paperball.display();
 

}



