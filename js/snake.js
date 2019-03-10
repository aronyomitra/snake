/*
My rendition of the popular snake game. The snake will be drawn as a line of small circles.
*/

let canvas;
let canvas_size = [1000, 500];
let snake_head = [canvas_size[0]/2, canvas_size[1]/2];
let unit_radius = 5;

let snake = {
  head: snake_head,
  dir: 'l',

  // 2D array to hold list of points
  body: [snake_head],

  draw: function()
  {
    snake.body.forEach(function (e) {ellipse(e[0], e[1], unit_radius*2)});
  }
}

function setup()
{
  canvas = createCanvas(canvas_size[0], canvas_size[1]);
  canvas.parent("sketch");
  background(0);

  snake.draw();
}
