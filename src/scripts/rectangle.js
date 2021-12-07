class Rectangle {
  constructor(ctx, x, y, startX, startY) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.startX = 10;
    this.endX = x-this.startX;
    this.startY = 10;
    this.endY = y-this.startY;
    this.color = 'rgb(200, 0, 0)';

    this.drawRect(this.color);
    this.changeColor = this.changeColor.bind(this);
  }

  drawRect(color) {
    this.color = color
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.startX, this.startY, this.endX, this.endY);

    // this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // this.ctx.fillRect(30, 30, 50, 50);
  }

  changeColor(e) {
    // debugger
    // e.clientX x pos
    // e.clientY y pos
    console.log(e.clientX, e.clientY)
    // console.log(e.clientY)
    // debugger
    // e
    if (e.clientX >= this.startX &&
        e.clientX <= this.endX &&
        e.clientY >= this.startY &&
        e.clientY <= this.endY) {
          this.drawRect('rgb(200, 200, 0)')
        }


  }



}

export default Rectangle;
