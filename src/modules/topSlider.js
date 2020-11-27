'use strict';

const topSlider = () => {

    const mainSlider = document.querySelectorAll('.main-slide');

    let currentMainSlide = 0,
      interval;

    const prevSlide = (elem, index) => {
      elem[index].style.display = 'none';
    };
    const nextSlide = (elem, index) => {
      elem[index].style.display = 'flex';
    };

    const autoPlayMainSlider = () => {
      prevSlide(mainSlider, currentMainSlide);
      currentMainSlide++;
      if (currentMainSlide >= mainSlider.length) {
        currentMainSlide = 0;
      }
      nextSlide(mainSlider, currentMainSlide);
    };

    const startMainSlide = (time = 3000) => {
      interval = setInterval(autoPlayMainSlider, time);
    };

    startMainSlide(3000);
  };

  export default topSlider;