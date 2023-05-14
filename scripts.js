// dropzone - cards
function log(message) {
  console.log("> " + message)
}

// função para mudar do dark para o light mode
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark-mode")
}

// parte do drag and drop
const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".cards")

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart)
  card.addEventListener("drag", drag)
  card.addEventListener("dragend", dragend)
})

function dragstart() {
  // log('Card: start')
  dropzones.forEach((dropzone) => dropzone.classList.add("highlights"))

  this.classList.add('is-dragging')
}

function drag() {
  // log("Card: is gragging")
}

function dragend() {
  // log("Card: stop drag")
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlights"))

  this.classList.remove("is-dragging")

}

// local onde vai soltar os cartões

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter)
  dropzone.addEventListener("dragover", dragover)
  dropzone.addEventListener("dragleave", dragleave)
  dropzone.addEventListener("drop", drop)
})

function dragenter() {
  // log("dropzone: enter in zone")
}

function dragover() {
  // log("dropzone: over")
  this.classList.add('over')

  const cardBeingDragged = document.querySelector('.is-dragging')
  this.appendChild(cardBeingDragged)
}

function dragleave() {
  // log("dropzone: leave")
  this.classList.remove("over")

}

function drop() {
  // log("dropzone: dropped")
}
