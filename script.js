// DEVELOPED BY JOB DE VOGEL
function scrollAnimations(){
    // Move timeline
    const intBoxTop = document.querySelector('.int-box-top');
    const intTop = intBoxTop.getBoundingClientRect().bottom;
    
    const intBoxBottom = document.querySelector('.int-box-bottom');
    const intBottom = intBoxBottom.getBoundingClientRect().top;
    
    const timelineTitleFixed = document.querySelector('.timeline-title-fixed');
    const timeline = timelineTitleFixed.getBoundingClientRect().bottom;

    const timelineTitleTop = document.querySelector('.timeline-title-top');
    const timelineTitleBottom = document.querySelector('.timeline-title-bottom');

    if ((timeline > intTop) && (timeline < intBottom)){
        timelineTitleTop.style.visibility = 'hidden';
        timelineTitleBottom.style.visibility = 'hidden';

        timelineTitleFixed.style.visibility = 'visible';
    }else{
        timelineTitleTop.style.visibility = 'visible';
        timelineTitleBottom.style.visibility = 'visible';

        timelineTitleFixed.style.visibility = 'hidden';
    }

    // Let experience and education boxes appear
    const intersectionLine = document.querySelector('.intersection');
    const lineBottom = intersectionLine.getBoundingClientRect().bottom;

    const experienceBoxes = document.querySelectorAll('.experience');
    const educationBoxes = document.querySelectorAll('.education');

    var visibleEdu = 0;
    var visibleExp = 0;

    var finished = false;
    
    if (finished == false){
        for (var i=0; i<experienceBoxes.length; i++){
            const experienceBoxTop = experienceBoxes[i].getBoundingClientRect().top;

            if (experienceBoxTop < lineBottom){
                experienceBoxes[i].style.opacity = '1';
                visibleExp += 1;
            } else{
                experienceBoxes[i].style.opacity = '0';
            }
        }

        for (var i=0; i<educationBoxes.length; i++){
            const educationBoxTop = educationBoxes[i].getBoundingClientRect().top;

            if (educationBoxTop < lineBottom){
                educationBoxes[i].style.opacity = '1';
                visibleEdu += 1;
            } else{
                educationBoxes[i].style.opacity = '0';
            }
        }
    }
    
    // Hide background navbar
    if(window.scrollY > window.innerHeight / 3){
        document.getElementById('nb').classList.add('change-color');
    }else{
        document.getElementById('nb').classList.remove('change-color');
    }
}

window.addEventListener('scroll', scrollAnimations);

/**************** CAROUSEL ****************/
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

/********** SHOW SOFTWARE INFORMATION ***********/
addInformation('questions-experienced', 'answers-experienced', 'visible', 'invisible');
addInformation('questions-starter', 'answers-starter', 'visible', 'invisible');

function addInformation(input, result, visibleStyle, invisibleStyle){
    // Question and answer for software/skills information
    const questions = document.getElementById(input);
    const answers = document.getElementById(result);
    const widthFactor = 1;

    var infoVisible = false;
    var tempInfoVisible= false;
    var visibleQuestion;
    var infoScreen;

    // Make a function, one for left bar, with questions input answers input
    for(let i = 0; i < questions.children.length; i++){   
        // If user hovers over software type, show the explanation
        questions.children[i].addEventListener("mouseover", function(){
            if (infoVisible == false){
                const pLength = answers.children[i].innerText.length;
                const factor = 208 + (Math.max(pLength - 345, 0)) * widthFactor;

                answers.children[i].style.width = factor + 'px';
                answers.children[i].classList.remove(invisibleStyle);
                answers.children[i].classList.add(visibleStyle);

                questions.children[i].style.transition = 'font-weight .5s';
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

                questions.children[i].style.transition = 'font-weight .5s';
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
                visibleQuestion.style.textDecoration = 'none';
            }else if(infoVisible == true){
                infoScreen.classList.remove(visibleStyle);
                infoScreen.classList.add(invisibleStyle);
                visibleQuestion.style.transition = 'font-weight .2s';
                visibleQuestion.style.fontWeight = '100';

                questions.children[i].style.transition = 'font-weight .2s';
                questions.children[i].style.fontWeight = '500';
                questions.children[i].style.textDecoration = 'none';
                
                const pLength = answers.children[i].innerText.length;
                const factor = 208 + (Math.max(pLength - 345, 0)) * widthFactor;

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
                    visibleQuestion.style.textDecoration = 'none';

                    infoVisible = false;
                }
            }
        })
    }
} 

