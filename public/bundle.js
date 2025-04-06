/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("const dayOfTheWeek = (date = new Date()) => {\n    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n\n    return days[date.getDay()];\n}\n\nconst monthOfTheYear = (date = new Date()) => {\n    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n    return months[date.getMonth()];\n}\n\ntry {\n    document.getElementById('day').innerText = dayOfTheWeek();\n    document.getElementById('month').innerText = monthOfTheYear();\n} catch(err) {}\n\n\nexports.dayOfTheWeek = dayOfTheWeek;\nexports.monthOfTheYear = monthOfTheYear;\n\n//# sourceURL=webpack://devops/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;