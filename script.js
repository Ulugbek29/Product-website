const body = document.querySelector("body")
const header = document.querySelector("header")
const toggle = document.querySelector(".toggle")
const sunIcon = document.querySelector(".fa-sun")
const moonIcon = document.querySelector(".fa-moon")
const menuIcon = document.querySelector("#menu__icon")
const navList = document.querySelector(".nav__lists")
const exit = document.querySelector("#exit")
const links = document.querySelectorAll("#link")

toggle.addEventListener("click", ()=> {
    body.classList.toggle("dark")
    header .classList.toggle("dark")
    sunIcon.className = sunIcon.className === "active" ? "fa-solid fa-sun" : "active fa-solid fa-sun";
    moonIcon.classList = moonIcon.className ==="active" ? "fa-solid fa-moon" : "active fa-solid fa-moon";
})


menuIcon.addEventListener("click", ()=> {
    navList.classList.add("active");
    navList.style.display = "block"
})

exit.addEventListener("click", ()=> {
    navList.classList.remove("active")
})

links.addEventListener("click", ()=> {
    navList.classList.remove("active")
})