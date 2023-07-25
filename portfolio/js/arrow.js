function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Asignar la función al evento clic del enlace
  const arrowLink = document.querySelector("#arrow a");
  arrowLink.addEventListener("click", function(event) {
    event.preventDefault();
    scrollToTop();
  });