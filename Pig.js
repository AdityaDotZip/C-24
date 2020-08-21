class Pig{
    constructor(x, y){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0
        } 
        
        this.body = Bodies.rectangle(x, y, 50, 50, options);

        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;

        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, 50, 50);
    }


}