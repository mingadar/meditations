// Initialize the Swiper
const swiper = new Swiper('.swiper', {
  // Swiper configuration options
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  mousewheel: {
    forceToAxis: true,
  },
  speed: 650,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  keyboard: {
    enabled: true,
  },
});

// Get the heart logo element
const heartLogo = document.getElementById('heart');

// Add the 'heart-animation' class to start the animation
heartLogo.classList.add('heart-animation');
