class Chain{
    constructor (bird, log){
        var options = {
        bodyA : bird,
        bodyB : log,
        stiffness : 0.06
        }
        this.chain = Constraint.create(options);     
        World.add(world, this.chain); 
    }
     display(){
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
     }
}