/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./babel-loader/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./babel-loader/estilos.css":
/*!**********************************!*\
  !*** ./babel-loader/estilos.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./babel-loader/estilos.css?");

/***/ }),

/***/ "./babel-loader/index.js":
/*!*******************************!*\
  !*** ./babel-loader/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./estilos.css */ \"./babel-loader/estilos.css\");\n\nvar _messaje = __webpack_require__(/*! ./messaje */ \"./babel-loader/messaje.js\");\n\ndocument.write(_messaje.firstMessage);\n(0, _messaje.delayedMessage)();\n// console.log('Hola mundo!, desde webpack')\nconsole.log('Hola mundo desde external.webpack.config!');\n\n//# sourceURL=webpack:///./babel-loader/index.js?");

/***/ }),

/***/ "./babel-loader/make-message.js":
/*!**************************************!*\
  !*** ./babel-loader/make-message.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = makeMessage;\nfunction makeMessage(msg) {\n  var element = document.createElement('p');\n  element.textContent = msg;\n  return element;\n}\n\n//# sourceURL=webpack:///./babel-loader/make-message.js?");

/***/ }),

/***/ "./babel-loader/messaje.js":
/*!*********************************!*\
  !*** ./babel-loader/messaje.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _renderToDom = __webpack_require__(/*! ./render-to-dom */ \"./babel-loader/render-to-dom.js\");\n\nvar _renderToDom2 = _interopRequireDefault(_renderToDom);\n\nvar _makeMessage = __webpack_require__(/*! ./make-message */ \"./babel-loader/make-message.js\");\n\nvar _makeMessage2 = _interopRequireDefault(_makeMessage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar waitTime = new Promise(function (resolve, reject) {\n  try {\n    setTimeout(function () {\n      resolve('Han pasado los 3 segundos... OMG!');\n    }, 3000);\n  } catch (e) {\n    reject(e);\n  }\n});\n\nmodule.exports = {\n  firstMessage: 'Hola mundo desde un modulo',\n  delayedMessage: async function delayedMessage() {\n    var message = await waitTime;\n    console.log(message);\n\n    (0, _renderToDom2.default)((0, _makeMessage2.default)(message));\n  }\n};\n\n//# sourceURL=webpack:///./babel-loader/messaje.js?");

/***/ }),

/***/ "./babel-loader/render-to-dom.js":
/*!***************************************!*\
  !*** ./babel-loader/render-to-dom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function renderToDom(element) {\n  document.body.append(element);\n};\n\n//# sourceURL=webpack:///./babel-loader/render-to-dom.js?");

/***/ })

/******/ });