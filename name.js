// var img = new Image()
// img.src =  "./img/Wizard/Idle.png"

var Canvas = document.querySelector('#canvas')
var img = document.querySelector('#bac')
Canvas.width = window.innerWidth
Canvas.height = window.innerHeight
var c = Canvas.getContext('2d')

const dd = document.querySelector('body');
var offscreenCanvas = document.createElement('canvas');

// console.log(img)
dd.appendChild(offscreenCanvas)
offscreenCanvas.width = 500;
offscreenCanvas.height =200;
var offscreenCtx = offscreenCanvas.getContext('2d');
offscreenCtx.fillStyle = 'yellow'

offscreenCtx.drawImage(img, 20, 20)

c.fillStyle = 'yellow'
c.beginPath()
c.rect(400, 200, 200, 600)
c.stroke()

// offscreenCtx.fillStyle = 'yelow'
offscreenCtx.beginPath()
offscreenCtx.rect(40, 20, 20, 50)
offscreenCtx.stroke()


c.drawImage(offscreenCanvas, 200, 200)
