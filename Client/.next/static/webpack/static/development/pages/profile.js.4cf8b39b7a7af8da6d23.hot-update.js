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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/isaac/Desktop/Laravel-React-Next/Client/components/Bio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Bio() {
  var apiUrl = 'http://127.0.0.1:8000/api/';

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({}),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      pro = _React$useState2[0],
      setPro = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(apiUrl + 'tenant/full/1').then(function (res) {
      setPro(res.data);
      console.log(res.data);
    })["catch"](function (err) {
      console.log(err);
    });
  }, {});
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Tenant Details"), "ID: ", pro.tenantID, " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), "Fullname: ", pro.fullname, " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=profile.js.4cf8b39b7a7af8da6d23.hot-update.js.map