const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;

    // Mostrar las cards correspondientes a la categoría seleccionada y ocultar las demás
    cards.forEach((card) => {
      const cardCategory = card.dataset.category;
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

    // Actualizar la clase activa del botón seleccionado
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});
