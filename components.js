/* components.js */

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}

document.getElementById("prevSlide").addEventListener("click", function() {
    showSlide(currentSlide - 1);
});

document.getElementById("nextSlide").addEventListener("click", function() {
    showSlide(currentSlide + 1);
});

// Initialize first slide
showSlide(currentSlide);
