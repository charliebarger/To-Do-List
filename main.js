/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let burger = document.querySelector('.hamburger');
let burgerClasses = burger.classList;

let navBar = document.querySelector('nav');
let navBarClasses = navBar.classList;


burger.addEventListener('click', ()   => {
  burgerClasses.toggle('closed')
  navBarClasses.toggle('active')
})
/******/ })()
;
//# sourceMappingURL=main.js.map