let currentSlideIndex = 0;
let isSlideMoving = false;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track a");
const totalSlides = slides.length;
const transitionOffsetX = 100;
const slideMoveMillis = 3000;
const dots = document.querySelectorAll(".dot");

let autoScroll = setInterval(() => {
  moveSlide(1);
}, slideMoveMillis);

dots.forEach((_, dotIndex) => {
  dot.addEventListener("click", () => {
    moveSlide(dotIndex - currentSlideIndex);
    updateDots(dotIndex);
  });
});

function moveSlide(direction) {
  if (isSlideMoving) return;
  isSlideMoving = true;
  currentSlideIndex = (currentSlideIndex + totalSlides + direction) % totalSlides;

  clearInterval(autoScroll);
  const offset = -currentSlideIndex * transitionOffsetX;
  track.style.transform = `translateX(${offset}%)`;
  updateDots(currentSlideIndex);
  isSlideMoving = false;
  autoScroll = setInterval(() => {
    moveSlide(1);
  }, slideMoveMillis);
}

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

moveSlide(0);
