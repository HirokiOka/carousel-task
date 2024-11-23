let currentSlideIndex = 0;
let isSlideMoving = false;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track a");
const transitionOffsetX = 100;
const slideMoveMillis = 3000;
const dots = document.querySelectorAll(".dot");

let autoScroll = setInterval(() => {
  moveSlide(1);
}, slideMoveMillis);

dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    moveSlide(dotIndex - currentSlideIndex);
    updateDots(dotIndex);
  });
});

function updateDots(index) {
  document.querySelector(".dot.active")?.classList.remove("active");
  dots[index].classList.add("active");
}

function resetAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => {
    moveSlide(1);
  }, slideMoveMillis);
}

function moveSlide(direction) {
  if (isSlideMoving) return;
  isSlideMoving = true;
  currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;

  resetAutoScroll();
  const offset = - currentSlideIndex * transitionOffsetX;
  track.style.transform = `translateX(${offset}%)`;
  track.addEventListener("transitionend", () => {
    isSlideMoving = false;
  }, { once: true });
  updateDots(currentSlideIndex);
}

function initializeCarousel() {
  updateDots(currentSlideIndex);
  moveSlide(0);
}

initializeCarousel();
