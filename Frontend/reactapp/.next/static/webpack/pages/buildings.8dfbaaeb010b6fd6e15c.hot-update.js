webpackHotUpdate_N_E("pages/buildings",{

/***/ "./src/components/table.tsx":
/*!**********************************!*\
  !*** ./src/components/table.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
var _jsxFileName = "C:\\Users\\IT PC\\Desktop\\Laravel-React-Next\\Frontend\\reactapp\\src\\components\\table.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const columns = [{
  id: 'name',
  label: 'Name',
  minWidth: 170
}, {
  id: 'type',
  label: 'Type',
  minWidth: 100
}, {
  id: 'capacity',
  label: 'Capacity',
  minWidth: 170,
  align: 'right',
  format: value => value.toLocaleString('en-US')
}, {
  id: 'vacancy',
  label: 'Vacancy',
  minWidth: 170,
  align: 'right',
  format: value => value.toLocaleString('en-US')
}, {
  id: 'occupancy',
  label: 'Occupancy',
  minWidth: 170,
  align: 'right',
  format: value => value.toFixed(2)
}];

function createData(name, type, capacity, vacancy, occupancy) {
  return {
    name,
    type,
    capacity,
    vacancy,
    occupancy
  };
}

const rows = [createData('Amsterdam', 'First Class', 100, 30, 70), createData('Athens', 'Deluxe', 100, 30, 70), createData('Hong Kong', 'Deluxe', 100, 30, 70), createData('Rio', 'Deluxe', 100, 30, 70), createData('Paris', 'Deluxe', 100, 30, 70), createData('Sydney', 'First Class', 100, 30, 70), createData('Auckland', 'First Class', 100, 30, 70), createData('Seoul', 'Deluxe', 100, 30, 70), createData('Tokyo', 'Deluxe', 100, 30, 70), createData('Kyoto', 'Deluxe', 100, 30, 70), createData('New York', 'First Class', 100, 30, 70), createData('Singapore', 'Deluxe', 100, 30, 70), createData('London', 'Deluxe', 100, 30, 70)];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    width: '100%'
  },
  container: {
    minHeight: 600
  }
});
function table(props) {
  _s();

  const classes = useStyles();
  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [rowsPerPage, setRowsPerPage] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, columns.map(column => __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: column.id,
    align: column.align,
    style: {
      minWidth: column.minWidth
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, column.label)))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, columns.map(column => {
      const value = row[column.id];
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: column.id,
        align: column.align,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 23
        }
      }, column.format && typeof value === 'number' ? column.format(value) : value);
    }));
  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_8__["default"], {
    rowsPerPageOptions: [10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }));
}

_s(table, "1LSjuq2DZUwZxE9BYIdgLLfYYP4=", false, function () {
  return [useStyles];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudHN4Il0sIm5hbWVzIjpbImNvbHVtbnMiLCJpZCIsImxhYmVsIiwibWluV2lkdGgiLCJhbGlnbiIsImZvcm1hdCIsInZhbHVlIiwidG9Mb2NhbGVTdHJpbmciLCJ0b0ZpeGVkIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJ0eXBlIiwiY2FwYWNpdHkiLCJ2YWNhbmN5Iiwib2NjdXBhbmN5Iiwicm93cyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290Iiwid2lkdGgiLCJjb250YWluZXIiLCJtaW5IZWlnaHQiLCJ0YWJsZSIsInByb3BzIiwiY2xhc3NlcyIsInBhZ2UiLCJzZXRQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ0YXJnZXQiLCJtYXAiLCJjb2x1bW4iLCJzbGljZSIsInJvdyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQSxNQUFNQSxPQUFpQixHQUFHLENBQ3hCO0FBQUVDLElBQUUsRUFBRSxNQUFOO0FBQWNDLE9BQUssRUFBRSxNQUFyQjtBQUE2QkMsVUFBUSxFQUFFO0FBQXZDLENBRHdCLEVBRXhCO0FBQUVGLElBQUUsRUFBRSxNQUFOO0FBQWNDLE9BQUssRUFBRSxNQUFyQjtBQUE2QkMsVUFBUSxFQUFFO0FBQXZDLENBRndCLEVBR3hCO0FBQ0VGLElBQUUsRUFBRSxVQUROO0FBRUVDLE9BQUssRUFBRSxVQUZUO0FBR0VDLFVBQVEsRUFBRSxHQUhaO0FBSUVDLE9BQUssRUFBRSxPQUpUO0FBS0VDLFFBQU0sRUFBR0MsS0FBRCxJQUFtQkEsS0FBSyxDQUFDQyxjQUFO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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDRixDQURGO0FBOENEOztHQTVEdUJaLEs7VUFDTk4sUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idWlsZGluZ3MuOGRmYmFhZWIwMTBiNmZkNmUxNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvbic7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcblxyXG5pbnRlcmZhY2UgQ29sdW1uIHtcclxuICBcclxuICBpZDogJ25hbWUnIHwgJ3R5cGUnIHwgJ2NhcGFjaXR5JyB8ICd2YWNhbmN5JyB8ICdvY2N1cGFuY3knO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgbWluV2lkdGg/OiBudW1iZXI7XHJcbiAgYWxpZ24/OiAncmlnaHQnO1xyXG4gIGZvcm1hdD86ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGNvbHVtbnM6IENvbHVtbltdID0gW1xyXG4gIHsgaWQ6ICduYW1lJywgbGFiZWw6ICdOYW1lJywgbWluV2lkdGg6IDE3MCB9LFxyXG4gIHsgaWQ6ICd0eXBlJywgbGFiZWw6ICdUeXBlJywgbWluV2lkdGg6IDEwMCB9LFxyXG4gIHtcclxuICAgIGlkOiAnY2FwYWNpdHknLFxyXG4gICAgbGFiZWw6ICdDYXBhY2l0eScsXHJcbiAgICBtaW5XaWR0aDogMTcwLFxyXG4gICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAndmFjYW5jeScsXHJcbiAgICBsYWJlbDogJ1ZhY2FuY3knLFxyXG4gICAgbWluV2lkdGg6IDE3MCxcclxuICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgZm9ybWF0OiAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ29jY3VwYW5jeScsXHJcbiAgICBsYWJlbDogJ09jY3VwYW5jeScsXHJcbiAgICBtaW5XaWR0aDogMTcwLFxyXG4gICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0ZpeGVkKDIpLFxyXG4gIH0sXHJcbl07XHJcblxyXG5pbnRlcmZhY2UgRGF0YSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBjYXBhY2l0eTogbnVtYmVyO1xyXG4gIHZhY2FuY3k6IG51bWJlcjtcclxuICBvY2N1cGFuY3k6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGF0YShuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgY2FwYWNpdHk6IG51bWJlciwgdmFjYW5jeTogbnVtYmVyLCBvY2N1cGFuY3k6IG51bWJlcik6IERhdGEge1xyXG4gIHJldHVybiB7IG5hbWUsIHR5cGUsIGNhcGFjaXR5LCB2YWNhbmN5LCBvY2N1cGFuY3kgfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICBjcmVhdGVEYXRhKCdBbXN0ZXJkYW0nLCdGaXJzdCBDbGFzcycsIDEwMCwzMCw3MCksXHJcbiAgY3JlYXRlRGF0YSgnQXRoZW5zJywnRGVsdXhlJywgMTAwLDMwLDcwKSxcclxuICBjcmVhdGVEYXRhKCdIb25nIEtvbmcnLCdEZWx1eGUnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ1JpbycsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXHJcbiAgY3JlYXRlRGF0YSgnUGFyaXMnLCdEZWx1eGUnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ1N5ZG5leScsJ0ZpcnN0IENsYXNzJywgMTAwLDMwLDcwKSxcclxuICBjcmVhdGVEYXRhKCdBdWNrbGFuZCcsJ0ZpcnN0IENsYXNzJywgMTAwLDMwLDcwKSxcclxuICBjcmVhdGVEYXRhKCdTZW91bCcsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXHJcbiAgY3JlYXRlRGF0YSgnVG9reW8nLCdEZWx1eGUnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ0t5b3RvJywnRGVsdXhlJywgMTAwLDMwLDcwKSxcclxuICBjcmVhdGVEYXRhKCdOZXcgWW9yaycsJ0ZpcnN0IENsYXNzJywgMTAwLDMwLDcwKSxcclxuICBjcmVhdGVEYXRhKCdTaW5nYXBvcmUnLCdEZWx1eGUnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ0xvbmRvbicsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXHJcbl07XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBtaW5IZWlnaHQ6IDYwMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmludGVyZmFjZSBJVGFibGUge1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBjb2x1bW5zOiBhbnlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFibGUocHJvcHM6IElUYWJsZSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0Um93c1BlclBhZ2UoK2V2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRQYWdlKDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8VGFibGVDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBhcmlhLWxhYmVsPVwic3RpY2t5IHRhYmxlXCI+XHJcbiAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ259XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICB7cm93cy5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKS5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3cgaG92ZXIgcm9sZT1cImNoZWNrYm94XCIgdGFiSW5kZXg9ey0xfSBrZXk9e3Jvdy5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJvd1tjb2x1bW4uaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGtleT17Y29sdW1uLmlkfSBhbGlnbj17Y29sdW1uLmFsaWdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5mb3JtYXQgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGNvbHVtbi5mb3JtYXQodmFsdWUpIDogdmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICA8VGFibGVQYWdpbmF0aW9uXHJcbiAgICAgICAgcm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDI1LCAxMDBdfVxyXG4gICAgICAgIGNvbXBvbmVudD1cImRpdlwiXHJcbiAgICAgICAgY291bnQ9e3Jvd3MubGVuZ3RofVxyXG4gICAgICAgIHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cclxuICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlUGFnZT17aGFuZGxlQ2hhbmdlUGFnZX1cclxuICAgICAgICBvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cclxuICAgICAgLz5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9