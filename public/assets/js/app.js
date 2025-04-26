const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const dropBtn = document.querySelector(".submenu-dropdown");
const submenu = document.querySelector(".submenu");
const burger = document.querySelector(".burger");
const xmark = document.querySelector(".xmark");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

const cartBurger = document.querySelector(".cart-burger");
const cartXmark = document.querySelector(".cart-xmark");
const leftSidebar = document.querySelector(".left-side");




toggleThemeBtns.forEach(toggleThemeBtn => {
    toggleThemeBtn.addEventListener("click", () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})

dropBtn.addEventListener('click', (e) => {
    submenu.classList.toggle('submenu--open');
});

burger.addEventListener('click', (e) => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--visible")
});

xmark.addEventListener('click', (e) => {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible")
});

cartBurger.addEventListener('click', (e) => {
    leftSidebar.classList.remove("-left-64");
    leftSidebar.classList.add("left-0");
    overlay.classList.add("overlay--visible")
});

cartXmark.addEventListener('click', (e) => {
    leftSidebar.classList.remove("left-0");
    leftSidebar.classList.add("-left-64");
    overlay.classList.remove("overlay--visible")
});

// to close sidebars with clicking on the screen
overlay.addEventListener('click', (e) => {

    if (nav.classList.contains("right-0")) {

        nav.classList.remove("right-0");
        nav.classList.add("-right-72");
        overlay.classList.remove("overlay--visible")
    } else if (leftSidebar.classList.contains("left-0")) {

        leftSidebar.classList.remove("left-0");
        leftSidebar.classList.add("-left-64");
        overlay.classList.remove("overlay--visible")
    }
});