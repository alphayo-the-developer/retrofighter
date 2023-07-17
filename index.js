// const settings = {
//   players: {
//     samuraiMack: {
//       position: {
//         x: -500,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       offset: {
//         x: 500,
//         y: 440
//       },
//       imageSrc: './img/samuraiMack/Idle.png',
//       framesMax: 8,
//       scale: 5,
//       offset: {
//         x: -100,
//         y: 460
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/samuraiMack/Idle.png',
//           framesMax: 8
//         },
//         run: {
//           imageSrc: './img/samuraiMack/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/samuraiMack/Jump.png',
//           framesMax: 2
//         },
//         fall: {
//           imageSrc: './img/samuraiMack/Fall.png',
//           framesMax: 2
//         },
//         attack1: {
//           imageSrc: './img/samuraiMack/Attack1.png',
//           framesMax: 6
//         },
//         attack2: {
//           imageSrc: './img/samuraiMack/Attack2.png',
//           framesMax: 6
//         },
//         takeHit: {
//           imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
//           framesMax: 4
//         },
//         death: {
//           imageSrc: './img/samuraiMack/Death.png',
//           framesMax: 6
//         }
//       },
//       attackBox: {
//         offset: {
//           x: -0,
//           y: 50
//         },
//         width: 160,
//         height: 50
//       }
//     },
//     kenji: {
//       position: {
//         x: 400,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: -10
//       },
//       imageSrc: './img/kenji/Idle.png',
//       framesMax: 4,
//       scale: 4.2,
//       offset: {
//         x: 0,
//         y: 390
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/kenji/Idle.png',
//           framesMax: 4
//         },
//         run: {
//           imageSrc: './img/kenji/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/kenji/Jump.png',
//           framesMax: 2
//         },
//         fall: {
//           imageSrc: './img/kenji/Fall.png',
//           framesMax: 2
//         },
//         attack1: {
//           imageSrc: './img/kenji/Attack1.png',
//           framesMax: 4
//         },
//         takeHit: {
//           imageSrc: './img/kenji/Take hit.png',
//           framesMax: 3
//         },
//         death: {
//           imageSrc: './img/kenji/Death.png',
//           framesMax: 7
//         }
//       },
//       attackBox: {
//         offset: {
//           x: -170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     wizard: {
//       position: {
//         x: -1000,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/Wizard/Idle.png',
//       framesMax: 6,
//       scale: 2.8,
//       offset: {
//         x: 0,
//         y: 250
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/Wizard/Idle.png',
//           framesMax: 6
//         },
//         run: {
//           imageSrc: './img/Wizard/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/Wizard/Jump.png',
//           framesMax: 2
//         },
//         fall: {
//           imageSrc: './img/Wizard/Fall.png',
//           framesMax: 2
//         },
//         attack1: {
//           imageSrc: './img/Wizard/Attack1.png',
//           framesMax: 8
//         },
//         attack2: {
//           imageSrc: './img/Wizard/Attack2.png',
//           framesMax: 8
//         },
//         takeHit: {
//           imageSrc: './img/Wizard/Take hit.png',
//           framesMax: 3
//         },
//         death: {
//           imageSrc: './img/Wizard/Death.png',
//           framesMax: 7
//         }
//       },
//       attackBox: {
//         offset: {
//           x: -170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     wizard2: {
//       position: {
//         x: 900,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/Wizard/Idle.png',
//       framesMax: 6,
//       scale: 2.8,
//       offset: {
//         x: 00,
//         y: 260
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/Wizard/Idle.png',
//           framesMax: 6
//         },
//         run: {
//           imageSrc: './img/Wizard/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/Wizard/Jump.png',
//           framesMax: 2
//         },
//         fall: {
//           imageSrc: './img/Wizard/Fall.png',
//           framesMax: 2
//         },
//         attack1: {
//           imageSrc: './img/Wizard/Attack1.png',
//           framesMax: 8
//         },
//         attack2: {
//           imageSrc: './img/Wizard/Attack2.png',
//           framesMax: 8
//         },
//         takeHit: {
//           imageSrc: './img/Wizard/Fall.png',
//           framesMax: 3
//         },
//         death: {
//           imageSrc: './img/Wizard/Death.png',
//           framesMax: 7
//         }
//       },
//       attackBox: {
//         offset: {
//           x: 170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     viking: {
//       position: {
//         x: 400,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/viking/idle.png',
//       framesMax: 6,
//       scale: 4.8,
//       offset: {
//         x: 215,
//         y: 315
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/viking/idle.png',
//           framesMax: 6
//         },
//         run: {
//           imageSrc: './img/viking/Run.png',
//           framesMax: 6
//         },
//         jump: {
//           imageSrc: './img/viking/Jump.png',
//           framesMax: 5
//         },
//         fall: {
//           imageSrc: './img/viking/Jump.png',
//           framesMax: 5
//         },
//         attack1: {
//           imageSrc: './img/viking/Attack_2.png',
//           framesMax: 4
//         },
//         takeHit: {
//           imageSrc: './img/viking/Hurt.png',
//           framesMax: 2
//         },
//         death: {
//           imageSrc: './img/viking/Dead.png',
//           framesMax: 4
//         }
//       },
//       attackBox: {
//         offset: {
//           x: -170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     martial: {
//       position: {
//         x: 400,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/martial/Idle.png',
//       framesMax: 10,
//       scale: 5,
//       offset: {
//         x: 215,
//         y: 260
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/martial/Idle.png',
//           framesMax: 10
//         },
//         run: {
//           imageSrc: './img/martial/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/martial/Going up.png',
//           framesMax: 3
//         },
//         fall: {
//           imageSrc: './img/martial/Going Down.png',
//           framesMax: 3
//         },
//         attack1: {
//           imageSrc: './img/martial/Attack1.png',
//           framesMax: 7
//         },
//         takeHit: {
//           imageSrc: './img/martial/Take Hit.png',
//           framesMax: 3
//         },
//         death: {
//           imageSrc: './img/martial/Death.png',
//           framesMax: 11
//         }
//       },
//       attackBox: {
//         offset: {
//           x: 170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     commander: {
//       position: {
//         x: 400,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/commander/Idle.png',
//       framesMax: 5,
//       scale: 3,
//       offset: {
//         x: 215,
//         y: 470
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/commander/Idle.png',
//           framesMax: 5
//         },
//         run: {
//           imageSrc: './img/commander/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/commander/Jump.png',
//           framesMax: 7
//         },
//         fall: {
//           imageSrc: './img/commander/Jump.png',
//           framesMax: 7
//         },
//         attack1: {
//           imageSrc: './img/commander/Attack_3.png',
//           framesMax: 4
//         },
//         takeHit: {
//           imageSrc: './img/commander/Hurt.png',
//           framesMax: 2
//         },
//         death: {
//           imageSrc: './img/commander/Dead.png',
//           framesMax: 6
//         }
//       },
//       attackBox: {
//         offset: {
//           x: 170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     }
//   },
//   backgrounds: {
//     forest: {
//       position: {
//         x: 0,
//         y: 0
//       },
//       imageSrc: './img/background forest.png',
//       scale: 0.79,
//       offset: { x: 0, y: 170 }
//     },
//     creepy: {
//       position: {
//         x: 0,
//         y: 0
//       },
//       imageSrc: './img/background.png',
//       scale: 1.5,
//       offset: { x: 0, y: 120 }
//     },
//     green: {
//       position: {
//         x: 0,
//         y: 0
//       },
//       imageSrc: './img/background green.png',
//       scale: 0.8,
//       offset: { x: 0, y: 170 }
//     },
//     red: {
//       position: {
//         x: 0,
//         y: 0
//       },
//       imageSrc: './img/background red.png',
//       scale: 0.8,
//       offset: { x: 0, y: 170 }
//     }
//   }
// }

