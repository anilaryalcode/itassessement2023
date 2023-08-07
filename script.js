// Simple Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.style.opacity = 0);
    slides[slideIndex].style.opacity = 1;
    slideIndex = (slideIndex + 1) % slides.length;
}

showSlides();
setInterval(showSlides, 3000); // Change slides every 3 seconds
