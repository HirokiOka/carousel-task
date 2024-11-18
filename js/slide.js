let currentSlide = 0;
let isSlideMoving = false;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track a");
const totalSlides = slides.length;
const progressBar = document.querySelector(".progress-bar");
const progressBars = document.querySelectorAll(".progress-bar");
const transitionOffsetX = 100;
const slideMoveMillis = 3000;

setInterval(() => {
  moveSlide(1);
}, slideMoveMillis);

function updateProgressBar() {
    progressBars.forEach(bar => bar.classList.remove("active"));
    progressBars[currentSlide].classList.add("active");
}

function moveSlide(direction) {
  if (isSlideMoving) return;
  isSlideMoving = true;
  currentSlide = (currentSlide + totalSlides + direction) % totalSlides;

  const offset = -currentSlide * transitionOffsetX;
  track.style.transform = `translateX(${offset}%)`;
  updateProgressBar();
  isSlideMoving = false;
}

moveSlide(0);
