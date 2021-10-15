toggle_button = document.getElementById("toggle")
navbar = document.getElementById("navbar")
open_button = document.getElementById("open")
nav_ul = document.getElementById("nav_ul")


toggle_button.addEventListener("click", function() {
    navbar.style.width = "4%"
        // toggle_button.style.display = "none"
        // toggle_button.innerHTML = "I"
    toggle_button.style.display = "none"
    open_button.style.display = "block"
    open_button.style.position = "relative"
    open_button.style.top = "55px"
    navbar.style.height = "110vh";
    navbar.style.animation = "nav_close 0.2s linear"

})

open_button.addEventListener("click", () => {

    navbar.style.width = "20vw"
    open_button.style.display = "none"
    navbar.style.animation = "nav_open 0.1s linear"
    toggle_button.style.display = "block"

    nav_ul.style.display = "block"

})