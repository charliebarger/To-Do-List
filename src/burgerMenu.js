let burger = document.querySelector('.hamburger');
let navBar = document.querySelector('nav');

function toggleClassOnEvent(eventKey ,className, item = eventKey){
  eventKey.addEventListener('click', ()  => {
    item.classList.toggle(className)
})
}

export function addMenuEvent(){
    toggleClassOnEvent(burger, 'closed')
    toggleClassOnEvent(burger, 'active', navBar)
}

