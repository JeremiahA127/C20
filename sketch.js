
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball1, ground1
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  var ball1_options = {
    restitution: 0.5,
    frictionAir:0.03
  }
   var ground_options ={
     isStatic: true
   }
  

  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball1 = Bodies.circle(350,10,20,ball1_options);
  World.add(world,ball1);
  rectMode(CENTER);
   ellipseMode(RADIUS);
   ground1 = Bodies.rectangle(300,200,200,15,ground_options);
  World.add(world,ground1);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(ground1.position.x,ground1.position.y,200,15);
  ellipse(ball1.position.x,ball1.position.y,20);
}

