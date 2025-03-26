let Left_Menu_lis = document.querySelectorAll(
  ".full_menu .Menu_container:nth-child(2) ul li"
);
let Right_Menu_lis = document.querySelectorAll(
  ".full_menu .Menu_container:nth-child(1) ul li"
);
let Left_container = document.querySelector(
  ".full_menu .Menu_container:nth-child(1)"
);
let Right_container = document.querySelector(
  ".full_menu .Menu_container:nth-child(2)"
);
let Right_container_Content = document.querySelector(
  ".full_menu .Menu_container:nth-child(2) .Content"
);
let MenuWrapper = document.querySelector(".full_menu");

let bars = document.querySelector(".ri-menu-line");
let Closebtn = document.querySelector(".ri-close-line");
let moon = document.querySelector(".ri-moon-clear-line");

bars.addEventListener("click", () => {
  MenuWrapper.classList.add("activeWrapper");
  Left_container.classList.add("LeftMenuOpen");
  Right_container.classList.add("RightMenuOpen");
  Right_Menu_lis.forEach((li) => {
    li.classList.add("RightContentOpen");
  });
  Left_Menu_lis.forEach((li) => {
    li.classList.add("LeftContentOpen");
  });
  Right_container_Content.classList.add("menuDescOpen");
});

Closebtn.addEventListener("click", () => {
  MenuWrapper.classList.remove("activeWrapper");
  Left_container.classList.remove("LeftMenuOpen");
  Right_container.classList.remove("RightMenuOpen");
  Right_Menu_lis.forEach((li) => {
    li.classList.remove("RightContentOpen");
  });
  Left_Menu_lis.forEach((li) => {
    li.classList.remove("LeftContentOpen");
  });
  Right_container_Content.classList.remove("menuDescOpen");
});

moon.addEventListener("click", () => {
  document.body.classList.toggle("activeTheme");
});
