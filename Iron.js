class Iron {

constructor(x, y) {

var options = {
  restitution: 0.8,
  friction: 3,
  density: 30
}

  this.x = x;
  this.y = y;
  this.width = 80;
  this.height = 150;
  this.body = Bodies.rectangle(this.x, this.y, 80, 150, options);
  World.add(world, this.body);

  }

  display() {

  var pos = this.body.position;
  var angle = this.body.angle;
  
  push()

  translate(pos.x, pos.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(3);
  stroke("white");
  fill("grey");
  rect(0, 0, this.width, this.height);

  pop();

  }

}