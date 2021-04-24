const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;
function setup(){
    var canvas = createCanvas(400,400);
    engine - Engine.create();
    world - engine.world;
    var ground_options ={
        isStatic: true
    }
    

    object - Bodies.rectangle(200,100,50,50);
    World.add(world.object);

    var ball_options ={
        restitution: 1.0
    }

    console.log(object);
    console.log(object.position.x);
    console.log(object.position.y);
}

function draw(){
    background(0);
    
    rectMode(CENTER);
    rect(object,position,x,object,position,y,50,50);
    rect(200,200,50,50)

    ellipseMode(RADIUS);
    ellips(ball.position.x, ball, position, y,20,20);
}