// Definir el sujeto (observable)
class Sujeto {
    constructor() {
      this.observadores = [];
    }
  
    registrarObservador(observador) {
      this.observadores.push(observador);
    }
  
    eliminarObservador(observador) {
      this.observadores = this.observadores.filter(
        (obs) => obs !== observador
      );
    }
  
    notificarObservadores() {
      this.observadores.forEach((observador) => {
        observador.actualizar();
      });
    }
  
    cargarContenido() {
      // Simular una demora en la carga del contenido
      setTimeout(() => {
        // Realizar acciones para cargar el contenido
  
        // Notificar a los observadores cuando el contenido esté listo
        this.notificarObservadores();
      }, 2000);
    }
  }
  
  // Definir el observador
  class Observador {
    constructor(elemento) {
      this.elemento = elemento;
    }
  
    actualizar() {
      this.elemento.style.opacity = 1; // Mostrar el elemento
    }
  }
  
  // Uso del patrón Observer
  const sujeto = new Sujeto();
  const elementos = document.querySelectorAll('.elemento'); // Seleccionar los elementos a mostrar
  
  elementos.forEach((elemento) => {
    const observador = new Observador(elemento);
    sujeto.registrarObservador(observador);
  });
  
  // Cargar el contenido una vez que la página esté lista
  window.addEventListener('load', () => {
    sujeto.cargarContenido();
  });
  




  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  


  const dynamicText = document.getElementById("dynamic-text");
  const phrases = ["< Developer >", "[ Full-Stack ]", "{ Mobile Developer }"];
  let currentIndex = 0;
  let deleteMode = false;
  
  const animateText = () => {
    if (!deleteMode) {
      let currentPhrase = phrases[currentIndex];
      let currentPhraseArray = currentPhrase.split("");
      let i = 0;
  
      const typeNextLetter = () => {
        if (i < currentPhraseArray.length) {
          dynamicText.textContent += currentPhraseArray[i];
          i++;
          setTimeout(typeNextLetter, 100);
        } else {
          deleteMode = true;
          setTimeout(animateText, 2000);
        }
      };
  
      typeNextLetter();
    } else {
      let currentPhrase = phrases[currentIndex];
      let currentPhraseArray = currentPhrase.split("");
      let i = currentPhraseArray.length - 1;
  
      const deleteNextLetter = () => {
        if (i >= 0) {
          dynamicText.textContent = dynamicText.textContent.slice(0, -1);
          i--;
          setTimeout(deleteNextLetter, 100);
        } else {
          deleteMode = false;
          currentIndex = (currentIndex + 1) % phrases.length;
          setTimeout(animateText, 500);
        }
      };
  
      deleteNextLetter();
    }
    
    // Mostrar u ocultar el cursor intermitente al final
    if (!deleteMode) {
      dynamicText.classList.add("show-cursor");
    } else {
      dynamicText.classList.remove("show-cursor");
    }
  };
  
  animateText();
  





  const elements = document.querySelectorAll('.animate');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, options);

elements.forEach(element => {
  observer.observe(element);
});
