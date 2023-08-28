const respNavHeader = document.querySelector(".resp-nav-header")
const navbarItems = document.querySelector(".nav-items-container")
const openHamburgerBtn = document.querySelectorAll(".open-menu")
const closeMenuBtn = document.querySelectorAll(".close-menu")
const emptyMainBoilerplate = document.querySelector(".empty-boiler-plate")
const mainSection = document.querySelector(".main-section")

const toggleNavbar = () => {
    if (window.matchMedia("(min-width: 800px)").matches) {
        navbarItems.classList.toggle("active-nav-items")
        emptyMainBoilerplate.classList.toggle("show-boiler-plate")
        mainSection.classList.toggle("full-main-section")
        if (!navbarItems.classList.contains("active-nav-items")) {
            respNavHeader.style.display = "flex"
        } else {
            closeMenuBtn[1].style.display = "none"
            // mainSection.style.width = "78%"
        }
    } else {
        navbarItems.classList.toggle("active-nav-items")
        if (!navbarItems.classList.contains("active-nav-items")) {
            respNavHeader.style.display = "flex"
        } else {
            respNavHeader.style.display = "none"
            openHamburgerBtn[1].style.display = "none";
            closeMenuBtn[1].style.display = "block"
        }
    }
}

openHamburgerBtn.forEach(btn => btn.addEventListener("click", toggleNavbar))
closeMenuBtn.forEach(btn => btn.addEventListener("click", toggleNavbar))









// if (window.matchMedia("(min-width: 800px)").matches) {
//     openHamburgerBtn.forEach(btn => btn.addEventListener("click", () => {
//         navbarItems.classList.toggle("active-nav-items")
//         if (!navbarItems.classList.contains("active-nav-items")) {
//             respNavHeader.style.display = "flex"
//             // navbarItems.classList.toggle("active-nav-items")
//         } else {
//             respNavHeader.style.display = "none"
//         }
//     }))
// } else {
//     openHamburgerBtn.forEach(btn => btn.addEventListener("click", () => {
//         navbarItems.classList.toggle("active-nav-items")
//         if (!navbarItems.classList.contains("active-nav-items")) {
//             respNavHeader.style.display = "flex"
//         } else {
//             respNavHeader.style.display = "none"
//             openHamburgerBtn[1].style.display = "none";
//             closeMenuBtn[1].style.display = "block"

//         }
//     }))
// }


console.log(mainSection);