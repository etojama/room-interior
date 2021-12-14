const right = document.querySelector(".rt");
const left = document.querySelector(".lt");
const target = document.querySelector("#target-bg");
const nav = document.querySelector("#nav");
const hamburger = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

let count = 1;

right.addEventListener("click", () => {
  target.style.backgroundImage = `url(../img/desktop-image-hero-${count}.jpg)`;
  count++;
  left.style.color = "#aaa";
  if (count > 3) {
    count = 1;
  }
});

left.addEventListener("click", () => {
  target.style.backgroundImage = `url(../img/desktop-image-hero-${count}.jpg)`;
  count--;
  if (count < 1) {
    count = 1;
    target.style.backgroundImage = "url(../img/desktop-image-hero-1.jpg)";
    left.disabled = true;

    left.style.color = "orange";
  }
});

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
}
