class Box {
    constructor(x,y,color) {
      var options = {
        friction:1.2,
        density:1.0
      }
     
  
      this.color = color;
      this.visibility = 255;
      this.body = Bodies.rectangle(x,y,30,40,options)
      World.add(world,this.body);
    }
    

  
    display() {
      
    

      if(this.body.speed<7){
        var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      rect(0,0,30,40);
      pop();
      }else{
      World.remove(world,this.body);
      push();
      this.visibility=this.visibility-5;
      pop();
      
      }
    }
    score(){
      if(this.speed>9){
        score++;
      }
    }
   
    
  }
