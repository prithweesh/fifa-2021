class Ball{
    constructor(x,y){
        var option={
           restitution:0.5,
           friction:0.1,
           isStatic:true,
        }
        this.ball=Bodies.circle(x,y,50,option);
        this.radius=50;
        this.ball.image=loadImage("images/ball.png");
        World.add(world,this.ball);
    }
    display(){
        var pos=this.ball.position;
        imageMode(CENTER);
        image(this.ball.image,pos.x,pos.y,50,50);
    }
}