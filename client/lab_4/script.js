let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;

document.querySelector(".next-button").onclick = (e) => {
  // eslint-disable-next-line no-use-before-define
  moveToNextSlide();
};

document.querySelector(".previous-button").onclick = (e) => {
  // eslint-disable-next-line no-use-before-define
  moveToPreviousSlide();
};

function updateSlidePosition() {
  // eslint-disable-next-line no-restricted-syntax
  for (let slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }
  slides[slidePosition].classList.add('carousel_item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPreviousSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePosition--;
  }
  updateSlidePosition();
}
