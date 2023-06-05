function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  showSlides(modalId, 1); // Mostrar la primera imagen al abrir el modal
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function plusSlides(modalId, n) {
  var modal = document.getElementById(modalId);
  var slideIndex = parseInt(modal.getAttribute("data-slideIndex")) || 1;
  showSlides(modalId, slideIndex + n);
}

function showSlides(modalId, n) {
  var modal = document.getElementById(modalId);
  var slides = modal.getElementsByClassName("mySlides");
  var slideIndex = n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  modal.setAttribute("data-slideIndex", slideIndex);

  // Deshabilitar flecha de la derecha cuando se alcanza la última imagen
  var nextArrow = modal.getElementsByClassName("next")[0];
  if (slideIndex === slides.length) {
    nextArrow.classList.add("disabled");
  } else {
    nextArrow.classList.remove("disabled");
  }

  // Deshabilitar flecha de la izquierda cuando se encuentra en la primera imagen
  var prevArrow = modal.getElementsByClassName("prev")[0];
  if (slideIndex === 1) {
    prevArrow.classList.add("disabled");
  } else {
    prevArrow.classList.remove("disabled");
  }
}

window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    var modalId = event.target.id;
    closeModal(modalId);
  }
}

//PDF Modal
document.getElementById('pdf-link').addEventListener('click', function(e) {
  e.preventDefault();
  showPdfModal('doc (1).pdf');
});

function showPdfModal(pdfUrl) {
  var modal = document.getElementById('pdf-modal');
  var iframe = document.getElementById('pdf-iframe');
  var closeBtn = document.getElementById('pdf-modal-close');
  
  // Mostrar el modal
  modal.style.display = 'block';
  
  // Cargar el PDF en el iframe
  iframe.src = pdfUrl;
  
  // Cerrar el modal al hacer clic en el botón de cierre
  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      iframe.src = '';
  });
}