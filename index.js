const ICON = document.getElementById("icon")
const HAMBURGER = document.getElementById("hamburger")
const CANCEL = document.getElementById("cancel")
const MOBILE_NAV = document.getElementById("navbar-container")

ICON.addEventListener("click", handleNavbar)

function handleNavbar () {
    HAMBURGER.classList.toggle("hidden")
    CANCEL.classList.toggle("hidden")
    MOBILE_NAV.classList.toggle("hidden")
}