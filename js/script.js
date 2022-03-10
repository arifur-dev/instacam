const nav = document.querySelector("ul")
const navLinks = document.querySelectorAll(".nav-links")
const leftSide = document.querySelector(".left-side-panel")
const hamMenu = document.querySelector(".hamMenu")
const line = document.querySelectorAll(".line")

hamMenu.addEventListener("click", () => {
    nav.classList.toggle("ul-active")
    setTimeout(() => leftSide.classList.toggle("left-side-active"), 300)
    line[0].classList.toggle("line-1-active")
    line[1].classList.toggle("line-2-active")
})

navLinks[0].addEventListener("mouseover",(e) => {
    leftSide.classList.add("bg1")
})
navLinks[0].addEventListener("mouseleave",(e) => {
    leftSide.classList.remove("bg1")
})

navLinks[1].addEventListener("mouseover",(e) => {
    leftSide.classList.add("bg2")
})
navLinks[1].addEventListener("mouseleave",(e) => {
    leftSide.classList.remove("bg2")
})

navLinks[2].addEventListener("mouseover",(e) => {
    leftSide.classList.add("bg3")
})
navLinks[2].addEventListener("mouseleave",(e) => {
    leftSide.classList.remove("bg3")
})