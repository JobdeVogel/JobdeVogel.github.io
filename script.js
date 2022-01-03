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

const section = document.querySelector("#_2019");

const options = {
    root: null,
    treshold: 0.9,
    rootMargin: "0px"

};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            document.querySelector(".timeline-title").style.animation = "anim_timeline ease-in 8s forwards";
            observer.unobserve(entry.target);
            return
        }
        
    });
}, options);

observer.observe(section);

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

addInformation('questions-experienced', 'answers-experienced', 'visible', 'invisible');
addInformation('questions-starter', 'answers-starter', 'visible', 'invisible');

function addInformation(input, result, visibleStyle, invisibleStyle){
    // Question and answer for software/skills information
    const questions = document.getElementById(input);
    const answers = document.getElementById(result);
    const widthFactor = .5;

    var infoVisible = false;
    var tempInfoVisible= false;
    var visibleQuestion;
    var infoScreen;

    // If scroll is at page skills...
        // Example selection    

        // Manual selection
    //

    // Make a function, one for left bar, with questions input answers input
    for(let i = 0; i < questions.children.length; i++){   
        // If user hovers over software type, show the explanation
        questions.children[i].addEventListener("mouseover", function(){
            if (infoVisible == false){
                const pLength = answers.children[i].innerText.length;
                const factor = 208 + (Math.max(pLength - 519, 0)) * widthFactor;

                answers.children[i].style.width = factor + 'px';
                answers.children[i].classList.remove(invisibleStyle);
                answers.children[i].classList.add(visibleStyle);

                questions.children[i].style.transition = 'font-weight .2s';
                questions.children[i].style.fontWeight = '500';
                questions.children[i].style.textDecoration = 'none';

                tempInfoVisible = true;
            }      
        })

        // If user moves out software type, hide the explanation
        questions.children[i].addEventListener("mouseout", function(){
            if (infoVisible == false && tempInfoVisible == true){
                answers.children[i].classList.remove(visibleStyle);
                answers.children[i].classList.add(invisibleStyle);

                questions.children[i].style.transition = 'font-weight .2s';
                questions.children[i].style.fontWeight = '100';

                tempInfoVisible = false;
            }      
        })
        
        // If user clicks on software type, keep the explanation
        questions.children[i].addEventListener("click", function(){
            if(infoVisible == true && questions.children[i] == visibleQuestion){
                infoScreen.classList.remove(visibleStyle);
                infoScreen.classList.add(invisibleStyle);
                visibleQuestion.style.transition = 'font-weight .2s';
                visibleQuestion.style.fontWeight = '100';
            }else if(infoVisible == true){
                infoScreen.classList.remove(visibleStyle);
                infoScreen.classList.add(invisibleStyle);
                visibleQuestion.style.transition = 'font-weight .2s';
                visibleQuestion.style.fontWeight = '100';

                questions.children[i].style.transition = 'font-weight .2s';
                questions.children[i].style.fontWeight = '500';

                
                const pLength = answers.children[i].innerText.length;
                const factor = 208 + (Math.max(pLength - 519, 0)) * widthFactor;

                answers.children[i].style.width = factor + 'px';
                answers.children[i].classList.remove(invisibleStyle);
                answers.children[i].classList.add(visibleStyle);
                
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
                var isClickOnAnswer = infoScreen.contains(event.target);
                
                if (!isClickOnQuestion && !isClickOnAnswer){
                    infoScreen.classList.remove(visibleStyle);
                    infoScreen.classList.add(invisibleStyle);
                    visibleQuestion.style.transition = 'font-weight .2s';
                    visibleQuestion.style.fontWeight = '100';

                    infoVisible = false;
                }
            }
        })
    }
}

/*
// Question and answer for software/skills information
const questions = document.getElementById('questions_test');
const answers_left = document.getElementById('answers_test_left');
const answers_right = document.getElementById('answers_test_right')
const widthFactor = .5;

var infoVisible = false;
var tempInfoVisible= false;
var visibleQuestion;
var infoScreen;



// If scroll is at page skills...
    // Example selection    

    // Manual selection
//

// Make a function, one for left bar, with questions input answers input
for(let i = 0; i < questions.children.length; i++){   
    let j;
    let answers;

    // If user hovers over software type, show the explanation
    if (i == 0){
        answers = answers_left;
        j = 0
    } else if (i == 1){
        answers = answers_right;
        j = 0
    } else if (i == 2){
        answers = answers_left;
        j = 1
    } else if (i == 3){
        answers = answers_right;
        j = 1
    }
 
    questions.children[i].addEventListener("mouseover", function(){
        if (infoVisible == false){
            
            const pLength = answers.children[j].innerText.length;
            const factor = 208 + (Math.max(pLength - 519, 0)) * widthFactor;

            answers.children[j].style.width = factor + 'px';
            
            answers.children[j].classList.remove('invisible_test');
            answers.children[j].classList.add('visible_test');

            questions.children[i].style.transition = 'font-weight .2s';
            questions.children[i].style.fontWeight = '500';
            questions.children[i].style.textDecoration = 'none';

            tempInfoVisible = true;
        }      
    })
    
    // If user moves out software type, hide the explanation
    questions.children[i].addEventListener("mouseout", function(){
        if (infoVisible == false && tempInfoVisible == true){
            
            answers.children[j].classList.remove('visible_test');
            answers.children[j].classList.add('invisible_test');
            
            questions.children[i].style.transition = 'font-weight .2s';
            questions.children[i].style.fontWeight = '100';

            tempInfoVisible = false;
        }      
    })   
}


// Execute function here, once for experienced and once for starter
*/