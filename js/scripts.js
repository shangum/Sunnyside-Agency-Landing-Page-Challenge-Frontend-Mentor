document.addEventListener("DOMContentLoaded", function(){
    
    const navMenuHamburger = document.querySelector('.nav-menu-hamburger');

    navMenuHamburger.addEventListener('click', onClick_navMenuHamburger);

});

function onClick_navMenuHamburger(event)
{    
    console.log('onClick_navMenuHamburger() clicked');

    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('nav-menu-active');
}