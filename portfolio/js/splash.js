// Función para redireccionar después de un tiempo
function redirectToPortfolio() {
    window.location.href = 'http://127.0.0.1:5500/portfolio/html/portfolio.html'; // Reemplaza 'tu_pagina_principal.html' con la URL de tu página principal
}

// Llama a la función de redireccionamiento después de 3 segundos (3000 milisegundos)
setTimeout(redirectToPortfolio, 4000); // Cambia el tiempo de espera según tus necesidades (en milisegundos)
