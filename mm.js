function init() {
  // import dataJson from './settings.json';
  // console.log(dataJson)

  // fetch('./settings.json')
  //   .then((response) => response.json())
  //   .then((json) => console.log(json))

  // var jsonUrl = '/settings.json'
  // function loadSettings() {
  //   const request = new Request(jsonUrl)
  //   const response = fetch(request)
  //   var r = response.json()
  //   console.log(r)
  // }

  // loadSettings();

  // window.addEventListener('dom')

  var num = 15

  var p1hitsText = document.querySelector('#p1hits')
  var p2hitsText = document.querySelector('#p2hits')

  var modalBtn = document.querySelector('.open')
  var closeBtn = document.querySelector('.close')

  var modalContainer = document.querySelector('.modals')
  var holdModals = document.createDocumentFragment()

  for (var i = 0; i < num; i++) {
    var div = document.createElement('div')
    div.classList.add('modal-drop')
    div.style.top = Math.floor(Math.random() * 100) + 'vh'
    div.style.left = Math.floor(Math.random() * 100) + 'vw'
    div.style.transitionDelay = Math.random() + 's'
    holdModals.appendChild(div)
  }
  modalContainer.appendChild(holdModals)

  modalBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block'
    window.setTimeout(function () {
      modalContainer.classList.add('active')
    }, 0.1)
  })

  closeBtn.addEventListener('click', function () {
    modalContainer.classList.remove('active')

    window.setTimeout(function () {
      modalContainer.style.display = 'none'
    }, 3000)
  })

  const moveForwardBtn = document.querySelector('.moveforward')
  const moveBackBtn = document.querySelector('.movebackward')

  const slowAttackkBtn = document.querySelector('.slowattack')
  const fasttatackkBtn = document.querySelector('.fastattack')

  const jumpBtn = document.querySelector('.jump')

  // Load audio
  const gruntsEl = document.getElementById('grunts')
  const fightgruntsEl = document.getElementById('fightgrunts')
  const wooshesEl = document.getElementById('wooshes')
  const introsoundEl = document.getElementById('intro')
  const kosoundEl = document.getElementById('ko')

  const grunt1 = new AudioManager(gruntsEl, { start: 0.8, end: 1 })
  const grunt2 = new AudioManager(gruntsEl, { start: 0.04, end: 1 })
  const woosh1 = new AudioManager(wooshesEl, { start: 0.8, end: 1 })

  // console.log(gsap.to)

  // mobile character setting

  // if (gamesettings.platform === 'mobile') {
  //   if (star1 == 'kenji') {
  //     var avatar1 = mobileSettings.players.kenji
  //   } else if (star1 == 'samuraiMack') {
  //     var avatar1 = mobileSettings.players.samuraiMack
  //     var avatar2 = mobileSettings.players.kenji
  //     var avatar3 = mobileSettings.players.wizard
  //     var avatar4 = mobileSettings.players.viking
  //     var avatar5 = mobileSettings.players.martial
  //     var avatar6 = mobileSettings.players.commander
  //     var avatar7 = mobileSettings.players.wizard2
  //   }
  // }

  // var background1
  // const back1 = 'green'

  // // desktop background setting

  // if (gamesettings.platform === 'desktop') {
  //   if (back1 == 'forest') {
  //     background1 = settings.backgrounds.forest
  //   } else if (back1 == 'creepy') {
  //     background1 = settings.backgrounds.creepy
  //     var shop = new Sprite({
  //       position: {
  //         x: 600,
  //         y: 128
  //       },
  //       imageSrc: './img/shop.png',
  //       scale: 2.75,
  //       framesMax: 6,
  //       offset: { x: -400, y: -120 }
  //     })
  //   } else if (back1 == 'red') {
  //     background1 = settings.backgrounds.red
  //   } else if (back1 == 'green') {
  //     background1 = settings.backgrounds.green
  //   }
  // }

  // //  mobile background settings

  // if (gamesettings.platform === 'mobile') {
  //   if (back1 == 'forest') {
  //     background1 = mobileSettings.backgrounds.forest
  //   } else if (back1 == 'creepy') {
  //     background1 = mobileSettings.backgrounds.creepy
  //     var shop = new Sprite({
  //       position: {
  //         x: 600,
  //         y: 128
  //       },
  //       imageSrc: './img/shop.png',
  //       scale: 2.75,
  //       framesMax: 6,
  //       offset: { x: -400, y: -120 }
  //     })
  //   } else if (back1 == 'red') {
  //     background1 = mobileSettings.backgrounds.red
  //   } else if (back1 == 'green') {
  //     background1 = mobileSettings.backgrounds.green
  //   }
  // }

  window.canvas = document.querySelector('canvas')
  const fullScreen = document.querySelector('.body')
  window.c = canvas.getContext('2d')

  const fullScreenBtn = document.getElementById('btn')

  function toggleFullScreen() {
    console.log(document.fullscreenElement)
    if (!document.fullscreenElement) {
      fullScreen.requestFullscreen().catch((err) => {
        alert(err)
      })
    } else {
      document.exitFullscreen()
    }
  }

  fullScreenBtn.addEventListener('click', toggleFullScreen)

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // c.fillRect(0, 0, canvas.width, canvas.height)

  // c.restore()
  const gravity = 0.7
  if (gamesettings.platform == 'mobile') {
    let joystick1 = new JoystickController('stick1', 64, 8)
  }

  // const background = new Sprite({
  //   position: {
  //     x: 0,
  //     y: 0
  //   },
  //   imageSrc: './img/background forest.png',
  //   scale: .54,
  // })

  // const shop = new Sprite({
  //   position: {
  //     x: 600,
  //     y: 128
  //   },
  //   imageSrc: './img/shop.png',
  //   scale: 2.75,
  //   framesMax: 6,
  //   offset: { x: -400, y: -120 }
  // })

  // no avatar2
  var startP1 = 200
  var startP2 = -100
  if (player2 === 'commander') {
    startP2 = 400
  }

  if (player2 === 'viking') {
    startP2 = 200
  }

  if (player1 === 'samuraiMack') {
    startP1 = -200
  }

  settings.players[player1].position.x = startP1
  settings.players[player2].position.x = startP2
  const player = new Fighter(settings.players[player1])
  const enemy = new Fighter(settings.players[player2])

  const background = new Sprite(settings.backgrounds[back1])

  const keys = {
    a: {
      pressed: false
    },
    d: {
      pressed: false
    },
    ArrowRight: {
      pressed: false
    },
    ArrowLeft: {
      pressed: false
    },
    arrowDown: {
      pressed: false
    },
    u: {
      pressed: false
    }
  }

  var love = false

  var canAnimate = true
  var restart = false
  // setTimeout(() => {
  //   gameover = true;
  // }, 3000);

  const pauseBtn = document.querySelector('#pause')
  const countinueBtn = document.querySelector('#continue')
  pauseBtn.addEventListener('click', () => {
    canAnimate = false
  })

  countinueBtn.addEventListener('click', () => {
    setTimeout(() => {
      canAnimate = true
      animate()
    }, 1500)
  })

  // const restartBtn = document.getElementById('restart')
  const domBody = document.querySelector('.body')
  // restartBtn.addEventListener('click', () => {
  //   if (restart == false) restart = true
  // })

  var turn = true
  var turned = true
  var modalToggle = false
  var decrese = true
  var timing = 'startFight'
  var player1Hits = 0
  var player2Hits = 0
  // var timing = 'fight'

  // restartBtn.addEventListener('click', () => {})

  // if(decrese){
  //   decreaseTimer(canAnimate)
  // }

  function countHits() {
    if (player1Hits > 0) {
      p1hitsText.style.display = 'none'
    }
  }

  function animate() {
    if (canAnimate) window.requestAnimationFrame(animate)
    if (timing === 'dialog') {
    }

    if (timing === 'startFight') {
      background.update()
      // turn enemy
      if (turn) {
        c.save()
        c.scale(-1, 1)
        // c.transform(-1, 1)
        enemy.update()
        c.restore()
        if (turned) enemy.position.x = enemy.position.x - 1386
        turned = false
      }

      // turned = false
      player.update()
      // grunt1.play()
      animateStartFight()

      setTimeout(() => {
        timing = 'fight'

        if (decrese) {
          decreaseTimer(canAnimate)
          decrese = false
        }
      }, 5000)
    }

    if (timing == 'fight') {
      background.update()
      // turn enemy
      if (turn) {
        c.save()
        c.scale(-1, 1)
        // c.transform(-1, 1)
        enemy.update()
        c.restore()
        if (turned) enemy.position.x = enemy.position.x - 1386
        turned = false
      }

      // turned = false
      player.update()
      // enemy.update()

      if (restart) {
        player.restart()
        enemy.restart()
        background.restart()
      }

      // console.log(player.position)
      player.velocity.x = 0
      enemy.velocity.x = 0

      // player movement

      // mobile touch
      // if (gamesettings.platform == 'mobile') {
      //   if (joystick1.value.x < 0) {
      //     enemy.velocity.x = -5
      //     enemy.switchSprite('run')
      //   } else if (joystick1.value.x > 0) {
      //     enemy.velocity.x = 5
      //     enemy.switchSprite('run')
      //   } else {
      //     enemy.switchSprite('idle')
      //   }
      // }
      // console.log(player.position.y)
      // console.log(canvas.height)
      // player.bounds.p1
      // console.log(player.position.x)
      // console.log(canvas.width)
      if (
        keys.a.pressed &&
        player.lastKey === 'a' &&
        player.position.x > player.bounds.right.p1
      ) {
        player.velocity.x = -5
        player.switchSprite('run')
      } else if (
        keys.d.pressed &&
        player.lastKey === 'd' &&
        player.position.x < canvas.width
      ) {
        player.velocity.x = 5
        player.switchSprite('run')
      } else {
        player.switchSprite('idle')
      }

      // jumping
      if (player.velocity.y < 0) {
        player.switchSprite('jump')
      } else if (player.velocity.y > 0) {
        player.switchSprite('fall')
      }

      // Enemy movement
      if (gamesettings.platform == 'desktop') {
        if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
          enemy.velocity.x = 5
          enemy.switchSprite('run')
        } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
          enemy.velocity.x = -5
          enemy.switchSprite('run')
        } else {
          enemy.switchSprite('idle')
        }
      }
      // jumping
      if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
      } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall')
      }

      // console.log(
      //   player.attackBox.position.x + player.attackBox.width >=
      //     enemy.position.x * -1 - 400
      // )
      // console.log((player.attackBox.position.x + player.attackBox.width) <=
      // (enemy.position.x )*-1)

      // console.log(player.attackBox.position.x + player.attackBox.width)

      // console.log(player.attackBox.position.x <=
      //   (enemy.position.x)*-1 + enemy.width)

      // console.log(rectangularCollision({
      //   rectangle1: player,
      //   rectangle2: enemy
      // }))

      // detect for collision & enemy gets hit
      if (
        rectangularCollision2({
          rectangle1: player,
          rectangle2: enemy
        }) &&
        player.isAttacking &&
        player.framesCurrent === 4
      ) {
        grunt2.play()
        enemy.takeHit()
        player.isAttacking = false
        console.log('enemy/wizard get hit')

        gsap.to('#enemyHealth', {
          width: enemy.health + '%'
        })
      }

      // if player misses
      if (player.isAttacking && player.framesCurrent === 4) {
        player.isAttacking = false
      }
      // console.log(rectangularCollision({
      //   rectangle1: enemy,
      //   rectangle2: player
      // }))

      // console.log(`playerposition: ${player.position.x}`)
      // console.log(`enemyposition: ${enemy.position.x}`)
      // console.log(`enemyattackbox: ${enemy.attackBox.position.x}`)
      // console.log(`playerattackbox: ${player.attackBox.position.x}`)

      // console.log(`playerattackboxwidth: ${player.attackBox.width}`)
      // console.log(`enemyattackboxwidth: ${enemy.attackBox.width}`)

      // console.log(`enemyposition: ${enemy.position.x * -1}`)
      // console.log(`enemywidth: ${enemy.width}`)

      // this is where our player gets hit
      if (
        rectangularCollision1({
          rectangle1: enemy,
          rectangle2: player
        }) &&
        enemy.isAttacking &&
        enemy.framesCurrent === 2
      ) {
        player.takeHit()
        enemy.isAttacking = false
        console.log('player/samurai get HIT')
        gsap.to('#playerHealth', {
          width: player.health + '%'
        })
      }
      console.log(
        rectangularCollision2({
          rectangle1: player,
          rectangle2: enemy
        })
      )
      // if player misses
      if (enemy.isAttacking && enemy.framesCurrent === 2) {
        enemy.isAttacking = false
      }

      // end game based on health
      if (enemy.health <= 0 || player.health <= 0) {
        console.log(player)

        determineWinner({ player, enemy, timerId })
      }
    }
  }

  animate()

  //  mobile touch events

  // if (!enemy.dead) {
  //   // attack 1

  //   fasttatackkBtn.addEventListener('touchstart', () => {
  //     enemy.attack('attack1')
  //   })

  //   fasttatackkBtn.addEventListener('touchmove', () => {})

  //   fasttatackkBtn.addEventListener('touchend', () => {
  //     keys.arrowDown.pressed = false
  //   })

  //   // attack 2

  //   slowAttackkBtn.addEventListener('touchstart', () => {
  //     enemy.attack('attack2')
  //   })

  //   slowAttackkBtn.addEventListener('touchmove', () => {})

  //   slowAttackkBtn.addEventListener('touchend', () => {
  //     keys.u.pressed = false
  //   })

  //   // jump
  //   jumpBtn.addEventListener('touchstart', () => {
  //     enemy.velocity.y = -20
  //     console.log(enemy.velocity.y)
  //   })

  //   jumpBtn.addEventListener('touchmove', () => {})

  //   jumpBtn.addEventListener('touchend', () => {})
  // }

  window.addEventListener('keydown', (event) => {
    if (!player.dead) {
      switch (event.key) {
        case 'd':
          keys.d.pressed = true
          player.lastKey = 'd'
          break
        case 'a':
          keys.a.pressed = true
          player.lastKey = 'a'
          break
        case 'w':
          player.velocity.y = -20
          break
        case ' ':
          grunt1.play()
          woosh1.play()
          player.attack('attack1')
          break
        case 'v':
          // woosh1.play()
          grunt2.play()
          player.attack('attack2')
          break
      }
    }

    if (!enemy.dead) {
      switch (event.key) {
        case 'ArrowRight':
          keys.ArrowRight.pressed = true
          enemy.lastKey = 'ArrowRight'
          break
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = true
          enemy.lastKey = 'ArrowLeft'
          break
        case 'ArrowUp':
          enemy.velocity.y = -20
          break
        case 'ArrowDown':
          enemy.attack('attack1')

          break
        case 'u':
          enemy.attack('attack2')

          break
      }
    }
  })

  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'd':
        keys.d.pressed = false
        break
      case 'a':
        keys.a.pressed = false
        break
    }

    // enemy keys
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = false
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = false
        break
      case 'ArrowDown':
        keys.arrowDown.pressed = false
        break
      case 'u':
        keys.u.pressed = false
        break
    }
  })
}
