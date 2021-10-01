var cuboMouse, cubo2;

function setup() {
  createCanvas(800,400);
  cuboMouse =createSprite(400, 200, 50, 50);
  cuboMouse.shapeColor ="green";
  cubo2 = createSprite(200, 200, 50, 50);
  cubo2.shapeColor ="green";

}

function draw() {
  background(255,255,255);  
cuboMouse.x = World.mouseX;
cuboMouse.y = World.mouseY;

if(cuboMouse.x-cubo2.x<cubo2.width/2+cuboMouse.width/2 
  &&cubo2.x - cuboMouse.x<cubo2.width/2+cuboMouse.width/2 
  &&cuboMouse.y - cubo2.y<cubo2.width/2+cuboMouse.width/2
  &&cubo2.y - cuboMouse.y<cubo2.width/2+cuboMouse.width/2){
cuboMouse.shapeColor = "red";
cubo2.shapeColor = "red";
}
else{
  cuboMouse.shapeColor = "green";
  cubo2.shapeColor = "green";
}



  drawSprites();
}