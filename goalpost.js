class Goalpost{
    constructor(x,y){
        var option={
           isStatic:true,
        }
        this.goalpost=Bodies.rectangle(x,y,150,100,option);
        this.width=150;
        this.height=100;
        this.goalpost.image=loadImage("images/goalpost.png")
        World.add(world,this.goalpost);
    }
    display(){
        var pos=this.goalpost.position;
        imageMode(CENTER);
        image(this.goalpost.image,pos.x,pos.y,400,200)
    }
}