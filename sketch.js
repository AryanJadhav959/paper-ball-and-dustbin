
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	
	
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(250,630,10,10);
   

	side1 = new Side(1000,650,300,20);
	side2 = new Side(850,625,20,75);
	side3 = new Side(1150,625,20,75);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  


  side1.display();
  side2.display();
  side3.display();
  paper.display();
 


  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:10, y:-10});
	}
}