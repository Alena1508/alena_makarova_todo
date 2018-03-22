webpackHotUpdate("main",{

/***/ "./Aside/aside.scss":
/*!**************************!*\
  !*** ./Aside/aside.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./Aside/aside.scss?");

/***/ }),

/***/ "./Aside/index.js":
/*!************************!*\
  !*** ./Aside/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Aside = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./aside.scss */ \"./Aside/aside.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Aside = exports.Aside = function Aside() {\n  return _react2.default.createElement(\n    'aside',\n    { className: 'aside' },\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        'It'\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        'CEO'\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./Aside/index.js?");

/***/ }),

/***/ "./Content/Content.js":
/*!****************************!*\
  !*** ./Content/Content.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Content = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./content.scss */ \"./Content/content.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Content = exports.Content = function Content() {\n  return _react2.default.createElement(\n    'div',\n    { className: 'content' },\n    _react2.default.createElement(\n      'p',\n      null,\n      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias amet blanditiis commodi, eos error eveniet labore laborum maxime, perferendis quia repudiandae, suscipit tempore tenetur veniam! Aut magni optio quas!'\n    )\n  );\n};\n\n//# sourceURL=webpack:///./Content/Content.js?");

/***/ }),

/***/ "./Content/content.scss":
/*!******************************!*\
  !*** ./Content/content.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./Content/content.scss?");

/***/ }),

/***/ "./Content/index.js":
/*!**************************!*\
  !*** ./Content/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Content = __webpack_require__(/*! ./Content */ \"./Content/Content.js\");\n\nObject.keys(_Content).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Content[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./Content/index.js?");

/***/ }),

/***/ "./Main/Main.js":
/*!**********************!*\
  !*** ./Main/Main.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Main = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Aside = __webpack_require__(/*! ../Aside */ \"./Aside/index.js\");\n\nvar _Content = __webpack_require__(/*! ../Content */ \"./Content/index.js\");\n\n__webpack_require__(/*! ./main.scss */ \"./Main/main.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Main = exports.Main = function Main() {\n  return _react2.default.createElement(\n    'main',\n    { className: 'main' },\n    _react2.default.createElement(_Aside.Aside, null),\n    _react2.default.createElement(_Content.Content, null)\n  );\n};\n\n//# sourceURL=webpack:///./Main/Main.js?");

/***/ }),

/***/ "./Main/index.js":
/*!***********************!*\
  !*** ./Main/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Main = __webpack_require__(/*! ./Main */ \"./Main/Main.js\");\n\nObject.keys(_Main).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Main[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./Main/index.js?");

/***/ }),

/***/ "./Main/main.scss":
/*!************************!*\
  !*** ./Main/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./Main/main.scss?");

/***/ })

})