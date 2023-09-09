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

  window.modalContainer = document.querySelector('.modals')
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
    if (timing === 'fight') {
      modalContainer.style.display = 'block'
      window.setTimeout(function () {
        modalContainer.classList.add('active')
      }, 0.1)
    }
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
  const background1soundEl = document.getElementById('background1')

  const grunt1 = new AudioManager(gruntsEl, { start: 0.8, end: 1 })
  const grunt2 = new AudioManager(gruntsEl, { start: 0.04, end: 1 })
  const woosh1 = new AudioManager(wooshesEl, { start: 0.8, end: 1 })
  const koSound = new AudioManager(kosoundEl, { start: 0, end: 1 })
  const introSound = new AudioManager(introsoundEl, { start: 0, end: 4 })
  // const background1Sound = new AudioManager(introsoundEl, { start: 0, end: 4 })

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

  window.canvas = document.querySelector('#maincanvas')
  const fullScreen = document.querySelector('.body')
  window.c = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // window.c = setPixelDensitity(canvas);

  const fullScreenBtn = document.getElementById('gomenu')

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

  // canvas.width = window.innerWidth
  // canvas.height = window.innerHeight

  function setPixelDensitity(canvas) {
    let pixelRatio = window.devicePixelRatio
    let sizeOnScreen = canvas.getBoundingClientRect()
    console.log(pixelRatio, sizeOnScreen)
    canvas.width = sizeOnScreen.width
    canvas.height = sizeOnScreen.height

    // canvas.style.width = (canvas.width / pixelRatio) + 'px';
    // canvas.style.height = (canvas.height / pixelRatio) + 'px';

    canvas.style.width = canvas.width + 'px'
    canvas.style.height = canvas.height + 'px'

    let context = canvas.getContext('2d')

    context.scale(pixelRatio, pixelRatio)

    return context
  }

  addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })

  var joystick1 = new JoystickController('stick1', 64, 8)


  // c.fillRect(0, 0, canvas.width, canvas.height)

  // c.restore()
  const gravity = 0.7
  // console.log(document.querySelector('#stick1'))
  if (gamesettings.platform == 'mobile') {
    var joystick1 = new JoystickController('stick1', 64, 8)
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
  window.startP1 = 200
  window.startP2 = -100
  if (player2 === 'commander') {
    startP2 = 400
  }

  if (player2 === 'viking') {
    startP2 = 200
  }

  if (player1 === 'samuraiMack') {
    startP1 = -200
  }
  if (gamesettings.platform === 'desktop') {
    settings.players[player1].position.x = startP1
    settings.players[player2].position.x = startP2
    window.player = new Fighter(settings.players[player1])
    window.enemy = new Fighter(settings.players[player2])
    
  } else {
    mobileSettings.players[player1].position.x = startP1
    mobileSettings.players[player2].position.x = startP2
    window.player = new Fighter(mobileSettings.players[player1])
    window.enemy = new Fighter(mobileSettings.players[player2])
  }
  
  if (gamesettings.platform === 'desktop') {
    var background = new Sprite(settings.backgrounds[back1])
  } else {
    var background = new Sprite(mobileSettings.backgrounds[back1])
  }

  // var background = new Sprite(settings.backgrounds[back1])

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
  window.restart = false
  // setTimeout(() => {
  //   gameover = true;
  // }, 3000);

  const pauseBtn = document.querySelector('#pause')
  const countinueBtn = document.querySelector('#continue')
  window.restartBtn = document.querySelector('#restart')
  pauseBtn.addEventListener('click', () => {
    console.log(` 33 ${restart}`)
    canAnimate = false
    reduceTime = false
  })

  restartBtn.addEventListener('click', () => {
    console.log(` 33 ${restart}`)
    canAnimate = true
    reduceTime = true
    decrese = true;
    restart = true;
    clearTimeout(timerId)
    modalContainer.classList.remove('active')

    window.setTimeout(function () {
      modalContainer.style.display = 'none'
    }, 3000)

    animate()
    decreaseTimer(canAnimate)
    timer = 60
    // if (restart == false) {
    //   restart = true
    // } else {
    //   restart = false
    // }
  })

  countinueBtn.addEventListener('click', () => {
    setTimeout(() => {
      clearTimeout(timerId)
      canAnimate = true
      reduceTime = true
      decrese = true;
      animate()
      decreaseTimer(canAnimate)
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
  window.decrese = true
  window.timing = 'startFight'
  var player1Hits = 0
  var player2Hits = 0
  window.xBound = false
  window.playerBound = false
  window.enemyState = 'seek'
  window.reduceTime = true
  window.canDetermineWinner = true
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

  var dialoging = false
  window.fightintro = false

  const tl = gsap.timeline()

  function startSequence() {
    tl.to('.disthree', { opacity: 0, duration: 2, onComplete: displayThree })
    tl.to('.distwo', { opacity: 1, duration: 2, onStart: displayTwo }, 2)
    tl.to('.disone', { opacity: 1, duration: 2, onStart: displayOne }, 4)
    tl.to(
      '.disfight',
      { opacity: 1, duration: 2, onStart: displayFight, onComplete: kill },
      6
    )

    function displayThree() {
      let el = document.querySelector('.disthree')
      el.style.display = 'none'
    }

    function displayTwo() {
      let el = document.querySelector('.distwo')
      el.style.display = 'block'
    }

    function displayOne() {
      let el1 = document.querySelector('.distwo')
      el1.style.display = 'none'

      let el = document.querySelector('.disone')
      el.style.display = 'block'
    }

    function displayFight() {
      let el1 = document.querySelector('.disone')
      el1.style.display = 'none'

      let el = document.querySelector('.disfight')
      el.style.display = 'block'
    }

    function kill() {
      let el = document.querySelector('.disfight')
      el.style.display = 'none'

      timing = 'fight'

      if (decrese) {
        console.log(44)
        reduceTime = true
        decreaseTimer(canAnimate)
        decrese = false
      }
    }
  }

  function animate() {
    console.log(timing)

   if (canAnimate) window.requestAnimationFrame(animate)
    if (timing === 'dialog') {
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

      if (!dialoging) {
        dialoging = true
        setTimeout(() => {
          timing = 'startFight'
          // startDialog()
          // revealOneCharacter(characters)
        }, 5000)
      }
    }

    if (timing === 'startFight') {
      introSound.play()
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
      // if (fightintro) setFightIntro()
      // animateStartFight()
      startSequence()
      // startFightntro();

      // setTimeout(() => {
      //   timing = 'fight'

      //   if (decrese) {
      //     decreaseTimer(canAnimate)
      //     decrese = false
      //   }
      // }, 5000)
    }

    if (timing == 'fight') {
      if (restart) {
        // animateStartFight()
        timing = 'startFight'
        player.restart('player')
        enemy.restart('enemy')
        // background.restart()
        restart = false
        timer = 60
      }
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

      // console.log(player.position)
      player.velocity.x = 0
      enemy.velocity.x = 0

      if (
        player.position.x +
          player.positionOffset -
          player.width * player.scale <=
        -100
      ) {
        xBound = true
      } else {
        xBound = false
      }

      // console.log(player.position.x+ player.positionOffset + enemy.collisionOffset)
      // console.log((enemy.position.x)*-1 + enemy.positionOffset)

      if (
        player.position.x +
          player.positionOffset +
          enemy.collisionOffset +
          100 >
        enemy.position.x * -1 + enemy.positionOffset
      ) {
        playerBound = true
      } else {
        playerBound = false
      }

      // player movement

      // setTimeout(() => {
      //   keys.ArrowLeft.pressed = true
      //   enemy.lastKey = 'ArrowLeft'
      // }, 1000);

      // setTimeout(() => {
      //   keys.ArrowLeft.pressed = false
      //   // enemy.lastKey = 'ArrowRight'
      // }, 1500);
      // mobile touch
        if (joystick1.value.x < 0) {
          player.velocity.x = -5
          player.switchSprite('run')
        } else if (joystick1.value.x > 0) {
          player.velocity.x = 5
          player.switchSprite('run')
        } 
      // console.log(player.position.y)
      // console.log(canvas.height)
      // player.bounds.p1
      // console.log(player.position.x)
      // console.log(canvas.width)

      //   keys.ArrowLeft.pressed = true
      //   enemy.lastKey = 'ArrowLeft'
      // console.log(player.image)
      //  checkState(enemy,player);
      // console.log(enemyState)
      if (enemyState == 'seek') {
        enemy.velocity.x = 1
        enemy.switchSprite('run')
        enemyState = 'hold'
      }

      if (enemyState == 'retreat') {
        enemy.velocity.x = -10
        enemy.switchSprite('run')
        enemyState = 'hold'
      }

      if (enemyState == 'jump') {
        enemy.velocity.y = -20
        enemyState = 'hold'
      }

      if (enemyState == 'attack') {
        enemy.attack('attack1')
        woosh1.play()
        enemyState = 'hold'
      }

      if (enemyState == 'attack2') {
        enemy.attack('attack2')
        woosh1.play()
        enemyState = 'hold'
      }

      if (keys.a.pressed && player.lastKey === 'a' && !xBound) {
        player.velocity.x = -5
        player.switchSprite('run')
      } else if (keys.d.pressed && player.lastKey === 'd' && !playerBound) {
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
        if (
          keys.ArrowLeft.pressed &&
          enemy.lastKey === 'ArrowLeft' &&
          !playerBound
        ) {
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

      // console.log(
      //   player.attackBox.position.x  + player.attackBox.width + 1150 >=
      //     (enemy.position.x*-1) + enemy.collisionOffset
      // )

      // console.log(
      //   player.attackBox.position.x + 1000 <=
      //     (enemy.position.x*-1) + enemy.collisionOffset
      // )

      // test position
      // c.fillStyle = 'yellow'
      // c.beginPath()
      // c.fillRect(0, 300, 40, 40)
      // c.stroke()

      // test position
      // c.fillStyle = 'yellow'
      // c.beginPath()
      // c.fillRect(800, 300, 40, 40)
      // c.stroke()

      // console.log(
      //         rectangularCollision2({
      //           rectangle1: player,
      //           rectangle2: enemy
      //         }) )
      //       // console.log(player.attackBox.position.x + 1150 )
      //       console.log(player)
      //       console.log(player.attackBox.position.x  + player.attackBox.width + enemy.collisionOffset)
      //       console.log((enemy.position.x*-1) + enemy.positionOffset)

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
      // console.log(`enemyattackboxwidth: ${enemy.attackBox.width}`) -
      //   console.log(`enemyposition: ${enemy.position.x * -1}`)
      // console.log(`enemywidth: ${enemy.width}`)

      // console.log((enemy.attackBox.position.x * -1) + enemy.attackBox.width - 350)

      // console.log(player.position.x + player.collisionOffset)

      // console.log(
      //   (enemy.attackBox.position.x * -1) + enemy.attackBox.width - 350 <=
      //     player.position.x + player.collisionOffset
      // )
      // console.log(
      //   (enemy.attackBox.position.x * -1 )  >=
      //     player.position.x + player.collisionOffset
      // )
      // console.log(((enemy.attackBox.position.x) *- -1) + enemy.attackBox.width -350)

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
        grunt1.play()
        enemy.isAttacking = false
        console.log('player/samurai get HIT')
        gsap.to('#playerHealth', {
          width: player.health + '%'
        })
      }
      // console.log(
      //   rectangularCollision2({
      //     rectangle1: player,
      //     rectangle2: enemy
      //   })
      // )
      // if player misses
      if (enemy.isAttacking && enemy.framesCurrent === 2) {
        enemy.isAttacking = false
      }

      // end game based on health
      if (enemy.health <= 0 || player.health <= 0) {
        koSound.play()
      }
      if (enemy.health <= 0 || player.health <= 0) {
        // koSound.play();

        if (canDetermineWinner) determineWinner({ player, enemy, timerId })
        canDetermineWinner = false
      }
    }

    // console.log(canvas.width)
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
    if (!player.dead && timing == 'fight') {
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

    if (!enemy.dead && timing == 'fight') {
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
          woosh1.play()
          break
        case 'u':
          enemy.attack('attack2')
          woosh1.play()
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
