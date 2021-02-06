const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, box1;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,400,1200,50)
  
  box1 = new Box(850,350,75,75);
  box2 = new Box(700,350,75,75);
  box3 = new Box(850,180,75,75);
  box4 = new Box(700,180,75,75);
  box5 = new Box(780,100,75,75);

  pig1 = new Pig(780,350);
  pig2 = new Pig(780, 180);

  log1 = new Log(770,300,300,PI/2);
  log2 = new Log(770,150,300,PI/2);
  log3 = new Log (700,50,150,PI/7);
  log4 = new Log(800,50,150,-PI/7);

  bird = new Bird(50,100)
  
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
}