// Función para abrir modal de galería
function openModal(img) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('caption');
  
  modal.style.display = 'block';
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}

// Función para cerrar modal
function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// Función scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event listeners cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
  
  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  // Mostrar/ocultar botón de scroll según posición
  window.addEventListener('scroll', function() {
    const scrollButton = document.getElementById('scrollToTop');
    if (scrollButton) {
      if (window.pageYOffset > 300) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    }
  });

});