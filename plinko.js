class Plinko{

    constructor(x,y,r){
    var options={
    
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:0.3
    
    }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    //this.image = loadImage("Images/th.png");
    World . add(world,this.body)
    }
    display(){
        
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill("white")
    ellipseMode(RADIus);
    ellipse( 0, 0, this.r, this.r);
    pop()
    
    
    }
    
    
    
    
    }