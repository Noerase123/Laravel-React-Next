webpackHotUpdate_N_E("pages/units",{

/***/ "./src/components/UnitView.tsx":
/*!*************************************!*\
  !*** ./src/components/UnitView.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UnitView; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views */ \"./node_modules/react-swipeable-views/lib/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tabs */ \"./node_modules/@material-ui/core/esm/Tabs/index.js\");\n/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ \"./node_modules/@material-ui/core/esm/Tab/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Box */ \"./node_modules/@material-ui/core/esm/Box/index.js\");\n/* harmony import */ var _tenants_tenantDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tenants/tenantDetails */ \"./src/components/tenants/tenantDetails.tsx\");\n\n\n\nvar _jsxFileName = \"/home/isaac/Desktop/PHP PROJECTS/Laravel-React-Next/Frontend/reactapp/src/components/UnitView.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction TabPanel(props) {\n  const {\n    children,\n    value,\n    index\n  } = props,\n        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(props, [\"children\", \"value\", \"index\"]);\n\n  return __jsx(\"div\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    role: \"tabpanel\",\n    hidden: value !== index,\n    id: `full-width-tabpanel-${index}`,\n    \"aria-labelledby\": `full-width-tab-${index}`\n  }, other, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    p: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, children)));\n}\n\n_c = TabPanel;\n\nfunction a11yProps(index) {\n  return {\n    id: `full-width-tab-${index}`,\n    'aria-controls': `full-width-tabpanel-${index}`\n  };\n}\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(theme => ({\n  root: {\n    backgroundColor: theme.palette.background.paper\n  }\n}));\nfunction UnitView(props) {\n  _s();\n\n  const classes = useStyles();\n  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"useTheme\"])();\n  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue);\n  };\n\n  const handleChangeIndex = index => {\n    setValue(index);\n  };\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    position: \"static\",\n    color: \"default\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    value: value,\n    onChange: handleChange,\n    indicatorColor: \"primary\",\n    textColor: \"primary\",\n    variant: \"fullWidth\",\n    \"aria-label\": \"full width tabs example\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    label: \"Tenants\"\n  }, a11yProps(0), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    label: \"Rents\"\n  }, a11yProps(1), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }\n  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    label: \"Utilities\"\n  }, a11yProps(2), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  })))), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',\n    index: value,\n    onChangeIndex: handleChangeIndex,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, __jsx(TabPanel, {\n    value: value,\n    index: 0,\n    dir: theme.direction,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, __jsx(_tenants_tenantDetails__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    tenants: props.tenantData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  })), __jsx(TabPanel, {\n    value: value,\n    index: 1,\n    dir: theme.direction,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }), __jsx(TabPanel, {\n    value: value,\n    index: 2,\n    dir: theme.direction,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  })));\n}\n\n_s(UnitView, \"XiKagzVFXgRowwwDg+e/VhBURoA=\", false, function () {\n  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"useTheme\"]];\n});\n\n_c2 = UnitView;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TabPanel\");\n$RefreshReg$(_c2, \"UnitView\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVW5pdFZpZXcudHN4PzdiNzciXSwibmFtZXMiOlsiVGFiUGFuZWwiLCJwcm9wcyIsImNoaWxkcmVuIiwidmFsdWUiLCJpbmRleCIsIm90aGVyIiwiYTExeVByb3BzIiwiaWQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIlVuaXRWaWV3IiwiY2xhc3NlcyIsInVzZVRoZW1lIiwic2V0VmFsdWUiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImhhbmRsZUNoYW5nZUluZGV4IiwiZGlyZWN0aW9uIiwidGVuYW50RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFVQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QztBQUN0QyxRQUFNO0FBQUVDLFlBQUY7QUFBWUMsU0FBWjtBQUFtQkM7QUFBbkIsTUFBdUNILEtBQTdDO0FBQUEsUUFBbUNJLEtBQW5DLHNHQUE2Q0osS0FBN0M7O0FBRUEsU0FDRTtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsVUFBTSxFQUFFRSxLQUFLLEtBQUtDLEtBRnBCO0FBR0UsTUFBRSxFQUFHLHVCQUFzQkEsS0FBTSxFQUhuQztBQUlFLHVCQUFrQixrQkFBaUJBLEtBQU07QUFKM0MsS0FLTUMsS0FMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0dGLEtBQUssS0FBS0MsS0FBVixJQUNDLE1BQUMsNkRBQUQ7QUFBSyxLQUFDLEVBQUUsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUcsRUFBRU8sS0FBSyxDQUFDZ0IsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBV0UsTUFBQyxRQUFEO0FBQVUsU0FBSyxFQUFFdkIsS0FBakI7QUFBd0IsU0FBSyxFQUFFLENBQS9CO0FBQWtDLE9BQUcsRUFBRU8sS0FBSyxDQUFDZ0IsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBZkosQ0FERjtBQWlDRDs7R0E5Q3VCVixRO1VBQ05SLFMsRUFDRlUsaUU7OztNQUZRRixRIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVW5pdFZpZXcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tICdyZWFjdC1zd2lwZWFibGUtdmlld3MnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgVGVuYW50RGV0YWlscyBmcm9tICcuL3RlbmFudHMvdGVuYW50RGV0YWlscydcbmltcG9ydCB7SVRlbmFudH0gZnJvbSAnLi4vaW50ZXJmYWNlL0ludGVyZmFjZXMnXG5cbmludGVyZmFjZSBUYWJQYW5lbFByb3BzIHtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGRpcj86IHN0cmluZztcbiAgaW5kZXg6IGFueTtcbiAgdmFsdWU6IGFueTtcbn1cblxuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHM6IFRhYlBhbmVsUHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XG4gICAgICBpZD17YGZ1bGwtd2lkdGgtdGFicGFuZWwtJHtpbmRleH1gfVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgZnVsbC13aWR0aC10YWItJHtpbmRleH1gfVxuICAgICAgey4uLm90aGVyfVxuICAgID5cbiAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxuICAgICAgICA8Qm94IHA9ezN9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4OiBhbnkpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogYGZ1bGwtd2lkdGgtdGFiLSR7aW5kZXh9YCxcbiAgICAnYXJpYS1jb250cm9scyc6IGBmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YCxcbiAgfTtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBJRGV0YWlscyB7XG4gIGl0ZW1JRDogc3RyaW5nXG4gIHRlbmFudERhdGE6IElUZW5hbnRbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVbml0Vmlldyhwcm9wczogSURldGFpbHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx7fT4sIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5kZXggPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldFZhbHVlKGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwiZGVmYXVsdFwiPlxuICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaW5kaWNhdG9yQ29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHRleHRDb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgdmFyaWFudD1cImZ1bGxXaWR0aFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZnVsbCB3aWR0aCB0YWJzIGV4YW1wbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJUZW5hbnRzXCIgey4uLmExMXlQcm9wcygwKX0gLz5cbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJSZW50c1wiIHsuLi5hMTF5UHJvcHMoMSl9IC8+XG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiVXRpbGl0aWVzXCIgey4uLmExMXlQcm9wcygyKX0gLz5cbiAgICAgICAgICA8L1RhYnM+XG4gICAgICAgIDwvQXBwQmFyPlxuICAgICAgICA8U3dpcGVhYmxlVmlld3NcbiAgICAgICAgICBheGlzPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3gtcmV2ZXJzZScgOiAneCd9XG4gICAgICAgICAgaW5kZXg9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlSW5kZXg9e2hhbmRsZUNoYW5nZUluZGV4fVxuICAgICAgICA+XG4gICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9IGRpcj17dGhlbWUuZGlyZWN0aW9ufT5cbiAgICAgICAgICAgIDxUZW5hbnREZXRhaWxzIHRlbmFudHM9e3Byb3BzLnRlbmFudERhdGF9Lz5cbiAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfSBkaXI9e3RoZW1lLmRpcmVjdGlvbn0+XG4gICAgICAgICAgICB7LyogPFRlbmFudERldGFpbHMvPiAqL31cbiAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsyfSBkaXI9e3RoZW1lLmRpcmVjdGlvbn0+XG4gICAgICAgICAgICB7LyogPFRlbmFudERldGFpbHMvPiAqL31cbiAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UnitView.tsx\n");

/***/ })

})