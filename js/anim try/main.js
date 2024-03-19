const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var EFFECT = class {
  constructor(position, sprite, frame = 8) {
    this.x = position.x
    this.y = position.y
    this.image = new Image()
    // this.image.src = './img/smokeExplosion.png'
    // this.image.src = '/img/blood1.png'
    // this.image.src = '/img/Hit1.png'
    this.image.src = './impact03.png'
    // this.image.src = './img/Attack2.png'
    // img\effects\throws\Hit3.png
    // this.image.src = sprite
    // this.image.src = './img/Firebolt.png'
    this.spriteWidth = this.image.width
    this.spriteHeight = this.image.height
    this.maxFrame = frame
    this.width = this.spriteWidth / this.maxFrame
    this.height = this.spriteHeight / this.maxFrame
    this.gameFrame = 0
    this.staggerFrame = 6
    this.framey = 0
    this.framex = 0
    this.frame = 0
    this.framesElapsed = 0
    this.framesHold = .5
    this.canDelete = false
    this.smoke = new Image()
  }
  draw(c) {
    // console.log(this.image)
    //   this.x += this.speed;

    //   c.fillStyle = 'green'
    // c.beginPath()
    // c.fillRect(
    //   this.x,
    //   this.y,
    //   60,
    //   80
    // )
    // c.stroke()
    console.log(this.x)
    c.drawImage(
      this.image,
      this.framex * this.width,
      this.framey * this.width,
      this.width,
      this.height,
      // this.x - this.spriteWidth / 2 + 50,
      // this.y - this.spriteHeight / 2,
      // 20,
      this.x,
      this.y,
      600,
      600
    )

    // this.framex++;
    // this.framex++

    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framex < this.maxFrame - 1) {
        this.framex++
      } else {
        // this.canDelete = true
        this.framex = 0
        this.framey++;
      }
    }

    if(this.framey >= this.maxFrame - 1){
      this.framey = 0;
      this.canDelete = true

    }
  }




  update(c) {
    this.draw(c)
  }
}

const effects = []


function name(params) {
  requestAnimationFrame(name)
  ctx.clearRect(0,0,canvas.width,canvas.height)
  // ctx.clearContext('2d')  
  // eff.draw(ctx)
  
  effects.forEach(eff => {
    
    if(eff.canDelete){
      effects.pop();
      console.log(444)
    }

    eff.update(ctx)
  })
}

name()

window.addEventListener('keydown', (e) => {
  if (e.key === 'b') {
    effects.push(new EFFECT({ x: canvas.width/2, y: canvas.height/3 }))
  }
})


