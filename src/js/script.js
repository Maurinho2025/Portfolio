const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
  if (NavMenu.classList.contains("ativo")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});

const navItems = document.querySelectorAll(".nav-item a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    NavMenu.classList.toggle("ativo");
    if (NavMenu.classList.contains("ativo")) {
    //   body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });
});
