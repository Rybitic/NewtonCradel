const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var pendulum1;
var pendulum2;
var pendulum3;
var pendulum4;
var pendulum5;
var sling1;
var sling2;
var sling3;
var sling4;
var sling5;


function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

    pendulum1 = new Pendulum(200,400,"black");
    pendulum2 = new Pendulum(260,400,"black");
    pendulum3 = new Pendulum(320,400,"black");
    pendulum4 = new Pendulum(380,400,"black");
    pendulum5 = new Pendulum(440,400,"black");

    sling1 = new Sling(pendulum1.body,{x:200,y:100});
    sling2 = new Sling(pendulum2.body,{x:260,y:100});
    sling3 = new Sling(pendulum3.body,{x:320,y:100});
    sling4 = new Sling(pendulum4.body,{x:380,y:100});
    sling5 = new Sling(pendulum5.body,{x:440,y:100});



}

function draw(){
    background('#E6E6E6');
    
    Engine.update(engine);
    
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body,{x:mouseX, y:mouseY});
}
