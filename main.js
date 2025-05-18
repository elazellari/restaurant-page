/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myContact: () => (/* binding */ myContact)\n/* harmony export */ });\nfunction myContact() {\n    const content = document.querySelector('.content');\n    const h1 = document.createElement('h1');\n    const p = document.createElement('p');\n\n    h1.innerText = 'My Contact Information';\n    p.innerText = 'Name: Jimmy Address: Toronto Phone: 1234567890';\n\n    content.append(h1,p);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhY3QuanM/ZDU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbXlDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaDEuaW5uZXJUZXh0ID0gJ015IENvbnRhY3QgSW5mb3JtYXRpb24nO1xuICAgIHAuaW5uZXJUZXh0ID0gJ05hbWU6IEppbW15IEFkZHJlc3M6IFRvcm9udG8gUGhvbmU6IDEyMzQ1Njc4OTAnO1xuXG4gICAgY29udGVudC5hcHBlbmQoaDEscCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\nconst content = document.querySelector('.content');\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\nconst home = document.querySelector('.home');\nhome.addEventListener('click', () => {\n    content.innerHTML = '';\n    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n})\n\nconst menu = document.querySelector('.menu');\nmenu.addEventListener('click', () => {\n    content.innerHTML = '';\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.newMenu)();\n})\n\nconst contact = document.querySelector('.contact');\ncontact.addEventListener('click', () => {\n    content.innerHTML = '';\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.myContact)();\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUNSO0FBQ087QUFDekM7QUFDQSx1REFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQU87QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVM7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlLWxvYWQuanNcIjtcbmltcG9ydCB7bmV3TWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IG15Q29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xucGFnZUxvYWQoKTtcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHBhZ2VMb2FkKCk7XG59KVxuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBuZXdNZW51KCk7XG59KVxuXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBteUNvbnRhY3QoKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newMenu: () => (/* binding */ newMenu)\n/* harmony export */ });\n\nfunction newMenu() {\n\nconst myMenu = ['Steak', 'Lasagna', 'Pizza'];\nconst content = document.querySelector('.content');\nconst ul = document.createElement('ul');\n\n\nmyMenu.forEach(element => {\n    const li = document.createElement('li');\n    li.innerText = element;\n    ul.appendChild(li);\n    content.appendChild(ul);\n});\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNPOztBQUVQO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gbmV3TWVudSgpIHtcblxuY29uc3QgbXlNZW51ID0gWydTdGVhaycsICdMYXNhZ25hJywgJ1BpenphJ107XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuXG5teU1lbnUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkuaW5uZXJUZXh0ID0gZWxlbWVudDtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh1bCk7XG59KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ \"./src/restaurant.jpg\");\n\n\nfunction pageLoad() {\nconst content = document.querySelector('.content');\nconst h1 = document.createElement('h1');\nconst p = document.createElement('p');\nh1.innerText = 'Welcome to our fancy restaurant';\nconst img =  document.createElement('img');\nimg.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\nimg.alt = 'restaurant image';\np.innerText = 'This is the restaurant page. Testing webpack page bundle.'\ncontent.append(h1,img,p);\nconsole.log('Imported image:', _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQThDOztBQUV2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDRDQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0Q0FBYTtBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlLWxvYWQuanM/YmVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIHJlc3RhdXJhbnRJbWcgZnJvbSAnLi9yZXN0YXVyYW50LmpwZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZCgpIHtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmgxLmlubmVyVGV4dCA9ICdXZWxjb21lIHRvIG91ciBmYW5jeSByZXN0YXVyYW50JztcbmNvbnN0IGltZyA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltZy5zcmMgPSByZXN0YXVyYW50SW1nO1xuaW1nLmFsdCA9ICdyZXN0YXVyYW50IGltYWdlJztcbnAuaW5uZXJUZXh0ID0gJ1RoaXMgaXMgdGhlIHJlc3RhdXJhbnQgcGFnZS4gVGVzdGluZyB3ZWJwYWNrIHBhZ2UgYnVuZGxlLidcbmNvbnRlbnQuYXBwZW5kKGgxLGltZyxwKTtcbmNvbnNvbGUubG9nKCdJbXBvcnRlZCBpbWFnZTonLCByZXN0YXVyYW50SW1nKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/page-load.js\n");

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c0af1b33d0a7acd6487.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;