const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
  var particles=[]
  var plinkos=[]
  var divisions=[]
  var dh=300

var g;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  g=new Ground(400,780,800,30)

  for (var k = 0;k<=width;k=k+80){
    divisions.push(new Division(k,height-dh/2,10,dh));
  
}



for (var j = 40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));

}

for (var m = 15;m<=width-10;m=m+50){
  plinkos.push(new Plinko(m,175));

}
for (var n = 40;n<=width;n=n+50){
  plinkos.push(new Plinko(n,275));

}

for (var o = 15;o<=width-10;o=o+50){
  plinkos.push(new Plinko(o,375));
  }
}

function draw() {
  background("black"); 
  Engine.update(engine)

  g.display();

    
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  for(var m=0;m<plinkos.length;m++){
    plinkos[m].display();
  }
  for(var n=0;n<plinkos.length;n++){
    plinkos[n].display();
  }
  for(var o=0;o<plinkos.length;o++){
    plinkos[o].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    
    }
    
  for(var t=0;t<particles.length;t++){
    particles[t].display();
  }


}