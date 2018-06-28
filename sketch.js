const width = 640;
const height = 840;
const snakeSize = 20;
let x = 40;
let y = 20;
let direction = [0, 1];
const grid = 20;  // сетка, по которой бегает змейка
let snakespeed = 8;
let food = [60,60]; //
let snakeTail = [
  [x - grid, y],
  [x - 2 * grid, y]
];

function setup(){
  createCanvas(width, height)
  background('black');
  frameRate(snakespeed);
  generationFood();
}

function draw(){
  background("black")
  background('black');
  const snakeColor = color('white');
  fill(snakeColor);
  rect(x, y, snakeSize, snakeSize);

  for (let i = 0; i < snakeTail.length; i++) {
    rect(snakeTail[i][0], snakeTail[i][1], snakeSize, snakeSize);
  }

  for (let i = snakeTail.length - 1; i >= 1; i--) {
    arrayCopy(snakeTail[i-1], snakeTail[i]);
  }
  arrayCopy([x,y], snakeTail[0]);

  if(snakeTail[snakeTail.length - 1][0] === food[0] && snakeTail[snakeTail.length - 1][1] === food[1]){
    snakeTail.push(food);
    generationFood();
  }


  x = x + direction[0] * grid;
  y = y + direction[1] * grid;

  fill('red');
  rect(food[0], food[1], snakeSize, snakeSize);
}

function generationFood(){
  food = [floor(random(width / grid)) * grid, floor(random(height / grid)) * grid];
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
      direction = [-1, 0];
  }else if (keyCode === RIGHT_ARROW) {
      direction = [1, 0];
  }else if (keyCode === UP_ARROW){
      direction = [0, -1];
  }else if (keyCode === DOWN_ARROW){
    direction = [0, 1];
  }
}
