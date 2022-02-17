// Hide background navbar
function scrollAnimations(){

    if(window.scrollY > window.innerHeight / 3){
        document.getElementById('nb').style = 'background-color: transparent';
    }else{
        document.getElementById('nb').style = 'background-color: solid';
    }
}

window.addEventListener('scroll', scrollAnimations);