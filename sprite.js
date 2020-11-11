function Peao(img, x, y, z, a) {
    this.srcX = z;
    this.srcY = a;
    this.width = 30;
    this.height = 54;
    this.posX = x;
    this.posY = y;
    this.img = img;

    this.move = function(x, y) {
      this.posX = x;
      this.posY = y;
    }

    this.draw = function(ctx) {
        ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
    }
}
