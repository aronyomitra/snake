/*
My rendition of the popular snake game. The snake will be drawn as a line of small circles.

Note: In various places when passing or initialize an array variable, I have used Array.concat()
This is because arrays are passed by reference and i need a separate copy in memory.
concat() returns exactly that
*/

// TBH The most important constant
let scaling_factor = 10;

let canvas;
let canvas_border = 10;
let canvas_size = [scaling_factor*100, scaling_factor*50];
let snake_head = [canvas_size[0]/2, canvas_size[1]/2];
let unit_radius = scaling_factor/2;
let score = 0;

let snake = {
  head: snake_head.concat(),
  dir: [1, 0],
  speed: [1, 0],

  // 2D array to hold list of points
  body: [snake_head.concat()],

  draw: function()
  {
    // The head should be red for visibility and the rest white
    fill(255, 0, 0);
    snake.body.forEach(function (e) {ellipse(e[0], e[1], unit_radius*2); fill(255)});
  },

  move: function()
  {
    snake.speed[0] = snake.dir[0]*scaling_factor;
    snake.speed[1] = snake.dir[1]*scaling_factor;
    snake.head[0] += snake.speed[0];
    snake.head[1] += snake.speed[1];
    snake.body.unshift(snake.head.concat());
    snake.body.pop();
  },

  eat: function()
  {
    if (utilities.isEqual(snake.head, crumb.pos))
    {
      snake.body.length++;
      score += crumb.score;

      crumb = new Food();
      crumb.initialize();
    }
  }
};

let crumb = new Food();
function setup()
{
  canvas = createCanvas(canvas_size[0], canvas_size[1]);
  canvas.parent("sketch");

  frameRate(10);
  background(0);

  crumb.initialize();
}

function draw()
{
  background(0);
  snake.draw();
  snake.move();
  snake.eat();

  crumb.draw();

  // Display score
  document.getElementById('score').innerHTML = "Score: " + score;

  // For debug
  // document.getElementById("info").innerHTML = score;
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
