const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground, slingshot;
var stand1, stand2;
var polygon;

function preload() {
    polygon_img = loadImage("polygon.png");

}

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 580, 1200, 50);
    groundStand1 = new Ground(980, 420, 200, 20);
    groundStand2 = new Ground(550, 320, 200, 20);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);


    slingShot = new Slingshot(this.polygon,{x:100, y:200});

    text("Score:"+score, 750, 40);
    
    //ground stand 2 blocks
    block1 = new Block(629, 286, 40, 50)
    block2 = new Block(589, 286, 40, 50)
    block3 = new Block(549, 286, 40, 50)
    block4 = new Block(509, 286, 40, 50)
    block5 = new Block(469, 286, 40, 50)
    block6 = new Block(609, 236, 40, 50)
    block7 = new Block(569, 236, 40, 50)
    block8 = new Block(529, 236, 40, 50)
    block9 = new Block(489, 236, 40, 50)
    block10 = new Block(509, 186, 40, 50)
    block11 = new Block(549, 186, 40, 50)
    block12 = new Block(589, 186, 40, 50)
    block13 = new Block(529, 136, 40, 50)
    block14 = new Block(569, 136, 40, 50)
    block15 = new Block(549, 86, 40, 50)

    //ground stand 1 blocks
    block16 = new Block(940, 386, 40, 50)
    block17 = new Block(980, 386, 40, 50)
    block18 = new Block(1020, 386, 40, 50)
    block19 = new Block(1000, 336, 40, 50)
    block20 = new Block(960, 336, 40, 50)
    block21 = new Block(980, 286, 40, 50)
    
    
}   


function draw() {
    background("black");
    ground.display();
    groundStand1.display();
    groundStand2.display();
    fill("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("green");
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    fill("purple");
    block10.display();
    block11.display();
    block12.display();
    fill("orange");
    block13.display();
    block14.display();
    fill("blue");
    block15.display();
    fill("yellow");
    block16.display();
    block17.display();
    block18.display();
    fill("pink");
    block19.display();
    block20.display();
    fill("turquoise")
    block21.display();

    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40)

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
 
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased() {
slingShot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}