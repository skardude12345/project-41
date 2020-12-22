class Drop {


  constructor(x, y) {
    this.body = Bodies.circle(x, y, 3, { friction: 1});
    World.add(world, this.body);

    this.radius = 3
  }



  display() {
    push()
    fill("blue");
    ellipse(this.body.position.x, this.body.position.y, this.radius * 2, this.radius * 2);
    pop()
    
  }


  update() {
    if (this.body.position.y > height) {
      Body.setPosition(this.body, { x: random(0, 400), y: random(0, 400) });
    }
  }


}