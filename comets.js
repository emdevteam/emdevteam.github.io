const Comets = document.querySelector('.comets')

function createComet () {
  console.log(Comets.children.length)
  if (Comets.children.length > 100) {
    Comets.children[0].remove()
  }
  let cometX = Math.round(Math.random() * window.innerWidth)
  let cometY = Math.round(Math.random() * window.innerHeight)
  let comet = document.createElement('div')
  comet.setAttribute('class', 'comet')
  comet.style.left = cometX+'px'
  comet.style.top  = cometY+'px'
  
  Comets.append(comet)
}

setInterval(createComet, 1500)
