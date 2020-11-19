class Stone
{
  constructor(x, y, width, height) {
  var options = {
    isStatic:false,
      restitution:0,
      friction:3,
      density:0.2
  }
  var radius = 15;
  this.body = Bodies.circle(x, y,radius, options);
  this.width = width;
  this.height = height;
  //this.image = loadImage("stone.png");
  World.add(world, this.body);
}
display(){
  //var angle = this.body.angle;
  //push();
  //translate(this.body.position.x, this.body.position.y);
  //rotate(angle);
  fill("black");
  stroke("black");
  strokeWeight("4");
  ellipseMode(CENTER);
  ellipse(this.body.position.x,this.body.position.y,this.width, this.height);
 // pop();
}
getRadius(){
  return this.radius;
}
}