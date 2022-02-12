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

// MANUAL OVERRIDE
// Add new carousels here!
var slideIndices = {
    'personalProgramming': 1,
    'buckylab': 1,
    'on4': 1,
    'on6': 1,
};

showSlide('personalProgramming', slideIndices['personalProgramming']);
showSlide('buckylab', slideIndices['buckylab']);
showSlide('on4', slideIndices['on4']);
showSlide('on6', slideIndices['on6']);