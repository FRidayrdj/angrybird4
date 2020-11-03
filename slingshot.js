class Slingshot 
{
    constructor (body1,pointB)
    {
        var option = 
        {
            bodyA :body1,
            pointB :pointB,
            stiffness:0.08,
            length:10,
        }
        this.pointB = pointB;
        this.sling = Constraint.create(option);
        World.add(world,this.sling)
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        }

    display() 
    {
        if (this.sling.bodyA)
        {
            if (this.sling.bodyA.position.x<220)
            {
                strokeWeight (7);
                stroke(48,22,8)
                
            line ( this.sling.bodyA.position.x-25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y-3)
            line ( this.sling.bodyA.position.x-25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y-3)
            image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)
            }
            else
            {
                strokeWeight (5);
                stroke(48,22,8)
                
            line ( this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y-3)
            line ( this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y-3)
            image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30)
            }
 
        }
        image(this.sling1,200,20);
        image(this.sling2,175,20);
    }

fly()
{
    this.sling.bodyA=null;
}    

attach(body)
{
    this.sling.bodyA=body;
}

}


