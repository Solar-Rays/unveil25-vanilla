const ICON = document.getElementById("icon")
const HAMBURGER = document.getElementById("hamburger")
const CANCEL = document.getElementById("cancel")
const MOBILE_NAV = document.getElementById("navbar-container")
const W_ADDRESS = document.getElementById("w-address")
const CONFIRM = document.getElementById("confirm")

ICON.addEventListener("click", handleNavbar)

function handleNavbar() {
    HAMBURGER.classList.toggle("hidden")
    CANCEL.classList.toggle("hidden")
    MOBILE_NAV.classList.toggle("hidden")
}

W_ADDRESS.addEventListener("click", handleClick)


function handleClick() { 
    let walletAddress = W_ADDRESS.innerText;
    navigator.clipboard.writeText(walletAddress)
    .then (() => {
        CONFIRM.classList.remove("hidden")
    setInterval(() => {
        CONFIRM.classList.add("hidden")
    }, 3000);
    })
    .catch (err => {
        alert ("Failed to copy: ", err)
    })
    console.log("The following text was coppied: " + W_ADDRESS.innerText) 
}