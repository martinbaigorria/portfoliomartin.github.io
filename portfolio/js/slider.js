const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');

    slides.forEach((slide, slideIndex) => {
      if (slideIndex < index) {
        slide.style.transform = 'translateX(-100%)';
      } else if (slideIndex > index) {
        slide.style.transform = 'translateX(100%)';
      } else {
        slide.style.transform = 'translateX(0%)';
      }
    });

    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    dots[index].classList.add('active');
  });
});
