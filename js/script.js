const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-nav");

burger.onclick = () => {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
};
