function Food()
{
  this.pos = [];
  this.isEaten = false;
  this.score = 10;

  this.initialize = function()
  {
    // Using the function i defined in my utilities library
    // I want the coordinates of food to be multiples of 10 (scaling_factor)
    // Hence, random(1, x)*10 will be a multiple of ten between 10 and x*10
    this.pos[0] = utilities.random(1, canvas_size[0]/scaling_factor - 1);
    this.pos[1] = utilities.random(1, canvas_size[1]/scaling_factor - 1);

    this.pos[0] *= scaling_factor; this.pos[1] *= scaling_factor;
  }

  this.draw = function()
  {
    rectMode(CENTER);
    if (!this.isEaten)
      rect(this.pos[0], this.pos[1], scaling_factor, scaling_factor);
  }
}
