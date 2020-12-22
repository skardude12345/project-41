

class UmbrellaBoy {


  constructor(x, y) {
    this.body = Bodies.circle(x, y, 100, { isStatic: true });
    World.add(world, this.body);

    this.image = loadImage('boy with umbrella.png');

    this.radius = 100;
  }



  display() {
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius*2);
  }



}