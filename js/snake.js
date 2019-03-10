/*
My rendition of the popular snake game. The snake will be drawn as a line of small circles.
*/

let canvas;
let canvas_size = [1000, 500];
let snake_head = [canvas_size[0]/2, canvas_size[1]/2];
let unit_radius = 5;
let speed_scalar = 2;

let snake = {
  head: snake_head,
  dir: [1, 0],
  speed: [1, 0],

  // 2D array to hold list of points
  body: [snake_head],

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
  }
};

function setup()
{
  canvas = createCanvas(canvas_size[0], canvas_size[1]);
  canvas.parent("sketch");
  background(0);
}

function draw()
{
  background(0);
  snake.draw();
  snake.move();
}

function keyPressed()
{
  let e = keyCode;
  switch (e)
  {
    case 37:
      snake.dir = snake.dir[0] != 1 ? [-1, 0] : snake.dir;
      break;
    case 38:
      snake.dir = snake.dir[1] != 1 ? [0, -1] : snake.dir;
      break;
    case 39:
      snake.dir = snake.dir[0] != -1 ? [1, 0] : snake.dir;
      break;
    case 40:
      snake.dir = snake.dir[1] != -1 ? [0, 1] : snake.dir;
      break;
  }
}
