webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/Bio.js":
/*!***************************!*\
  !*** ./components/Bio.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/isaac/Desktop/Laravel-React-Next/Client/components/Bio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Bio() {
  var apiUrl = 'http://127.0.0.1:8000/api/';
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(apiUrl + 'tenant/full/1').then(function (res) {
      console.log(res.data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, {});
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
}

/***/ })

})
//# sourceMappingURL=profile.js.c9c8aaf2594ec47fae1e.hot-update.js.map