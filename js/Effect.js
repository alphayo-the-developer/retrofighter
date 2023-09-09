export default class Effect {
    constructor(x, y, speed, sprite) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.image = new Image();
      this.image.src = "./img/mainchar/projectile.png";
      this.width = this.image.width;
      this.height = this.image.height;
      this.gameFrame = 0;
      this.staggerFrame = 7;
      this.framey = 0;
    }
    draw(ctx) {
      // console.log(this.image)-
    //   this.x += this.speed;
      // ctx.fillRect(this.x,this.y,this.width,this.height)
      // ctx.drawImage(this.image,this.x,this.y)
  
    //   ctx.drawImage(this.image, this.x, this.y,this.image.width,this.image.height);
  
      let position = Math.floor(this.gameFrame / this.staggerFrame) % 3;
      console.log(position);
      this.frames = this.image.width * position;
      ctx.drawImage(
        this.image,
        this.frames,
        this.height * this.framey,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width / 3,
        this.height / 3
      );
      this.gameFrame++;
  
      //   if (
      //     position == 3 &&
      //     this.framey < 3
      //   ) {
      //     this.framey++;
      //   }
  
      //   if (this.framey == 3) {
      //     this.framey = 0;
      //   }
    }
  }
  