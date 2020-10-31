webpackHotUpdate_N_E("pages/units",{

/***/ "./src/view/Units/UnitsDetails.tsx":
/*!*****************************************!*\
  !*** ./src/view/Units/UnitsDetails.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UnitsDetails; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ \"./node_modules/@material-ui/core/esm/Container/index.js\");\n/* harmony import */ var _components_dashboard_NavDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dashboard/NavDrawer */ \"./src/components/dashboard/NavDrawer.tsx\");\n/* harmony import */ var _components_UnitView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UnitView */ \"./src/components/UnitView.tsx\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _components_SubList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SubList */ \"./src/components/SubList.tsx\");\n/* harmony import */ var _UnitsData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UnitsData */ \"./src/view/Units/UnitsData.tsx\");\nvar _jsxFileName = \"/home/isaac/Desktop/PHP PROJECTS/Laravel-React-Next/Frontend/reactapp/src/view/Units/UnitsDetails.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction UnitsDetails(props) {\n  const tenants = [{\n    name: 'John Isaac',\n    email: 'noerase12@gmail.com',\n    contactNum: '09770466342',\n    company: 'PULS',\n    occupation: 'Software Engineer',\n    province: 'Laguna',\n    city: 'Calamba',\n    houseNum: '#123 st',\n    bed: 'A',\n    tenantType: 'Individual'\n  }, {\n    name: 'John Isaac',\n    email: 'noerase12@gmail.com',\n    contactNum: '09770466342',\n    company: 'PULS',\n    occupation: 'Software Engineer',\n    province: 'Laguna',\n    city: 'Calamba',\n    houseNum: '#123 st',\n    bed: 'B',\n    tenantType: 'Individual'\n  }, {\n    name: 'John Isaac',\n    email: 'noerase12@gmail.com',\n    contactNum: '09770466342',\n    company: 'PULS',\n    occupation: 'Software Engineer',\n    province: 'Laguna',\n    city: 'Calamba',\n    houseNum: '#123 st',\n    bed: 'C',\n    tenantType: 'Individual'\n  }, {\n    name: 'John Isaac',\n    email: 'noerase12@gmail.com',\n    contactNum: '09770466342',\n    company: 'PULS',\n    occupation: 'Software Engineer',\n    province: 'Laguna',\n    city: 'Calamba',\n    houseNum: '#123 st',\n    bed: 'D',\n    tenantType: 'Individual'\n  }];\n  const subs = [{\n    link: '/',\n    title: 'Dashboard'\n  }, {\n    link: '/units',\n    title: 'Units'\n  }, {\n    link: `/buildings?details=${props.building}`,\n    title: props.building\n  }, {\n    link: '',\n    title: props.unit\n  }];\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, props.id === '' || props.building === '' || props.unit === '' ? __jsx(_UnitsData__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }) : __jsx(_components_dashboard_NavDrawer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"MyTown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    variant: \"h5\",\n    gutterBottom: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 21\n    }\n  }, \"Room Information\"), __jsx(_components_SubList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    item: subs,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 21\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 21\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 21\n    }\n  }), __jsx(_components_UnitView__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    tenantData: tenants,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 21\n    }\n  }))));\n}\n_c = UnitsDetails;\n\nvar _c;\n\n$RefreshReg$(_c, \"UnitsDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXcvVW5pdHMvVW5pdHNEZXRhaWxzLnRzeD81MTJiIl0sIm5hbWVzIjpbIlVuaXRzRGV0YWlscyIsInByb3BzIiwidGVuYW50cyIsIm5hbWUiLCJlbWFpbCIsImNvbnRhY3ROdW0iLCJjb21wYW55Iiwib2NjdXBhdGlvbiIsInByb3ZpbmNlIiwiY2l0eSIsImhvdXNlTnVtIiwiYmVkIiwidGVuYW50VHlwZSIsInN1YnMiLCJsaW5rIiwidGl0bGUiLCJidWlsZGluZyIsInVuaXQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUF1QztBQUVsRCxRQUFNQyxPQUFrQixHQUFHLENBQ3ZCO0FBQ0lDLFFBQUksRUFBRSxZQURWO0FBRUlDLFNBQUssRUFBRSxxQkFGWDtBQUdJQyxjQUFVLEVBQUUsYUFIaEI7QUFJSUMsV0FBTyxFQUFFLE1BSmI7QUFLSUMsY0FBVSxFQUFFLG1CQUxoQjtBQU1JQyxZQUFRLEVBQUUsUUFOZDtBQU9JQyxRQUFJLEVBQUUsU0FQVjtBQVFJQyxZQUFRLEVBQUUsU0FSZDtBQVNJQyxPQUFHLEVBQUUsR0FUVDtBQVVJQyxjQUFVLEVBQUU7QUFWaEIsR0FEdUIsRUFhdkI7QUFDSVQsUUFBSSxFQUFFLFlBRFY7QUFFSUMsU0FBSyxFQUFFLHFCQUZYO0FBR0lDLGNBQVUsRUFBRSxhQUhoQjtBQUlJQyxXQUFPLEVBQUUsTUFKYjtBQUtJQyxjQUFVLEVBQUUsbUJBTGhCO0FBTUlDLFlBQVEsRUFBRSxRQU5kO0FBT0lDLFFBQUksRUFBRSxTQVBWO0FBUUlDLFlBQVEsRUFBRSxTQVJkO0FBU0lDLE9BQUcsRUFBRSxHQVRUO0FBVUlDLGNBQVUsRUFBRTtBQVZoQixHQWJ1QixFQXlCdkI7QUFDSVQsUUFBSSxFQUFFLFlBRFY7QUFFSUMsU0FBSyxFQUFFLHFCQUZYO0FBR0lDLGNBQVUsRUFBRSxhQUhoQjtBQUlJQyxXQUFPLEVBQUUsTUFKYjtBQUtJQyxjQUFVLEVBQUUsbUJBTGhCO0FBTUlDLFlBQVEsRUFBRSxRQU5kO0FBT0lDLFFBQUksRUFBRSxTQVBWO0FBUUlDLFlBQVEsRUFBRSxTQVJkO0FBU0lDLE9BQUcsRUFBRSxHQVRUO0FBVUlDLGNBQVUsRUFBRTtBQVZoQixHQXpCdUIsRUFxQ3ZCO0FBQ0lULFFBQUksRUFBRSxZQURWO0FBRUlDLFNBQUssRUFBRSxxQkFGWDtBQUdJQyxjQUFVLEVBQUUsYUFIaEI7QUFJSUMsV0FBTyxFQUFFLE1BSmI7QUFLSUMsY0FBVSxFQUFFLG1CQUxoQjtBQU1JQyxZQUFRLEVBQUUsUUFOZDtBQU9JQyxRQUFJLEVBQUUsU0FQVjtBQVFJQyxZQUFRLEVBQUUsU0FSZDtBQVNJQyxPQUFHLEVBQUUsR0FUVDtBQVVJQyxjQUFVLEVBQUU7QUFWaEIsR0FyQ3VCLENBQTNCO0FBbURBLFFBQU1DLElBQWEsR0FBRyxDQUNsQjtBQUNJQyxRQUFJLEVBQUUsR0FEVjtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQURrQixFQUtsQjtBQUNJRCxRQUFJLEVBQUUsUUFEVjtBQUVJQyxTQUFLLEVBQUU7QUFGWCxHQUxrQixFQVNsQjtBQUNJRCxRQUFJLEVBQUcsc0JBQXFCYixLQUFLLENBQUNlLFFBQVMsRUFEL0M7QUFFSUQsU0FBSyxFQUFFZCxLQUFLLENBQUNlO0FBRmpCLEdBVGtCLEVBYWxCO0FBQ0lGLFFBQUksRUFBRSxFQURWO0FBRUlDLFNBQUssRUFBRWQsS0FBSyxDQUFDZ0I7QUFGakIsR0Fia0IsQ0FBdEI7QUFtQkEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01oQixLQUFLLENBQUNpQixFQUFOLEtBQWEsRUFBYixJQUFtQmpCLEtBQUssQ0FBQ2UsUUFBTixLQUFtQixFQUF0QyxJQUE0Q2YsS0FBSyxDQUFDZ0IsSUFBTixLQUFlLEVBQTVELEdBQ0csTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsR0FHRyxNQUFDLHVFQUFEO0FBQVcsU0FBSyxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGdCQUFZLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosRUFJSSxNQUFDLDJEQUFEO0FBQVMsUUFBSSxFQUFFSixJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JLE1BQUMsNERBQUQ7QUFBVSxjQUFVLEVBQUVYLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURBLENBSlIsQ0FESjtBQW1CSDtLQTNGdUJGLFkiLCJmaWxlIjoiLi9zcmMvdmlldy9Vbml0cy9Vbml0c0RldGFpbHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcbmltcG9ydCBOYXZEcmF3ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvTmF2RHJhd2VyJ1xuaW1wb3J0IFVuaXRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVW5pdFZpZXcnXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuaW1wb3J0IFN1Ykxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdWJMaXN0J1xuaW1wb3J0IHsgSVRlbmFudCwgSVN1YnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvSW50ZXJmYWNlcydcbmltcG9ydCBVbml0IGZyb20gJy4vVW5pdHNEYXRhJ1xuXG5pbnRlcmZhY2UgSURldGFpbHMge1xuICAgIGlkOiBzdHJpbmdcbiAgICBidWlsZGluZzogc3RyaW5nXG4gICAgdW5pdDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVuaXRzRGV0YWlscyhwcm9wczogSURldGFpbHMpIHtcblxuICAgIGNvbnN0IHRlbmFudHM6IElUZW5hbnRbXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0pvaG4gSXNhYWMnLFxuICAgICAgICAgICAgZW1haWw6ICdub2VyYXNlMTJAZ21haWwuY29tJyxcbiAgICAgICAgICAgIGNvbnRhY3ROdW06ICcwOTc3MDQ2NjM0MicsXG4gICAgICAgICAgICBjb21wYW55OiAnUFVMUycsXG4gICAgICAgICAgICBvY2N1cGF0aW9uOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgICAgcHJvdmluY2U6ICdMYWd1bmEnLFxuICAgICAgICAgICAgY2l0eTogJ0NhbGFtYmEnLFxuICAgICAgICAgICAgaG91c2VOdW06ICcjMTIzIHN0JyxcbiAgICAgICAgICAgIGJlZDogJ0EnLFxuICAgICAgICAgICAgdGVuYW50VHlwZTogJ0luZGl2aWR1YWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdKb2huIElzYWFjJyxcbiAgICAgICAgICAgIGVtYWlsOiAnbm9lcmFzZTEyQGdtYWlsLmNvbScsXG4gICAgICAgICAgICBjb250YWN0TnVtOiAnMDk3NzA0NjYzNDInLFxuICAgICAgICAgICAgY29tcGFueTogJ1BVTFMnLFxuICAgICAgICAgICAgb2NjdXBhdGlvbjogJ1NvZnR3YXJlIEVuZ2luZWVyJyxcbiAgICAgICAgICAgIHByb3ZpbmNlOiAnTGFndW5hJyxcbiAgICAgICAgICAgIGNpdHk6ICdDYWxhbWJhJyxcbiAgICAgICAgICAgIGhvdXNlTnVtOiAnIzEyMyBzdCcsXG4gICAgICAgICAgICBiZWQ6ICdCJyxcbiAgICAgICAgICAgIHRlbmFudFR5cGU6ICdJbmRpdmlkdWFsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnSm9obiBJc2FhYycsXG4gICAgICAgICAgICBlbWFpbDogJ25vZXJhc2UxMkBnbWFpbC5jb20nLFxuICAgICAgICAgICAgY29udGFjdE51bTogJzA5NzcwNDY2MzQyJyxcbiAgICAgICAgICAgIGNvbXBhbnk6ICdQVUxTJyxcbiAgICAgICAgICAgIG9jY3VwYXRpb246ICdTb2Z0d2FyZSBFbmdpbmVlcicsXG4gICAgICAgICAgICBwcm92aW5jZTogJ0xhZ3VuYScsXG4gICAgICAgICAgICBjaXR5OiAnQ2FsYW1iYScsXG4gICAgICAgICAgICBob3VzZU51bTogJyMxMjMgc3QnLFxuICAgICAgICAgICAgYmVkOiAnQycsXG4gICAgICAgICAgICB0ZW5hbnRUeXBlOiAnSW5kaXZpZHVhbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0pvaG4gSXNhYWMnLFxuICAgICAgICAgICAgZW1haWw6ICdub2VyYXNlMTJAZ21haWwuY29tJyxcbiAgICAgICAgICAgIGNvbnRhY3ROdW06ICcwOTc3MDQ2NjM0MicsXG4gICAgICAgICAgICBjb21wYW55OiAnUFVMUycsXG4gICAgICAgICAgICBvY2N1cGF0aW9uOiAnU29mdHdhcmUgRW5naW5lZXInLFxuICAgICAgICAgICAgcHJvdmluY2U6ICdMYWd1bmEnLFxuICAgICAgICAgICAgY2l0eTogJ0NhbGFtYmEnLFxuICAgICAgICAgICAgaG91c2VOdW06ICcjMTIzIHN0JyxcbiAgICAgICAgICAgIGJlZDogJ0QnLFxuICAgICAgICAgICAgdGVuYW50VHlwZTogJ0luZGl2aWR1YWwnXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBjb25zdCBzdWJzOiBJU3Vic1tdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsaW5rOiAnLycsXG4gICAgICAgICAgICB0aXRsZTogJ0Rhc2hib2FyZCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGluazogJy91bml0cycsXG4gICAgICAgICAgICB0aXRsZTogJ1VuaXRzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsaW5rOiBgL2J1aWxkaW5ncz9kZXRhaWxzPSR7cHJvcHMuYnVpbGRpbmd9YCxcbiAgICAgICAgICAgIHRpdGxlOiBwcm9wcy5idWlsZGluZ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsaW5rOiAnJyxcbiAgICAgICAgICAgIHRpdGxlOiBwcm9wcy51bml0XG4gICAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJycgfHwgcHJvcHMuYnVpbGRpbmcgPT09ICcnIHx8IHByb3BzLnVuaXQgPT09ICcnKSA/IChcbiAgICAgICAgICAgICAgICA8VW5pdC8+XG4gICAgICAgICAgICApOiAoXG4gICAgICAgICAgICAgICAgPE5hdkRyYXdlciB0aXRsZT1cIk15VG93blwiPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJvb20gSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8U3ViTGlzdCBpdGVtPXtzdWJzfS8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIDxVbml0VmlldyB0ZW5hbnREYXRhPXt0ZW5hbnRzfS8+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L05hdkRyYXdlcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/view/Units/UnitsDetails.tsx\n");

/***/ })

})