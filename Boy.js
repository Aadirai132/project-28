class Boy
{
  constructor(x, y, width, height) {
  var options = {
    isStatic:true,
      restitution:0,
      friction:3,
      density:0.2
  }
  
  this.body = Bodies.rectangle(x, y,this.width,this.height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display()
{
  fill("pink");
  stroke("black");
  strokeWeight("4");
  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,this.width, this.height);
}
}