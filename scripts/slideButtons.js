// Next/previous controls
function changeSlide(carouselName, n) {
    showSlide(carouselName, slideIndices[carouselName] += n);
}

// Thumbnail image controls
function currentSlide(carouselName, n) {
    showSlide(carouselName, slideIndices[carouselName] = n);
}

function showSlide(carouselName, n) {
    var i;
    var slides = document.getElementById(carouselName).querySelectorAll(".slide");

    if (n > slides.length) {slideIndices[carouselName] = 1};
    if (n < 1) {slideIndices[carouselName] = slides.length};

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndices[carouselName] - 1].style.display = "block";
}

function Exeptions(carouselName, n){
    // Change the text if carouselName 'personalProgramming'
}

// Dict that saves carousel indices
var slideIndices = [];

// Get all carousel names
var carousels = document.getElementsByClassName("carousel");

// For each carousel, add index to slideIndices dict
// and display first image using showSlide
for (i = 0; i < carousels.length; i++){
    carouselName = carousels[i].id;

    slideIndices[carouselName] = 1;
    showSlide(carouselName, slideIndices[carouselName]);
}