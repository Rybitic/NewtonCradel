class Pendulum{
    constructor(x,y,color){
        var options = {
            restitution:1,
            friction:1,
            density:1.2,
            frictionAir:0.00005,
            slop:1,
            inertia:Infinity,
           
        }
        this.body = Bodies.rectangle(x,y,60,60,options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("white");
        fill("#F900FE");
        ellipse(0,0,60,60);
        pop();
    }
}