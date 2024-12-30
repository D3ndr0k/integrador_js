const burgerMenuButton = document.querySelector(".burgermenu");
const menu = document.querySelector(".menu");

burgerMenuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
