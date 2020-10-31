webpackHotUpdate_N_E("pages/units",{

/***/ "./src/components/tenants/tenantDetails.tsx":
/*!**************************************************!*\
  !*** ./src/components/tenants/tenantDetails.tsx ***!
  \**************************************************/
/*! exports provided: default, SpringModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TenantDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpringModal\", function() { return SpringModal; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/esm/Avatar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/esm/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"./node_modules/@material-ui/core/esm/Backdrop/index.js\");\n/* harmony import */ var react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spring/web.cjs */ \"./node_modules/react-spring/web.cjs.js\");\n/* harmony import */ var react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"/home/isaac/Desktop/PHP PROJECTS/Laravel-React-Next/Frontend/reactapp/src/components/tenants/tenantDetails.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"makeStyles\"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"createStyles\"])({\n  root: {\n    flexGrow: 1\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  },\n  modal: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  paperModal: {\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3)\n  }\n}));\nfunction TenantDetails(props) {\n  _s();\n\n  const classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    container: true,\n    spacing: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, props.tenants.map(res => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: true,\n    xs: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: classes.paper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    container: true,\n    justify: \"flex-start\",\n    alignItems: \"flex-start\",\n    spacing: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: true,\n    xs: 12,\n    style: {\n      backgroundColor: '#dedede'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 23\n    }\n  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    style: {\n      float: 'left'\n    },\n    alt: res.bed,\n    src: \"/static/images/avatar/1.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 27\n    }\n  }), __jsx(SpringModal, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 27\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 27\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    style: {\n      color: '#000'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 31\n    }\n  }, res.name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    color: \"inherit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 31\n    }\n  }, res.email))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: true,\n    xs: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 23\n    }\n  }, __jsx(\"div\", {\n    style: {\n      float: 'left'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 27\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 31\n    }\n  }, \"Province: \", res.province), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 31\n    }\n  }, \"City: \", res.city), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 31\n    }\n  }, \"House no.: \", res.houseNum))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: true,\n    xs: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 23\n    }\n  }, __jsx(\"div\", {\n    style: {\n      float: 'left'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 23\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 27\n    }\n  }, \"Company : \", res.company), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 27\n    }\n  }, \"Occupation : \", res.occupation), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 27\n    }\n  }, \"Contact no.: \", res.contactNum)))))))));\n}\n\n_s(TenantDetails, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = TenantDetails;\nconst Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c2 = _s2(function Fade(props, ref) {\n  _s2();\n\n  const {\n    in: open,\n    children,\n    onEnter,\n    onExited\n  } = props,\n        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"in\", \"children\", \"onEnter\", \"onExited\"]);\n\n  const style = Object(react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_10__[\"useSpring\"])({\n    from: {\n      opacity: 0\n    },\n    to: {\n      opacity: open ? 1 : 0\n    },\n    onStart: () => {\n      if (open && onEnter) {\n        onEnter();\n      }\n    },\n    onRest: () => {\n      if (!open && onExited) {\n        onExited();\n      }\n    }\n  });\n  return __jsx(react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_10__[\"animated\"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    ref: ref,\n    style: style\n  }, other, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }\n  }), children);\n}, \"0RIVm/KF68BFaH02eyzhytvjKbY=\", false, function () {\n  return [react_spring_web_cjs__WEBPACK_IMPORTED_MODULE_10__[\"useSpring\"]];\n}));\n_c3 = Fade;\nfunction SpringModal(props) {\n  _s3();\n\n  const classes = useStyles();\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    onClick: handleOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }\n  }, props.children), __jsx(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    \"aria-labelledby\": \"spring-modal-title\",\n    \"aria-describedby\": \"spring-modal-description\",\n    className: classes.modal,\n    open: open,\n    onClose: handleClose,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 7\n    }\n  }, __jsx(Fade, {\n    in: open,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.paperModal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    id: \"spring-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 13\n    }\n  }, \"Spring modal\"), __jsx(\"p\", {\n    id: \"spring-modal-description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 13\n    }\n  }, \"react-spring animates me.\")))));\n}\n\n_s3(SpringModal, \"TsAExMDA6yuxA58uE+YzDgG8Jdg=\", false, function () {\n  return [useStyles];\n});\n\n_c4 = SpringModal;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"TenantDetails\");\n$RefreshReg$(_c2, \"Fade$React.forwardRef\");\n$RefreshReg$(_c3, \"Fade\");\n$RefreshReg$(_c4, \"SpringModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVuYW50cy90ZW5hbnREZXRhaWxzLnRzeD8zNWIwIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJmbGV4R3JvdyIsInBhcGVyIiwicGFkZGluZyIsInNwYWNpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsInBhbGV0dGUiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwibW9kYWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFwZXJNb2RhbCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiVGVuYW50RGV0YWlscyIsInByb3BzIiwiY2xhc3NlcyIsInRlbmFudHMiLCJtYXAiLCJyZXMiLCJmbG9hdCIsImJlZCIsIm5hbWUiLCJlbWFpbCIsInByb3ZpbmNlIiwiY2l0eSIsImhvdXNlTnVtIiwiY29tcGFueSIsIm9jY3VwYXRpb24iLCJjb250YWN0TnVtIiwiRmFkZSIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInJlZiIsImluIiwib3BlbiIsImNoaWxkcmVuIiwib25FbnRlciIsIm9uRXhpdGVkIiwib3RoZXIiLCJzdHlsZSIsInVzZVNwcmluZyIsImZyb20iLCJvcGFjaXR5IiwidG8iLCJvblN0YXJ0Iiwib25SZXN0IiwiU3ByaW5nTW9kYWwiLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJCYWNrZHJvcCIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsSUFDM0JDLDZFQUFZLENBQUM7QUFDWEMsTUFBSSxFQUFF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V0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxXQUFPLEVBQUVFLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHbkMsS0FBSyxDQUFDcUIsUUFEVCxDQURGLEVBSUUsTUFBQywrREFBRDtBQUNFLHVCQUFnQixvQkFEbEI7QUFFRSx3QkFBaUIsMEJBRm5CO0FBR0UsYUFBUyxFQUFFcEIsT0FBTyxDQUFDWixLQUhyQjtBQUlFLFFBQUksRUFBRStCLElBSlI7QUFLRSxXQUFPLEVBQUVnQixXQUxYO0FBTUUsd0JBQW9CLE1BTnRCO0FBT0UscUJBQWlCLEVBQUVDLGtFQVByQjtBQVFFLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFO0FBREksS0FSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMsSUFBRDtBQUFNLE1BQUUsRUFBRWxCLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFbkIsT0FBTyxDQUFDUixVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxNQUFFLEVBQUMsb0JBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUcsTUFBRSxFQUFDLDBCQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkYsQ0FERixDQVpGLENBSkYsQ0FERjtBQTBCRDs7SUF0Q2V1QyxXO1VBQ0V6RCxTOzs7TUFERnlELFciLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudERldGFpbHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBNb2RhbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Nb2RhbCc7XG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZy93ZWIuY2pzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IHsgSVRlbmFudCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9JbnRlcmZhY2VzJ1xuIFxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBwYXBlck1vZGFsOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJyxcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s1XSxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgNCwgMyksXG4gICAgfSxcbiAgfSksXG4pO1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICB0ZW5hbnRzOiBJVGVuYW50W11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVuYW50RGV0YWlscyhwcm9wczogSURhdGEpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cblxuICAgICAgICAgIHtwcm9wcy50ZW5hbnRzLm1hcChyZXMgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiZmxleC1zdGFydFwiIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCIgc3BhY2luZz17M30+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyNkZWRlZGUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fSBhbHQ9e3Jlcy5iZWR9IHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhci8xLmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTcHJpbmdNb2RhbC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e2NvbG9yOicjMDAwJ319PntyZXMubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImluaGVyaXRcIj57cmVzLmVtYWlsfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDonbGVmdCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlByb3ZpbmNlOiB7cmVzLnByb3ZpbmNlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkNpdHk6IHtyZXMuY2l0eX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Ib3VzZSBuby46IHtyZXMuaG91c2VOdW19PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OidsZWZ0J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Db21wYW55IDoge3Jlcy5jb21wYW55fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+T2NjdXBhdGlvbiA6IHtyZXMub2NjdXBhdGlvbn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkNvbnRhY3Qgbm8uOiB7cmVzLmNvbnRhY3ROdW19PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICApXG59XG5cbmludGVyZmFjZSBGYWRlUHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgaW46IGJvb2xlYW47XG4gIG9uRW50ZXI/OiAoKSA9PiB7fTtcbiAgb25FeGl0ZWQ/OiAoKSA9PiB7fTtcbn1cblxuY29uc3QgRmFkZSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIEZhZGVQcm9wcz4oZnVuY3Rpb24gRmFkZShwcm9wcywgcmVmKSB7XG4gIGNvbnN0IHsgaW46IG9wZW4sIGNoaWxkcmVuLCBvbkVudGVyLCBvbkV4aXRlZCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZSA9IHVzZVNwcmluZyh7XG4gICAgZnJvbTogeyBvcGFjaXR5OiAwIH0sXG4gICAgdG86IHsgb3BhY2l0eTogb3BlbiA/IDEgOiAwIH0sXG4gICAgb25TdGFydDogKCkgPT4ge1xuICAgICAgaWYgKG9wZW4gJiYgb25FbnRlcikge1xuICAgICAgICBvbkVudGVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblJlc3Q6ICgpID0+IHtcbiAgICAgIGlmICghb3BlbiAmJiBvbkV4aXRlZCkge1xuICAgICAgICBvbkV4aXRlZCgpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGFuaW1hdGVkLmRpdiByZWY9e3JlZn0gc3R5bGU9e3N0eWxlfSB7Li4ub3RoZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYW5pbWF0ZWQuZGl2PlxuICApO1xufSk7XG5cbmludGVyZmFjZSBJTW9kYWwge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTcHJpbmdNb2RhbChwcm9wczogSU1vZGFsKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XG4gICAgc2V0T3Blbih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZU9wZW59PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNb2RhbFxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJzcHJpbmctbW9kYWwtdGl0bGVcIlxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic3ByaW5nLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XG4gICAgICAgICAgdGltZW91dDogNTAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RmFkZSBpbj17b3Blbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJNb2RhbH0+XG4gICAgICAgICAgICA8aDIgaWQ9XCJzcHJpbmctbW9kYWwtdGl0bGVcIj5TcHJpbmcgbW9kYWw8L2gyPlxuICAgICAgICAgICAgPHAgaWQ9XCJzcHJpbmctbW9kYWwtZGVzY3JpcHRpb25cIj5yZWFjdC1zcHJpbmcgYW5pbWF0ZXMgbWUuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZhZGU+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/tenants/tenantDetails.tsx\n");

/***/ })

})