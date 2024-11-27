// Selecciona elementos del DOM
const popupTrigger = document.querySelector('.popup'); // Elemento que dispara el popup
const popupBox = document.querySelector('.popup-box'); // El popup
const popupOverlay = document.querySelector('.popup-overlay'); // Fondo oscuro
const closeButton = document.querySelector('.close-btn'); // Botón de cerrar

// Función para mostrar el popup
function showPopup() {
  popupBox.style.display = 'block';
  popupOverlay.style.display = 'block';
}

// Función para ocultar el popup
function hidePopup() {
  popupBox.style.display = 'none';
  popupOverlay.style.display = 'none';
}

// Eventos
popupTrigger.addEventListener('click', showPopup); // Mostrar popup al hacer clic en el texto
closeButton.addEventListener('click', hidePopup); // Cerrar popup al hacer clic en el botón
popupOverlay.addEventListener('click', hidePopup); // Cerrar popup al hacer clic fuera del popup
