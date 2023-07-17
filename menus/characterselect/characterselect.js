const p1LargeImg = document.querySelector('#p1largimg')
const p1Name = document.querySelector('#p1name')
const p2LargeImg = document.querySelector('#p2largimg')
const p2Name = document.querySelector('#p2name')

const p1wizard = document.querySelector('#p1wizard')
const p1martial = document.querySelector('#p1martial')
const p1wizard2 = document.querySelector('#p1samuraimack')
const p1viking = document.querySelector('#p1viking')
const p1commander = document.querySelector('#p1commander')
const p1SmallImgs = [p1wizard, p1martial, p1wizard2, p1viking, p1commander]

const p2wizard = document.querySelector('#p2wizard')
const p2martial = document.querySelector('#p2martial')
const p2wizard2 = document.querySelector('#p2samuraimack')
const p2viking = document.querySelector('#p2viking')
const p2commander = document.querySelector('#p2commander')

const p2SmallImgs = [p2wizard, p2martial, p2wizard2, p2viking, p2commander]
var lastclicked1 = p1wizard

for (let index = 0; index < p1SmallImgs.length; index++) {
  const element = p1SmallImgs[index]
  element.addEventListener('click', (e) => {
    lastclicked1.className = ''
    e.currentTarget.className = 'border'
    p1LargeImg.src = e.currentTarget.src
    lastclicked1 = e.currentTarget
    changeName(e)
  })
}

var lastclicked2 = p2wizard
for (let index = 0; index < p2SmallImgs.length; index++) {
  const element = p2SmallImgs[index]
  element.addEventListener('click', (e) => {
    lastclicked2.className = ''
    e.currentTarget.className = 'border'
    p2LargeImg.src = e.currentTarget.src
    lastclicked2 = e.currentTarget
    changeName(e)
  })
}

function changeName(element) {
  switch (element.currentTarget.id) {
    case 'p1wizard':
      p1Name.innerText = 'Wizard'
      break
    case 'p1martial':
      p1Name.innerText = 'Martial'
      break
    case 'p1viking':
      p1Name.innerText = 'Viking'
      break
    case 'p1commander':
      p1Name.innerText = 'Commander'
      break
    case 'p1samuraimack':
      p1Name.innerText = 'SamuraiMack'
      break

    // p2

    case 'p2wizard':
      p2Name.innerText = 'Wizard'
      break
    case 'p2martial':
      p2Name.innerText = 'Martial'
      break
    case 'p2viking':
      p2Name.innerText = 'Viking'
      break
    case 'p2commander':
      p2Name.innerText = 'Commander'
      break
    case 'p2samuraimack':
      p2Name.innerText = 'SamuraiMack'
      break

    default:
      break
  }
}
