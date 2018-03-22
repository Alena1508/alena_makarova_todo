webpackHotUpdate("main",{

/***/ "./Aside/Aside.js":
/*!************************!*\
  !*** ./Aside/Aside.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Aside = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./aside.scss */ \"./Aside/aside.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Aside = exports.Aside = function Aside() {\n  return _react2.default.createElement(\n    'aside',\n    { className: 'aside' },\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        'It'\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        'CEO'\n      )\n    )\n  );\n};\n\n//# sourceURL=webpack:///./Aside/Aside.js?");

/***/ }),

/***/ "./Aside/index.js":
/*!************************!*\
  !*** ./Aside/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Aside = __webpack_require__(/*! ./Aside */ \"./Aside/Aside.js\");\n\nObject.keys(_Aside).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Aside[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./Aside/index.js?");

/***/ })

})