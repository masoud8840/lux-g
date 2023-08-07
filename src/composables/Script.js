const navbarBtn = document.querySelector(".navbar-menu-toggler");
const navbarMenu = document.querySelector(".navbar-menu");
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

window.addEventListener("resize", toggleNavbarOnResize);
