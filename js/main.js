var hamburgerMenu = document.querySelector('#hamburger');
var sidebar = document.querySelector('#sidebar');

hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('clicked');
    sidebar.classList.toggle('opened');

});