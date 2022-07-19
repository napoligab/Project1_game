const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

const player = new Player(ctx, 445 , 375 )
const game = new Game(ctx, cWidth, cHeight, player);
game.start()

document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
            player.moveUp();
            break;
        case 'ArrowDown':
            player.moveDown();
            break;
        case 'ArrowLeft':
            player.moveLeft();
            break;
        case 'ArrowRight':
            player.moveRight();
            break;
        case 'Space':
            //if hit
            //if(player.hit(game.enemies)){
                //score + 1
                //if(/* score % 6 === 0 && score > 0 */){
                    //speed + 10
              //  }
           // } else {

           // }

            break;
    }
});