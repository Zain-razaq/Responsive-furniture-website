let serach = document.querySelector(".search-box");
let menu = document.querySelector(".navbar");

document.querySelector("#search-icon").onclick = () => {
  serach.classList.toggle("active");
  menu.classList.remove("active");
};
document.querySelector("#menu-icon").onclick = () => {
  menu.classList.toggle("active");
  serach.classList.remove("active");
};

// Hide search and menu box on scroll
window.onscroll = () => {
  serach.classList.remove("active");
  menu.classList.remove("active");
};

// Header
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
