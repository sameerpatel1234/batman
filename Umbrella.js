class Umbrella {
      
     constructor(radius){
          var options = {
               isStatic = true,
               restitution = 0.5
               
          };
         
          this.body = Matter.Bodies.circle(100,450, radius, options);
          this.width = radius;
          this.height = radius;
          World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
          image(man_image, pos.x, pos.y);
     }
}