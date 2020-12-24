var hamburgerMenu = document.querySelector('#hamburger');
// var hamburgerMenu2 = document.querySelector('#hamburger2');
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

hamburgerMenu2.addEventListener('click', function(){
    // hamburgerMenu2.classList.toggle('clicked');
    sidebar.classList.toggle('opened');
    sidebarButton.classList.toggle('opened');
    overlay.classList.toggle('opened');
    body.classList.toggle('opened');

});