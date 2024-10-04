const slides = document.querySelector(`.slides`);
const slideCount = document.querySelectorAll(`.slides .slide`).length;
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

document.querySelector(".backward").addEventListener("click", () => {
  slideBackwards();
  haltSlider();
  startSlider();
});

document.querySelector(".forward").addEventListener("click", () => {
  slideForward();
  haltSlider();
  startSlider();
});

const modalElement = document.getElementById("fetchModal");
const modal = new bootstrap.Modal(modalElement);
const modalTriggerSlide = document.querySelector('[data-trigger="modal"]');
modalTriggerSlide.addEventListener("click", () => {
  modal.show();
});
const lastSlide = document.querySelectorAll(".slide")[slideCount - 1];
lastSlide.addEventListener("click", () => {
  haltSlider();
  modal.show();
});

modalElement.addEventListener("hidden.bs.modal", () => {
  startSlider();
});

startSlider();
