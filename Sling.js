class Sling
{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 50
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    fly()
    {
        this.slingshot.bodyA = null;
    }
    attach()
    {
        this.slingshot.position=160;
        this.slingshot.position.y = 500;
    }

    display()
    {
        if(this.slingshot.bodyA)
        {
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    } 
}