const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var boyUmbrella, lightning, lightningImg;
var rain = [];

function preload(){
  lightningImg = loadImage('lightning.png');
}

function setup() {
  createCanvas(500, 700);

  engine = Engine.create();
  world = engine.world;

  boyUmbrella = new UmbrellaBoy(200, height - 100);

  lightning = createSprite(250, 150, 20, 20);
  lightning.addImage(lightningImg);

}

function draw() {
  background(0);
  Engine.update(engine);

  lightning.visible = false;



  var maxDrops = 50;

  for (let i = 0; i < maxDrops; i++) {
    rain.push(new Drop(random(0, 400), random(0, 400)));
    rain[i].display();
    rain[i].update();
  }

  if (frameCount % 60 === 0) {
    lightning.visible = true;
  }

  
  

  drawSprites()
  boyUmbrella.display();
}