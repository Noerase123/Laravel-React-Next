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
    href: props.dashboardPage,
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
    href: props.registerPage,
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
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Tenants",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Rooms",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_FlashOn__WEBPACK_IMPORTED_MODULE_31___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Utilities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 19
    }
  })))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    onClick: handleClickRoom,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 15
    }
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Rooms",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  }), openRoom ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_25___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 27
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 44
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_27__["default"], {
    in: openRoom,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Buildings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_24___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Units",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 19
    }
  }))), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, __jsx(_material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: "Beds",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  }))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }
  }, ['All mail', 'Trash', 'Spam'].map((text, index) => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__["default"], {
    button: true,
    key: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }, index % 2 === 0 ? __jsx(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 48
    }
  }) : __jsx(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 64
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], {
    primary: text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }))))), __jsx("main", {
    className: classes.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.toolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }), props.children));
}

_s(NavDrawer, "iPCinhra8AT++bAhUIqcQucCFiA=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"]];
});

_c = NavDrawer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkL05hdkRyYXdlci50c3giXSwibmFtZXMiOlsiZHJhd2VyV2lkdGgiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsIm5lc3RlZCIsInBhZGRpbmdMZWZ0Iiwic3BhY2luZyIsImFwcEJhciIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwiYXBwQmFyU2hpZnQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJlbnRlcmluZ1NjcmVlbiIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsImhpZGUiLCJmbGV4U2hyaW5rIiwid2hpdGVTcGFjZSIsImRyYXdlck9wZW4iLCJkcmF3ZXJDbG9zZSIsIm92ZXJmbG93WCIsImJyZWFrcG9pbnRzIiwidXAiLCJ0b29sYmFyIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1peGlucyIsImNvbnRlbnQiLCJmbGV4R3JvdyIsIk5hdkRyYXdlciIsInByb3BzIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwib3BlbiIsInNldE9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlRHJhd2VyT3BlbiIsImhhbmRsZURyYXdlckNsb3NlIiwib3BlblJvb20iLCJzZXRPcGVuUm9vbSIsIm9wZW5SZXBvcnQiLCJzZXRPcGVuUmVwb3J0IiwiaGFuZGxlQ2xpY2tSb29tIiwiaGFuZGxlQ2xpY2tSZXBvcnQiLCJjbHN4IiwidGl0bGUiLCJwYXBlciIsImRpcmVjdGlvbiIsImRhc2hib2FyZFBhZ2UiLCJyZWdpc3RlclBhZ2UiLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEVBMklFO0FBQU0sYUFBUyxFQUFFckIsT0FBTyxDQUFDSixPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVJLE9BQU8sQ0FBQ1QsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUdRLEtBQUssQ0FBQ3dCLFFBRlQsQ0EzSUYsQ0FERjtBQWtKRDs7R0F6S3VCekIsUztVQUNOeEMsUyxFQUNGMkMsaUU7OztLQUZRSCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjBiZjExOGQ0MmZkMDBiZTVkODBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIG1ha2VTdHlsZXMsIHVzZVRoZW1lLCBUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3ZlVG9JbmJveCc7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbCc7XHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVyc29uQWRkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uQWRkJztcclxuaW1wb3J0IEFzc2Vzc21lbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Bc3Nlc3NtZW50JztcclxuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJztcclxuaW1wb3J0IEV4cGFuZExlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnO1xyXG5pbXBvcnQgRXhwYW5kTW9yZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XHJcbmltcG9ydCBBcGFydG1lbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcGFydG1lbnQnO1xyXG5pbXBvcnQgSG90ZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib3RlbCc7XHJcbmltcG9ydCBHcm91cEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dyb3VwJztcclxuaW1wb3J0IEZsYXNoT25JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GbGFzaE9uJztcclxuaW1wb3J0IHsgQXV4UHJvcHMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvSW50ZXJmYWNlcydcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjUwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgICBuZXN0ZWQ6IHtcclxuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICB9LFxyXG4gICAgYXBwQmFyOiB7XHJcbiAgICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIGFwcEJhclNoaWZ0OiB7XHJcbiAgICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IDM2LFxyXG4gICAgfSxcclxuICAgIGhpZGU6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGRyYXdlcjoge1xyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgfSxcclxuICAgIGRyYXdlck9wZW46IHtcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICAgZHJhd2VyQ2xvc2U6IHtcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpICsgMSxcclxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpICsgMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gICAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdkRyYXdlcihwcm9wczpBdXhQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlck9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYXdlckNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW29wZW5Sb29tLCBzZXRPcGVuUm9vbV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5SZXBvcnQsIHNldE9wZW5SZXBvcnRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja1Jvb20gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUm9vbSghb3BlblJvb20pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tSZXBvcnQgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUmVwb3J0KCFvcGVuUmVwb3J0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5hcHBCYXJTaGlmdF06IG9wZW4sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm1lbnVCdXR0b24sIHtcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5oaWRlXTogb3BlbixcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbm9XcmFwPlxyXG4gICAgICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRyYXdlciwge1xyXG4gICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IG9wZW4sXHJcbiAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICFvcGVuLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgIHBhcGVyOiBjbHN4KHtcclxuICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IG9wZW4sXHJcbiAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIW9wZW4sXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX0+XHJcbiAgICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gPENoZXZyb25SaWdodEljb24gLz4gOiA8Q2hldnJvbkxlZnRJY29uIC8+fVxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLmRhc2hib2FyZFBhZ2V9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYXNoYm9hcmRcIi8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5yZWdpc3RlclBhZ2V9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8UGVyc29uQWRkSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSZWdpc3RlclwiLz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrUmVwb3J0fT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPEFzc2Vzc21lbnRJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiR2VuZXJhdGUgUmVwb3J0c1wiLz5cclxuICAgICAgICAgICAgICB7b3BlblJlcG9ydCA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlblJlcG9ydH0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JvdXBJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJUZW5hbnRzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SG90ZWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSb29tc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsYXNoT25JY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJVdGlsaXRpZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2tSb29tfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUm9vbXNcIiAvPlxyXG4gICAgICAgICAgICAgIHtvcGVuUm9vbSA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3BlblJvb219IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cclxuICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwYXJ0bWVudEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkJ1aWxkaW5nc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhvbWVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJVbml0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhvdGVsSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQmVkc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIHtbJ0FsbCBtYWlsJywgJ1RyYXNoJywgJ1NwYW0nXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPntpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fTwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfSAvPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9