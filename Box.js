class Box{
  constructor(x, y, width, height,color){

    this.width = width;
    this.height = height; 
    this.color = color;
    this.Visiblity = 255;
    //this.image = loadImage("brick for box.png")
    this.body = Bodies.rectangle(x,y,width,height,{isStatic: false, friction:10, density: 2.5});
    World.add(world,this.body);

  }

  display(){
    if(this.body.speed < 3){
    var pos = this.body.position;
    var color = this.color;
    fill(color);
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    //imageMode(CENTER);
    //image(this.image,pos.x,pos.y,this.width,this.height);
    
    }
    else{
      World.remove(world,this.body);
      push();
      tint(255, this.Visiblity);
      this.Visiblity = this.Visiblity - 5; 
      pop();
    }
  }

  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
      score++;
    }
  }

}
