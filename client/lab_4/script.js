const e = require("express");

let slidePosition = 0;
const slides = document.querySelector('carousel_item');
const totalSlides = slides.length;


document.
    querySelector('#next-button').addEventListener("click", function() {
  moveToNextSlide();
});
