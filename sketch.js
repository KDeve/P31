
var plinkos=[]
var particles=[]
var divisions=[]


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisionHeight=300;
var ground1


function setup() {
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for(var k=0; k <=innerWidth; k= k +80){
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	}
	
    for (var j=40; j<+width; j=j+50){

		plinkos.push(new Plinko(j,75));
	}
	
    for (var j=40; j<+width; j=j+50){

		plinkos.push(new Plinko(j,175));
	}

	for (var j=40; j<+width; j=j+50){

		plinkos.push(new Plinko (j,275));
	}
	for (var j=40; j<+width; j=j+50){

		plinkos.push(new Plinko(j,375));
	}
	
	for (var j=0; j< particles.length; j++){
		particles[j].display
	}
	for (var k=0; k< divisions.length; j++){
		divisions[k].display
	}
	ground1=new Ground(300,650,600,20)
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground1.display();
 
}



