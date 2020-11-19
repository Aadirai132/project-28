class Mango
{ 
constructor(x, y, width, height) {
  var options = {
      isStatic:true,
      restitution:0,
      friction:1,
      //density:0
  }
  var radius = 15;
  this.body = Bodies.circle(x, y, radius, options);
  this.width = width;
  this.height = height;
 // this.image = loadImage("mango.png");
  World.add(world, this.body);
}
display(){
  //var angle = this.body.angle;
  push();
  //translate(this.body.position.x, this.body.position.y);
  //rotate(angle);
  fill("yellow");
  stroke("green");
  stroke(1);
  ellipseMode(CENTER);
  ellipse(this.body.position.x,this.body.position.y, this.width, this.height);
  pop();
}
}