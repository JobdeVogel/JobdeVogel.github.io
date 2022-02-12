// PageButtons
const nextPage = document.querySelector('#nextPage');
const prevPage = document.querySelector('#prevPage');

const pageArray = document.getElementById("contentContainer").querySelectorAll(".page");
const titleArray = document.getElementById("pageTitleContainer").querySelectorAll(".pageTitle");

var currentPageIndex = 0;

function ShowPage(pageIndex){
    window.scrollTo(0, 0);
    currentPageIndex = pageIndex;
    pageArray[pageIndex].style.display = 'block';
    titleArray[pageIndex].style.display = 'block';

    // See bottom of script
    Exceptions(pageIndex);
}

function ShowNextPage(){
    pageArray[currentPageIndex].style.display = 'none';
    titleArray[currentPageIndex].style.display = 'none';
    currentPageIndex = (currentPageIndex + 1) % pageArray.length;
    ShowPage(currentPageIndex);
}

function ShowPreviousPage(){
    pageArray[currentPageIndex].style.display = 'none';
    titleArray[currentPageIndex].style.display = 'none';
    if (currentPageIndex == 0){
        currentPageIndex = pageArray.length - 1;
    } else {
        currentPageIndex -= 1;
    }
    ShowPage(currentPageIndex);
}


// Exceptions
// If the page is the contactpage, make the footer absolute and put on the bottom of viewport
function Exceptions(pageIndex){
    if (pageIndex == titleArray.length - 1){
        document.querySelector('footer').style.position = 'absolute';
        document.querySelector('footer').style.right = '5px';
        document.querySelector('footer').style.bottom = '1px';
    } else {
        document.querySelector('footer').style.position = 'relative';
        document.querySelector('footer').style.right = '0px';
        document.querySelector('footer').style.bottom = '0px';
    }
}

ShowPage(0);