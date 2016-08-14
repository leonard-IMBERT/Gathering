function Renderer(parent, width, height, scale) {
  this.canvas = document.createElement('canvas');

  this.scale = scale || 1;
  this.width = +width || 200;
  this.height = +height || 200;

  this.canvas.style.width = this.width + 'px';
  this.canvas.style.height = this.height + 'px';
  this.canvas.height = this.height;
  this.canvas.width = this.width;

  this.ctx = this.canvas.getContext('2d');

  parent.appendChild(this.canvas);
};

Renderer.prototype.reset = function (r, g, b) {
  if(r != undefined && g != undefined && b != undefined) {
    this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  } else {
    this.ctx.fillStyle = 'rgb(255,255,255)';
  }

  this.ctx.fillRect(-1, -1, this.width + 1, this.height + 1);
};

Renderer.prototype.drawEntity = function (obj) {
  this.ctx.fillStyle = obj.style || `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;

  this.ctx.fillRect(obj.x, obj.y, 10 * this.scale, 10 * this.scale);
};

Renderer.prototype.drawPopulation = function (pop) {
  for(i of pop) this.drawEntity(i);
};

module.exports = Renderer;
