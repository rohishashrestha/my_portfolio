// Ensure the DOM is fully loaded before executing the lightbox script
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.image-container img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    let currentIndex = 0;

    // Open Lightbox
    function openLightbox(imgElement) {
        lightbox.style.display = 'flex';
        lightboxImg.src = imgElement.src;
        currentIndex = [...images].indexOf(imgElement);
    }

    // Close Lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Show Next Image
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    // Show Previous Image
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }

    // Event Listeners
    images.forEach(img => img.addEventListener('click', function () {
        openLightbox(this);
    }));

    closeBtn.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') showNextImage();
        if (event.key === 'ArrowLeft') showPrevImage();
        if (event.key === 'Escape') closeLightbox();
    });
});