// const gameplay = {
//   player1: 'samuraimack',
//   player2: 'wizard',
//   background: 'creepy'
// }

// const mobileSettings = {
//   players: {
//     samuraiMack: {
//       position: {
//         x: -700,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       offset: {
//         x: 500,
//         y: 440
//       },
//       imageSrc: './img/samuraiMack/Idle.png',
//       framesMax: 8,
//       scale: 5,
//       offset: {
//         x: -100,
//         y: 460
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/samuraiMack/Idle.png',
//           framesMax: 8
//         },
//         run: {
//           imageSrc: './img/samuraiMack/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/samuraiMack/Jump.png',
//           framesMax: 2
//         },
//         fall: {
//           imageSrc: './img/samuraiMack/Fall.png',
//           framesMax: 2
//         },
//         attack1: {
//           imageSrc: './img/samuraiMack/Attack1.png',
//           framesMax: 6
//         },
//         takeHit: {
//           imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
//           framesMax: 4
//         },
//         death: {
//           imageSrc: './img/samuraiMack/Death.png',
//           framesMax: 6
//         }
//       },
//       attackBox: {
//         offset: {
//           x: 100,
//           y: 50
//         },
//         width: 160,
//         height: 50
//       }
//     },
//     kenji: {
//       position: {
//         x: 400,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: -10
//       },
//       imageSrc: './img/kenji/Idle.png',
//       framesMax: 4,
//       scale: 4.2,
//       offset: {
//         x: 215,
//         y: 390
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/kenji/Idle.png',
//           framesMax: 4
//         },
//         run: {
//           imageSrc: './img/kenji/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/kenji/Jump.png',
//           framesMax: 2
//         },
//         fall: {
//           imageSrc: './img/kenji/Fall.png',
//           framesMax: 2
//         },
//         attack1: {
//           imageSrc: './img/kenji/Attack1.png',
//           framesMax: 4
//         },
//         takeHit: {
//           imageSrc: './img/kenji/Take hit.png',
//           framesMax: 3
//         },
//         death: {
//           imageSrc: './img/kenji/Death.png',
//           framesMax: 7
//         }
//       },
//       attackBox: {
//         offset: {
//           x: -170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     wizard: {
//       position: {
//         x: 400,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/Wizard/Idle.png',
//       framesMax: 6,
//       scale: 2.8,
//       offset: {
//         x: 500,
//         y: 250
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/Wizard/Idle.png',
//           framesMax: 6
//         },
//         run: {
//           imageSrc: './img/Wizard/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/Wizard/Jump.png',
//           framesMax: 2
//         },
//         fall: {
//           imageSrc: './img/Wizard/Fall.png',
//           framesMax: 2
//         },
//         attack1: {
//           imageSrc: './img/Wizard/Attack2.png',
//           framesMax: 8
//         },
//         takeHit: {
//           imageSrc: './img/Wizard/Take hit.png',
//           framesMax: 3
//         },
//         death: {
//           imageSrc: './img/Wizard/Death.png',
//           framesMax: 7
//         }
//       },
//       attackBox: {
//         offset: {
//           x: -170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     wizard2: {
//       position: {
//         x: -800,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/Wizard/Idle.png',
//       framesMax: 6,
//       scale: 2,
//       offset: {
//         x: -100,
//         y: 420
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/Wizard/Idle.png',
//           framesMax: 6
//         },
//         run: {
//           imageSrc: './img/Wizard/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/Wizard/Jump.png',
//           framesMax: 2
//         },
//         fall: {
//           imageSrc: './img/Wizard/Fall.png',
//           framesMax: 2
//         },
//         attack1: {
//           imageSrc: './img/Wizard/Attack2.png',
//           framesMax: 8
//         },
//         takeHit: {
//           imageSrc: './img/Wizard/Fall.png',
//           framesMax: 3
//         },
//         death: {
//           imageSrc: './img/Wizard/Death.png',
//           framesMax: 7
//         }
//       },
//       attackBox: {
//         offset: {
//           x: -170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     viking: {
//       position: {
//         x: 400,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/viking/idle.png',
//       framesMax: 6,
//       scale: 4.8,
//       offset: {
//         x: 215,
//         y: 315
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/viking/idle.png',
//           framesMax: 6
//         },
//         run: {
//           imageSrc: './img/viking/Run.png',
//           framesMax: 6
//         },
//         jump: {
//           imageSrc: './img/viking/Jump.png',
//           framesMax: 5
//         },
//         fall: {
//           imageSrc: './img/viking/Jump.png',
//           framesMax: 5
//         },
//         attack1: {
//           imageSrc: './img/viking/Attack_2.png',
//           framesMax: 4
//         },
//         takeHit: {
//           imageSrc: './img/viking/Hurt.png',
//           framesMax: 2
//         },
//         death: {
//           imageSrc: './img/viking/Dead.png',
//           framesMax: 4
//         }
//       },
//       attackBox: {
//         offset: {
//           x: -170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     martial: {
//       position: {
//         x: -800,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -100,
//         y: 400
//       },
//       imageSrc: './img/martial/Idle.png',
//       framesMax: 10,
//       scale: 3.5,
//       offset: {
//         x: 215,
//         y: 420
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/martial/Idle.png',
//           framesMax: 10
//         },
//         run: {
//           imageSrc: './img/martial/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/martial/Going up.png',
//           framesMax: 3
//         },
//         fall: {
//           imageSrc: './img/martial/Going Down.png',
//           framesMax: 3
//         },
//         attack1: {
//           imageSrc: './img/martial/Attack1.png',
//           framesMax: 7
//         },
//         takeHit: {
//           imageSrc: './img/martial/Take Hit.png',
//           framesMax: 3
//         },
//         death: {
//           imageSrc: './img/martial/Death.png',
//           framesMax: 11
//         }
//       },
//       attackBox: {
//         offset: {
//           x: 170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     },
//     commander: {
//       position: {
//         x: 400,
//         y: 100
//       },
//       velocity: {
//         x: 0,
//         y: 0
//       },
//       color: 'blue',
//       offset: {
//         x: -50,
//         y: 0
//       },
//       imageSrc: './img/commander/Idle.png',
//       framesMax: 5,
//       scale: 3,
//       offset: {
//         x: 215,
//         y: 470
//       },
//       sprites: {
//         idle: {
//           imageSrc: './img/commander/Idle.png',
//           framesMax: 5
//         },
//         run: {
//           imageSrc: './img/commander/Run.png',
//           framesMax: 8
//         },
//         jump: {
//           imageSrc: './img/commander/Jump.png',
//           framesMax: 7
//         },
//         fall: {
//           imageSrc: './img/commander/Jump.png',
//           framesMax: 7
//         },
//         attack1: {
//           imageSrc: './img/commander/Attack_3.png',
//           framesMax: 4
//         },
//         takeHit: {
//           imageSrc: './img/commander/Hurt.png',
//           framesMax: 2
//         },
//         death: {
//           imageSrc: './img/commander/Dead.png',
//           framesMax: 6
//         }
//       },
//       attackBox: {
//         offset: {
//           x: 170,
//           y: 50
//         },
//         width: 170,
//         height: 50
//       }
//     }
//   },
//   backgrounds: {
//     forest: {
//       position: {
//         x: 0,
//         y: 0
//       },
//       imageSrc: './img/background forest.png',
//       scale: 0.6,
//       offset: { x: 0, y: 270 }
//     },
//     creepy: {
//       position: {
//         x: 0,
//         y: 0
//       },
//       imageSrc: './img/background.png',
//       scale: 1.2,
//       offset: { x: 0, y: 250 }
//     },
//     green: {
//       position: {
//         x: 0,
//         y: 0
//       },
//       imageSrc: './img/background green.png',
//       scale: 0.65,
//       offset: { x: 0, y: 300 }
//     },
//     red: {
//       position: {
//         x: 0,
//         y: 0
//       },
//       imageSrc: './img/background red.png',
//       scale: 0.65,
//       offset: { x: 0, y: 300 }
//     }
//   }
// }

