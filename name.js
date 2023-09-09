// // var img = new Image()
// // img.src =  "./img/Wizard/Idle.png"

// var Canvas = document.querySelector('#canvas')
// var img = document.querySelector('#bac')
// Canvas.width = window.innerWidth
// Canvas.height = window.innerHeight
// var c = Canvas.getContext('2d')

// const dd = document.querySelector('body');
// var offscreenCanvas = document.createElement('canvas');

// // console.log(img)
// dd.appendChild(offscreenCanvas)
// offscreenCanvas.width = 500;
// offscreenCanvas.height =200;
// var offscreenCtx = offscreenCanvas.getContext('2d');
// offscreenCtx.fillStyle = 'yellow'

// offscreenCtx.drawImage(img, 20, 20)

// c.fillStyle = 'yellow'
// c.beginPath()
// c.rect(400, 200, 200, 600)
// c.stroke()

// // offscreenCtx.fillStyle = 'yelow'
// offscreenCtx.beginPath()
// offscreenCtx.rect(40, 20, 20, 50)
// offscreenCtx.stroke()

// c.drawImage(offscreenCanvas, 200, 200)

var containner = document.querySelector('.text')

var speeds = {
  pause: 500,
  slow: 120,
  normal: 70,
  fast: 30
}
var textLines = [
  { string: 'Hey', speed: speeds.normal },
  { string: "What's up?", speed: speeds.normal, classes:["green"] },
  { string: "I'm great!", speed: speeds.fast }
]

var characters = []
textLines.forEach((line, index) => {
  if (index < textLines.length - 1) {
    line.string += ' '
  }

  line.string.split('').forEach((character) => {
    var span = document.createElement('span')
    span.textContent = character
    containner.appendChild(span)
    characters.push({
      span: span,
      isSpace: character === ' ',
      delayAfter: line.speed,
      classes: line.classes || []
    })
  })
})

function revealOneCharacter(list) {
  var next = list.splice(0, 1)[0]
  next.span.classList.add('revealed')

  next.classes.forEach((c) => {
    next.span.classList.add(c)
  })

  var delay = next.isSpace ? 0 : next.delayAfter
  if (list.length > 0) {
    setTimeout(() => {
      revealOneCharacter(list)
    }, delay)
  }
}

revealOneCharacter(characters)
