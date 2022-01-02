// DEVELOPED BY JOB DE VOGEL

// Hide navbar background
function changeBackground(){
    if(window.scrollY > window.innerHeight / 3){
        document.getElementById('nb').classList.add('change-color');
    }else{
        document.getElementById('nb').classList.remove('change-color');
    }
}

window.addEventListener('scroll', changeBackground);

// Manual carousel credits @w3school
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

// Question and answer for software/skills information
const questions = document.getElementById('questions');
const answers = document.getElementById('answers');
const background = document.getElementById('skillsBackground');
var infoVisible = false;
var tempInfoVisible= false;
var visibleQuestion;
var visibleQuestionParent;
var infoScreen;

// If scroll is at page skills...
    // Implement here
//

for(let i = 0; i < questions.children.length; i++){        
    // If user hovers over software type, show the explanation
    questions.children[i].addEventListener("mouseover", function(){
        if (infoVisible == false){
            const pLength = answers.children[i].innerText.length;
            const factor = 90 + (Math.max(pLength - 791, 0));

            answers.children[i].style.width = factor + '%';
            answers.children[i].classList.remove('invisible');
            answers.children[i].classList.add('visible');

            questions.children[i].style.transition = 'font-weight .2s';
            questions.children[i].style.fontWeight = '500';

            tempInfoVisible = true;
        }      
    })

    // If user moves out software type, hide the explanation
    questions.children[i].addEventListener("mouseout", function(){
        if (infoVisible == false && tempInfoVisible == true){
            answers.children[i].classList.remove('visible');
            answers.children[i].classList.add('invisible');

            questions.children[i].style.transition = 'font-weight .2s';
            questions.children[i].style.fontWeight = '100';

            tempInfoVisible = false;
        }      
    })
    
    // If user clicks on software type, keep the explanation
    questions.children[i].addEventListener("click", function(){
        if(infoVisible == true && questions.children[i] == visibleQuestion){
            infoScreen.classList.remove('visible');
            infoScreen.classList.add('invisible');
            visibleQuestion.style.transition = 'font-weight .2s';
            visibleQuestion.style.fontWeight = '100';
        }else if(infoVisible == true){
            infoScreen.classList.remove('visible');
            infoScreen.classList.add('invisible');
            visibleQuestion.style.transition = 'font-weight .2s';
            visibleQuestion.style.fontWeight = '100';

            console.log('infoVisible ' + infoVisible);
            console.log('tempInfoVisible ' + tempInfoVisible);

            const pLength = answers.children[i].innerText.length;
            const factor = 85 + (Math.max(pLength - 791, 0)) * 0.191;

            answers.children[i].style.width = factor + '%';
            answers.children[i].classList.remove('invisible');
            answers.children[i].classList.add('visible');
        }

        infoVisible = true;
        tempInfoVisible = false;
        infoScreen = answers.children[i];
        visibleQuestion = questions.children[i];
    })
    
    // If user clicks outside questions, hide the explanation
    document.addEventListener("click", function(event){
        if (infoVisible == true){
            var isClickOnQuestion = visibleQuestion.contains(event.target);
            
            if (!isClickOnQuestion){
                infoScreen.classList.remove('visible');
                infoScreen.classList.add('invisible');
                visibleQuestion.style.transition = 'font-weight .2s';
                visibleQuestion.style.fontWeight = '100';

                infoVisible = false;
            }
        }
    })
}