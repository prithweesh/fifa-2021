class Goalkeeper{
    constructor(x,y){
        var option={
           restitution:0.1,
           friction:0.1,
           isStatic:true,
        }
        this.goalkeeper=Bodies.rectangle(x,y,50,150,option);
        this.width=50;
        this.height=150;
        this.goalkeeper.image=loadImage("images/goalkeeper.png");
       // this.rightSideDive.image=loadImage("images/GKrightdive.png");
        //this.rightSideUpDive.image=loadImage("images/th (4).jpg");
        World.add(world,this.goalkeeper);
    }
    display(){
        var pos=this.goalkeeper.position;
        imageMode(CENTER);
        image(this.goalkeeper.image,pos.x,pos.y,150,200)
    }
}