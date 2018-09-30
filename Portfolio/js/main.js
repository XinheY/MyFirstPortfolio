const menuBtn = document.querySelector(".Bmenu");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuib = document.querySelector(".imageback");
const Items = document.querySelectorAll(".nav-item");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuib.classList.add("show");
    Items.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuib.classList.remove("show");
    Items.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
