// Variables
const closeButton = document.querySelector('.closebtn'),
     nav = document.querySelector('.menu'),
     hamburgerMenu = document.querySelector('.hamburger');

     
// Event listeners   
closeButton.addEventListener('click', menuHideAndShow);
hamburgerMenu.addEventListener('click', menuHideAndShow);


// Functions
function menuHideAndShow() {
    nav.classList.toggle('menu_hide');
    hamburgerMenu.classList.toggle('hamburger_hide');
}