const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var score = 0;
var hexagon1,hexagonImg, pointToJoin;
//area 1 boxes
var ground1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
//area 2 boxes
var ground2,bx1,bx2,bx3,bx4,bx5,bx6,bx7,bx8,bx9,bx10,bx11,bx12,bx13,bx14,bx15;

function preload() {
  hexagonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1530,750);

  engine = Engine.create();
  world = engine.world;

  hexagon1 = Bodies.circle(300,500,20,{density: 2});
  World.add(world,hexagon1);


  pointToJoin = new SlingShot(hexagon1,{x: 300, y:500});

  ground1 = new Ground(680,560,220,20);
  box14 = new Box(620,470,"blue");
  box15 = new Box(650,470,"blue");
  box16 = new Box(680,470,"blue");
  box17 = new Box(710,470,"blue");
  box18 = new Box(740,470,"blue");
  box19 = new Box(635,400,"green");
  box20 = new Box(665,400,"green");
  box21 = new Box(695,400,"green");
  box22 = new Box(725,400,"green");
  box23 = new Box(650,370,"yellow");
  box24 = new Box(680,370,"yellow");
  box25 = new Box(710,370,"yellow");
  box26 = new Box(665,330,"orange");
  box27 = new Box(695,330,"orange");
  box28 = new Box(680,290,"red");

  ground2 = new Ground(1100,400,150,20);
  bx6 = new Box(1055,330,"white");
  bx7 = new Box(1085,330,"white");
  bx8 = new Box(1115,330,"white");
  bx9 = new Box(1145,330,"white");
  bx10 = new Box(1070,290,"black");
  bx11 = new Box(1100,290,"black");
  bx12 = new Box(1130,290,"black");
  bx13 = new Box(1085,250,"white");
  bx14 = new Box(1115,250,"white");
  bx15 = new Box(1100,210,"black");
}

function draw() {
  background("lightblue");
  

  Engine.update(engine);

  textSize (24);
  text("Knock all the blocks down by clicking and dragging on the hexagon!", 200,200);
  text("Press 'Space' to launch again!", 200,240);

  push();
  imageMode(CENTER);
  image(hexagonImg,hexagon1.position.x,hexagon1.position.y,40,40);
  pop();

 score=score+Math.round(getFrameRate()/130);
  text("SCORE: "+ score,750,40);
  console.log(score);

  pointToJoin.display();


  ground1.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  
  ground2.display();
  bx6.display();
  bx7.display();
  bx8.display();
  bx9.display();
  bx10.display();
  bx11.display();
  bx12.display();
  bx13.display();
  bx14.display();
  bx15.display();

  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  bx6.score();
  bx7.score();
  bx8.score();
  bx9.score();
  bx10.score();
  bx11.score();
  bx12.score();
  bx13.score();
  bx14.score();
  bx15.score();

  
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(hexagon1,{x: 300,y: 500});
    pointToJoin.attach(hexagon1);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(hexagon1,{x: mouseX,y: mouseY});
}

function mouseReleased() {
  pointToJoin.fly();
} 
