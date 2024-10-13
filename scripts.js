// Obtener elementos
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalRef = document.getElementById('modal-ref');
const closeModal = document.querySelector('.close');
const imageContainers = document.querySelectorAll('.image-container');

// Mostrar el modal al hacer click en una imagen
imageContainers.forEach(container => {
    container.addEventListener('click', () => {
        const imgSrc = container.querySelector('img').src;
        const imgTitle = container.getAttribute('data-title');
        const imgDescription = container.getAttribute('data-description');
        const imgRef = container.getAttribute('data-ref');

        modalImage.src = imgSrc;
        modalTitle.textContent = imgTitle;
        modalDescription.textContent = imgDescription;
        modalRef.textContent = imgRef;

        modal.style.display = 'flex';
    });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer click fuera de él
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
