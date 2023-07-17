// enemy attack
function rectangularCollision1({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      ((rectangle2.position.x)*-1) - rectangle1.collisionOffset &&
      rectangle1.attackBox.position.x <=
        (rectangle2.position.x)*-1 - rectangle1.collisionOffset  &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
              rectangle2.position.y &&
            rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

// player attack
function rectangularCollision2({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      ((rectangle2.position.x)*-1) - rectangle1.collisionOffset &&
      rectangle1.attackBox.position.x <=
        (rectangle2.position.x)*-1 - rectangle1.collisionOffset  &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
              rectangle2.position.y &&
            rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

// 400,200
// &&
//     rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
//       (rectangle2.position.y)*-1 &&
//     rectangle1.attackBox.position.y <= (rectangle2.position.y)*-1 + rectangle2.height




function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId)
  document.querySelector('#displayText').style.display = 'flex'
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie'
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Alphayo wins'
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Nyambu Wins'
  }
}

let timer = 60
let timerId
function decreaseTimer(canAnimate) {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })
  }
}


function fightIntro(){
  
}



// joystick



class JoystickController
{
	// stickID: ID of HTML element (representing joystick) that will be dragged
	// maxDistance: maximum amount joystick can move in any direction
	// deadzone: joystick must move at least this amount from origin to register value change
	constructor( stickID, maxDistance, deadzone )
	{
		this.id = stickID;
		let stick = document.getElementById(stickID);

		// location from which drag begins, used to calculate offsets
		this.dragStart = null;

		// track touch identifier in case multiple joysticks present
		this.touchId = null;
		
		this.active = false;
		this.value = { x: 0, y: 0 }; 

		let self = this;

		function handleDown(event)
		{
		    self.active = true;

			// all drag movements are instantaneous
			stick.style.transition = '0s';

			// touch event fired before mouse event; prevent redundant mouse event from firing
			event.preventDefault();

		    if (event.changedTouches)
		    	self.dragStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
		    else
		    	self.dragStart = { x: event.clientX, y: event.clientY };

			// if this is a touch event, keep track of which one
		    if (event.changedTouches)
		    	self.touchId = event.changedTouches[0].identifier;
		}
		
		function handleMove(event) 
		{
		    if ( !self.active ) return;

		    // if this is a touch event, make sure it is the right one
		    // also handle multiple simultaneous touchmove events
		    let touchmoveId = null;
		    if (event.changedTouches)
		    {
		    	for (let i = 0; i < event.changedTouches.length; i++)
		    	{
		    		if (self.touchId == event.changedTouches[i].identifier)
		    		{
		    			touchmoveId = i;
		    			event.clientX = event.changedTouches[i].clientX;
		    			event.clientY = event.changedTouches[i].clientY;
		    		}
		    	}

		    	if (touchmoveId == null) return;
		    }

		    const xDiff = event.clientX - self.dragStart.x;
		    const yDiff = event.clientY - self.dragStart.y;
		    const angle = Math.atan2(yDiff, xDiff);
			const distance = Math.min(maxDistance, Math.hypot(xDiff, yDiff));
			const xPosition = distance * Math.cos(angle);
			const yPosition = distance * Math.sin(angle);

			// move stick image to new position
		    stick.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0px)`;

			// deadzone adjustment
			const distance2 = (distance < deadzone) ? 0 : maxDistance / (maxDistance - deadzone) * (distance - deadzone);
		    const xPosition2 = distance2 * Math.cos(angle);
			const yPosition2 = distance2 * Math.sin(angle);
		    const xPercent = parseFloat((xPosition2 / maxDistance).toFixed(4));
		    const yPercent = parseFloat((yPosition2 / maxDistance).toFixed(4));
		    
		    self.value = { x: xPercent, y: yPercent };
		  }

		function handleUp(event) 
		{
		    if ( !self.active ) return;

		    // if this is a touch event, make sure it is the right one
		    if (event.changedTouches && self.touchId != event.changedTouches[0].identifier) return;

		    // transition the joystick position back to center
		    stick.style.transition = '.2s';
		    stick.style.transform = `translate3d(0px, 0px, 0px)`;

		    // reset everything
		    self.value = { x: 0, y: 0 };
		    self.touchId = null;
		    self.active = false;
		}

		// stick.addEventListener('mousedown', -handleDown);-
		stick.addEventListener('touchstart', handleDown);
		stick.addEventListener('touchmove', handleMove);
		stick.addEventListener('touchend', handleUp);
		// document.addEventListener('mousemove', handleMove, {passive: false});
		// document.addEventListener('touchmove', handleMove, {passive: false});
		// document.addEventListener('mouseup', handleUp);
		// document.addEventListener('touchend', handleUp);
	}
}



// c.fillStyle = 'green'
  // c.fillRect(0, 0, canvas.width, canvas.height)
  // if (shop.update()) {
  //   shop.update()
  // }

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
  // if (turn) {
  //   // c.save()
  //   // c.translate(enemy.position.x, enemy.position.y)
  //   // c.translate(0, 0)

  //   // c.scale(-1, 1)
  //   var offscreenCanvas = document.createElement('canvas');
  //   // domBody.appendChild(offscreenCanvas)
  //   offscreenCanvas.style = "background-color: aqua"
  //   offscreenCanvas.width = 55;
  //   offscreenCanvas.height =32;
  //   var offscreenCtx = offscreenCanvas.getContext('2d');
  //   // offscreenCtx.save();
  //   // offscreenCtx.scale(-1, 1);
  //   // offscreenCtx.rotate(Math.PI/8)
  //   // offscreenCtx.translate(0,0)
  //   offscreenCtx.drawImage(enemy.image,enemy.framesCurrent * (enemy.image.width / enemy.framesMax),
  //   0,
  //   enemy.image.width / enemy.framesMax,
  //   enemy.image.height,
  //   enemy.position.x - enemy.offset.x,
  //   enemy.position.y - enemy.offset.y,
  //   (enemy.image.width / enemy.framesMax) * enemy.scale,
  //   enemy.image.height * enemy.scale);
  //   // offscreenCtx.drawImage(enemy.image,200,200)
  //   // offscreenCtx.restore()
  //   enemy.update(offscreenCanvas,enemy.color, turned)
  //   // c.restore()
  //   // if (!turned) enemy.position.x = enemy.position.x - 1386
  //   turned = true
  // } else {
  //   // c.save()
  //   // c.translate(0, 0)
  //   // c.scale(1, 1)
  //   var offscreenCanvas = document.createElement('canvas');
  //   offscreenCanvas.width = 55;
  //   offscreenCanvas.height =32;
  //   var offscreenCtx = offscreenCanvas.getContext('2d');
  //   offscreenCtx.save();
  //   offscreenCtx.scale(1, 1);
  //   offscreenCtx.drawImage(enemy.image,enemy.framesCurrent * (enemy.image.width / enemy.framesMax),
  //   0,
  //   enemy.image.width / enemy.framesMax,
  //   enemy.image.height,
  //   enemy.position.x - enemy.offset.x,
  //   enemy.position.y - enemy.offset.y,
  //   (enemy.image.width / enemy.framesMax) * enemy.scale,
  //   enemy.image.height * enemy.scale);
  //   offscreenCtx.restore()
  //   enemy.update(offscreenCanvas,enemy.color, turned)
  //   // c.restore()
  //   // if (turned) enemy.position.x = enemy.position.x + 1386
  //   turned = false
  // }