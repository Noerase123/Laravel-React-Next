webpackHotUpdate_N_E("pages/register",{

/***/ "./src/components/dashboard/NavDrawer.tsx":
/*!************************************************!*\
  !*** ./src/components/dashboard/NavDrawer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavDrawer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/PersonAdd */ "./node_modules/@material-ui/icons/PersonAdd.js");
/* harmony import */ var _material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Assessment */ "./node_modules/@material-ui/icons/Assessment.js");
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "./node_modules/@material-ui/icons/ExpandLess.js");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/Apartment */ "./node_modules/@material-ui/icons/Apartment.js");
/* harmony import */ var _material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/Hotel */ "./node_modules/@material-ui/icons/Hotel.js");
/* harmony import */ var _material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/Group */ "./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/FlashOn */ "./node_modules/@material-ui/icons/FlashOn.js");
/* harmony import */ var _material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_31__);


var _jsxFileName = "C:\\Users\\IT PC\\Desktop\\Laravel-React-Next\\Frontend\\reactapp\\src\\components\\dashboard\\NavDrawer.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
































const drawerWidth = 250;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
  root: {
    display: 'flex'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: _objectSpread({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar),
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
function NavDrawer(props) {
  _s();

  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openRoom, setOpenRoom] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);
  const [openReport, setOpenReport] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  const handleClickRoom = () => {
    setOpenRoom(!openRoom);
  };

  const handleClickReport = () => {
    setOpenReport(!openReport);
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "fixed",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.appBar, {
      [classes.appBarShift]: open
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.menuButton, {
      [classes.hide]: open
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, props.title))), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "permanent",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open
    }),
    classes: {
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleDrawerClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 42
    }
  }) : __jsx(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 65
    }
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pages.dashboard,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_21___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 17
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pages.register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_PersonAdd__WEBPACK_IMPORTED_MODULE_22___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    onClick: handleClickReport,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_23___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Generate Reports",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }), openReport ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_25___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 29
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 46
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_27__["default"], {
    in: openReport,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pages.tenantReports,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Tenants",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  })))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pages.roomsReports,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Rooms",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  })))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pages.utilityReports,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_31___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Utilities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }))))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    onClick: handleClickRoom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Rooms",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }), openRoom ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_25___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 27
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 44
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_27__["default"], {
    in: openRoom,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pages.buildings,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Buildings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  })))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pages.units,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Units",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  })))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: pages.beds,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 23
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Beds",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  })))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 9
    }
  }, ['All mail', 'Trash', 'Spam'].map((text, index) => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    key: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 15
    }
  }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 48
    }
  }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 64
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 15
    }
  }))))), __jsx("main", {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }), props.children));
}

_s(NavDrawer, "iPCinhra8AT++bAhUIqcQucCFiA=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"]];
});

_c = NavDrawer;
const pages = {
  dashboard: '/',
  register: '/register/',
  tenantReports: '/tenantReports/',
  roomsReports: '/roomReports/',
  utilityReports: '/utilityReports/',
  buildings: '/buildings/',
  units: '/units/',
  beds: '/beds/'
};

var _c;