/**********************/
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function lightMode(){
    console.log('click');
    const switchButton = document.querySelector('.switch-button');

    let darkMode = getCookie('darkMode');

    /* DARK VALUES COLORS */
    dark_backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--dark_backgroundColor');
    dark_mainTextColor = getComputedStyle(document.documentElement).getPropertyValue('--dark_mainTextColor');
    dark_navbarColor = getComputedStyle(document.documentElement).getPropertyValue('--dark_navbarColor');
    dark_portfolioBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--dark_portfolioBackgroundColor');
    dark_timelineBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--dark_timelineBackgroundColor');
    dark_softwareBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--dark_softwareBackgroundColor');
    dark_buttonTextColor = getComputedStyle(document.documentElement).getPropertyValue('--dark_buttonTextColor');
    dark_buttonBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--dark_buttonBackgroundColor');

    /* LIGHT VALUES COLORS */
    light_backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--light_backgroundColor');
    light_mainTextColor = getComputedStyle(document.documentElement).getPropertyValue('--light_mainTextColor');
    light_navbarColor = getComputedStyle(document.documentElement).getPropertyValue('--light_navbarColor');
    light_portfolioBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--light_portfolioBackgroundColor');
    light_timelineBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--light_timelineBackgroundColor');
    light_softwareBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--light_softwareBackgroundColor');
    light_buttonTextColor = getComputedStyle(document.documentElement).getPropertyValue('--light_buttonTextColor');
    light_buttonBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--light_buttonBackgroundColor');

    if (darkMode == 'true'){
        // Set to light modus
        switchButton.style.transform = "translateX(0%)";

        // CHANGE THE COLORS HERE TO LIGHT
        document.documentElement.style.setProperty('--backgroundColor', light_backgroundColor);
        document.documentElement.style.setProperty('--mainTextColor', light_mainTextColor);
        document.documentElement.style.setProperty('--navbarColor', light_navbarColor);
        document.documentElement.style.setProperty('--portfolioBackgroundColor', light_portfolioBackgroundColor);
        document.documentElement.style.setProperty('--timelineBackgroundColor', light_softwareBackgroundColor);
        document.documentElement.style.setProperty('--softwareBackgroundColor', light_buttonTextColor);
        document.documentElement.style.setProperty('--buttonTextColor', light_buttonTextColor);
        document.documentElement.style.setProperty('--buttonBackgroundColor', light_buttonBackgroundColor);
        
        // Light modus is on, dark modus is off
        setCookie('darkMode', 'false', 1)
    }else{
        // Set to dark modus
        switchButton.style.transform = "translateX(122%)";

        //CHANGE THE COLORS HERE TO DARK
        document.documentElement.style.setProperty('--backgroundColor', dark_backgroundColor);
        document.documentElement.style.setProperty('--mainTextColor', dark_mainTextColor);
        document.documentElement.style.setProperty('--navbarColor', dark_navbarColor);
        document.documentElement.style.setProperty('--portfolioBackgroundColor', dark_portfolioBackgroundColor);
        document.documentElement.style.setProperty('--timelineBackgroundColor', dark_timelineBackgroundColor);
        document.documentElement.style.setProperty('--softwareBackgroundColor', dark_softwareBackgroundColor);
        document.documentElement.style.setProperty('--buttonTextColor', dark_buttonTextColor);
        document.documentElement.style.setProperty('--buttonBackgroundColor', dark_buttonBackgroundColor);
        
        // Light modus is off, dark modus is on
        setCookie('darkMode', 'true', 1)
    }
}

let darkMode = getCookie('darkMode');

if(darkMode == null){
    setCookie('darkMode', 'true', 1);
}

if(darkMode == 'false'){
    // temporarily set darkMode cookie to true, so that it changes to light mode
    setCookie('darkMode', 'true', 1);
    lightMode();
}

setCookie('page', '1', 1)