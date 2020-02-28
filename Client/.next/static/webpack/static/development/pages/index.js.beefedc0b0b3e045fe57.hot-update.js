webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");

var _jsxFileName = "C:\\Users\\IT PC\\Desktop\\Laravel-React-Next\\Client\\components\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200
      }
    },
    formControl: {
      marginTop: '-16px',
      minWidth: 100
    }
  };
});
function Home() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      openGender = _React$useState2[0],
      setOpenGender = _React$useState2[1];

  var handleClose = function handleClose() {
    setOpenGender(false);
  };

  var handleOpen = function handleOpen() {
    setOpenGender(true);
  };

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      userID = _React$useState4[0],
      setUserID = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      time = _React$useState6[0],
      setTime = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      bookingDate = _React$useState8[0],
      setBookingDate = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      replicate = _React$useState10[0],
      setReplicate = _React$useState10[1];

  var addpost = function addpost(variant) {
    return function () {
      var ApiUrl = 'https://mytown-app.com/api/cleaning_test';
      var data = new FormData();
      data.append('userID', userID);
      data.append('time', time);
      data.append('bookingDate', bookingDate);
      data.append('replicate', replicate);
      var header = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };

      if (userID == '' || time == '' || bookingDate == '' || replicate == '') {
        alert('fill up the blanks');
      } else {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(ApiUrl, data, header).then(function (res) {
          console.log(res);
          alert(res);
          setTimeout(function () {
            location.reload();
          }, 1000);
        })["catch"](function (err) {
          console.log(err);
          alert('success');
          setTimeout(function () {
            location.reload();
          }, 1000);
        });
      }
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Add 2x 4x to book cleaning"), __jsx("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "User ID"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "filled-basic",
    fullWidth: true,
    label: "User ID",
    type: "number",
    variant: "filled",
    onChange: function onChange(event) {
      return setUserID(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Time"), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "demo-controlled-open-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Select Time"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    labelId: "demo-controlled-open-select-label",
    id: "demo-controlled-open-select",
    open: openGender,
    onClose: handleClose,
    onOpen: handleOpen,
    value: time // fullWidth
    ,
    onChange: function onChange(event) {
      return setTime(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "None")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: '8:00 am - 12:00 pm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "8:00 am - 12:00 pm"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: '1:00 pm - 5:00 pm',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "1:00 pm - 5:00 pm"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Booking Date"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "filled-basic",
    fullWidth: true,
    type: "date",
    variant: "filled",
    onChange: function onChange(event) {
      return setBookingDate(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Schedule Replicates"), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.formControl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "demo-controlled-open-select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Select Replicate"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    labelId: "demo-controlled-open-select-label",
    id: "demo-controlled-open-select",
    open: openGender1,
    onClose: handleClose1,
    onOpen: handleOpen1,
    value: replicate // fullWidth
    ,
    onChange: function onChange(event) {
      return setReplicate(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "None")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: '2x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "2x"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: '4x',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "4x"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      return addpost();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Book to Cleaning Calendar"))));
}
var btnStyle = {
  width: '100%'
};

/***/ })

})
//# sourceMappingURL=index.js.beefedc0b0b3e045fe57.hot-update.js.map