$RefreshReg$(_c, "NavDrawer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL05hdkRyYXdlci50c3giXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsIm5lc3RlZCIsInBhZGRpbmdMZWZ0Iiwic3BhY2luZyIsImFwcEJhciIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwiYXBwQmFyU2hpZnQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJlbnRlcmluZ1NjcmVlbiIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsImhpZGUiLCJmbGV4U2hyaW5rIiwid2hpdGVTcGFjZSIsImRyYXdlck9wZW4iLCJkcmF3ZXJDbG9zZSIsIm92ZXJmbG93WCIsImJyZWFrcG9pbnRzIiwidXAiLCJ0b29sYmFyIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1peGlucyIsImNvbnRlbnQiLCJmbGV4R3JvdyIsIk5hdkRyYXdlciIsInByb3BzIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwib3BlbiIsInNldE9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlRHJhd2VyT3BlbiIsImhhbmRsZURyYXdlckNsb3NlIiwib3BlblJvb20iLCJzZXRPcGVuUm9vbSIsIm9wZW5SZXBvcnQiLCJzZXRPcGVuUmVwb3J0IiwiaGFuZGxlQ2xpY2tSb29tIiwiaGFuZGxlQ2xpY2tSZXBvcnQiLCJjbHN4IiwidGl0bGUiLCJwYXBlciIsImRpcmVjdGlvbiIsInBhZ2VzIiwiZGFzaGJvYXJkIiwicmVnaXN0ZXIiLCJ0ZW5hbnRSZXBvcnRzIiwicm9vbXNSZXBvcnRzIiwidXRpbGl0eVJlcG9ydHMiLCJidWlsZGluZ3MiLCJ1bml0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USxFQUFFLFlBRkU7QUFHWkMsZUFBYSxFQUFFLGlCQUhIO0FBSVpDLGNBQVksRUFBRSxlQUpGO0FBS1pDLGdCQUFjLEVBQUUsa0JBTEo7QUFNWkMsV0FBUyxFQUFFLGFBTkM7QUFPWkMsT0FBSyxFQUFFLFNBUEs7QUFRWkMsTUFBSSxFQUFFO0FBUk0sQ0FBZCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci45ODk3ZjkxMDg1MzA5ZmQ2ZTBhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgY3JlYXRlU3R5bGVzLCBtYWtlU3R5bGVzLCB1c2VUaGVtZSwgVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBDaGV2cm9uUmlnaHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHQnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3gnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01haWwnO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkJztcclxuaW1wb3J0IFBlcnNvbkFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvbkFkZCc7XHJcbmltcG9ydCBBc3Nlc3NtZW50SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzZXNzbWVudCc7XHJcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XHJcbmltcG9ydCBFeHBhbmRMZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzJztcclxuaW1wb3J0IEV4cGFuZE1vcmUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnO1xyXG5pbXBvcnQgQXBhcnRtZW50SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXBhcnRtZW50JztcclxuaW1wb3J0IEhvdGVsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG90ZWwnO1xyXG5pbXBvcnQgR3JvdXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Hcm91cCc7XHJcbmltcG9ydCBGbGFzaE9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmxhc2hPbic7XHJcbmltcG9ydCB7IEF1eFByb3BzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0ludGVyZmFjZXMnXHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI1MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cclxuICBjcmVhdGVTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgbmVzdGVkOiB7XHJcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgfSxcclxuICAgIGFwcEJhcjoge1xyXG4gICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgICBhcHBCYXJTaGlmdDoge1xyXG4gICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiAzNixcclxuICAgIH0sXHJcbiAgICBoaWRlOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBkcmF3ZXI6IHtcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIH0sXHJcbiAgICBkcmF3ZXJPcGVuOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIGRyYXdlckNsb3NlOiB7XHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSArIDEsXHJcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSArIDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdG9vbGJhcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgICAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcclxuICAgICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDoge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZEcmF3ZXIocHJvcHM6QXV4UHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtvcGVuUm9vbSwgc2V0T3BlblJvb21dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuUmVwb3J0LCBzZXRPcGVuUmVwb3J0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tSb29tID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblJvb20oIW9wZW5Sb29tKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrUmVwb3J0ID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblJlcG9ydCghb3BlblJlcG9ydCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmFwcEJhciwge1xyXG4gICAgICAgICAgW2NsYXNzZXMuYXBwQmFyU2hpZnRdOiBvcGVuLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5tZW51QnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuaGlkZV06IG9wZW4sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cclxuICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5kcmF3ZXIsIHtcclxuICAgICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiBvcGVuLFxyXG4gICAgICAgICAgW2NsYXNzZXMuZHJhd2VyQ2xvc2VdOiAhb3BlbixcclxuICAgICAgICB9KX1cclxuICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICBwYXBlcjogY2xzeCh7XHJcbiAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlck9wZW5dOiBvcGVuLFxyXG4gICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICFvcGVuLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxyXG4gICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxDaGV2cm9uUmlnaHRJY29uIC8+IDogPENoZXZyb25MZWZ0SWNvbiAvPn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwYWdlcy5kYXNoYm9hcmR9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYXNoYm9hcmRcIi8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwYWdlcy5yZWdpc3Rlcn0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxQZXJzb25BZGRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJlZ2lzdGVyXCIvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tSZXBvcnR9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8QXNzZXNzbWVudEljb24gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJHZW5lcmF0ZSBSZXBvcnRzXCIvPlxyXG4gICAgICAgICAgICAgIHtvcGVuUmVwb3J0ID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuUmVwb3J0fSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcbiAgICAgICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYWdlcy50ZW5hbnRSZXBvcnRzfT5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyb3VwSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlRlbmFudHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhZ2VzLnJvb21zUmVwb3J0c30+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxIb3RlbEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSb29tc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGFnZXMudXRpbGl0eVJlcG9ydHN9PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rmxhc2hPbkljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJVdGlsaXRpZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja1Jvb219PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8SG9tZUljb24gLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSb29tc1wiIC8+XHJcbiAgICAgICAgICAgICAge29wZW5Sb29tID8gPEV4cGFuZExlc3MgLz4gOiA8RXhwYW5kTW9yZSAvPn1cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPENvbGxhcHNlIGluPXtvcGVuUm9vbX0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cGFnZXMuYnVpbGRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFwYXJ0bWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJCdWlsZGluZ3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhZ2VzLnVuaXRzfT5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVW5pdHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhZ2VzLmJlZHN9PlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SG90ZWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQmVkc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAge1snQWxsIG1haWwnLCAnVHJhc2gnLCAnU3BhbSddLm1hcCgodGV4dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e3RleHR9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+e2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9IC8+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuY29uc3QgcGFnZXMgPSB7XHJcbiAgZGFzaGJvYXJkOiAnLycsXHJcbiAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXIvJyxcclxuICB0ZW5hbnRSZXBvcnRzOiAnL3RlbmFudFJlcG9ydHMvJyxcclxuICByb29tc1JlcG9ydHM6ICcvcm9vbVJlcG9ydHMvJyxcclxuICB1dGlsaXR5UmVwb3J0czogJy91dGlsaXR5UmVwb3J0cy8nLFxyXG4gIGJ1aWxkaW5nczogJy9idWlsZGluZ3MvJyxcclxuICB1bml0czogJy91bml0cy8nLFxyXG4gIGJlZHM6ICcvYmVkcy8nXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9