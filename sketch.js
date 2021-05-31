const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,ball1,ball2,ball3,ibox1,ibox2,ibox3,sbox1,sbox2,sbox3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    ball1 = new Rubber(150,540,50);
    ball2 = new Rubber(210,540,50);
    ball3 = new Rubber(180,500,50);

    ibox1 = new Ibox(1000,540,30,30,PI/2);
    ibox2 = new Ibox(1000,540,30,30,PI/2);
    ibox3 = new Ibox(1000,540,30,30,PI/2);

    sbox1 = new Sbox(1000,540,30,30,PI/2);
    sbox2 = new Sbox(1000,540,30,30,PI/2);
    sbox3 = new Sbox(1000,540,30,30,PI/2);

}

function draw(){
    background("lightBlue");     
    Engine.update(engine);


    plane.display();
    hammer.display();

    ball1.display();
    ball2.display();
    ball3.display();

    ibox1.display();
    ibox2.display();
    ibox3.display();

    sbox1.display();
    sbox2.display();
    sbox3.display();    
 
}