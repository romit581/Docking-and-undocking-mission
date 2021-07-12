var bg,scImg1,scImg2,scImg3,scImg4
var issImg
var iss, spacecraft
var hasDocked = false

function preload() {
bg = loadImage("spacebg.jpg");
scImg1 =loadImage("spacecraft1.png");
scImg2=loadImage("spacecraft2.png");
scImg3 =loadImage("spacecraft3.png");
scImg4 =loadImage("spacecraft4.png");
issImg = loadImage("iss.png");

}

function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(280,240)
  spacecraft.addImage(scImg1)
  spacecraft.scale=0.15

  iss =createSprite(330, 130);
  iss.addImage(issImg)
  iss.scale=0.5
  
  


}

function draw() {
  background(bg);  
  if (!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scImg3)
    spacecraft.x=spacecraft.x-4
 } 
 if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(scImg4)
  spacecraft.x=spacecraft.x+4
}  
if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(scImg2)
  spacecraft.y=spacecraft.y+4
}  
if(keyDown("UP_ARROW")){
  spacecraft.y=spacecraft.y-4
} 



  }
  if (spacecraft.y<=(iss.y+60)&&spacecraft.x<=(iss.x-10)){
  hasDocked=true
  textSize(20)
  fill("red")
  text("Docking successful",200,300)

  }

  drawSprites();


}