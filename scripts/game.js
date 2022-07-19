class Game {
  constructor(ctx, width, heigth, player ) {
    this.frames = 0;
    this.ctx = ctx;
    this.width = width;
    this.heigth = heigth;
    this.interval = null;
    this.speed = 0;
    this.score = 0;
    this.health = 5;
    this.holes = [
      { x: 370, y: 300, img: "" },
      { x: 370, y: 375, img: "" },
      { x: 370, y: 450, img: "" },
      { x: 445, y: 300, img: "" },
      { x: 445, y: 375, img: "" },
      { x: 445, y: 450, img: "" },
      { x: 520, y: 300, img: "" },
      { x: 520, y: 375, img: "" },
      { x: 520, y: 450, img: "" },
    ];
    this.enemies = [];
    this.player = player;
  }

  start() {
    this.interval = setInterval(this.updateGameArea, 1000 / 60);
  }

  drawArea = () => {
    this.holes.forEach((hole) => {
        this.ctx.clearRect(hole.x, hole.y, 75, 75)
        this.ctx.strokeRect(hole.x, hole.y, 75, 75);
    });
  };

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.heigth);
  }
  
  createMole() {
    if (this.frames % (100 - this.speed) === 0) {
      this.enemies = [];
      this.enemies.push(new Mole(this));
    }
  }

  statusBoard() {
    this.ctx.fillStyle = 'rgb(95, 158, 160)';
    this.ctx.fillRect(770, 25, 115, 72);
    this.ctx.font = '20px sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`score: ${this.score}`, 780, 50)
    this.ctx.font = '20px sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`health: ${this.health}`, 780, 80)
  }

  updateScore() {
    this.score++;

  }

  updateSpeed() {
    this.speed += 5;
  }

  updateHealth() {
    this.health -= 1;
  }

  statusBoard() {
    this.ctx.fillStyle = 'rgb(95, 158, 160)';
    this.ctx.fillRect(770, 25, 115, 72);
    this.ctx.font = '20px sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`score: ${this.score}`, 780, 50)
    this.ctx.font = '20px sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(`health: ${this.health}`, 780, 80)
  }

  updateGameArea = () => {
    this.frames++;
    this.clear();
    this.drawArea();
    this.createMole();
    this.enemies.forEach((enemy) => {
        enemy.drawEnemy();
    });
    this.player.drawPlayer();
    this.statusBoard();
  };
}