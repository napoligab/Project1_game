const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

// creating the player
const player = new Component(30, 30, 'blue', 0, 110, ctx);

// creating the game
const game = new Game(ctx, cWidth, cHeight, player);

game.start();


document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
            player.speedY -= 1
            break;
        case 'ArrowDown':
            player.speedY += 1
            break;
        case 'ArrowLeft':
            player.speedX -= 1
            break;
        case 'ArrowRight':
            player.speedX += 1
            break;
    }
});

document.addEventListener('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;
})