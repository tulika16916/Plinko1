class Plinko{
        constructor(x,y){
            var options={
             'isStatic': true,
            }
            this.r=10
            this.x=x
            this.y=y
            this.body=Bodies.circle(this.x, this.y, this.r, options)
         
            World.add(world,this.body)
        }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            fill("white")
         // imageMode(CENTER);
        //  image(this.image, 0, 0, 150, 150);
            ellipse( 0, 0, this.r, this.r);
            pop();   
        }
       }
