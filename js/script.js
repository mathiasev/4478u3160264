/* Fixed Menu research adpoted from http://blog.grayghostvisuals.com/js/detecting-scroll-position/ */

window.addEventListener('scroll', scrollCheck);


function scrollCheck() {
    if (window.pageYOffset > 100) {
 document.getElementById('nav').classList.add('fixHeader');
        document.getElementById('scroll').classList.add('scoll');
    }
    else if (window.pageXOffset <100) {
        document.getElementById('nav').classList.remove('fixHeader');
        document.getElementById('scroll').classList.remove('scroll');
    } 
}
