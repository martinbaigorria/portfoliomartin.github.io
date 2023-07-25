function downloadCV() {
    // Ruta relativa al archivo PDF en el mismo directorio que la página web
    const cvUrl = "Curriculum.Martin Baigorria.pdf";
  
    // Crea un elemento de enlace (hipervínculo) temporal
    const tempLink = document.createElement("a");
    tempLink.href = cvUrl;
  
    // Establece el atributo 'download' para indicar que se descargará el archivo
    tempLink.setAttribute("download", "Curriculum-Martin Baigorria.pdf");
  
    // Agrega el enlace al documento y haz clic en él para iniciar la descarga
    document.body.appendChild(tempLink);
    tempLink.click();
  
    // Elimina el enlace temporal del documento (opcional)
    document.body.removeChild(tempLink);
  }
  

 