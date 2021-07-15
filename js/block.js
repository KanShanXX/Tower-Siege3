class Block   {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.0,
            
        }
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed < 3){
          super.display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }

      score() {
        if(this.visibility<0 && this.visibility>-105) {
          score++;
        }
      }
}