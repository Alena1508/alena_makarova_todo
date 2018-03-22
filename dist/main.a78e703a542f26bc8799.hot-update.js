webpackHotUpdate("main",{

/***/ "./Navigation.js":
/*!***********************!*\
  !*** ./Navigation.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar Navigation = exports.Navigation = function Navigation() {\n  return React.createElement(\n    \"nav\",\n    null,\n    React.createElement(\n      \"ul\",\n      null,\n      React.createElement(\n        \"li\",\n        null,\n        \"Home\"\n      ),\n      React.createElement(\n        \"li\",\n        null,\n        \"Product\"\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./Navigation.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Navigation = __webpack_require__(/*! ./Navigation */ \"./Navigation.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const paint = () => {\n//   const time = React.createElement('time', null, `Time is ${new Date().toLocaleTimeString()}`);\n//   const component = React.createElement('h1', null, 'Hello, react easycode! ', time);\n//   ReactDom.render(component, document.getElementById('app'));\n// };\n//\n// setInterval(paint, 500);\n\nvar component = _react2.default.createElement(\n  'h1',\n  null,\n  'Hello, easycode! ',\n  new Date().toLocaleTimeString()\n);\n_reactDom2.default.render(component, document.getElementById('app'));\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

})