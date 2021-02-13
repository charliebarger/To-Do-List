/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//burger icon//
let burger = document.querySelector('.hamburger');
let burgerClasses = burger.classList;

let navBar = document.querySelector('nav');
let navBarClasses = navBar.classList;


burger.addEventListener('click', ()   => {
  burgerClasses.toggle('closed')
  navBarClasses.toggle('active')
})

//hover and click project//

let projectFolders = document.querySelectorAll('.project-folder')

projectFolders.forEach(folder => {
  folder.addEventListener('click', () => {
    projectFolders.forEach(folder => {
      if(folder.classList.contains('selected-project')){
        folder.classList.remove('selected-project');
        folder.lastElementChild.classList.remove('show-x')
      }
    })
    folder.classList.add('selected-project')
    folder.lastElementChild.classList.add('show-x')
  })
  folder.addEventListener('mouseover', () => {
    folder.lastElementChild.classList.add('hover-x')
  })
  folder.addEventListener('mouseleave', () => {
    folder.lastElementChild.classList.remove('hover-x')
  })
})

//add new project//


/******/ })()
;
//# sourceMappingURL=main.js.map