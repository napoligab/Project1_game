class Game {
  constructor(ctx, width, heigth /* , player */) {
    this.frames = 0;
    this.ctx = ctx;
    this.width = width;
    this.heigth = heigth;
    /* this.player = player; */
    this.obstacles = [];
    this.interval = null;
    this.holes = [
      { x: 370, y: 300, img: "", hasMole: false },
      { x: 370, y: 375, img: "", hasMole: false },
      { x: 370, y: 450, img: "", hasMole: false },
      { x: 445, y: 300, img: "", hasMole: false },
      { x: 445, y: 375, img: "", hasMole: false },
      { x: 445, y: 450, img: "", hasMole: false },
      { x: 520, y: 300, img: "", hasMole: false },
      { x: 520, y: 375, img: "", hasMole: false },
      { x: 520, y: 450, img: "", hasMole: false },
    ];
    this.enemies = [];
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
    if (this.frames % 60 === 0) {
      this.enemies = [];
      this.enemies.push(new Mole(this));
    }
  }

  updateGameArea = () => {
    this.frames++;
    this.clear();
    this.drawArea()
    this.createMole()
    this.enemies.forEach((enemie) => {
        enemie.drawEnemie();
    });
  };
}







// class Game {
//     constructor(ctx, width, heigth, player) {
//         this.frames = 0;
//         this.ctx = ctx;
//         this.width = width;
//         this.heigth = heigth;
//         this.player = player;
//         this.obstacles = [];
//         this.interval = null;
//     }

//     start() {
//         this.interval = setInterval(this.updateGameArea, 20);
//     }

//     clear() {
//         this.ctx.clearRect(0, 0, this.width, this.heigth);
//     }

//     stop() {
//         clearInterval(this.interval);
//     }

//     updateObstacles() {

//         for (let i = 0; i < this.obstacles.length; i++) {
//             this.obstacles[i].x -= 1;
//             this.obstacles[i].draw();
//         }

//         this.frames += 1;

//         if (this.frames % 120 === 0) {
//             let x = this.width;

//             let minHeight = 20;
//             let maxHeight = 200;
//             let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);

//             let minGap = 50;
//             let maxGap = 200;
//             let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

//             this.obstacles.push(new Component(20, height, 'green', x, 0, this.ctx));

//             this.obstacles.push(new Component(20, x - height - gap, 'green', x, height + gap, this.ctx));
//         }
//     }

//     checkGameOver = () => {
//         const crashed = this.obstacles.some((obstacle) => {
//             return player.crashWith(obstacle);
//         });

//         if(crashed) {
//             this.stop();
//         }
//     };

//     score() {
//         const points = Math.floor(this.frames / 5);
//         this.ctx.font = '24px sans-serif';
//         this.ctx.fillStyle = 'black';
//         this.ctx.fillText(`score: ${points}`, 850, 50);
//     }

//     updateGameArea = () => {
//         this.clear();
//         this.score();
//         this.checkGameOver();
//         this.updateObstacles();
//         this.player.newPos();
//         this.player.draw();
//     }
// }