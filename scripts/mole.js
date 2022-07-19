class Mole {
  constructor(game) {
    this.game = game;
    this.x =
      this.game.holes[Math.floor(Math.random() * this.game.holes.length)].x;
    this.y =
      this.game.holes[Math.floor(Math.random() * this.game.holes.length)].y;

  }

  drawEnemy() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(this.x, this.y, 75, 75);
  }
  
}
