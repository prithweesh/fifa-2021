const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Ronaldo,goalpost,goalkeeper;

function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;

    Ronaldo=new Player(150,410);
    goalpost=new Goalpost(350,100);
    goalkeeper= new Goalkeeper(350,150);
    ball=new Ball(300,400);
}

function draw(){
    background("green");
    Engine.update(engine);
    Ronaldo.display();
    goalpost.display();
    goalkeeper.display();
    ball.display();
    
    if (keyDown("space")){
        Ronaldo.shoot();
     }
}
