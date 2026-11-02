const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

// Function to open the lightbox
function openLightbox(imageSrc, altText) {
    lightbox.style.display = "block";
    lightboxImg.src = imageSrc;
    lightboxImg.alt = altText; // Ensure alt text transfers to lightbox
}

// Close the lightbox when clicking the X
closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
});

// Close the lightbox when clicking anywhere outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
