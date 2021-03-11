let burger = document.querySelector('.hamburger');
let navBar = document.querySelector('nav');
let hideBackground = document.getElementById('task-section')

function toggleClassOnEvent(eventKey ,className, item = eventKey){
  eventKey.addEventListener('click', function(e){
    e.stopPropagation()
    item.classList.toggle(className)
})
}

function addMenuEvent(){
    toggleClassOnEvent(burger, 'closed')
    toggleClassOnEvent(burger, 'hide-content', hideBackground)
    toggleClassOnEvent(burger, 'active', navBar)
}

export {addMenuEvent, toggleClassOnEvent}
