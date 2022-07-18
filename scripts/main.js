const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;

// creating the board
let holes = [
  {x: 370, y: 300, img: '', hasMole: false},
  {x: 370, y: 375, img: '', hasMole: false},
  {x: 370, y: 450, img: '', hasMole: false},
  {x: 445, y: 300, img: '', hasMole: false},
  {x: 445, y: 375, img: '', hasMole: false},
  {x: 445, y: 450, img: '', hasMole: false},
  {x: 520, y: 300, img: '', hasMole: false},
  {x: 520, y: 375, img: '', hasMole: false},
  {x: 520, y: 450, img: '', hasMole: false},
]

holes.forEach((hole) => {
  ctx.strokeRect(hole.x, hole.y, 75, 75);
})


function createMole(){
  let randomMole = Math.floor(Math.random() * holes.length) + 1;
  holes[randomMole].hasMole = true;
}


createMole()

holes.forEach(hole => {
console.log(hole);
});
