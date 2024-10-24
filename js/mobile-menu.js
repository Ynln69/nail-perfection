let btn = document.querySelector(".mobile-menu");
let burger = document.querySelector(".mobile-btn");
let nav = document.querySelector(".header-nav");
let item = document.querySelectorAll(".header-nav-item");

btn.addEventListener("click", function (e) {
  nav.classList.toggle("header-nav-mobile");
  burger.classList.toggle("mobile-btn-active");
  document.body.classList.toggle("body-scroll");
});

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function (e) {
    nav.classList.toggle("header-nav-mobile");
    burger.classList.toggle("mobile-btn-active");
    document.body.classList.toggle("body-scroll");
  });
}