var jsonUrl = '/settings.json'
function loadSettings() {
  const request = new Request(jsonUrl)
  const response = fetch(request)
  var r = response.json()
  console.log(r)
}

// loadSettings();

class Game {
  constructor() {
    this.settings = {
      players: {
        samuraiMack: {
          position: {
            x: -500,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          offset: {
            x: 500,
            y: 440
          },
          imageSrc: './img/samuraiMack/Idle.png',
          framesMax: 8,
          scale: 5,
          offset: {
            x: -100,
            y: 460
          },
          sprites: {
            idle: {
              imageSrc: './img/samuraiMack/Idle.png',
              framesMax: 8
            },
            run: {
              imageSrc: './img/samuraiMack/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/samuraiMack/Jump.png',
              framesMax: 2
            },
            fall: {
              imageSrc: './img/samuraiMack/Fall.png',
              framesMax: 2
            },
            attack1: {
              imageSrc: './img/samuraiMack/Attack1.png',
              framesMax: 6
            },
            attack2: {
              imageSrc: './img/samuraiMack/Attack2.png',
              framesMax: 6
            },
            takeHit: {
              imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
              framesMax: 4
            },
            death: {
              imageSrc: './img/samuraiMack/Death.png',
              framesMax: 6
            }
          },
          attackBox: {
            offset: {
              x: -0,
              y: 50
            },
            width: 160,
            height: 50
          }
        },
        kenji: {
          position: {
            x: 400,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: -10
          },
          imageSrc: './img/kenji/Idle.png',
          framesMax: 4,
          scale: 4.2,
          offset: {
            x: 0,
            y: 390
          },
          sprites: {
            idle: {
              imageSrc: './img/kenji/Idle.png',
              framesMax: 4
            },
            run: {
              imageSrc: './img/kenji/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/kenji/Jump.png',
              framesMax: 2
            },
            fall: {
              imageSrc: './img/kenji/Fall.png',
              framesMax: 2
            },
            attack1: {
              imageSrc: './img/kenji/Attack1.png',
              framesMax: 4
            },
            takeHit: {
              imageSrc: './img/kenji/Take hit.png',
              framesMax: 3
            },
            death: {
              imageSrc: './img/kenji/Death.png',
              framesMax: 7
            }
          },
          attackBox: {
            offset: {
              x: -170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        wizard: {
          position: {
            x: -1000,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/Wizard/Idle.png',
          framesMax: 6,
          scale: 2.8,
          offset: {
            x: 0,
            y: 250
          },
          sprites: {
            idle: {
              imageSrc: './img/Wizard/Idle.png',
              framesMax: 6
            },
            run: {
              imageSrc: './img/Wizard/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/Wizard/Jump.png',
              framesMax: 2
            },
            fall: {
              imageSrc: './img/Wizard/Fall.png',
              framesMax: 2
            },
            attack1: {
              imageSrc: './img/Wizard/Attack1.png',
              framesMax: 8
            },
            attack2: {
              imageSrc: './img/Wizard/Attack2.png',
              framesMax: 8
            },
            takeHit: {
              imageSrc: './img/Wizard/Take hit.png',
              framesMax: 3
            },
            death: {
              imageSrc: './img/Wizard/Death.png',
              framesMax: 7
            }
          },
          attackBox: {
            offset: {
              x: -170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        wizard2: {
          position: {
            x: 900,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/Wizard/Idle.png',
          framesMax: 6,
          scale: 2.8,
          offset: {
            x: 0,
            y: 260
          },
          sprites: {
            idle: {
              imageSrc: './img/Wizard/Idle.png',
              framesMax: 6
            },
            run: {
              imageSrc: './img/Wizard/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/Wizard/Jump.png',
              framesMax: 2
            },
            fall: {
              imageSrc: './img/Wizard/Fall.png',
              framesMax: 2
            },
            attack1: {
              imageSrc: './img/Wizard/Attack1.png',
              framesMax: 8
            },
            attack2: {
              imageSrc: './img/Wizard/Attack2.png',
              framesMax: 8
            },
            takeHit: {
              imageSrc: './img/Wizard/Fall.png',
              framesMax: 3
            },
            death: {
              imageSrc: './img/Wizard/Death.png',
              framesMax: 7
            }
          },
          attackBox: {
            offset: {
              x: 170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        viking: {
          position: {
            x: 400,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/viking/idle.png',
          framesMax: 6,
          scale: 4.8,
          offset: {
            x: 215,
            y: 315
          },
          sprites: {
            idle: {
              imageSrc: './img/viking/idle.png',
              framesMax: 6
            },
            run: {
              imageSrc: './img/viking/Run.png',
              framesMax: 6
            },
            jump: {
              imageSrc: './img/viking/Jump.png',
              framesMax: 5
            },
            fall: {
              imageSrc: './img/viking/Jump.png',
              framesMax: 5
            },
            attack1: {
              imageSrc: './img/viking/Attack_2.png',
              framesMax: 4
            },
            takeHit: {
              imageSrc: './img/viking/Hurt.png',
              framesMax: 2
            },
            death: {
              imageSrc: './img/viking/Dead.png',
              framesMax: 4
            }
          },
          attackBox: {
            offset: {
              x: -170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        martial: {
          position: {
            x: 400,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/martial/Idle.png',
          framesMax: 10,
          scale: 5,
          offset: {
            x: 215,
            y: 260
          },
          sprites: {
            idle: {
              imageSrc: './img/martial/Idle.png',
              framesMax: 10
            },
            run: {
              imageSrc: './img/martial/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/martial/Going up.png',
              framesMax: 3
            },
            fall: {
              imageSrc: './img/martial/Going Down.png',
              framesMax: 3
            },
            attack1: {
              imageSrc: './img/martial/Attack1.png',
              framesMax: 7
            },
            takeHit: {
              imageSrc: './img/martial/Take Hit.png',
              framesMax: 3
            },
            death: {
              imageSrc: './img/martial/Death.png',
              framesMax: 11
            }
          },
          attackBox: {
            offset: {
              x: 170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        commander: {
          position: {
            x: 400,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/commander/Idle.png',
          framesMax: 5,
          scale: 3,
          offset: {
            x: 215,
            y: 470
          },
          sprites: {
            idle: {
              imageSrc: './img/commander/Idle.png',
              framesMax: 5
            },
            run: {
              imageSrc: './img/commander/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/commander/Jump.png',
              framesMax: 7
            },
            fall: {
              imageSrc: './img/commander/Jump.png',
              framesMax: 7
            },
            attack1: {
              imageSrc: './img/commander/Attack_3.png',
              framesMax: 4
            },
            takeHit: {
              imageSrc: './img/commander/Hurt.png',
              framesMax: 2
            },
            death: {
              imageSrc: './img/commander/Dead.png',
              framesMax: 6
            }
          },
          attackBox: {
            offset: {
              x: 170,
              y: 50
            },
            width: 170,
            height: 50
          }
        }
      },
      backgrounds: {
        forest: {
          position: {
            x: 0,
            y: 0
          },
          imageSrc: './img/background forest.png',
          scale: 0.79,
          offset: { x: 0, y: 170 }
        },
        creepy: {
          position: {
            x: 0,
            y: 0
          },
          imageSrc: './img/background.png',
          scale: 1.5,
          offset: { x: 0, y: 120 }
        },
        green: {
          position: {
            x: 0,
            y: 0
          },
          imageSrc: './img/background green.png',
          scale: 0.8,
          offset: { x: 0, y: 170 }
        },
        red: {
          position: {
            x: 0,
            y: 0
          },
          imageSrc: './img/background red.png',
          scale: 0.8,
          offset: { x: 0, y: 170 }
        }
      }
    }

    this.gameplay = {
      player1: 'samuraimack',
      player2: 'wizard',
      background: 'creepy'
    }

    this.mobileSettings = {
      players: {
        samuraiMack: {
          position: {
            x: -700,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          offset: {
            x: 500,
            y: 440
          },
          imageSrc: './img/samuraiMack/Idle.png',
          framesMax: 8,
          scale: 5,
          offset: {
            x: -100,
            y: 460
          },
          sprites: {
            idle: {
              imageSrc: './img/samuraiMack/Idle.png',
              framesMax: 8
            },
            run: {
              imageSrc: './img/samuraiMack/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/samuraiMack/Jump.png',
              framesMax: 2
            },
            fall: {
              imageSrc: './img/samuraiMack/Fall.png',
              framesMax: 2
            },
            attack1: {
              imageSrc: './img/samuraiMack/Attack1.png',
              framesMax: 6
            },
            takeHit: {
              imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
              framesMax: 4
            },
            death: {
              imageSrc: './img/samuraiMack/Death.png',
              framesMax: 6
            }
          },
          attackBox: {
            offset: {
              x: 100,
              y: 50
            },
            width: 160,
            height: 50
          }
        },
        kenji: {
          position: {
            x: 400,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: -10
          },
          imageSrc: './img/kenji/Idle.png',
          framesMax: 4,
          scale: 4.2,
          offset: {
            x: 215,
            y: 390
          },
          sprites: {
            idle: {
              imageSrc: './img/kenji/Idle.png',
              framesMax: 4
            },
            run: {
              imageSrc: './img/kenji/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/kenji/Jump.png',
              framesMax: 2
            },
            fall: {
              imageSrc: './img/kenji/Fall.png',
              framesMax: 2
            },
            attack1: {
              imageSrc: './img/kenji/Attack1.png',
              framesMax: 4
            },
            takeHit: {
              imageSrc: './img/kenji/Take hit.png',
              framesMax: 3
            },
            death: {
              imageSrc: './img/kenji/Death.png',
              framesMax: 7
            }
          },
          attackBox: {
            offset: {
              x: -170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        wizard: {
          position: {
            x: 400,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/Wizard/Idle.png',
          framesMax: 6,
          scale: 2.8,
          offset: {
            x: 500,
            y: 250
          },
          sprites: {
            idle: {
              imageSrc: './img/Wizard/Idle.png',
              framesMax: 6
            },
            run: {
              imageSrc: './img/Wizard/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/Wizard/Jump.png',
              framesMax: 2
            },
            fall: {
              imageSrc: './img/Wizard/Fall.png',
              framesMax: 2
            },
            attack1: {
              imageSrc: './img/Wizard/Attack2.png',
              framesMax: 8
            },
            takeHit: {
              imageSrc: './img/Wizard/Take hit.png',
              framesMax: 3
            },
            death: {
              imageSrc: './img/Wizard/Death.png',
              framesMax: 7
            }
          },
          attackBox: {
            offset: {
              x: -170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        wizard2: {
          position: {
            x: -800,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/Wizard/Idle.png',
          framesMax: 6,
          scale: 2,
          offset: {
            x: -100,
            y: 420
          },
          sprites: {
            idle: {
              imageSrc: './img/Wizard/Idle.png',
              framesMax: 6
            },
            run: {
              imageSrc: './img/Wizard/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/Wizard/Jump.png',
              framesMax: 2
            },
            fall: {
              imageSrc: './img/Wizard/Fall.png',
              framesMax: 2
            },
            attack1: {
              imageSrc: './img/Wizard/Attack2.png',
              framesMax: 8
            },
            takeHit: {
              imageSrc: './img/Wizard/Fall.png',
              framesMax: 3
            },
            death: {
              imageSrc: './img/Wizard/Death.png',
              framesMax: 7
            }
          },
          attackBox: {
            offset: {
              x: -170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        viking: {
          position: {
            x: 400,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/viking/idle.png',
          framesMax: 6,
          scale: 4.8,
          offset: {
            x: 215,
            y: 315
          },
          sprites: {
            idle: {
              imageSrc: './img/viking/idle.png',
              framesMax: 6
            },
            run: {
              imageSrc: './img/viking/Run.png',
              framesMax: 6
            },
            jump: {
              imageSrc: './img/viking/Jump.png',
              framesMax: 5
            },
            fall: {
              imageSrc: './img/viking/Jump.png',
              framesMax: 5
            },
            attack1: {
              imageSrc: './img/viking/Attack_2.png',
              framesMax: 4
            },
            takeHit: {
              imageSrc: './img/viking/Hurt.png',
              framesMax: 2
            },
            death: {
              imageSrc: './img/viking/Dead.png',
              framesMax: 4
            }
          },
          attackBox: {
            offset: {
              x: -170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        martial: {
          position: {
            x: -800,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -100,
            y: 400
          },
          imageSrc: './img/martial/Idle.png',
          framesMax: 10,
          scale: 3.5,
          offset: {
            x: 215,
            y: 420
          },
          sprites: {
            idle: {
              imageSrc: './img/martial/Idle.png',
              framesMax: 10
            },
            run: {
              imageSrc: './img/martial/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/martial/Going up.png',
              framesMax: 3
            },
            fall: {
              imageSrc: './img/martial/Going Down.png',
              framesMax: 3
            },
            attack1: {
              imageSrc: './img/martial/Attack1.png',
              framesMax: 7
            },
            takeHit: {
              imageSrc: './img/martial/Take Hit.png',
              framesMax: 3
            },
            death: {
              imageSrc: './img/martial/Death.png',
              framesMax: 11
            }
          },
          attackBox: {
            offset: {
              x: 170,
              y: 50
            },
            width: 170,
            height: 50
          }
        },
        commander: {
          position: {
            x: 400,
            y: 100
          },
          velocity: {
            x: 0,
            y: 0
          },
          color: 'blue',
          offset: {
            x: -50,
            y: 0
          },
          imageSrc: './img/commander/Idle.png',
          framesMax: 5,
          scale: 3,
          offset: {
            x: 215,
            y: 470
          },
          sprites: {
            idle: {
              imageSrc: './img/commander/Idle.png',
              framesMax: 5
            },
            run: {
              imageSrc: './img/commander/Run.png',
              framesMax: 8
            },
            jump: {
              imageSrc: './img/commander/Jump.png',
              framesMax: 7
            },
            fall: {
              imageSrc: './img/commander/Jump.png',
              framesMax: 7
            },
            attack1: {
              imageSrc: './img/commander/Attack_3.png',
              framesMax: 4
            },
            takeHit: {
              imageSrc: './img/commander/Hurt.png',
              framesMax: 2
            },
            death: {
              imageSrc: './img/commander/Dead.png',
              framesMax: 6
            }
          },
          attackBox: {
            offset: {
              x: 170,
              y: 50
            },
            width: 170,
            height: 50
          }
        }
      },
      backgrounds: {
        forest: {
          position: {
            x: 0,
            y: 0
          },
          imageSrc: './img/background forest.png',
          scale: 0.6,
          offset: { x: 0, y: 270 }
        },
        creepy: {
          position: {
            x: 0,
            y: 0
          },
          imageSrc: './img/background.png',
          scale: 1.2,
          offset: { x: 0, y: 250 }
        },
        green: {
          position: {
            x: 0,
            y: 0
          },
          imageSrc: './img/background green.png',
          scale: 0.65,
          offset: { x: 0, y: 300 }
        },
        red: {
          position: {
            x: 0,
            y: 0
          },
          imageSrc: './img/background red.png',
          scale: 0.65,
          offset: { x: 0, y: 300 }
        }
      }
    }

    this.gameover = false
    this.restart = false

    this.turn = true
    this.turned = true

    const restartBtn = document.getElementById('restart')

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

    this.grunt1 = new AudioManager(gruntsEl, { start: 0, end: 1 })
    this.woosh1 = new AudioManager(wooshesEl, { start: 0.7, end: 1 })

    const star1 = 'samuraiMack'
    const star2 = 'kenji'
    const star3 = 'wizard'
    const star4 = 'martial'
    const star5 = 'commander'
    const star6 = 'viking'
    const star7 = 'wizard2'

    this.gamesettings = {
      platform: 'desktop'
    }

    this.keys = {
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

    restartBtn.addEventListener('click', () => {
      if (!turn) {
        turn = true
      } else {
        turn = false
      }
    })

    if (this.gamesettings.platform == 'mobile') {
      this.joystick1 = new JoystickController('stick1', 64, 8)
    }

    //  mobile touch events

    // if (!this.enemy.dead) {
    //   // attack 1

    //   fasttatackkBtn.addEventListener('touchstart', () => {
    //     this.enemy.attack('attack1')
    //   })

    //   fasttatackkBtn.addEventListener('touchmove', () => {})

    //   fasttatackkBtn.addEventListener('touchend', () => {
    //     this.keys.arrowDown.pressed = false
    //   })

    //   // attack 2

    //   slowAttackkBtn.addEventListener('touchstart', () => {
    //     this.enemy.attack('attack2')
    //   })

    //   slowAttackkBtn.addEventListener('touchmove', () => {})

    //   slowAttackkBtn.addEventListener('touchend', () => {
    //     this.keys.u.pressed = false
    //   })

    //   // jump
    //   jumpBtn.addEventListener('touchstart', () => {
    //     this.enemy.velocity.y = -20
    //     console.log(enemy.velocity.y)
    //   })

    //   jumpBtn.addEventListener('touchmove', () => {})

    //   jumpBtn.addEventListener('touchend', () => {})
    // }

    window.addEventListener('keydown', (event) => {
      if (!this.player.dead) {
        switch (event.key) {
          case 'd':
            this.keys.d.pressed = true
            this.player.lastKey = 'd'
            break
          case 'a':
            this.keys.a.pressed = true
            this.player.lastKey = 'a'
            break
          case 'w':
            this.player.velocity.y = -20
            break
          case ' ':
            this.woosh1.play()
            this.player.attack('attack1')
            break
        }
      }

      if (!this.enemy.dead) {
        switch (event.key) {
          case 'ArrowRight':
            this.keys.ArrowRight.pressed = true
            this.enemy.lastKey = 'ArrowRight'
            break
          case 'ArrowLeft':
            this.keys.ArrowLeft.pressed = true
            this.enemy.lastKey = 'ArrowLeft'
            break
          case 'ArrowUp':
            this.enemy.velocity.y = -20
            break
          case 'ArrowDown':
            this.enemy.attack('attack1')

            break
          case 'u':
            this.enemy.attack('attack2')

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

    this.load()
  }

  load() {
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    this.gravity = 0.7

    this.backgroundSetting()
    // this.avaterSetting()

    // console.log(this.player2)
    // console.log(this.background)

    // console.log(this.player2.position.x)
    this.background = new Sprite(this.background)


    // this.player = new Fighter(this.player1)
    // this.enemy = new Fighter(c,this.player2)


    this.animate(c, canvas)
    decreaseTimer()
  }

  avaterSetting() {
    // desktop character settings

    switch (this.gameplay.player1) {
      case 'samuraimack':
        this.player1 = this.settings.players.samuraiMack
        break

      default:
        break
    }

    switch (this.gameplay.player2) {
      case 'wizard':
        this.player2 = this.settings.players.wizard
        break

      default:
        break
    }

    // if (this.gamesettings.platform === 'desktop') {
    //   if (this.gameplay.player1 == 'kenji') {
    //     this.avatar1 = settings.players.kenji
    //   } else if (star1 == 'samuraiMack') {
    //     this.player1 = settings.players.samuraiMack
    //     this.player2 = settings.players.kenji
    //     this.avatar3 = settings.players.wizard
    //     this.avatar4 = settings.players.viking
    //     this.avatar5 = settings.players.martial
    //     this.avatar6 = settings.players.commander
    //     this.avatar7 = settings.players.wizard2
    //   }
    // }

    // mobile character setting

    switch (this.gameplay.player1) {
      case 'samuraiMack':
        this.player1 = this.mobileSettings.players.samuraiMack
        break

      default:
        break
    }

    switch (this.gameplay.player2) {
      case 'wizard':
        this.player2 = this.mobileSettings.players.wizard
        break

      default:
        break
    }

    // if (this.gamesettings.platform === 'mobile') {
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
  }
  backgroundSetting() {
    var background1
    const back1 = 'green'

    // desktop background setting
    if (this.gamesettings.platform === 'desktop') {
      switch (this.gameplay.background) {
        case 'creepy':
          this.background = this.settings.backgrounds.forest
          break

        default:
          break
      }
    }

    // if (this.gamesettings.platform === 'desktop') {
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

    //  mobile background settings

    if (this.gamesettings.platform === 'mobile') {
      switch (this.gameplay.background) {
        case 'creepy':
          this.background = this.mobileSettings.backgrounds.forest
          break

        default:
          break
      }
    }

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
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      fullScreen.requestFullscreen().catch((err) => {
        alert(err)
      })
    } else {
      document.exitFullscreen()
    }
  }
 
  animate(c, canvas) {
    console.log(c)

    // if (!this.gameover) window.requestAnimationFrame(this.update)
    if (!this.gameover) window.requestAnimationFrame(this.update)
    // c.fillStyle = 'green'
    // c.fillRect(0, 0, canvas.width, canvas.height)
    // if (shop.update()) {
    //   shop.update()
    // }
    this.background.update(c, canvas)

    // c.fillStyle = 'rgba(255, 255, 255, 0.15)'
    // c.fillRect(0, 0, canvas.width, canvas.height)

    // if (turn) {
    //   c.save()
    //   c.scale(-1, 1)
    //   turned = true
    //   enemy.update(enemy.color, turned)

    //   c.restore()
    //   // turn = false
    // } else {
    //   console.log(false)
    //   turned = false
    //   turn = false
    //   enemy.update(enemy.color, turned)
    // }
    // setInterval(() => {
    //   c.save()
    //   c.scale(-1, 1)
    //   enemy.update(enemy.color, turned)
    //   c.restore()
    // }, 5000);

    // if (turn) {
    //   c.save()
    //   c.scale(-1, 1)
    //   // enemy.position.x = -(enemy.position.x)
    //   enemy.update(enemy.color, turned)
    //   c.restore()
    //   turn = false
    // } else {
    //   enemy.update(enemy.color, turned)
    // }

    //turn enemy
    if (this.turn) {
      c.save()
      c.scale(-1, 1)
      // c.transform(-1, 1)
      this.enemy.update(c, canvas, this.enemy.color, this.turned)
      c.restore()
      if (!this.turned) this.enemy.position.x = this.enemy.position.x - 1386
      this.turned = true
    } else {
      c.save()
      c.scale(1, 1)
      // c.transform(1, 1)

      this.enemy.update(c, canvas, this.enemy.color, this.turned)
      c.restore()
      if (this.turned) this.enemy.position.x = this.enemy.position.x + 1386
      this.turned = false
    }
    // console.log(this.enemy.position.x)

    // turned = false
    this.player.update(c, canvas)

    if (this.restart) {
      this.player.restart()
      this.enemy.restart()
      this.background.restart()
    }

    // console.log(player.position)
    this.player.velocity.x = 0
    this.enemy.velocity.x = 0

    // player movement-

    // mobile touch
    // if (this.gamesettings.platform == 'mobile') {
    //   if (this.joystick1.value.x < 0) {
    //     this.enemy.velocity.x = -5
    //     this.enemy.switchSprite('run')
    //   } else if (this.joystick1.value.x > 0) {
    //     this.enemy.velocity.x = 5
    //     this.enemy.switchSprite('run')
    //   } else {
    //     this.enemy.switchSprite('idle')
    //   }
    // }

    if (this.keys.a.pressed && this.player.lastKey === 'a') {
      this.player.velocity.x = -5
      this.player.switchSprite('run')
    } else if (this.keys.d.pressed && this.player.lastKey === 'd') {
      this.player.velocity.x = 5
      this.player.switchSprite('run')
    } else {
      this.player.switchSprite('idle')
    }

    // jumping
    if (this.player.velocity.y < 0) {
      this.player.switchSprite('jump')
    } else if (this.player.velocity.y > 0) {
      this.player.switchSprite('fall')
    }

    // Enemy movement
    if (this.gamesettings.platform == 'desktop') {
      if (this.keys.ArrowLeft.pressed && this.enemy.lastKey === 'ArrowLeft') {
        this.enemy.velocity.x = 5
        // turn = true-
        // turned = true
        this.enemy.switchSprite('run')
      } else if (
        this.keys.ArrowRight.pressed &&
        this.enemy.lastKey === 'ArrowRight'
      ) {
        this.enemy.velocity.x = -5
        // turn = false

        // turned = true
        this.enemy.switchSprite('run')
      } else {
        this.enemy.switchSprite('idle')
      }
    }

    // jumping
    if (this.enemy.velocity.y < 0) {
      this.enemy.switchSprite('jump')
    } else if (this.enemy.velocity.y > 0) {
      this.enemy.switchSprite('fall')
    }

    // detect for collision & enemy gets hit
    if (
      rectangularCollision({
        rectangle1: this.player,
        rectangle2: this.enemy
      }) &&
      this.player.isAttacking &&
      this.player.framesCurrent === 4
    ) {
      this.enemy.takeHit()
      this.player.isAttacking = false

      gsap.to('#enemyHealth', {
        width: this.enemy.health + '%'
      })
    }

    // if player misses
    if (this.player.isAttackin && this.player.framesCurrent === 4) {
      player.isAttacking = false
    }

    // this is where our player gets hit
    if (
      rectangularCollision({
        rectangle1: this.enemy,
        rectangle2: this.player
      }) &&
      this.enemy.isAttacking &&
      this.enemy.framesCurrent === 2
    ) {
      this.player.takeHit()
      this.enemy.isAttacking = false

      gsap.to('#playerHealth', {
        width: this.player.health + '%'
      })
    }

    // if player misses
    if (this.enemy.isAttacking && this.enemy.framesCurrent === 2) {
      this.enemy.isAttacking = false
    }

    // end game based on health
    if (this.enemy.health <= 0 || this.player.health <= 0) {
      determineWinner({ player, enemy, timerId })
    }

    c.fillStyle = 'red'
    c.beginPath()
    c.fillRect(700, 200, 200, 200)
    c.stroke()
  }

  update(a,b) {
    this.animate(a,b)

  }
}

// const fullScreen = document.querySelector('.body')

// const fullScreenBtn = document.getElementById('btn')

// fullScreenBtn.addEventListener('click', toggleFullScreen)

// c.fillRect(0, 0, canvas.width, canvas.height)

// c.restore()

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

// setTimeout(() => {
//   gameover = true;
// }, 3000);

// const restartBtn = document.getElementById("btn")
// console.log(restartBtn)
// restartBtn.addEventListener("click", ()=>{
//   if(gameover == false) gameover = true;
// })

// restartBtn.addEventListener('click', () => {
//   if (restart == false) restart = true
// })

const game = new Game()

// export {Game}
