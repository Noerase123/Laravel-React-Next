webpackHotUpdate_N_E("pages/beds",{

/***/ "./src/view/Beds/table.tsx":
/*!*********************************!*\
  !*** ./src/view/Beds/table.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return table; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TablePagination */ \"./node_modules/@material-ui/core/esm/TablePagination/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\nvar _jsxFileName = \"/home/isaac/Desktop/PHP PROJECTS/Laravel-React-Next/Frontend/reactapp/src/view/Beds/table.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])({\n  root: {\n    width: '100%'\n  },\n  container: {\n    minHeight: 600\n  }\n});\nfunction table(props) {\n  _s();\n\n  const classes = useStyles();\n  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);\n  const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(10);\n\n  const handleChangePage = (event, newPage) => {\n    setPage(newPage);\n  };\n\n  const handleChangeRowsPerPage = event => {\n    setRowsPerPage(+event.target.value);\n    setPage(0);\n  };\n\n  const create = {\n    fields: ['Name', 'Building', 'Unit', 'Letter', 'Move In', 'Move Out'],\n    title: 'Bed',\n    //helperTxt: 'Fill up details',\n    helperTxt: ''\n  };\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    variant: \"h5\",\n    gutterBottom: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, props.title), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    className: classes.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    stickyHeader: true,\n    \"aria-label\": \"sticky table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, props.columns.map(column => __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    key: column,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 19\n    }\n  }, column)))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      href: `beds?details=${row.name}`,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 19\n      }\n    }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      hover: true,\n      role: \"checkbox\",\n      tabIndex: -1,\n      key: row.name,\n      onClick: () => console.log(row.name),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 21\n      }\n    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 23\n      }\n    }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 23\n      }\n    }, row.building), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 23\n      }\n    }, row.unit), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 23\n      }\n    }, row.letter), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 23\n      }\n    }, row.moveIn), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 23\n      }\n    }, row.moveOut)));\n  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    rowsPerPageOptions: [10, 25, 100],\n    component: \"div\",\n    count: props.rows.length,\n    rowsPerPage: rowsPerPage,\n    page: page,\n    onChangePage: handleChangePage,\n    onChangeRowsPerPage: handleChangeRowsPerPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(table, \"1LSjuq2DZUwZxE9BYIdgLLfYYP4=\", false, function () {\n  return [useStyles];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3ZpZXcvQmVkcy90YWJsZS50c3g/NTA4OCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIndpZHRoIiwiY29udGFpbmVyIiwibWluSGVpZ2h0IiwidGFibGUiLCJwcm9wcyIsImNsYXNzZXMiLCJwYWdlIiwic2V0UGFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGUiLCJmaWVsZHMiLCJ0aXRsZSIsImhlbHBlclR4dCIsImNvbHVtbnMiLCJtYXAiLCJjb2x1bW4iLCJyb3dzIiwic2xpY2UiLCJyb3ciLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImJ1aWxkaW5nIiwidW5pdCIsImxldHRlciIsIm1vdmVJbiIsIm1vdmVPdXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFO0FBREgsR0FEcUI7QUFJM0JDLFdBQVMsRUFBRTtBQUNUQyxhQUFTLEVBQUU7QUFERjtBQUpnQixDQUFELENBQTVCO0FBZWUsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQThCO0FBQUE7O0FBRTNDLFFBQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUNBLFFBQU0sQ0FBQ1MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsV0FBRCxFQUFjQyxjQUFkLElBQWdDSCw0Q0FBSyxDQUFD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LENBQUNJLFFBRFAsQ0FKRixFQU9FLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSixHQUFHLENBQUNLLElBRFAsQ0FQRixFQVVFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHTCxHQUFHLENBQUNNLE1BRFAsQ0FWRixFQWFFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHTixHQUFHLENBQUNPLE1BRFAsQ0FiRixFQWdCRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1AsR0FBRyxDQUFDUSxPQURQLENBaEJGLENBREYsQ0FERjtBQXlCRCxHQTFCQSxDQURILENBWkYsQ0FERixDQURGLEVBNkNFLE1BQUMseUVBQUQ7QUFDRSxzQkFBa0IsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsR0FBVCxDQUR0QjtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsU0FBSyxFQUFFL0IsS0FBSyxDQUFDcUIsSUFBTixDQUFXVyxNQUhwQjtBQUlFLGVBQVcsRUFBRTFCLFdBSmY7QUFLRSxRQUFJLEVBQUVKLElBTFI7QUFNRSxnQkFBWSxFQUFFTSxnQkFOaEI7QUFPRSx1QkFBbUIsRUFBRUcsdUJBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3Q0YsQ0FQRixDQURGO0FBaUVEOztHQXZGdUJaLEs7VUFFTk4sUyIsImZpbGUiOiIuL3NyYy92aWV3L0JlZHMvdGFibGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVBhZ2luYXRpb24nO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DcmVhdGUnXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuaW1wb3J0IHtJQmVkc30gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0ludGVyZmFjZXMnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgbWluSGVpZ2h0OiA2MDAsXG4gIH0sXG59KTtcblxuaW50ZXJmYWNlIElUYWJsZSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgY29sdW1uczogc3RyaW5nW11cbiAgcm93czogSUJlZHNbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWJsZShwcm9wczogSVRhYmxlKSB7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZShuZXdQYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlKDApO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZSA9IHtcbiAgICBmaWVsZHM6IFsnTmFtZScsICdCdWlsZGluZycsICdVbml0JywgJ0xldHRlcicsICdNb3ZlIEluJywgJ01vdmUgT3V0J10sXG4gICAgdGl0bGU6ICdCZWQnLFxuICAgIC8vaGVscGVyVHh0OiAnRmlsbCB1cCBkZXRhaWxzJyxcbiAgICBoZWxwZXJUeHQ6ICcnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxiciAvPlxuICAgICAgXG4gICAgICA8YnIgLz5cbiAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFiZWw9XCJzdGlja3kgdGFibGVcIj5cbiAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbn1cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICB7cHJvcHMucm93cy5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKS5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgYmVkcz9kZXRhaWxzPSR7cm93Lm5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBob3ZlciByb2xlPVwiY2hlY2tib3hcIiB0YWJJbmRleD17LTF9IGtleT17cm93Lm5hbWV9IG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKHJvdy5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5idWlsZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy51bml0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93LmxldHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvdy5tb3ZlSW59XG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cubW92ZU91dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxuICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyNSwgMTAwXX1cbiAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgIGNvdW50PXtwcm9wcy5yb3dzLmxlbmd0aH1cbiAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XG4gICAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XG4gICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L1BhcGVyPiAgXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/view/Beds/table.tsx\n");

/***/ })

})