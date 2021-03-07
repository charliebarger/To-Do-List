let burger = document.querySelector('.hamburger');
let navBar = document.querySelector('nav');
let hideBackground = document.getElementById('task-section')

function toggleClassOnEvent(eventKey ,className, item = eventKey){
  eventKey.addEventListener('click', () => {
    item.classList.toggle(className)
})
}

export function addMenuEvent(){
    toggleClassOnEvent(burger, 'closed')
    toggleClassOnEvent(burger, 'hide-content', hideBackground)
    toggleClassOnEvent(burger, 'active', navBar)
}

