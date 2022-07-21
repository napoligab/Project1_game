class Mole {
  constructor(game, img) {
    this.game = game;
    this.x =
      this.game.holes[Math.floor(Math.random() * this.game.holes.length)].x;
    this.y =
      this.game.holes[Math.floor(Math.random() * this.game.holes.length)].y;
    this.moleImg = new Image();
    this.moleImg.src = img

  }

  drawEnemy() {
    this.game.ctx.drawImage(this.moleImg, this.x, this.y, 50, 50);
    // this.game.ctx.fillStyle = "red";
    // this.game.ctx.fillRect(this.x, this.y, 75, 75);
  }
  
}
