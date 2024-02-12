const images = document.querySelectorAll(".slider .slider-line img");
const sliderLine = document.querySelector(".slider-line");
let count = 0;
let width;
let startX = 0;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

init();
window.addEventListener("resize", init);

document.querySelector(".slider-next").addEventListener("click", function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

sliderLine.addEventListener("touchstart", handleTouchStart);
sliderLine.addEventListener("touchmove", handleTouchMove);
sliderLine.addEventListener("touchend", handleTouchEnd);

function handleTouchStart(event) {
  startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  const moveX = event.touches[0].clientX;
  const diffX = startX - moveX;
  if (Math.abs(diffX) > 100) {
    if (diffX > 0) {
      count++;
      if (count >= images.length) {
        count = 0;
      }
    } else {
      count--;
      if (count < 0) {
        count = images.length - 1;
      }
    }
    rollSlider();
    startX = moveX;
  }
}
