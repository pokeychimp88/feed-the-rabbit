var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves,leavesImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png")
  leavesImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  createApples()
  createLeaves()

  drawSprites();
}
function createApples(){
 
 if(frameCount%100===0){
  apple = createSprite(random(50,350),40,10,10)
 apple.addImage(appleImg)
 apple.scale=0.1
 apple.velocityY=2
  apple.lifetime=200
 }

}
function createLeaves(){
  if(frameCount%150===0){
    leaves = createSprite(random(50,350),40,10,10)
   leaves.addImage(leavesImg)
   leaves.scale=0.1
   leaves.velocityY=2
    leaves.lifetime=200
   }


}