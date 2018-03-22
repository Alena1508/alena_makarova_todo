webpackHotUpdate("main",{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\n__webpack_require__(/*! ./variables.scss */ \"./variables.scss\");\n\nvar _Header = __webpack_require__(/*! ./Header */ \"./Header/index.js\");\n\nvar _Main = __webpack_require__(/*! ./Main */ \"./Main/index.js\");\n\nvar _Footer = __webpack_require__(/*! ./Footer */ \"./Footer/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const paint = () => {\n//   const time = React.createElement('time', null, `Time is ${new Date().toLocaleTimeString()}`);\n//   const component = React.createElement('h1', null, 'Hello, react easycode! ', time);\n//   ReactDom.render(component, document.getElementById('app'));\n// };\n//\n// setInterval(paint, 500);\n\n\nvar component = _react2.default.createElement(\n  _react2.default.Fragment,\n  null,\n  _react2.default.createElement(_Header.Header, null),\n  _react2.default.createElement(_Main.Main, null),\n  _react2.default.createElement(_Footer.Footer, null)\n);\n_reactDom2.default.render(component, document.getElementById('app'));\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./variables.scss":
/*!************************!*\
  !*** ./variables.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./variables.scss?");

/***/ })

})