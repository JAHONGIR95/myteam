var hamburgerMenu = document.querySelector('#hamburger');
var sidebar = document.querySelector('#sidebar');
var sidebarButton = document.querySelector('#sidebar-button');
var body = document.querySelector('body');
var overlay = document.querySelector('#overlay');

hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('clicked');
    sidebar.classList.toggle('opened');
    sidebarButton.classList.toggle('opened');
    overlay.classList.toggle('opened');
    body.classList.toggle('opened');

});