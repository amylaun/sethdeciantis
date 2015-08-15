//var alreadyRan = document.cookie="ran=true; expires=Thu, 18 Dec 2013 12:00:00 UTC";
var onMain = false;
var body = window.document.body;

if ( sessionStorage.clickcount ) {
    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    if (sessionStorage.clickcount > 1) {
        moveToContent();
    }
} else {
    sessionStorage.clickcount = 1;
}

setTimeout(function(){
    if (!onMain) {
        moveToContent();
    }
}, 7000);

window.addEventListener("click", function(){
    if (!onMain) {
        moveToContent()
    }
});
function moveToContent(){
    onMain = true;
    body.style.cursor = 'initial';
    document.querySelector('.site-wrapper').style.display = 'block';
    document.querySelector('#title-screen').style.display = 'none';
}
