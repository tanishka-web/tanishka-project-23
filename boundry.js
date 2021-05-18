class Boundry{
constructor(x,y,width,height){
var options={

   isStatic:true
}
this.b=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.b);
}

display(){
    
var pos=this.b.position;
rectMode(CENTER);
fill(250,0,0);
rect(pos.x,pos.y,this.width,this.height)

}


}