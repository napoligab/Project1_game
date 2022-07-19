class Player {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
  
    }
  
    drawPlayer() {
      this.ctx.fillStyle = "blue";
      this.ctx.fillRect(this.x + 28 , this.y + 28, 20, 20);
    }

    moveUp() {
      if(this.y !== 300) {
        this.y -= 75
      }
    }
    
    moveDown() {
        if(this.y !== 450) {
            this.y += 75
        }
    }

    moveLeft() {
        if(this.x !== 370) {
            this.x -= 75
          }
    }

    moveRight() {
        if(this.x !== 520) {
            this.x += 75
          }
    }

    hit(moles){
      if(this.x === moles[0].x && this.y === moles[0].y){
        return true
      } else {
        return false
      }
    }

  }