const body = document.querySelector("body")
const header = document.querySelector("header")
const toggle = document.querySelector(".toggle")
const sunIcon = document.querySelector(".fa-sun")
const moonIcon = document.querySelector(".fa-moon")

toggle.addEventListener("click", ()=> {
    body.classList.toggle("dark")
    header .classList.toggle("dark")
    sunIcon.className = sunIcon.className === "active" ? "fa-solid fa-sun" : "active fa-solid fa-sun";
    moonIcon.classList = moonIcon.className ==="active" ? "fa-solid fa-moon" : "active fa-solid fa-moon";
})