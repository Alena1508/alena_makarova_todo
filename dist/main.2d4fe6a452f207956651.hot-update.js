webpackHotUpdate("main",{

/***/ "./Footer/Footer.js":
/*!**************************!*\
  !*** ./Footer/Footer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Footer = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./footer.scss */ \"./Footer/footer.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Footer = exports.Footer = function Footer() {\n  return _react2.default.createElement(\n    'footer',\n    { className: 'footer' },\n    _react2.default.createElement(\n      'div',\n      null,\n      'Footer'\n    )\n  );\n};\n\n//# sourceURL=webpack:///./Footer/Footer.js?");

/***/ }),

/***/ "./Footer/footer.scss":
/*!****************************!*\
  !*** ./Footer/footer.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./Footer/footer.scss?");

/***/ }),

/***/ "./Footer/index.js":
/*!*************************!*\
  !*** ./Footer/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Footer = __webpack_require__(/*! ./Footer */ \"./Footer/Footer.js\");\n\nObject.keys(_Footer).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Footer[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./Footer/index.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Navigation = __webpack_require__(/*! ./Navigation */ \"./Navigation/index.js\");\n\nvar _Header = __webpack_require__(/*! ./Header */ \"./Header/index.js\");\n\nvar _Footer = __webpack_require__(/*! ./Footer */ \"./Footer/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const paint = () => {\n//   const time = React.createElement('time', null, `Time is ${new Date().toLocaleTimeString()}`);\n//   const component = React.createElement('h1', null, 'Hello, react easycode! ', time);\n//   ReactDom.render(component, document.getElementById('app'));\n// };\n//\n// setInterval(paint, 500);\n\nvar Time = function Time() {\n  return _react2.default.createElement(\n    'time',\n    null,\n    new Date().toTimeString()\n  );\n}; // если не большой компонент, то можно в одну строку и подключить в этом же файле, а не создавать отдельный файл для него\n\nvar component = _react2.default.createElement(\n  _react2.default.Fragment,\n  null,\n  _react2.default.createElement(\n    'h1',\n    null,\n    'Hello, React!'\n  ),\n  _react2.default.createElement(_Header.Header, null),\n  _react2.default.createElement(_Navigation.Navigation, null),\n  _react2.default.createElement(Time, null),\n  _react2.default.createElement(_Footer.Footer, null)\n);\n_reactDom2.default.render(component, document.getElementById('app'));\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

})