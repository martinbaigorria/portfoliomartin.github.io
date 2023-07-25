const animateElements = document.querySelectorAll('.animate__animated');

function checkElementVisibility() {
  animateElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight && elementBottom >= 0) {
      element.classList.add('animate__fadeInUp');
    } else {
      element.classList.remove('animate__fadeInUp');
    }
  });
}

// Llama a la función al cargar la página y en cada evento de scroll
window.addEventListener('load', checkElementVisibility);
window.addEventListener('scroll', checkElementVisibility);




function toggleArrowVisibility() {
  const arrow = document.querySelector('.arrow');
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollY + windowHeight >= documentHeight) {
    arrow.classList.add('show');
  } else {
    arrow.classList.remove('show');
  }
}

// Escuchar el evento scroll para mostrar u ocultar el arrow
document.addEventListener('scroll', toggleArrowVisibility);




