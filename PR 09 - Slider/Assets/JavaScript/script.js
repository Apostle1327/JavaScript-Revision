const slides = document.querySelector(`.slides`);
const slideCount = document.querySelectorAll(`.slides .slide`).length;
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
let intervalTime = 2000;
let slideInterval;

slides.addEventListener("mouseover", haltSlider);
slides.addEventListener("mouseout", startSlider);

function slideForward() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlide();
}

function slideBackwards() {
  currentSlide = (currentSlide - 1 + slideCount) % slideCount;
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startSlider() {
  slideInterval = setInterval(slideForward, intervalTime);
}

function haltSlider() {
  clearInterval(slideInterval);
}

function restartSlider() {
  haltSlider();
  startSlider();
}

document.querySelector(".backward")?.addEventListener("click", () => {
  slideBackwards();
  restartSlider();
});

document.querySelector(".forward")?.addEventListener("click", () => {
  slideForward();
  restartSlider();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    slideForward();
    restartSlider();
  } else if (event.key === "ArrowLeft") {
    slideBackwards();
    restartSlider();
  }
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;
    updateSlide();
    restartSlider();
  });
});

const modalElement = document.getElementById("fetchModal");
const modal = new bootstrap.Modal(modalElement);

const lastSlide = document.querySelectorAll(".slide")[slideCount - 1];
lastSlide.addEventListener("click", () => {
  haltSlider();
  modal.show();
});

modalElement.addEventListener("hidden", () => {
  startSlider();
});

startSlider();
