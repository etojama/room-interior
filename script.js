const right = document.querySelector(".rt");
const left = document.querySelector(".lt");
const target = document.querySelector("#target-bg");

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
