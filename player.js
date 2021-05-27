class Player{
    constructor(x,y){
        var option={
           restitution:0.1,
           friction:0.1,
           isStatic:true,
        }
        this.player=Bodies.rectangle(x,y,50,150,option);
        this.width=50;
        this.height=150;
        this.player.image=loadImage("images/ronaldo-1.png");
        this.playerShoot.image=loadImage("images/shooting.png");
        World.add(world,this.player);
    }
    display(){
        var pos=this.player.position;
        imageMode(CENTER);
        image(this.player.image,pos.x,pos.y,250,300);
    }

    shoot(){
        var pos=this.player.position;
        imageMode(CENTER)
       
        image(this.playerShoot.image,pos.x,pos.y,250,300);

    }
}