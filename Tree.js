class Tree 
{
 constructor(x, y, width, height) {
  var options = {
    isStatic:true,
      restitution:0.8,
      friction:1.0,
      density:1.0
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  //this.image = loadImage("tree3.tif");
  World.add(world, this.body);
}
display(){
  //var angle = this.body.angle;
  console.log("IM IN");
  //push();
  //translate(this.body.position.x, this.body.position.y);
  //rotate(angle);
    fill("brown");
  stroke("brown");
  strokeWeight(4);
  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,this.width, this.height);
  //pop();
}
}