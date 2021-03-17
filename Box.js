class Box {
    constructor(x,y,width,height){
        var options = 
    {
            'restituon' :0.8,
            'friction' :1.0,
            'density' :1.0,
        
    }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.visibility = 255;

    }
    display(){
         
        var pos = this.body.position;

        console.log(this.body.speed);

        if(this.body.speed < 3)
    {
        super.display();
    }

        else
        {
            World.remove(world,this.body);
            tint(255,this.visibility);
            this.visibility -=5;
        
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        }
        fill("white");

    }
}
