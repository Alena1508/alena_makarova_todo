webpackHotUpdate("main",{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar paint = function paint() {\n  var time = _react2.default.createElement('time', null, 'Time is ' + new Date().toLocaleTimeString());\n  var component = _react2.default.createElement('h1', null, 'Hello, react easycode! ', time);\n  _reactDom2.default.render(component, document.getElementById('app'));\n};\n\nsetInterval(paint(), 500);\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

})