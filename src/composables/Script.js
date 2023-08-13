const navbarBtn = document.querySelector(".navbar-menu-toggler");
const navbarMenu = document.querySelector(".navbar-menu");
const header = document.querySelector("header");
let isNavbarOpen = false;
navbarBtn.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  if (isNavbarOpen) {
    navbarMenu.classList.remove("block");
    isNavbarOpen = false;
  } else {
    navbarMenu.classList.add("block");
    isNavbarOpen = true;
  }
}

function toggleNavbarOnResize() {
  // Make navbar visible on resize if it is on closed state
  if (window.innerWidth > 640) {
    isNavbarOpen = true;
    toggleNavbar();
  }
}
toggleNavbarOnResize();

function fadeInNavbar() {
  if (window.scrollY < 50) {
    header.classList.remove("fade-in");
  } else {
    header.classList.add("fade-in");
  }
}

window.addEventListener("resize", toggleNavbarOnResize);
window.addEventListener("scroll", fadeInNavbar);
