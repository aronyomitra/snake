/*
My rendition of the popular snake game. The snake will be drawn as a line of small circles.

Note: In various places when passing or initialize an array variable, I have used Array.concat()
This is because arrays are passed by reference and i need a separate copy in memory.
concat() returns exactly that
*/

let canvas;
let canvas_border = 10;
let canvas_size = [1000, 500];
let snake_head = [canvas_size[0]/2, canvas_size[1]/2];
let unit_radius = 5;
let speed_scalar = 10;

let snake = {
  head: snake_head.concat(),
  dir: [1, 0],
  speed: [1, 0],

  // 2D array to hold list of points
  body: [snake_head.concat()],

  draw: function()
  {
    snake.body.forEach(function (e) {ellipse(e[0], e[1], unit_radius*2)});
  },

  move: function()
  {
    snake.speed[0] = snake.dir[0]*speed_scalar;
    snake.speed[1] = snake.dir[1]*speed_scalar;
    snake.head[0] += snake.speed[0];
    snake.head[1] += snake.speed[1];
    snake.body.unshift(snake.head.concat());
    snake.body.pop();
  }
};

function setup()
{
  canvas = createCanvas(canvas_size[0], canvas_size[1]);
  canvas.parent("sketch");

  frameRate(10);
  background(0);
}

function draw()
{
  background(0);
  snake.draw();
  snake.move();

  // For debug
  //document.getElementById("info").innerHTML = snake.body.join('|');
}

function keyPressed()
{
  let e = keyCode;
  switch (e)
  {
    case 37:
    case 65:
      snake.dir = snake.dir[0] != 1 ? [-1, 0] : snake.dir;
      break;
    case 38:
    case 87:
      snake.dir = snake.dir[1] != 1 ? [0, -1] : snake.dir;
      break;
    case 39:
    case 68:
      snake.dir = snake.dir[0] != -1 ? [1, 0] : snake.dir;
      break;
    case 40:
    case 83:
      snake.dir = snake.dir[1] != -1 ? [0, 1] : snake.dir;
      break;
  }
}

// Clicking will increase the length of the snake by one
function mousePressed()
{
  snake.body.length++;
}
