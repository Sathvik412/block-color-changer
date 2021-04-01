function setup() {
  createCanvas(800,800);
   block = createSprite(400, 200, 50, 50);
   block2 = createSprite(200,400,100,100)
   block.shapeColor="blue"
   block2.shapeColor="green"
   block3 = createSprite(100,400,75,75)
   block3.shapeColor="red"
   block4 = createSprite(300,100,25,25)
   block4.shapeColor="pink"
}

function draw() {
  background("purple"); 
  block.x= mouseX
  block.y= mouseY
  if(isTouching(block,block3)){
      block.shapeColor="red"
      block3.shapeColor="black"
    }
    else{block.shapeColor="blue"
    block3.shapeColor="green"}
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){
      return true
    }else{
     return false 
    } 
}