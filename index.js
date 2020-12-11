const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);

const nextButton = document.querySelector(".button-right");
const prevButton = document.querySelector(".button-left");

const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-indicator");
  targetDot.classList.add("current-indicator");
};

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-indicator");
  let nextSlide = currentSlide;
  let nextDot = currentDot;
  if (currentSlide.nextElementSibling === null) {
    nextSlide = slides[0];
    nextDot = dots[0];
  } else {
    nextSlide = currentSlide.nextElementSibling;
    nextDot = currentDot.nextElementSibling;
  }

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
});

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-indicator");

  let prevSlide = currentSlide;
  let prevDot = currentDot;

  if (currentSlide.previousElementSibling === null) {
    prevSlide = slides[slides.length - 1];
    prevDot = dots[dots.length - 1];
  } else {
    prevSlide = currentSlide.previousElementSibling;
    prevDot = currentDot.previousElementSibling;
  }

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-indicator");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});

setInterval(() => {
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-indicator");
  let nextSlide = currentSlide;
  let nextDot = currentDot;
  if (currentSlide.nextElementSibling === null) {
    nextSlide = slides[0];
    nextDot = dots[0];
  } else {
    nextSlide = currentSlide.nextElementSibling;
    nextDot = currentDot.nextElementSibling;
  }

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
}, 10000);
