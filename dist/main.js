/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/burgerMenu.js":
/*!***************************!*\
  !*** ./src/burgerMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuEvent": () => (/* binding */ addMenuEvent)
/* harmony export */ });
let burger = document.querySelector('.hamburger');
let navBar = document.querySelector('nav');

function toggleClassOnEvent(eventKey ,className, item = eventKey){
  eventKey.addEventListener('click', ()  => {
    item.classList.toggle(className)
})
}

function addMenuEvent(){
    toggleClassOnEvent(burger, 'closed')
    toggleClassOnEvent(burger, 'active', navBar)
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burgerMenu */ "./src/burgerMenu.js");
/* harmony import */ var _projectFolderstyling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFolderstyling */ "./src/projectFolderstyling.js");


//burger icon//
(0,_burgerMenu__WEBPACK_IMPORTED_MODULE_0__.addMenuEvent)()
//hover and click project//

let projectFolders = document.querySelectorAll('.project-folder')

;(0,_projectFolderstyling__WEBPACK_IMPORTED_MODULE_1__.addListners)(projectFolders)




/***/ }),

/***/ "./src/projectFolderstyling.js":
/*!*************************************!*\
  !*** ./src/projectFolderstyling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListners": () => (/* binding */ addListners)
/* harmony export */ });
function addListners(nodeList){
    nodeList.forEach(node => {
        removeClassFromNodeList(nodeList, 'selected-project','show-x' )
        addMouseEvent('click', node.lastElementChild, 'show-x')
        addMouseEvent('click', node, 'selected-project')
        addMouseEvent('mouseover', node.lastElementChild, 'hover-x', addClass)
        addMouseEvent('mouseleave', node.lastElementChild, 'hover-x', removeClass)
  })
}

function addClickListnerEvent(node, cssClass1, cssClass2){
  node.addEventListener('click', () => {
      removeClassFromNodeList(node, cssClass1, cssClass2)
      addClass(node, cssClass1)
      addClass(node.lastElementChild, cssClass2)
  })
}

function addMouseEvent(eventType, node, cssClass, action){
  node.addEventListener(eventType, () => {
    action(node, cssClass)
  })
}

function removeClass(item, cssClass2){
  item.classList.remove(cssClass2)
}

function addClass(item, cssClass){
  item.classList.add(cssClass)
}

function removeClassFromNodeList(nodeList, cssClass1, cssClass2){
  nodeList.forEach(node => {
      node.addEventListener('click', () => {
        if(node.classList.contains(cssClass1)){
        removeClass(node, cssClass1)
        removeClass(node.lastElementChild, cssClass2)
        }})})}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map