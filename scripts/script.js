const modal = document.querySelector(".modal")
const triggerButton = document.querySelector(".trigger-btn")
const closeButton = document.querySelector(".close-btn")
const body = document.querySelector("body")

triggerButton.addEventListener('click', () => {
  modal.classList.add("modal--active")
  body.classList.add("body")
  console.log("modal activated")
})

closeButton.addEventListener('click', () => {
  modal.classList.remove("modal--active")
  body.classList.remove("body")
  console.log("modal disabled")
})