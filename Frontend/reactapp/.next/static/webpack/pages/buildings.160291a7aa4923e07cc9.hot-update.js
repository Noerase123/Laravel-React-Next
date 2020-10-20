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
function table() {
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
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 105,
      columnNumber: 17
    }
  }, column.label)))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
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
        lineNumber: 118,
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
          lineNumber: 122,
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
      lineNumber: 133,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFibGUudHN4Il0sIm5hbWVzIjpbImNvbHVtbnMiLCJpZCIsImxhYmVsIiwibWluV2lkdGgiLCJhbGlnbiIsImZvcm1hdCIsInZhbHVlIiwidG9Mb2NhbGVTdHJpbmciLCJ0b0ZpeGVkIiwiY3JlYXRlRGF0YSIsIm5hbWUiLCJ0eXBlIiwiY2FwYWNpdHkiLCJ2YWNhbmN5Iiwib2NjdXBhbmN5Iiwicm93cyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290Iiwid2lkdGgiLCJjb250YWluZXIiLCJtaW5IZWlnaHQiLCJ0YWJsZSIsImNsYXNzZXMiLCJwYWdlIiwic2V0UGFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwidGFyZ2V0IiwibWFwIiwiY29sdW1uIiwic2xpY2UiLCJyb3ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0EsTUFBTUEsT0FBaUIsR0FBRyxDQUN4QjtBQUFFQyxJQUFFLEVBQUUsTUFBTjtBQUFjQyxPQUFLLEVBQUUsTUFBckI7QUFBNkJDLFVBQVEsRUFBRTtBQUF2QyxDQUR3QixFQUV4QjtBQUFFRixJQUFFLEVBQUUsTUFBTjtBQUFjQyxPQUFLLEVBQUUsTUFBckI7QUFBNkJDLFVBQVEsRUFBRTtBQUF2QyxDQUZ3QixFQUd4QjtBQUNFRixJQUFFLEVBQUUsVUFETjtBQUVFQyxPQUFLLEVBQUUsVUFGVDtBQUdFQyxVQUFRLEVBQUUsR0FIWjtBQUlFQyxPQUFLLEVBQUUsT0FKVDtBQUtFQyxRQUFNLEVBQUdDLEtBQUQsSUFBbUJBLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixP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QTtBQUFBLElBbENGLENBREY7QUE4Q0Q7O0dBNUR1QlgsSztVQUNOTixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1aWxkaW5ncy4xNjAyOTFhN2FhNDkyM2UwN2NjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuXHJcbmludGVyZmFjZSBDb2x1bW4ge1xyXG4gIFxyXG4gIGlkOiAnbmFtZScgfCAndHlwZScgfCAnY2FwYWNpdHknIHwgJ3ZhY2FuY3knIHwgJ29jY3VwYW5jeSc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBtaW5XaWR0aD86IG51bWJlcjtcclxuICBhbGlnbj86ICdyaWdodCc7XHJcbiAgZm9ybWF0PzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY29sdW1uczogQ29sdW1uW10gPSBbXHJcbiAgeyBpZDogJ25hbWUnLCBsYWJlbDogJ05hbWUnLCBtaW5XaWR0aDogMTcwIH0sXHJcbiAgeyBpZDogJ3R5cGUnLCBsYWJlbDogJ1R5cGUnLCBtaW5XaWR0aDogMTAwIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdjYXBhY2l0eScsXHJcbiAgICBsYWJlbDogJ0NhcGFjaXR5JyxcclxuICAgIG1pbldpZHRoOiAxNzAsXHJcbiAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICAgIGZvcm1hdDogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICd2YWNhbmN5JyxcclxuICAgIGxhYmVsOiAnVmFjYW5jeScsXHJcbiAgICBtaW5XaWR0aDogMTcwLFxyXG4gICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnKSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnb2NjdXBhbmN5JyxcclxuICAgIGxhYmVsOiAnT2NjdXBhbmN5JyxcclxuICAgIG1pbldpZHRoOiAxNzAsXHJcbiAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICAgIGZvcm1hdDogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMiksXHJcbiAgfSxcclxuXTtcclxuXHJcbmludGVyZmFjZSBEYXRhIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGNhcGFjaXR5OiBudW1iZXI7XHJcbiAgdmFjYW5jeTogbnVtYmVyO1xyXG4gIG9jY3VwYW5jeTogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCBjYXBhY2l0eTogbnVtYmVyLCB2YWNhbmN5OiBudW1iZXIsIG9jY3VwYW5jeTogbnVtYmVyKTogRGF0YSB7XHJcbiAgcmV0dXJuIHsgbmFtZSwgdHlwZSwgY2FwYWNpdHksIHZhY2FuY3ksIG9jY3VwYW5jeSB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIGNyZWF0ZURhdGEoJ0Ftc3RlcmRhbScsJ0ZpcnN0IENsYXNzJywgMTAwLDMwLDcwKSxcclxuICBjcmVhdGVEYXRhKCdBdGhlbnMnLCdEZWx1eGUnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ0hvbmcgS29uZycsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXHJcbiAgY3JlYXRlRGF0YSgnUmlvJywnRGVsdXhlJywgMTAwLDMwLDcwKSxcclxuICBjcmVhdGVEYXRhKCdQYXJpcycsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXHJcbiAgY3JlYXRlRGF0YSgnU3lkbmV5JywnRmlyc3QgQ2xhc3MnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ0F1Y2tsYW5kJywnRmlyc3QgQ2xhc3MnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ1Nlb3VsJywnRGVsdXhlJywgMTAwLDMwLDcwKSxcclxuICBjcmVhdGVEYXRhKCdUb2t5bycsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXHJcbiAgY3JlYXRlRGF0YSgnS3lvdG8nLCdEZWx1eGUnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ05ldyBZb3JrJywnRmlyc3QgQ2xhc3MnLCAxMDAsMzAsNzApLFxyXG4gIGNyZWF0ZURhdGEoJ1NpbmdhcG9yZScsJ0RlbHV4ZScsIDEwMCwzMCw3MCksXHJcbiAgY3JlYXRlRGF0YSgnTG9uZG9uJywnRGVsdXhlJywgMTAwLDMwLDcwKSxcclxuXTtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIG1pbkhlaWdodDogNjAwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFibGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMTApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50OiB1bmtub3duLCBuZXdQYWdlOiBudW1iZXIpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFBhZ2UoMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFiZWw9XCJzdGlja3kgdGFibGVcIj5cclxuICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH1cclxuICAgICAgICAgICAgICAgICAgYWxpZ249e2NvbHVtbi5hbGlnbn1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IGNvbHVtbi5taW5XaWR0aCB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIHtyb3dzLnNsaWNlKHBhZ2UgKiByb3dzUGVyUGFnZSwgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2UpLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBob3ZlciByb2xlPVwiY2hlY2tib3hcIiB0YWJJbmRleD17LTF9IGtleT17cm93Lm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoKGNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcm93W2NvbHVtbi5pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmZvcm1hdCAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gY29sdW1uLmZvcm1hdCh2YWx1ZSkgOiB2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XHJcbiAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICBjb3VudD17cm93cy5sZW5ndGh9XHJcbiAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG4gICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9QYXBlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=