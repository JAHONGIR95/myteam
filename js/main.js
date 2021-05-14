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


const cards = document.querySelectorAll('.card');
const cardButtons = document.querySelectorAll('.card__button')


function removeAllClasses(clickedElement){

    cards.forEach(card => {
        if(card.dataset.cardOrder != clickedElement) {
            card.classList.remove('active')
        } else {
            card.classList.toggle('active')
        }
    })
}


cardButtons.forEach(button => {
    
    button.addEventListener('click', function(){
        localStorage.setItem('cardId', button.dataset.buttonOrder)
        removeAllClasses(localStorage.getItem('cardId'))
        
    })
})

if(localStorage.getItem('cardId')){
    removeAllClasses(localStorage.getItem('cardId'))
} 