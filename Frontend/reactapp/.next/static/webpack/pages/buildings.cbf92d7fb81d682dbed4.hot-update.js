webpackHotUpdate_N_E("pages/buildings",{

/***/ "./src/components/table.tsx":
/*!**********************************!*\
  !*** ./src/components/table.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return table; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"./node_modules/@material-ui/core/esm/Paper/index.js\");\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ \"./node_modules/@material-ui/core/esm/Table/index.js\");\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ \"./node_modules/@material-ui/core/esm/TableBody/index.js\");\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ \"./node_modules/@material-ui/core/esm/TableCell/index.js\");\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableContainer */ \"./node_modules/@material-ui/core/esm/TableContainer/index.js\");\n/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ \"./node_modules/@material-ui/core/esm/TableHead/index.js\");\n/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TablePagination */ \"./node_modules/@material-ui/core/esm/TablePagination/index.js\");\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ \"./node_modules/@material-ui/core/esm/TableRow/index.js\");\nvar _jsxFileName = \"/home/isaac/Desktop/PHP PROJECTS/Laravel-React-Next/Frontend/reactapp/src/components/table.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n// interface Column {\n//   id: number;\n//   label: string;\n//   minWidth?: number;\n//   align?: 'right';\n//   format?: (value: number) => string;\n// }\n// const columns: Column[] = [\n//   { id: 1, label: 'Name', minWidth: 170 },\n//   { id: 2, label: 'Type', minWidth: 100 },\n//   {\n//     id: 3,\n//     label: 'Capacity',\n//     minWidth: 170,\n//     align: 'right',\n//     format: (value: number) => value.toLocaleString('en-US'),\n//   },\n//   {\n//     id: 4,\n//     label: 'Vacancy',\n//     minWidth: 170,\n//     align: 'right',\n//     format: (value: number) => value.toLocaleString('en-US'),\n//   },\n//   {\n//     id: 5,\n//     label: 'Occupancy',\n//     minWidth: 170,\n//     align: 'right',\n//     format: (value: number) => value.toFixed(2),\n//   },\n// ];\nfunction createData(name, type, capacity, vacancy, occupancy) {\n  return {\n    name,\n    type,\n    capacity,\n    vacancy,\n    occupancy\n  };\n}\n\nconst rows = [createData('Amsterdam', 'First Class', 100, 30, 70), createData('Athens', 'Deluxe', 100, 30, 70), createData('Hong Kong', 'Deluxe', 100, 30, 70), createData('Rio', 'Deluxe', 100, 30, 70), createData('Paris', 'Deluxe', 100, 30, 70), createData('Sydney', 'First Class', 100, 30, 70), createData('Auckland', 'First Class', 100, 30, 70), createData('Seoul', 'Deluxe', 100, 30, 70), createData('Tokyo', 'Deluxe', 100, 30, 70), createData('Kyoto', 'Deluxe', 100, 30, 70), createData('New York', 'First Class', 100, 30, 70), createData('Singapore', 'Deluxe', 100, 30, 70), createData('London', 'Deluxe', 100, 30, 70)];\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    width: '100%'\n  },\n  container: {\n    minHeight: 600\n  }\n});\nfunction table(props) {\n  _s();\n\n  const classes = useStyles();\n  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(10);\n\n  const handleChangePage = (event, newPage) => {\n    setPage(newPage);\n  };\n\n  const handleChangeRowsPerPage = event => {\n    setRowsPerPage(+event.target.value);\n    setPage(0);\n  };\n\n  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    stickyHeader: true,\n    \"aria-label\": \"sticky table\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, columns.map(column => __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    key: column.id,\n    align: column.align,\n    style: {\n      minWidth: column.minWidth\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 17\n    }\n  }, column.label)))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {\n    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      hover: true,\n      role: \"checkbox\",\n      tabIndex: -1,\n      key: row.name,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 17\n      }\n    }, columns.map(column => {\n      const value = row[column.id];\n      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        key: column.id,\n        align: column.align,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 23\n        }\n      }, column.format && typeof value === 'number' ? column.format(value) : value);\n    }));\n  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    rowsPerPageOptions: [10, 25, 100],\n    component: \"div\",\n    count: rows.length,\n    rowsPerPage: rowsPerPage,\n    page: page,\n    onChangePage: handleChangePage,\n    onChangeRowsPerPage: handleChangeRowsPerPage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(table, \"1LSjuq2DZUwZxE9BYIdgLLfYYP4=\", false, function () {\n  return [useStyles];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudHN4P2Q3YzQiXSwibmFtZXMiOlsiY3JlYXRlRGF0YSIsIm5hbWUiLCJ0eXBlIiwiY2FwYWNpdHkiLCJ2YWNhbmN5Iiwib2NjdXBhbmN5Iiwicm93cyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290Iiwid2lkdGgiLCJjb250YWluZXIiLCJtaW5IZWlnaHQiLCJ0YWJsZSIsInByb3BzIiwiY2xhc3NlcyIsInBhZ2UiLCJzZXRQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbHVtbnMiLCJtYXAiLCJjb2x1bW4iLCJpZCIsImFsaWduIiwibWluV2lkdGgiLCJsYWJlbCIsInNsaWNlIiwicm93IiwiZm9ybWF0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUFTQSxVQUFULENBQW9CQyxJQUFwQixFQUFrQ0MsSUFBbEMsRUFBZ0RDLFFBQWhELEVBQWtFQyxPQUFsRSxFQUFtRkMsU0FBbkYsRUFBaUg7QUFDL0csU0FBTztBQUFFSixRQUFGO0FBQVFDLFFBQVI7QUFBY0MsWUFBZDtBQUF3QkMsV0FBeEI7QUFBaUNDO0FBQWpDLEdBQVA7QUFDRDs7QUFFRCxNQUFNQyxJQUFJLEdBQUcsQ0FDWE4sVUFBVSxDQUFDLFdBQUQsRUFBYSxhQUFiLEVBQTRCLEdBQTVCLEVBQWdDLEVBQWhDLEVBQW1DLEVBQW5DLENBREMsRUFFWEEsVUFBVSxDQUFDLFFBQUQsRUFBVSxRQUFWLEVBQW9CLEdBQXBCLEVBQXdCLEVBQXhCLEVBQTJCLEVBQTNCLENBRkMsRUFHWEEsVUFBVSxDQUFDLFdBQUQsRUFBYSxRQUFiLEVBQXVCLEdBQXZCLEVBQTJCLEVBQTNCLEVBQThCLEVBQTlCLENBSEMsRUFJWEEsVUFBVSxDQUFDLEtBQUQsRUFBTyxRQUFQLEVBQWlCLEdBQWpCLEVBQXFCLEVBQXJCLEVBQXdCLEVBQXhCLENBSkMsRUFLWEEsVUFBVSxDQUFDLE9BQUQsRUFBUyxRQUFULEVBQW1CLEdBQW5CLEVBQXVCLEVBQXZCLEVBQTBCLEVBQTFCLENBTEMsRUFNWEEsVUFBVSxDQUFDLFFBQUQsRUFBVSxhQUFWLEVBQXlCLEdBQXpCLEVBQTZCLEVBQTdCLEVBQWdDLEVBQWhDLENBTkMsRUFPWEEsVUFBVSxDQUFDLFVBQUQsRUFBWSxhQUFaLEVBQTJCLEdBQTNCLEVBQStCLEVBQS9CLEVBQWtDLEVBQWxDLENBUEMsRUFRWEEsVUFBVSxDQUFDLE9BQUQsRUFBUyxRQUFULEVBQW1CLEdBQW5CLEVBQXVCLEVBQXZCLEVBQTBCLEVBQTFCLENBUkMsRUFTWEEsVUFBVSxDQUFDLE9BQUQsRUFBUyxRQUFULEVBQW1CLEdBQW5CLEVBQXVCLEVBQXZCLEVBQTBCLEVBQTFCLENBVEMsRUFVWEEsVUFBVSxDQUFDLE9BQUQsRUFBUyxRQUFULEVBQW1CLEdBQW5CLEVBQXVCLEVBQXZCLEVBQTBCLEVBQTFCLENBVkMsRUFXWEEsVUFBVSxDQUFDLFVBQUQsRUFBWSxhQUFaLEVBQTJCLEdBQTNCLEVBQStCLEVBQS9CLEVBQWtDLEVBQWxDLENBWEMsRUFZWEEsVUFBVSxDQUFDLFdBQUQsRUFBYSxRQUFiLEVBQXVCLEdBQXZCLEVBQTJCLEVBQTNCLEVBQThCLEVBQTlCLENBWkMsRUFhWEEsVUFBVSxDQUFDLFFBQUQsRUFBVSxRQUFWLEVBQW9CLEdBQXBCLEVBQXdCLEVBQXhCLEVBQTJCLEVBQTNCLENBYkMsQ0FBYjtBQWdCQSxNQUFNTyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxTQUFLLEVBQUU7QUFESCxHQURxQjtBQUkzQkMsV0FBUyxFQUFFO0FBQ1RDLGFBQVMsRUFBRTtBQURGO0FBSmdCLENBQUQsQ0FBNUI7QUFTZSxTQUFTQyxLQUFULENBQWVDLEtBQWYsRUFBOEI7QUFBQTs7QUFDM0MsUUFBTUMsT0FBTyxHQUFHUixTQUFTLEVBQXpCO0FBQ0EsUUFBTSxDQUFDUyxJQUFELEVBQU9DLE9BQVAsSUFBa0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQXhCO0FBQ0EsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGNBQWQsSUFBZ0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQXRDOztBQUVBLFFBQU1HLGdCQUFnQixHQUFHLENBQUNDLEtBQUQsRUFBaUJDLE9BQWpCLEtBQXFDO0FBQzVEUCxXQUFPLENBQUNPLE9BQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsdUJBQXVCLEdBQUlGLEtBQUQsSUFBZ0Q7QUFDOUVGLGtCQUFjLENBQUMsQ0FBQ0UsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWYsQ0FBZDtBQUNBVixXQUFPLENBQUMsQ0FBRCxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxTQUNFLE1BQUMsK0RBQUQ7QUFBTyxhQUFTLEVBQUVGLE9BQU8sQ0FBQ04sSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFBZ0IsYUFBUyxFQUFFTSxPQUFPLENBQUNKLFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQU8sZ0JBQVksTUFBbkI7QUFBb0Isa0JBQVcsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaUIsT0FBTyxDQUFDQyxHQUFSLENBQWFDLE1BQUQsSUFDWCxNQUFDLG1FQUFEO0FBQ0UsT0FBRyxFQUFFQSxNQUFNLENBQUNDLEVBRGQ7QUFFRSxTQUFLLEVBQUVELE1BQU0sQ0FBQ0UsS0FGaEI7QUFHRSxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFSCxNQUFNLENBQUNHO0FBQW5CLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHSCxNQUFNLENBQUNJLEtBTFYsQ0FERCxDQURILENBREYsQ0FERixFQWNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHNUIsSUFBSSxDQUFDNkIsS0FBTCxDQUFXbkIsSUFBSSxHQUFHSSxXQUFsQixFQUErQkosSUFBSSxHQUFHSSxXQUFQLEdBQXFCQSxXQUFwRCxFQUFpRVMsR0FBakUsQ0FBc0VPLEdBQUQsSUFBUztBQUM3RSxXQUNFLE1BQUMsa0VBQUQ7QUFBVSxXQUFLLE1BQWY7QUFBZ0IsVUFBSSxFQUFDLFVBQXJCO0FBQWdDLGNBQVEsRUFBRSxDQUFDLENBQTNDO0FBQThDLFNBQUcsRUFBRUEsR0FBRyxDQUFDbkMsSUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHMkIsT0FBTyxDQUFDQyxHQUFSLENBQWFDLE1BQUQsSUFBWTtBQUN2QixZQUFNSCxLQUFLLEdBQUdTLEdBQUcsQ0FBQ04sTUFBTSxDQUFDQyxFQUFSLENBQWpCO0FBQ0EsYUFDRSxNQUFDLG1FQUFEO0FBQVcsV0FBRyxFQUFFRCxNQUFNLENBQUNDLEVBQXZCO0FBQTJCLGFBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dGLE1BQU0sQ0FBQ08sTUFBUCxJQUFpQixPQUFPVixLQUFQLEtBQWlCLFFBQWxDLEdBQTZDRyxNQUFNLENBQUNPLE1BQVAsQ0FBY1YsS0FBZCxDQUE3QyxHQUFvRUEsS0FEdkUsQ0FERjtBQUtELEtBUEEsQ0FESCxDQURGO0FBWUQsR0FiQSxDQURILENBZEYsQ0FERixDQURGLEVBa0NFLE1BQUMseUVBQUQ7QUFDRSxzQkFBa0IsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsR0FBVCxDQUR0QjtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsU0FBSyxFQUFFckIsSUFBSSxDQUFDZ0MsTUFIZDtBQUlFLGVBQVcsRUFBRWxCLFdBSmY7QUFLRSxRQUFJLEVBQUVKLElBTFI7QUFNRSxnQkFBWSxFQUFFTSxnQkFOaEI7QUFPRSx1QkFBbUIsRUFBRUcsdUJBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0YsQ0FERjtBQThDRDs7R0E1RHVCWixLO1VBQ05OLFMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YWJsZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvbic7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IHtJVGFibGUsIElCdWlsZGluZ30gZnJvbSAnLi4vaW50ZXJmYWNlL0ludGVyZmFjZXMnXG5cbi8vIGludGVyZmFjZSBDb2x1bW4ge1xuICBcbi8vICAgaWQ6IG51bWJlcjtcbi8vICAgbGFiZWw6IHN0cmluZztcbi8vICAgbWluV2lkdGg/OiBudW1iZXI7XG4vLyAgIGFsaWduPzogJ3JpZ2h0Jztcbi8vICAgZm9ybWF0PzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcbi8vIH1cblxuLy8gY29uc3QgY29sdW1uczogQ29sdW1uW10gPSBbXG4vLyAgIHsgaWQ6IDEsIGxhYmVsOiAnTmFtZScsIG1pbldpZHRoOiAxNzAgfSxcbi8vICAgeyBpZDogMiwgbGFiZWw6ICdUeXBlJywgbWluV2lkdGg6IDEwMCB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDMsXG4vLyAgICAgbGFiZWw6ICdDYXBhY2l0eScsXG4vLyAgICAgbWluV2lkdGg6IDE3MCxcbi8vICAgICBhbGlnbjogJ3JpZ2h0Jyxcbi8vICAgICBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiA0LFxuLy8gICAgIGxhYmVsOiAnVmFjYW5jeScsXG4vLyAgICAgbWluV2lkdGg6IDE3MCxcbi8vICAgICBhbGlnbjogJ3JpZ2h0Jyxcbi8vICAgICBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiA1LFxuLy8gICAgIGxhYmVsOiAnT2NjdXBhbmN5Jyxcbi8vICAgICBtaW5XaWR0aDogMTcwLFxuLy8gICAgIGFsaWduOiAncmlnaHQnLFxuLy8gICAgIGZvcm1hdDogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMiksXG4vLyAgIH0sXG4vLyBdO1xuXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCBjYXBhY2l0eTogbnVtYmVyLCB2YWNhbmN5OiBudW1iZXIsIG9jY3VwYW5jeTogbnVtYmVyKTogSUJ1aWxkaW5nIHtcbiAgcmV0dXJuIHsgbmFtZSwgdHlwZSwgY2FwYWNpdHksIHZhY2FuY3ksIG9jY3VwYW5jeSB9O1xufVxuXG5jb25zdCByb3dzID0gW1xuICBjcmVhdGVEYXRhKCdBbXN0ZXJkYW0nLCdGaXJzdCBDbGFzcycsIDEwMCwzMCw3MCksXG4gIGNyZWF0ZURhdGEoJ0F0aGVucycsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXG4gIGNyZWF0ZURhdGEoJ0hvbmcgS29uZycsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXG4gIGNyZWF0ZURhdGEoJ1JpbycsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXG4gIGNyZWF0ZURhdGEoJ1BhcmlzJywnRGVsdXhlJywgMTAwLDMwLDcwKSxcbiAgY3JlYXRlRGF0YSgnU3lkbmV5JywnRmlyc3QgQ2xhc3MnLCAxMDAsMzAsNzApLFxuICBjcmVhdGVEYXRhKCdBdWNrbGFuZCcsJ0ZpcnN0IENsYXNzJywgMTAwLDMwLDcwKSxcbiAgY3JlYXRlRGF0YSgnU2VvdWwnLCdEZWx1eGUnLCAxMDAsMzAsNzApLFxuICBjcmVhdGVEYXRhKCdUb2t5bycsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXG4gIGNyZWF0ZURhdGEoJ0t5b3RvJywnRGVsdXhlJywgMTAwLDMwLDcwKSxcbiAgY3JlYXRlRGF0YSgnTmV3IFlvcmsnLCdGaXJzdCBDbGFzcycsIDEwMCwzMCw3MCksXG4gIGNyZWF0ZURhdGEoJ1NpbmdhcG9yZScsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXG4gIGNyZWF0ZURhdGEoJ0xvbmRvbicsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXG5dO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIG1pbkhlaWdodDogNjAwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhYmxlKHByb3BzOiBJVGFibGUpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZShuZXdQYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBhcmlhLWxhYmVsPVwic3RpY2t5IHRhYmxlXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IChcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH1cbiAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ259XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogY29sdW1uLm1pbldpZHRoIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7cm93cy5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKS5tYXAoKHJvdykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBob3ZlciByb2xlPVwiY2hlY2tib3hcIiB0YWJJbmRleD17LTF9IGtleT17cm93Lm5hbWV9PlxuICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByb3dbY29sdW1uLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGtleT17Y29sdW1uLmlkfSBhbGlnbj17Y29sdW1uLmFsaWdufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uZm9ybWF0ICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBjb2x1bW4uZm9ybWF0KHZhbHVlKSA6IHZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgIDxUYWJsZVBhZ2luYXRpb25cbiAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDI1LCAxMDBdfVxuICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICBjb3VudD17cm93cy5sZW5ndGh9XG4gICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cbiAgICAgICAgcGFnZT17cGFnZX1cbiAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxuICAgICAgICBvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cbiAgICAgIC8+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/table.tsx\n");

/***/ })

})