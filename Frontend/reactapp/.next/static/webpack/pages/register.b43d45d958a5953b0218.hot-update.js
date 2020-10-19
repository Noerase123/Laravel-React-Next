webpackHotUpdate_N_E("pages/register",{

/***/ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  var backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      backgroundColor: backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: backgroundColor
        }
      },
      '&$focused': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
      },
      '&$disabled': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      }
    },

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:before': {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '27px 12px 10px',
      '&$marginDense': {
        paddingTop: 23,
        paddingBottom: 6
      }
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '27px 12px 10px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },

    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      '&$inputMarginDense': {
        paddingTop: 10,
        paddingBottom: 11
      }
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FilledInput(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
FilledInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFilledInput'
})(FilledInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FilledInput/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FilledInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControl.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");










var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️Only one input can be used within a FormControl.
 */

var FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormControl(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      visuallyFocused = props.focused,
      _props$hiddenLabel = props.hiddenLabel,
      hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'none' : _props$margin,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      size = props.size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialAdornedStart = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if (!Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Input', 'Select'])) {
          return;
        }

        var input = Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Select']) ? child.props.input : child;

        if (input && Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_5__["isAdornedStart"])(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  }),
      adornedStart = _React$useState[0],
      setAdornedStart = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialFilled = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if (!Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Input', 'Select'])) {
          return;
        }

        if (Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_5__["isFilled"])(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  }),
      filled = _React$useState2[0],
      setFilled = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  var registerEffect;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var registeredInput = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](false);

    registerEffect = function registerEffect() {
      if (registeredInput.current) {
        console.error(['Material-UI: There are multiple InputBase components inside a FormControl.', 'This is not supported. It might cause infinite rendering loops.', 'Only use one InputBase.'].join('\n'));
      }

      registeredInput.current = true;
      return function () {
        registeredInput.current = false;
      };
    };
  }

  var onFilled = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setFilled(true);
  }, []);
  var onEmpty = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart: adornedStart,
    setAdornedStart: setAdornedStart,
    color: color,
    disabled: disabled,
    error: error,
    filled: filled,
    focused: focused,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    margin: (size === 'small' ? 'dense' : undefined) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty: onEmpty,
    onFilled: onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect: registerEffect,
    required: required,
    variant: variant
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControlContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, margin !== 'none' && classes["margin".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(margin))], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
 true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the form control.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiFormControl'
})(FormControl));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js ***!
  \******************************************************************************/
/*! exports provided: useFormControl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormControl", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var FormControlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();

if (true) {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](FormControlContext);
}
/* harmony default export */ __webpack_exports__["default"] = (FormControlContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/formControlState.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formControlState; });
function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/index.js ***!
  \*****************************************************************/
/*! exports provided: default, useFormControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormControl__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFormControl", function() { return _useFormControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_FormControlContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: 'left',
      marginTop: 3,
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormHelperText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'p' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      required = props.required,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), children === ' ' ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : children);
});
 true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense']),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormHelperText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused': {
        color: theme.palette.secondary.main
      }
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the asterisk element. */
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormLabel(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'label' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      required = props.required,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref: ref
  }, other), children, fcs.required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    "aria-hidden": true,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.asterisk, fcs.error && classes.error)
  }, "\u2009", '*'));
});
 true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiFormLabel'
})(FormLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/Grow.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Grow(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"] : _props$TransitionComp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var timer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var autoTimeout = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var foreignRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(children.ref, ref);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["reflow"])(node); // So the animation always start from the start.

    var _getTransitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var _getTransitionProps2 = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element,

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })])
} : undefined;
Grow.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["default"] = (Grow);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grow */ "./node_modules/@material-ui/core/esm/Grow/Grow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grow__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/Input.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/Input.js ***!
  \***********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Input(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/InputBase.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");




/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */











var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1876em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1876em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_3__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"];
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className,
      color = props.color,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (instance) {
    if (true) {
      if (instance && instance.nodeName !== 'INPUT' && !instance.focus) {
        console.error(['Material-UI: You have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` prop.', 'Make sure the `inputRef` prop is called with a HTMLInputElement.'].join('\n'));
      }
    }
  }, []);
  var handleInputPropsRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputRef, handleInputRefProp);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

  var muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["useFormControl"])();

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }

      return undefined;
    }, [muiFormControl]);
  }

  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (obj) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isFilled"])(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( true ? "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info." : undefined);
      }

      checkDirty({
        value: element.value
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    } // Perform in the willUpdate


    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        rows: rows,
        rowsMax: rowsMax
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__["default"];
    }
  } else {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: type
    }, inputProps);
  }

  var handleAutoFill = function handleAutoFill(event) {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__["default"])(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, fcs, {
    startAdornment: startAdornment
  })) : null);
});
 true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  renderSuffix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/utils.js ***!
  \***************************************************************/
/*! exports provided: hasValue, isFilled, isAdornedStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilled", function() { return isFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdornedStart", function() { return isAdornedStart; });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js ***!
  \*********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      transformOrigin: 'top left'
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },

    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(12px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$marginDense': {
          transform: 'translate(12px, 7px) scale(0.75)'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(14px, 12px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    }
  };
};
var InputLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function InputLabel(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableAnimati = props.disableAnimation,
      disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
      margin = props.margin,
      shrinkProp = props.shrink,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['margin', 'variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormLabel__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-shrink": shrink,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === 'dense' && classes.marginDense, {
      'filled': classes.filled,
      'outlined': classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref: ref
  }, other));
});
 true ? InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the `InputLabel`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, apply disabled class.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input of this label is focused.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense']),

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label is shrunk.
   */
  shrink: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInputLabel'
})(InputLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Menu/Menu.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Menu/Menu.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");













var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Menu(props, ref) {
  var _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEntering = props.onEntering,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var contentAnchorRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return contentAnchorRef.current;
  };

  var handleEntering = function handleEntering(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (index === activeItemIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
        ref: function ref(instance) {
          // #StrictMode ready
          contentAnchorRef.current = react_dom__WEBPACK_IMPORTED_MODULE_10__["findDOMNode"](instance);
          Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_11__["default"])(child.ref, instance);
        }
      });
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Popover__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    getContentAnchorEl: getContentAnchorEl,
    classes: PopoverClasses,
    onClose: onClose,
    onEntering: handleEntering,
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PaperProps, {
      classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open: open,
    ref: ref,
    transitionDuration: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_MenuList__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem: autoFocusItem,
    variant: variant
  }, MenuListProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.list, MenuListProps.className)
  }), items));
});
 true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),

  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the menu is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })]),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['menu', 'selectedMenu'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiMenu'
})(Menu));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/MenuList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");











function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  var text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}

var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"];
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */

var MenuList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function MenuList(props, ref) {
  var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$autoFocusItem = props.autoFocusItem,
      autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
      children = props.children,
      className = props.className,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      onKeyDown = props.onKeyDown,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

  var listRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var textCriteriaRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(function () {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](actions, function () {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        var noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(Object(_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_8__["default"])(true), "px");
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }

        return listRef.current;
      }
    };
  }, []);

  var handleKeyDown = function handleKeyDown(event) {
    var list = listRef.current;
    var key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    var currentFocus = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__["default"])(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    listRef.current = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__["default"])(handleOwnRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, newChildProps);
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
 true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   */
  autoFocusItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['menu', 'selectedMenu'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuList */ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js ***!
  \*************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NativeSelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},

    /* Styles applied to the select component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE 11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      },
      '&&': {
        paddingRight: 24
      }
    },

    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: 'auto',
      // Resets for multpile select with chips
      minHeight: '1.1876em',
      // Required for select\text-field height consistency
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },

    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},

    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      pointerEvents: 'none',
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },

    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },

    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      width: '100%'
    }
  };
};
var defaultInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_9__["default"], null);
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */

var NativeSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function NativeSelect(props, ref) {
  var children = props.children,
      classes = props.classes,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__["default"] : _props$IconComponent,
      _props$input = props.input,
      input = _props$input === void 0 ? defaultInput : _props$input,
      inputProps = props.inputProps,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? NativeSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input value. The DOM API casts this to a string.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
NativeSelect.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiNativeSelect'
})(NativeSelect));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







/**
 * @ignore - internal component.
 */

var NativeSelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function NativeSelectInput(props, ref) {
  var classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, // TODO v5: merge root and select
    classes.select, classes[variant], className, disabled && classes.disabled),
    disabled: disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](IconComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.icon, classes["icon".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(variant))], disabled && classes.disabled)
  }));
});
 true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,

  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * @ignore
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (NativeSelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js ***!
  \****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: '0 8px',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      borderStyle: 'solid',
      borderWidth: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      textAlign: 'left',
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legendLabelled: {
      display: 'block',
      width: 'auto',
      textAlign: 'left',
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block'
      }
    },

    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1000,
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
/**
 * @ignore - internal component.
 */

var NotchedOutline = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function NotchedOutline(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      label = props.label,
      labelWidthProp = props.labelWidth,
      notched = props.notched,
      style = props.style,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var align = theme.direction === 'rtl' ? 'right' : 'left';

  if (label !== undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("fieldset", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      "aria-hidden": true,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
      ref: ref,
      style: style
    }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("legend", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", null, label) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  }

  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("fieldset", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "aria-hidden": true,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "padding".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(align)), 8), style),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  })));
});
 true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The label.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The width of the label.
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'PrivateNotchedOutline'
})(NotchedOutline));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js ***!
  \***************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _NotchedOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotchedOutline */ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '&:hover $notchedOutline': {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        '&:hover $notchedOutline': {
          borderColor: borderColor
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '18.5px 14px',
      '&$marginDense': {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor: borderColor
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '18.5px 14px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function OutlinedInput(props, ref) {
  var classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      label = props.label,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      notched = props.notched,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    renderSuffix: function renderSuffix(state) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_NotchedOutline__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.notchedOutline,
        label: label,
        labelWidth: labelWidth,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * The label of the input. It is only used for layout. The actual labelling
   * is handled by `InputLabel`. If specified `labelWidth` is ignored.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The width of the label. Is ignored if `label` is provided. Prefer `label`
   * if the input label appears with a strike through.
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
OutlinedInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiOutlinedInput'
})(OutlinedInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/Popover.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/Popover.js ***!
  \***************************************************************/
/*! exports provided: getOffsetTop, getOffsetLeft, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetTop", function() { return getOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetLeft", function() { return getOffsetLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");















function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Popover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Popover(props, ref) {
  var action = props.action,
      anchorEl = props.anchorEl,
      _props$anchorOrigin = props.anchorOrigin,
      anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$anchorOrigin,
      anchorPosition = props.anchorPosition,
      _props$anchorReferenc = props.anchorReference,
      anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
      children = props.children,
      classes = props.classes,
      className = props.className,
      containerProp = props.container,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 8 : _props$elevation,
      getContentAnchorEl = props.getContentAnchorEl,
      _props$marginThreshol = props.marginThreshold,
      marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$transformOrigi = props.transformOrigin,
      transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$transformOrigi,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_13__["default"] : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps,
      TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var paperRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  var getAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (contentAnchorOffset) {
    if (anchorReference === 'anchorPosition') {
      if (true) {
        if (!anchorPosition) {
          console.error('Material-UI: You need to provide a `anchorPosition` prop when using ' + '<Popover anchorReference="anchorPosition" />.');
        }
      }

      return anchorPosition;
    }

    var resolvedAnchorEl = getAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__["default"])(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();

    if (true) {
      var box = anchorElement.getBoundingClientRect();

      if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
      }
    }

    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

  var getContentAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (element) {
    var contentAnchorOffset = 0;

    if (getContentAnchorEl && anchorReference === 'anchorEl') {
      var contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      } // != the default value


      if (true) {
        if (anchorOrigin.vertical !== 'top') {
          console.error(['Material-UI: You can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` prop to the popover component.', 'Only use one of the two props.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n'));
        }
      }
    }

    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
  // and taking the content anchor offset into account if in use

  var getTransformOrigin = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (element) {
    // Check if the parent has requested anchoring on an inner content node
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of of the anchoring element


    var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__["default"])(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;

      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }

    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(['Material-UI: The popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n'));
      }
    } // Check if the horizontal axis needs shifting


    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;

      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;

      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }

    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    var element = paperRef.current;

    if (!element) {
      return;
    }

    var positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  var handleEntering = function handleEntering(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }

    setPositioningStyles();
  };

  var handlePaperRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    paperRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"](instance);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (open) {
      setPositioningStyles();
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](action, function () {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (!open) {
      return undefined;
    }

    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
      setPositioningStyles();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  var container = containerProp || (anchorEl ? Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__["default"])(getAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: container,
    open: open,
    ref: ref,
    BackdropProps: {
      invisible: true
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, className)
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: open,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    onExiting: onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__["default"])(handleEntering, TransitionProps.onEntering)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    elevation: elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.paper, PaperProps.className)
  }), children)));
});
 true ? Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the popover.
   */
  anchorEl: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]), function (props) {
    if (props.open && (!props.anchorReference || props.anchorReference === 'anchorEl')) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);

      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else {
        return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join('\n'));
      }
    }

    return null;
  }),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['center', 'left', 'right']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom', 'center', 'top']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    left: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    top: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
  }),

  /**
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_2__["Component"]), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * The elevation of the popover.
   */
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` prop.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the component is exiting.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the popover is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .shape({
    component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["elementTypeAcceptingRef"]
  }),

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['center', 'left', 'right']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom', 'center', 'top']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired
  }),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__["default"])(styles, {
  name: 'MuiPopover'
})(Popover));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Popover__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/Select.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/Select.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@material-ui/core/esm/Select/SelectInput.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NativeSelect/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../NativeSelect/NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");















var styles = _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_11__["styles"];

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_10__["default"], null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FilledInput__WEBPACK_IMPORTED_MODULE_13__["default"], null);

var Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Select(props, ref) {
  var _props$autoWidth = props.autoWidth,
      autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
      children = props.children,
      classes = props.classes,
      _props$displayEmpty = props.displayEmpty,
      displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__["default"] : _props$IconComponent,
      id = props.id,
      input = props.input,
      inputProps = props.inputProps,
      label = props.label,
      labelId = props.labelId,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      MenuProps = props.MenuProps,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$native = props.native,
      native = _props$native === void 0 ? false : _props$native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      _props$variant = props.variant,
      variantProps = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

  var inputComponent = native ? _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_12__["default"] : _SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"];
  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
      label: label,
      labelWidth: labelWidth
    }),
    filled: _ref2
  }[variant];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      children: children,
      IconComponent: IconComponent,
      variant: variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple: multiple
    }, native ? {
      id: id
    } : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      labelId: labelId,
      MenuProps: MenuProps,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        id: id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["mergeClasses"])({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   */
  displayEmpty: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
Select.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiSelect'
})(Select));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/SelectInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/SelectInput.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Menu/Menu */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");

















function areEqualValues(a, b) {
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(b) === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

function isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}
/**
 * @ignore - internal component.
 */


var SelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"](function SelectInput(props, ref) {
  var ariaLabel = props['aria-label'],
      autoFocus = props.autoFocus,
      autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      inputRefProp = props.inputRef,
      labelId = props.labelId,
      _props$MenuProps = props.MenuProps,
      MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
      multiple = props.multiple,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onOpen = props.onOpen,
      openProp = props.open,
      readOnly = props.readOnly,
      renderValue = props.renderValue,
      _props$SelectDisplayP = props.SelectDisplayProps,
      SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP,
      tabIndexProp = props.tabIndex,
      type = props.type,
      valueProp = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

  var _useControlled = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_14__["default"])({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](null),
      displayNode = _React$useState[0],
      setDisplayNode = _React$useState[1];

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"](openProp != null),
      isOpenControlled = _React$useRef.current;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](),
      menuMinWidthState = _React$useState2[0],
      setMenuMinWidthState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](false),
      openState = _React$useState3[0],
      setOpenState = _React$useState3[1];

  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__["default"])(ref, inputRefProp);
  react__WEBPACK_IMPORTED_MODULE_5__["useImperativeHandle"](handleRef, function () {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value: value
    };
  }, [displayNode, value]);
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (displayNode) {
      var label = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__["default"])(displayNode).getElementById(labelId);

      if (label) {
        var handler = function handler() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };

        label.addEventListener('click', handler);
        return function () {
          label.removeEventListener('click', handler);
        };
      }
    }

    return undefined;
  }, [labelId, displayNode]);

  var update = function update(open, event) {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    } // Hijack the default focus behavior.


    event.preventDefault();
    displayNode.focus();
    update(true, event);
  };

  var handleClose = function handleClose(event) {
    update(false, event);
  };

  var childrenArray = react__WEBPACK_IMPORTED_MODULE_5__["Children"].toArray(children); // Support autofill.

  var handleChange = function handleChange(event) {
    var index = childrenArray.map(function (child) {
      return child.props.value;
    }).indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    var child = childrenArray[index];
    setValue(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  var handleItemClick = function handleItemClick(child) {
    return function (event) {
      if (!multiple) {
        update(false, event);
      }

      var newValue;

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      if (value === newValue) {
        return;
      }

      setValue(newValue);

      if (onChange) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: newValue,
            name: name
          }
        });
        onChange(event, child);
      }
    };
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!readOnly) {
      var validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  var open = displayNode !== null && (isOpenControlled ? openProp : openState);

  var handleBlur = function handleBlur(event) {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      event.persist(); // Preact support, target is read only property on a native event.

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value: value,
          name: name
        }
      });
      onBlur(event);
    }
  };

  delete other['aria-invalid'];
  var display;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;
  var foundMatch = false; // No need to display any value if the field is empty.

  if (Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_12__["isFilled"])({
    value: value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  var items = childrenArray.map(function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_6__["isFragment"])(child)) {
        console.error(["Material-UI: The Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error( true ? "Material-UI: The `value` prop must be an array when using the `Select` component with `multiple`." : undefined);
      }

      selected = value.some(function (v) {
        return areEqualValues(v, child.props.value);
      });

      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);

      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    if (selected) {
      foundMatch = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](child, {
      'aria-selected': selected ? 'true' : undefined,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected: selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.

    });
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
      if (!foundMatch && !multiple && value !== '') {
        var values = childrenArray.map(function (child) {
          return child.props.value;
        });
        console.warn(["Material-UI: You have provided an out-of-range value `".concat(value, "` for the select ").concat(name ? "(name=\"".concat(name, "\") ") : '', "component."), "Consider providing a value that matches one of the available options or ''.", "The available values are ".concat(values.filter(function (x) {
          return x != null;
        }).map(function (x) {
          return "`".concat(x, "`");
        }).join(', ') || '""', ".")].join('\n'));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  } // Avoid performing a layout computation in the render method.


  var menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  var tabIndex;

  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }

  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, // TODO v5: merge root and select
    classes.select, classes.selectMenu, classes[variant], className, disabled && classes.disabled),
    ref: setDisplayNode,
    tabIndex: tabIndex,
    role: "button",
    "aria-disabled": disabled ? 'true' : undefined,
    "aria-expanded": open ? 'true' : undefined,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
    onKeyDown: handleKeyDown,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus: onFocus
  }, SelectDisplayProps, {
    // The id is required for proper a11y
    id: buttonId
  }), isEmpty(display) ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : display), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: Array.isArray(value) ? value.join(',') : value,
    name: name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus: autoFocus
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](IconComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.icon, classes["icon".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Menu_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "menu-".concat(name || ''),
    anchorEl: displayNode,
    open: open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'aria-labelledby': labelId,
      role: 'listbox',
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, MenuProps.PaperProps, {
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
 true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * @ignore
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.elementType.isRequired,

  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["refType"],

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Control `select` open state.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * @ignore
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Select__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/TextField.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/TextField.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");














var variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_6__["default"],
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_7__["default"],
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_8__["default"]
};
var styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

  if (true) {
    if (select && !children) {
      console.error('Material-UI: `children` must be passed when using the `TextField` component with `select`.');
    }
  }

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Select__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 true ? TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default value of the `input` element.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The helper text content.
   */
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  hiddenLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * The label content.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__["default"])(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextField__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useEffect"];
var styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
var TextareaAutosize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$rowsMin = props.rowsMin,
      rowsMinProp = _props$rowsMin === void 0 ? 1 : _props$rowsMin,
      style = props.style,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

  var rowsMin = rows || rowsMinProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__["default"])(ref, inputRef);
  var shadowRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var renders = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](0);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({}),
      state = _React$useState[0],
      setState = _React$useState[1];

  var syncHeight = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (rowsMin) {
      outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
    }

    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function (prevState) {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow: overflow,
          outerHeightStyle: outerHeightStyle
        };
      }

      if (true) {
        if (renders.current === 20) {
          console.error(['Material-UI: Too many re-renders. The layout is unstable.', 'TextareaAutosize limits the number of renders to prevent an infinite loop.'].join('\n'));
        }
      }

      return prevState;
    });
  }, [rowsMax, rowsMin, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(function () {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    renders.current = 0;
  }, [value]);

  var handleChange = function handleChange(event) {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rowsMin,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.shadow, style)
  }));
});
 true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Use `rowsMin` instead. The prop will be removed in v5.
   *
   * @deprecated
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Minimum number of rows to display.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (TextareaAutosize);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

/***/ }),

/***/ "./src/components/register/Form.tsx":
/*!******************************************!*\
  !*** ./src/components/register/Form.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
var _jsxFileName = "C:\\Users\\IT PC\\Desktop\\Laravel-React-Next\\Frontend\\reactapp\\src\\components\\register\\Form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Form() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Register Page"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "outlined-basic",
    label: "Outlined",
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
}
_c = Form;

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9GaWxsZWRJbnB1dC9GaWxsZWRJbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9GaWxsZWRJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9Gb3JtSGVscGVyVGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtTGFiZWwvRm9ybUxhYmVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1MYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Hcm93L0dyb3cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEJhc2UvSW5wdXRCYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0QmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEJhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vSW5wdXRMYWJlbC9JbnB1dExhYmVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0TGFiZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTWVudS9NZW51LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01lbnVMaXN0L01lbnVMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01lbnVMaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTmF0aXZlU2VsZWN0L05hdGl2ZVNlbGVjdElucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL091dGxpbmVkSW5wdXQvTm90Y2hlZE91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vT3V0bGluZWRJbnB1dC9PdXRsaW5lZElucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL091dGxpbmVkSW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUG9wb3Zlci9Qb3BvdmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BvcG92ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU2VsZWN0L1NlbGVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TZWxlY3QvU2VsZWN0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRGaWVsZC9UZXh0RmllbGQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGV4dEZpZWxkL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRhcmVhQXV0b3NpemUvVGV4dGFyZWFBdXRvc2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UZXh0YXJlYUF1dG9zaXplL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2ludGVybmFsL3N2Zy1pY29ucy9BcnJvd0Ryb3BEb3duLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yZWdpc3Rlci9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBEO0FBQ2dDO0FBQzNEO0FBQ0k7QUFDWDtBQUNxQjtBQUNSO0FBQ1M7QUFDdkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGdFQUFnRSxNQUFNO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsT0FBTztBQUNQO0FB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QUFDLG1FQUFEO0FBQVcsTUFBRSxFQUFDLGdCQUFkO0FBQStCLFNBQUssRUFBQyxVQUFyQztBQUFnRCxXQUFPLEVBQUMsVUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSDtLQVB1QkEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5iNDNkNDVkOTU4YTU5NTNiMDIxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJy4uL0lucHV0QmFzZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgbGlnaHQgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCc7XG4gIHZhciBib3R0b21MaW5lQ29sb3IgPSBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuNDIpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICB2YXIgYmFja2dyb3VuZENvbG9yID0gbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjA5KScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KSc7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnYmFja2dyb3VuZC1jb2xvcicsIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgIH0pLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjEzKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKScsXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuMDkpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDkpJ1xuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC4xMiknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgY29sb3Igc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiR1bmRlcmxpbmU6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVVbmRlcmxpbmU9e2ZhbHNlfWAuICovXG4gICAgdW5kZXJsaW5lOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIC8vIERvaW5nIHRoZSBvdGhlciB3YXkgYXJvdW5kIGNyYXNoIG9uIElFIDExIFwiJydcIiBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvaXNzdWVzLzI0MlxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQ6YWZ0ZXInOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyAvLyBlcnJvciBpcyBhbHdheXMgdW5kZXJsaW5lZCBpbiByZWRcblxuICAgICAgfSxcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYm90dG9tTGluZUNvbG9yKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXFxcXDAwYTBcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3JkZXItYm90dG9tLWNvbG9yJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSlcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZDpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnZG90dGVkJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRTdGFydDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDEyXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVuZEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgYWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAxMlxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIG11bHRpbGluZToge1xuICAgICAgcGFkZGluZzogJzI3cHggMTJweCAxMHB4JyxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiAyMyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogNlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7XG4gICAgICBwYWRkaW5nOiAnMjdweCAxMnB4IDEwcHgnLFxuICAgICAgJyY6LXdlYmtpdC1hdXRvZmlsbCc6IHtcbiAgICAgICAgV2Via2l0Qm94U2hhZG93OiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJzAgMCAwIDEwMHB4ICMyNjY3OTggaW5zZXQnLFxuICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJyNmZmYnLFxuICAgICAgICBjYXJldENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJyNmZmYnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnaW5oZXJpdCcsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge1xuICAgICAgcGFkZGluZ1RvcDogMjMsXG4gICAgICBwYWRkaW5nQm90dG9tOiA2XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGlmIGluIGA8Rm9ybUNvbnRyb2wgaGlkZGVuTGFiZWwgLz5gLiAqL1xuICAgIGlucHV0SGlkZGVuTGFiZWw6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDE4LFxuICAgICAgcGFkZGluZ0JvdHRvbTogMTksXG4gICAgICAnJiRpbnB1dE1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiAxMCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMTFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgaW5wdXRNdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAwXG4gICAgfVxuICB9O1xufTtcbnZhciBGaWxsZWRJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZpbGxlZElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGRpc2FibGVVbmRlcmxpbmUgPSBwcm9wcy5kaXNhYmxlVW5kZXJsaW5lLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImRpc2FibGVVbmRlcmxpbmVcIiwgXCJjbGFzc2VzXCIsIFwiZnVsbFdpZHRoXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJtdWx0aWxpbmVcIiwgXCJ0eXBlXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRCYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5yb290LCAhZGlzYWJsZVVuZGVybGluZSAmJiBjbGFzc2VzLnVuZGVybGluZSksXG4gICAgICB1bmRlcmxpbmU6IG51bGxcbiAgICB9KSxcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBpbnB1dENvbXBvbmVudDogaW5wdXRDb21wb25lbnQsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGaWxsZWRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBub3QgaGF2ZSBhbiB1bmRlcmxpbmUuXG4gICAqL1xuICBkaXNhYmxlVW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbkZpbGxlZElucHV0Lm11aU5hbWUgPSAnSW5wdXQnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZpbGxlZElucHV0J1xufSkoRmlsbGVkSW5wdXQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ZpbGxlZElucHV0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBpc0ZpbGxlZCwgaXNBZG9ybmVkU3RhcnQgfSBmcm9tICcuLi9JbnB1dEJhc2UvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgaXNNdWlFbGVtZW50IGZyb20gJy4uL3V0aWxzL2lzTXVpRWxlbWVudCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4vRm9ybUNvbnRyb2xDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyBSZXNldCBmaWVsZHNldCBkZWZhdWx0IHN0eWxlLlxuICAgIG1pbldpZHRoOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyAvLyBGaXggYWxpZ25tZW50IGlzc3VlIG9uIFNhZmFyaS5cblxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1hcmdpbj1cIm5vcm1hbFwiYC4gKi9cbiAgbWFyZ2luTm9ybWFsOiB7XG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBtYXJnaW5Cb3R0b206IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgbWFyZ2luRGVuc2U6IHtcbiAgICBtYXJnaW5Ub3A6IDgsXG4gICAgbWFyZ2luQm90dG9tOiA0XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufTtcbi8qKlxuICogUHJvdmlkZXMgY29udGV4dCBzdWNoIGFzIGZpbGxlZC9mb2N1c2VkL2Vycm9yL3JlcXVpcmVkIGZvciBmb3JtIGlucHV0cy5cbiAqIFJlbHlpbmcgb24gdGhlIGNvbnRleHQgcHJvdmlkZXMgaGlnaCBmbGV4aWJpbGl0eSBhbmQgZW5zdXJlcyB0aGF0IHRoZSBzdGF0ZSBhbHdheXMgc3RheXNcbiAqIGNvbnNpc3RlbnQgYWNyb3NzIHRoZSBjaGlsZHJlbiBvZiB0aGUgYEZvcm1Db250cm9sYC5cbiAqIFRoaXMgY29udGV4dCBpcyB1c2VkIGJ5IHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czpcbiAqXG4gKiAgLSBGb3JtTGFiZWxcbiAqICAtIEZvcm1IZWxwZXJUZXh0XG4gKiAgLSBJbnB1dFxuICogIC0gSW5wdXRMYWJlbFxuICpcbiAqIFlvdSBjYW4gZmluZCBvbmUgY29tcG9zaXRpb24gZXhhbXBsZSBiZWxvdyBhbmQgbW9yZSBnb2luZyB0byBbdGhlIGRlbW9zXSgvY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jY29tcG9uZW50cykuXG4gKlxuICogYGBganN4XG4gKiA8Rm9ybUNvbnRyb2w+XG4gKiAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJteS1pbnB1dFwiPkVtYWlsIGFkZHJlc3M8L0lucHV0TGFiZWw+XG4gKiAgIDxJbnB1dCBpZD1cIm15LWlucHV0XCIgYXJpYS1kZXNjcmliZWRieT1cIm15LWhlbHBlci10ZXh0XCIgLz5cbiAqICAgPEZvcm1IZWxwZXJUZXh0IGlkPVwibXktaGVscGVyLXRleHRcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XG4gKiA8L0Zvcm1Db250cm9sPlxuICogYGBgXG4gKlxuICog4pqg77iPT25seSBvbmUgaW5wdXQgY2FuIGJlIHVzZWQgd2l0aGluIGEgRm9ybUNvbnRyb2wuXG4gKi9cblxudmFyIEZvcm1Db250cm9sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUNvbnRyb2wocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3ByaW1hcnknIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgdmlzdWFsbHlGb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIF9wcm9wcyRoaWRkZW5MYWJlbCA9IHByb3BzLmhpZGRlbkxhYmVsLFxuICAgICAgaGlkZGVuTGFiZWwgPSBfcHJvcHMkaGlkZGVuTGFiZWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGhpZGRlbkxhYmVsLFxuICAgICAgX3Byb3BzJG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIG1hcmdpbiA9IF9wcm9wcyRtYXJnaW4gPT09IHZvaWQgMCA/ICdub25lJyA6IF9wcm9wcyRtYXJnaW4sXG4gICAgICBfcHJvcHMkcmVxdWlyZWQgPSBwcm9wcy5yZXF1aXJlZCxcbiAgICAgIHJlcXVpcmVkID0gX3Byb3BzJHJlcXVpcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRyZXF1aXJlZCxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiZnVsbFdpZHRoXCIsIFwiZm9jdXNlZFwiLCBcImhpZGRlbkxhYmVsXCIsIFwibWFyZ2luXCIsIFwicmVxdWlyZWRcIiwgXCJzaXplXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgY2hpbGRyZW4gYW5kIGZpbmQgdGhlIElucHV0IGluIG9yZGVyXG4gICAgLy8gdG8gZnVsbHkgc3VwcG9ydCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgdmFyIGluaXRpYWxBZG9ybmVkU3RhcnQgPSBmYWxzZTtcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICghaXNNdWlFbGVtZW50KGNoaWxkLCBbJ0lucHV0JywgJ1NlbGVjdCddKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnB1dCA9IGlzTXVpRWxlbWVudChjaGlsZCwgWydTZWxlY3QnXSkgPyBjaGlsZC5wcm9wcy5pbnB1dCA6IGNoaWxkO1xuXG4gICAgICAgIGlmIChpbnB1dCAmJiBpc0Fkb3JuZWRTdGFydChpbnB1dC5wcm9wcykpIHtcbiAgICAgICAgICBpbml0aWFsQWRvcm5lZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxBZG9ybmVkU3RhcnQ7XG4gIH0pLFxuICAgICAgYWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0QWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBhbmQgZmluZCB0aGUgSW5wdXQgaW4gb3JkZXJcbiAgICAvLyB0byBmdWxseSBzdXBwb3J0IHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICB2YXIgaW5pdGlhbEZpbGxlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFpc011aUVsZW1lbnQoY2hpbGQsIFsnSW5wdXQnLCAnU2VsZWN0J10pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRmlsbGVkKGNoaWxkLnByb3BzLCB0cnVlKSkge1xuICAgICAgICAgIGluaXRpYWxGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbEZpbGxlZDtcbiAgfSksXG4gICAgICBmaWxsZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RmlsbGVkID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9mb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlM1swXSxcbiAgICAgIHNldEZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBmb2N1c2VkID0gdmlzdWFsbHlGb2N1c2VkICE9PSB1bmRlZmluZWQgPyB2aXN1YWxseUZvY3VzZWQgOiBfZm9jdXNlZDtcblxuICBpZiAoZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICB9XG5cbiAgdmFyIHJlZ2lzdGVyRWZmZWN0O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdmFyIHJlZ2lzdGVyZWRJbnB1dCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgICByZWdpc3RlckVmZmVjdCA9IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KCkge1xuICAgICAgaWYgKHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlcmUgYXJlIG11bHRpcGxlIElucHV0QmFzZSBjb21wb25lbnRzIGluc2lkZSBhIEZvcm1Db250cm9sLicsICdUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEl0IG1pZ2h0IGNhdXNlIGluZmluaXRlIHJlbmRlcmluZyBsb29wcy4nLCAnT25seSB1c2Ugb25lIElucHV0QmFzZS4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICB2YXIgb25GaWxsZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc2V0RmlsbGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIHZhciBvbkVtcHR5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNldEZpbGxlZChmYWxzZSk7XG4gIH0sIFtdKTtcbiAgdmFyIGNoaWxkQ29udGV4dCA9IHtcbiAgICBhZG9ybmVkU3RhcnQ6IGFkb3JuZWRTdGFydCxcbiAgICBzZXRBZG9ybmVkU3RhcnQ6IHNldEFkb3JuZWRTdGFydCxcbiAgICBjb2xvcjogY29sb3IsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBmaWxsZWQ6IGZpbGxlZCxcbiAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGhpZGRlbkxhYmVsOiBoaWRkZW5MYWJlbCxcbiAgICBtYXJnaW46IChzaXplID09PSAnc21hbGwnID8gJ2RlbnNlJyA6IHVuZGVmaW5lZCkgfHwgbWFyZ2luLFxuICAgIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfSxcbiAgICBvbkVtcHR5OiBvbkVtcHR5LFxuICAgIG9uRmlsbGVkOiBvbkZpbGxlZCxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9LFxuICAgIHJlZ2lzdGVyRWZmZWN0OiByZWdpc3RlckVmZmVjdCxcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgdmFyaWFudDogdmFyaWFudFxuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNoaWxkQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIG1hcmdpbiAhPT0gJ25vbmUnICYmIGNsYXNzZXNbXCJtYXJnaW5cIi5jb25jYXQoY2FwaXRhbGl6ZShtYXJnaW4pKV0sIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLmZ1bGxXaWR0aCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGZvcm0gY29udHJvbC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsLCBpbnB1dCBhbmQgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gZm9jdXNlZCBzdGF0ZS5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGhpZGRlbi5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGluY3JlYXNlIGRlbnNpdHkgZm9yIGEgYEZpbGxlZElucHV0YC5cbiAgICogQmUgc3VyZSB0byBhZGQgYGFyaWEtbGFiZWxgIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBoaWRkZW5MYWJlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAgb3IgYG5vcm1hbGAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcgb2YgdGhpcyBhbmQgY29udGFpbmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnLCAnbm9ybWFsJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGluZGljYXRlIHRoYXQgdGhlIGlucHV0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZvcm1Db250cm9sJ1xufSkoRm9ybUNvbnRyb2wpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgRm9ybUNvbnRyb2xDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgRm9ybUNvbnRyb2xDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0Zvcm1Db250cm9sQ29udGV4dCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3JtQ29udHJvbCgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoRm9ybUNvbnRyb2xDb250ZXh0KTtcbn1cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sQ29udGV4dDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtQ29udHJvbFN0YXRlKF9yZWYpIHtcbiAgdmFyIHByb3BzID0gX3JlZi5wcm9wcyxcbiAgICAgIHN0YXRlcyA9IF9yZWYuc3RhdGVzLFxuICAgICAgbXVpRm9ybUNvbnRyb2wgPSBfcmVmLm11aUZvcm1Db250cm9sO1xuICByZXR1cm4gc3RhdGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdGF0ZSkge1xuICAgIGFjY1tzdGF0ZV0gPSBwcm9wc1tzdGF0ZV07XG5cbiAgICBpZiAobXVpRm9ybUNvbnRyb2wpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcHNbc3RhdGVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBhY2Nbc3RhdGVdID0gbXVpRm9ybUNvbnRyb2xbc3RhdGVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Gb3JtQ29udHJvbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUZvcm1Db250cm9sIH0gZnJvbSAnLi91c2VGb3JtQ29udHJvbCc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1Db250cm9sQ29udGV4dCBmcm9tICcuL0Zvcm1Db250cm9sQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtQ29udHJvbCgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoRm9ybUNvbnRyb2xDb250ZXh0KTtcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcbiAgICB9LCB0aGVtZS50eXBvZ3JhcGh5LmNhcHRpb24sIHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgbWFyZ2luVG9wOiAzLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWRcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfVxuICAgIH0pLFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7XG4gICAgICBtYXJnaW5Ub3A6IDRcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImZpbGxlZFwiYCBvciBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIGNvbnRhaW5lZDoge1xuICAgICAgbWFyZ2luTGVmdDogMTQsXG4gICAgICBtYXJnaW5SaWdodDogMTRcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZm9jdXNlZD17dHJ1ZX1gLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZmlsbGVkPXt0cnVlfWAuICovXG4gICAgZmlsbGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHJlcXVpcmVkPXt0cnVlfWAuICovXG4gICAgcmVxdWlyZWQ6IHt9XG4gIH07XG59O1xudmFyIEZvcm1IZWxwZXJUZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUhlbHBlclRleHQocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdwJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZXJyb3IgPSBwcm9wcy5lcnJvcixcbiAgICAgIGZpbGxlZCA9IHByb3BzLmZpbGxlZCxcbiAgICAgIGZvY3VzZWQgPSBwcm9wcy5mb2N1c2VkLFxuICAgICAgbWFyZ2luID0gcHJvcHMubWFyZ2luLFxuICAgICAgcmVxdWlyZWQgPSBwcm9wcy5yZXF1aXJlZCxcbiAgICAgIHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVkXCIsIFwiZXJyb3JcIiwgXCJmaWxsZWRcIiwgXCJmb2N1c2VkXCIsIFwibWFyZ2luXCIsIFwicmVxdWlyZWRcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsndmFyaWFudCcsICdtYXJnaW4nLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnZmlsbGVkJywgJ2ZvY3VzZWQnLCAncmVxdWlyZWQnXVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIChmY3MudmFyaWFudCA9PT0gJ2ZpbGxlZCcgfHwgZmNzLnZhcmlhbnQgPT09ICdvdXRsaW5lZCcpICYmIGNsYXNzZXMuY29udGFpbmVkLCBjbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvciwgZmNzLmZpbGxlZCAmJiBjbGFzc2VzLmZpbGxlZCwgZmNzLmZvY3VzZWQgJiYgY2xhc3Nlcy5mb2N1c2VkLCBmY3MucmVxdWlyZWQgJiYgY2xhc3Nlcy5yZXF1aXJlZCwgZmNzLm1hcmdpbiA9PT0gJ2RlbnNlJyAmJiBjbGFzc2VzLm1hcmdpbkRlbnNlKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGNoaWxkcmVuID09PSAnICcgP1xuICAvKiNfX1BVUkVfXyovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6ICcmIzgyMDM7J1xuICAgIH1cbiAgfSkgOiBjaGlsZHJlbik7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEZvcm1IZWxwZXJUZXh0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIElmIGAnICdgIGlzIHByb3ZpZGVkLCB0aGUgY29tcG9uZW50IHJlc2VydmVzIG9uZSBsaW5lIGhlaWdodCBmb3IgZGlzcGxheWluZyBhIGZ1dHVyZSBtZXNzYWdlLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhlbHBlciB0ZXh0IHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYSBkaXNhYmxlZCBzdGF0ZS5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBoZWxwZXIgdGV4dCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBoZWxwZXIgdGV4dCBzaG91bGQgdXNlIGZpbGxlZCBjbGFzc2VzIGtleS5cbiAgICovXG4gIGZpbGxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhlbHBlciB0ZXh0IHNob3VsZCB1c2UgZm9jdXNlZCBjbGFzc2VzIGtleS5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBoZWxwZXIgdGV4dCBzaG91bGQgdXNlIHJlcXVpcmVkIGNsYXNzZXMga2V5LlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAnb3V0bGluZWQnLCAnc3RhbmRhcmQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpRm9ybUhlbHBlclRleHQnXG59KShGb3JtSGVscGVyVGV4dCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRm9ybUhlbHBlclRleHQnOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSwgdGhlbWUudHlwb2dyYXBoeS5ib2R5MSwge1xuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAnJiRmb2N1c2VkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZFxuICAgICAgfSxcbiAgICAgICcmJGVycm9yJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb2xvciBpcyBzZWNvbmRhcnkuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgICcmJGZvY3VzZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvY3VzZWQ9e3RydWV9YC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmaWxsZWQ9e3RydWV9YC4gKi9cbiAgICBmaWxsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcmVxdWlyZWQ9e3RydWV9YC4gKi9cbiAgICByZXF1aXJlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYXN0ZXJpc2sgZWxlbWVudC4gKi9cbiAgICBhc3Rlcmlzazoge1xuICAgICAgJyYkZXJyb3InOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xudmFyIEZvcm1MYWJlbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZvcm1MYWJlbChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdsYWJlbCcgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBmaWxsZWQgPSBwcm9wcy5maWxsZWQsXG4gICAgICBmb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIHJlcXVpcmVkID0gcHJvcHMucmVxdWlyZWQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiZmlsbGVkXCIsIFwiZm9jdXNlZFwiLCBcInJlcXVpcmVkXCJdKTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsnY29sb3InLCAncmVxdWlyZWQnLCAnZm9jdXNlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmaWxsZWQnXVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGZjcy5jb2xvciB8fCAncHJpbWFyeScpKV0sIGNsYXNzTmFtZSwgZmNzLmRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIGZjcy5lcnJvciAmJiBjbGFzc2VzLmVycm9yLCBmY3MuZmlsbGVkICYmIGNsYXNzZXMuZmlsbGVkLCBmY3MuZm9jdXNlZCAmJiBjbGFzc2VzLmZvY3VzZWQsIGZjcy5yZXF1aXJlZCAmJiBjbGFzc2VzLnJlcXVpcmVkKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGNoaWxkcmVuLCBmY3MucmVxdWlyZWQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuYXN0ZXJpc2ssIGZjcy5lcnJvciAmJiBjbGFzc2VzLmVycm9yKVxuICB9LCBcIlxcdTIwMDlcIiwgJyonKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEZvcm1MYWJlbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBzaG91bGQgdXNlIGZpbGxlZCBjbGFzc2VzIGtleS5cbiAgICovXG4gIGZpbGxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IG9mIHRoaXMgbGFiZWwgaXMgZm9jdXNlZCAodXNlZCBieSBgRm9ybUdyb3VwYCBjb21wb25lbnRzKS5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGluZGljYXRlIHRoYXQgdGhlIGlucHV0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZvcm1MYWJlbCdcbn0pKEZvcm1MYWJlbCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRm9ybUxhYmVsJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbmltcG9ydCB7IHJlZmxvdywgZ2V0VHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMvdXRpbHMnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5cbmZ1bmN0aW9uIGdldFNjYWxlKHZhbHVlKSB7XG4gIHJldHVybiBcInNjYWxlKFwiLmNvbmNhdCh2YWx1ZSwgXCIsIFwiKS5jb25jYXQoTWF0aC5wb3codmFsdWUsIDIpLCBcIilcIik7XG59XG5cbnZhciBzdHlsZXMgPSB7XG4gIGVudGVyaW5nOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06IGdldFNjYWxlKDEpXG4gIH0sXG4gIGVudGVyZWQ6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ25vbmUnXG4gIH1cbn07XG4vKipcbiAqIFRoZSBHcm93IHRyYW5zaXRpb24gaXMgdXNlZCBieSB0aGUgW1Rvb2x0aXBdKC9jb21wb25lbnRzL3Rvb2x0aXBzLykgYW5kXG4gKiBbUG9wb3Zlcl0oL2NvbXBvbmVudHMvcG9wb3Zlci8pIGNvbXBvbmVudHMuXG4gKiBJdCB1c2VzIFtyZWFjdC10cmFuc2l0aW9uLWdyb3VwXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwKSBpbnRlcm5hbGx5LlxuICovXG5cbnZhciBHcm93ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gR3Jvdyhwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgX3Byb3BzJGRpc2FibGVTdHJpY3RNID0gcHJvcHMuZGlzYWJsZVN0cmljdE1vZGVDb21wYXQsXG4gICAgICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdCA9IF9wcm9wcyRkaXNhYmxlU3RyaWN0TSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVN0cmljdE0sXG4gICAgICBpblByb3AgPSBwcm9wcy5pbixcbiAgICAgIG9uRW50ZXIgPSBwcm9wcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkID0gcHJvcHMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZyA9IHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQgPSBwcm9wcy5vbkV4aXQsXG4gICAgICBvbkV4aXRlZCA9IHByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FeGl0aW5nID0gcHJvcHMub25FeGl0aW5nLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIF9wcm9wcyR0aW1lb3V0ID0gcHJvcHMudGltZW91dCxcbiAgICAgIHRpbWVvdXQgPSBfcHJvcHMkdGltZW91dCA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3Byb3BzJHRpbWVvdXQsXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gVHJhbnNpdGlvbiA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImRpc2FibGVTdHJpY3RNb2RlQ29tcGF0XCIsIFwiaW5cIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwic3R5bGVcIiwgXCJ0aW1lb3V0XCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiXSk7XG5cbiAgdmFyIHRpbWVyID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBhdXRvVGltZW91dCA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA9IHRoZW1lLnVuc3RhYmxlX3N0cmljdE1vZGUgJiYgIWRpc2FibGVTdHJpY3RNb2RlQ29tcGF0O1xuICB2YXIgbm9kZVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGZvcmVpZ25SZWYgPSB1c2VGb3JrUmVmKGNoaWxkcmVuLnJlZiwgcmVmKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYoZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA/IG5vZGVSZWYgOiB1bmRlZmluZWQsIGZvcmVpZ25SZWYpO1xuXG4gIHZhciBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiAobm9kZU9yQXBwZWFyaW5nLCBtYXliZUFwcGVhcmluZykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfcmVmID0gZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA/IFtub2RlUmVmLmN1cnJlbnQsIG5vZGVPckFwcGVhcmluZ10gOiBbbm9kZU9yQXBwZWFyaW5nLCBtYXliZUFwcGVhcmluZ10sXG4gICAgICAgICAgICBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICAgICAgbm9kZSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgaXNBcHBlYXJpbmcgPSBfcmVmMlsxXTsgLy8gb25FbnRlclh4eCBhbmQgb25FeGl0WHh4IGNhbGxiYWNrcyBoYXZlIGEgZGlmZmVyZW50IGFyZ3VtZW50cy5sZW5ndGggdmFsdWUuXG5cblxuICAgICAgICBpZiAoaXNBcHBlYXJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkVudGVyaW5nKTtcbiAgdmFyIGhhbmRsZUVudGVyID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhmdW5jdGlvbiAobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICByZWZsb3cobm9kZSk7IC8vIFNvIHRoZSBhbmltYXRpb24gYWx3YXlzIHN0YXJ0IGZyb20gdGhlIHN0YXJ0LlxuXG4gICAgdmFyIF9nZXRUcmFuc2l0aW9uUHJvcHMgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdlbnRlcidcbiAgICB9KSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX2dldFRyYW5zaXRpb25Qcm9wcy5kdXJhdGlvbixcbiAgICAgICAgZGVsYXkgPSBfZ2V0VHJhbnNpdGlvblByb3BzLmRlbGF5O1xuXG4gICAgdmFyIGR1cmF0aW9uO1xuXG4gICAgaWYgKHRpbWVvdXQgPT09ICdhdXRvJykge1xuICAgICAgZHVyYXRpb24gPSB0aGVtZS50cmFuc2l0aW9ucy5nZXRBdXRvSGVpZ2h0RHVyYXRpb24obm9kZS5jbGllbnRIZWlnaHQpO1xuICAgICAgYXV0b1RpbWVvdXQuY3VycmVudCA9IGR1cmF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBkdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlLnRyYW5zaXRpb24gPSBbdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5Jywge1xuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZGVsYXk6IGRlbGF5XG4gICAgfSksIHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgZHVyYXRpb246IGR1cmF0aW9uICogMC42NjYsXG4gICAgICBkZWxheTogZGVsYXlcbiAgICB9KV0uam9pbignLCcpO1xuXG4gICAgaWYgKG9uRW50ZXIpIHtcbiAgICAgIG9uRW50ZXIobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVFbnRlcmVkID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkVudGVyZWQpO1xuICB2YXIgaGFuZGxlRXhpdGluZyA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sob25FeGl0aW5nKTtcbiAgdmFyIGhhbmRsZUV4aXQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIF9nZXRUcmFuc2l0aW9uUHJvcHMyID0gZ2V0VHJhbnNpdGlvblByb3BzKHtcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHRpbWVvdXQ6IHRpbWVvdXRcbiAgICB9LCB7XG4gICAgICBtb2RlOiAnZXhpdCdcbiAgICB9KSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX2dldFRyYW5zaXRpb25Qcm9wczIuZHVyYXRpb24sXG4gICAgICAgIGRlbGF5ID0gX2dldFRyYW5zaXRpb25Qcm9wczIuZGVsYXk7XG5cbiAgICB2YXIgZHVyYXRpb247XG5cbiAgICBpZiAodGltZW91dCA9PT0gJ2F1dG8nKSB7XG4gICAgICBkdXJhdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmdldEF1dG9IZWlnaHREdXJhdGlvbihub2RlLmNsaWVudEhlaWdodCk7XG4gICAgICBhdXRvVGltZW91dC5jdXJyZW50ID0gZHVyYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IFt0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBkZWxheTogZGVsYXlcbiAgICB9KSwgdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gKiAwLjY2NixcbiAgICAgIGRlbGF5OiBkZWxheSB8fCBkdXJhdGlvbiAqIDAuMzMzXG4gICAgfSldLmpvaW4oJywnKTtcbiAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgbm9kZS5zdHlsZS50cmFuc2Zvcm0gPSBnZXRTY2FsZSgwLjc1KTtcblxuICAgIGlmIChvbkV4aXQpIHtcbiAgICAgIG9uRXhpdChub2RlKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlRXhpdGVkID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkV4aXRlZCk7XG5cbiAgdmFyIGFkZEVuZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRW5kTGlzdGVuZXIobm9kZU9yTmV4dCwgbWF5YmVOZXh0KSB7XG4gICAgdmFyIG5leHQgPSBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gbm9kZU9yTmV4dCA6IG1heWJlTmV4dDtcblxuICAgIGlmICh0aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIHRpbWVyLmN1cnJlbnQgPSBzZXRUaW1lb3V0KG5leHQsIGF1dG9UaW1lb3V0LmN1cnJlbnQgfHwgMCk7XG4gICAgfVxuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lci5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgYXBwZWFyOiB0cnVlLFxuICAgIGluOiBpblByb3AsXG4gICAgbm9kZVJlZjogZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA/IG5vZGVSZWYgOiB1bmRlZmluZWQsXG4gICAgb25FbnRlcjogaGFuZGxlRW50ZXIsXG4gICAgb25FbnRlcmVkOiBoYW5kbGVFbnRlcmVkLFxuICAgIG9uRW50ZXJpbmc6IGhhbmRsZUVudGVyaW5nLFxuICAgIG9uRXhpdDogaGFuZGxlRXhpdCxcbiAgICBvbkV4aXRlZDogaGFuZGxlRXhpdGVkLFxuICAgIG9uRXhpdGluZzogaGFuZGxlRXhpdGluZyxcbiAgICBhZGRFbmRMaXN0ZW5lcjogYWRkRW5kTGlzdGVuZXIsXG4gICAgdGltZW91dDogdGltZW91dCA9PT0gJ2F1dG8nID8gbnVsbCA6IHRpbWVvdXRcbiAgfSwgb3RoZXIpLCBmdW5jdGlvbiAoc3RhdGUsIGNoaWxkUHJvcHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgX2V4dGVuZHMoe1xuICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNmb3JtOiBnZXRTY2FsZSgwLjc1KSxcbiAgICAgICAgdmlzaWJpbGl0eTogc3RhdGUgPT09ICdleGl0ZWQnICYmICFpblByb3AgPyAnaGlkZGVuJyA6IHVuZGVmaW5lZFxuICAgICAgfSwgc3R5bGVzW3N0YXRlXSwgc3R5bGUsIGNoaWxkcmVuLnByb3BzLnN0eWxlKSxcbiAgICAgIHJlZjogaGFuZGxlUmVmXG4gICAgfSwgY2hpbGRQcm9wcykpO1xuICB9KTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gR3Jvdy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBBIHNpbmdsZSBjaGlsZCBjb250ZW50IGVsZW1lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSB0aGlzIHByb3AgaWYgeW91IGVuY291bnRlciAnRnVuY3Rpb24gY29tcG9uZW50cyBjYW5ub3QgYmUgZ2l2ZW4gcmVmcycsXG4gICAqIHVzZSBgdW5zdGFibGVfY3JlYXRlU3RyaWN0TW9kZVRoZW1lYCxcbiAgICogYW5kIGNhbid0IGZvcndhcmQgdGhlIHJlZiBpbiB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgKi9cbiAgZGlzYWJsZVN0cmljdE1vZGVDb21wYXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHNob3cgdGhlIGNvbXBvbmVudDsgdHJpZ2dlcnMgdGhlIGVudGVyIG9yIGV4aXQgYW5pbWF0aW9uLlxuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBmb3IgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogWW91IG1heSBzcGVjaWZ5IGEgc2luZ2xlIHRpbWVvdXQgZm9yIGFsbCB0cmFuc2l0aW9ucywgb3IgaW5kaXZpZHVhbGx5IHdpdGggYW4gb2JqZWN0LlxuICAgKlxuICAgKiBTZXQgdG8gJ2F1dG8nIHRvIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlIHRyYW5zaXRpb24gdGltZSBiYXNlZCBvbiBoZWlnaHQuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFwcGVhcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBleGl0OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXSlcbn0gOiB2b2lkIDA7XG5Hcm93Lm11aVN1cHBvcnRBdXRvID0gdHJ1ZTtcbmV4cG9ydCBkZWZhdWx0IEdyb3c7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vR3Jvdyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJy4uL0lucHV0QmFzZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgbGlnaHQgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCc7XG4gIHZhciBib3R0b21MaW5lQ29sb3IgPSBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuNDIpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBgRm9ybUNvbnRyb2xgLiAqL1xuICAgIGZvcm1Db250cm9sOiB7XG4gICAgICAnbGFiZWwgKyAmJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IDE2XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBmb2N1c2VkLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGNvbG9yIHNlY29uZGFyeS4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJyYkdW5kZXJsaW5lOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlVW5kZXJsaW5lPXtmYWxzZX1gLiAqL1xuICAgIHVuZGVybGluZToge1xuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIycHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLFxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgICAgfSksXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyAvLyBUcmFuc3BhcmVudCB0byB0aGUgaG92ZXIgc3R5bGUuXG5cbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c2VkOmFmdGVyJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3I6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKScgLy8gZXJyb3IgaXMgYWx3YXlzIHVuZGVybGluZWQgaW4gcmVkXG5cbiAgICAgIH0sXG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgXCIuY29uY2F0KGJvdHRvbUxpbmVDb2xvciksXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgLy8gRG9pbmcgdGhlIG90aGVyIHdheSBhcm91bmQgY3Jhc2ggb24gSUUgMTEgXCInJ1wiIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzcy9pc3N1ZXMvMjQyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlxcXFwwMGEwXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnYm9yZGVyLWJvdHRvbS1jb2xvcicsIHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyOm5vdCgkZGlzYWJsZWQpOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnkpLFxuICAgICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgICAnQG1lZGlhIChob3Zlcjogbm9uZSknOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYm90dG9tTGluZUNvbG9yKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQ6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ2RvdHRlZCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBpbnB1dE11bHRpbGluZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlPVwic2VhcmNoXCJgLiAqL1xuICAgIGlucHV0VHlwZVNlYXJjaDoge31cbiAgfTtcbn07XG52YXIgSW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBkaXNhYmxlVW5kZXJsaW5lID0gcHJvcHMuZGlzYWJsZVVuZGVybGluZSxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJkaXNhYmxlVW5kZXJsaW5lXCIsIFwiY2xhc3Nlc1wiLCBcImZ1bGxXaWR0aFwiLCBcImlucHV0Q29tcG9uZW50XCIsIFwibXVsdGlsaW5lXCIsIFwidHlwZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0QmFzZSwgX2V4dGVuZHMoe1xuICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBjbGFzc2VzLCB7XG4gICAgICByb290OiBjbHN4KGNsYXNzZXMucm9vdCwgIWRpc2FibGVVbmRlcmxpbmUgJiYgY2xhc3Nlcy51bmRlcmxpbmUpLFxuICAgICAgdW5kZXJsaW5lOiBudWxsXG4gICAgfSksXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgaW5wdXRDb21wb25lbnQ6IGlucHV0Q29tcG9uZW50LFxuICAgIG11bHRpbGluZTogbXVsdGlsaW5lLFxuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IHR5cGVcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSW5wdXQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhpcyBwcm9wIGhlbHBzIHVzZXJzIHRvIGZpbGwgZm9ybXMgZmFzdGVyLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGUgbmFtZSBjYW4gYmUgY29uZnVzaW5nLCBhcyBpdCdzIG1vcmUgbGlrZSBhbiBhdXRvZmlsbC5cbiAgICogWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGl0IFtmb2xsb3dpbmcgdGhlIHNwZWNpZmljYXRpb25dKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2F1dG9maWxsKS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCBkdXJpbmcgdGhlIGZpcnN0IG1vdW50LlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGBpbnB1dGAgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgbm90IGhhdmUgYW4gdW5kZXJsaW5lLlxuICAgKi9cbiAgZGlzYWJsZVVuZGVybGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuZCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGVuZEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgaW5kaWNhdGUgYW4gZXJyb3IuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBTdGFydCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHN0YXJ0QWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5JbnB1dC5tdWlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlJbnB1dCdcbn0pKElucHV0KTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbnB1dCc7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMsIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCBGb3JtQ29udHJvbENvbnRleHQsIHsgdXNlRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbENvbnRleHQnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJy4uL1RleHRhcmVhQXV0b3NpemUnO1xuaW1wb3J0IHsgaXNGaWxsZWQgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBsaWdodCA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JztcbiAgdmFyIHBsYWNlaG9sZGVyID0ge1xuICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICBvcGFjaXR5OiBsaWdodCA/IDAuNDIgOiAwLjUsXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5Jywge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXJcbiAgICB9KVxuICB9O1xuICB2YXIgcGxhY2Vob2xkZXJIaWRkZW4gPSB7XG4gICAgb3BhY2l0eTogJzAgIWltcG9ydGFudCdcbiAgfTtcbiAgdmFyIHBsYWNlaG9sZGVyVmlzaWJsZSA9IHtcbiAgICBvcGFjaXR5OiBsaWdodCA/IDAuNDIgOiAwLjVcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAnQGdsb2JhbCc6IHtcbiAgICAgICdAa2V5ZnJhbWVzIG11aS1hdXRvLWZpbGwnOiB7fSxcbiAgICAgICdAa2V5ZnJhbWVzIG11aS1hdXRvLWZpbGwtY2FuY2VsJzoge31cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeS5ib2R5MSwge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgbGluZUhlaWdodDogJzEuMTg3NmVtJyxcbiAgICAgIC8vIFJlc2V0ICgxOXB4KSwgbWF0Y2ggdGhlIG5hdGl2ZSBpbnB1dCBsaW5lLWhlaWdodFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAvLyBQcmV2ZW50IHBhZGRpbmcgaXNzdWUgd2l0aCBmdWxsV2lkdGguXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGN1cnNvcjogJ3RleHQnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWQsXG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICB9XG4gICAgfSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGBGb3JtQ29udHJvbGAuICovXG4gICAgZm9ybUNvbnRyb2w6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkU3RhcnQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkRW5kOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgbXVsdGlsaW5lOiB7XG4gICAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdCg4IC0gMiwgXCJweCAwIFwiKS5jb25jYXQoOCAtIDEsIFwicHhcIiksXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogNCAtIDFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29sb3IgaXMgc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZ1bGxXaWR0aD17dHJ1ZX1gLiAqL1xuICAgIGZ1bGxXaWR0aDoge1xuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7XG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaW5oZXJpdCcsXG4gICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdCg4IC0gMiwgXCJweCAwIFwiKS5jb25jYXQoOCAtIDEsIFwicHhcIiksXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICBoZWlnaHQ6ICcxLjE4NzZlbScsXG4gICAgICAvLyBSZXNldCAoMTlweCksIG1hdGNoIHRoZSBuYXRpdmUgaW5wdXQgbGluZS1oZWlnaHRcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIC8vIFJlc2V0IGZvciBTYWZhcmlcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIC8vIE1ha2UgdGhlIGZsZXggaXRlbSBzaHJpbmsgd2l0aCBGaXJlZm94XG4gICAgICBtaW5XaWR0aDogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAvLyBGaXggSUUgMTEgd2lkdGggaXNzdWVcbiAgICAgIGFuaW1hdGlvbk5hbWU6ICdtdWktYXV0by1maWxsLWNhbmNlbCcsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogJzEwbXMnLFxuICAgICAgJyY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgICcmOjotbW96LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAvLyBGaXJlZm94IDE5K1xuICAgICAgJyY6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAvLyBJRSAxMVxuICAgICAgJyY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLFxuICAgICAgLy8gRWRnZVxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IDBcbiAgICAgIH0sXG4gICAgICAvLyBSZXNldCBGaXJlZm94IGludmFsaWQgcmVxdWlyZWQgaW5wdXQgc3R5bGVcbiAgICAgICcmOmludmFsaWQnOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyY6Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24nOiB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcGFkZGluZyB3aGVuIHR5cGU9c2VhcmNoLlxuICAgICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnXG4gICAgICB9LFxuICAgICAgLy8gU2hvdyBhbmQgaGlkZSB0aGUgcGxhY2Vob2xkZXIgbG9naWNcbiAgICAgICdsYWJlbFtkYXRhLXNocmluaz1mYWxzZV0gKyAkZm9ybUNvbnRyb2wgJic6IHtcbiAgICAgICAgJyY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlckhpZGRlbixcbiAgICAgICAgJyY6Oi1tb3otcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlckhpZGRlbixcbiAgICAgICAgLy8gRmlyZWZveCAxOStcbiAgICAgICAgJyY6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJIaWRkZW4sXG4gICAgICAgIC8vIElFIDExXG4gICAgICAgICcmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlckhpZGRlbixcbiAgICAgICAgLy8gRWRnZVxuICAgICAgICAnJjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyVmlzaWJsZSxcbiAgICAgICAgJyY6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlclZpc2libGUsXG4gICAgICAgIC8vIEZpcmVmb3ggMTkrXG4gICAgICAgICcmOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyVmlzaWJsZSxcbiAgICAgICAgLy8gSUUgMTFcbiAgICAgICAgJyY6Zm9jdXM6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyVmlzaWJsZSAvLyBFZGdlXG5cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgb3BhY2l0eTogMSAvLyBSZXNldCBpT1Mgb3BhY2l0eVxuXG4gICAgICB9LFxuICAgICAgJyY6LXdlYmtpdC1hdXRvZmlsbCc6IHtcbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb246ICc1MDAwcycsXG4gICAgICAgIGFuaW1hdGlvbk5hbWU6ICdtdWktYXV0by1maWxsJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBpbnB1dE1hcmdpbkRlbnNlOiB7XG4gICAgICBwYWRkaW5nVG9wOiA0IC0gMVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBpbnB1dE11bHRpbGluZToge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICByZXNpemU6ICdub25lJyxcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgdHlwZT1cInNlYXJjaFwiYC4gKi9cbiAgICBpbnB1dFR5cGVTZWFyY2g6IHtcbiAgICAgIC8vIEltcHJvdmUgdHlwZSBzZWFyY2ggc3R5bGUuXG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ3RleHRmaWVsZCcsXG4gICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ3RleHRmaWVsZCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYGVuZEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgaW5wdXRBZG9ybmVkRW5kOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYGhpZGRlbkxhYmVsPXt0cnVlfWAuICovXG4gICAgaW5wdXRIaWRkZW5MYWJlbDoge31cbiAgfTtcbn07XG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUVmZmVjdCA6IFJlYWN0LnVzZUxheW91dEVmZmVjdDtcbi8qKlxuICogYElucHV0QmFzZWAgY29udGFpbnMgYXMgZmV3IHN0eWxlcyBhcyBwb3NzaWJsZS5cbiAqIEl0IGFpbXMgdG8gYmUgYSBzaW1wbGUgYnVpbGRpbmcgYmxvY2sgZm9yIGNyZWF0aW5nIGFuIGlucHV0LlxuICogSXQgY29udGFpbnMgYSBsb2FkIG9mIHN0eWxlIHJlc2V0IGFuZCBzb21lIHN0YXRlIGxvZ2ljLlxuICovXG5cbnZhciBJbnB1dEJhc2UgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJbnB1dEJhc2UocHJvcHMsIHJlZikge1xuICB2YXIgYXJpYURlc2NyaWJlZGJ5ID0gcHJvcHNbJ2FyaWEtZGVzY3JpYmVkYnknXSxcbiAgICAgIGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSxcbiAgICAgIGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBlbmRBZG9ybm1lbnQgPSBwcm9wcy5lbmRBZG9ybm1lbnQsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBfcHJvcHMkaW5wdXRDb21wb25lbnQgPSBwcm9wcy5pbnB1dENvbXBvbmVudCxcbiAgICAgIGlucHV0Q29tcG9uZW50ID0gX3Byb3BzJGlucHV0Q29tcG9uZW50ID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX3Byb3BzJGlucHV0Q29tcG9uZW50LFxuICAgICAgX3Byb3BzJGlucHV0UHJvcHMgPSBwcm9wcy5pbnB1dFByb3BzLFxuICAgICAgaW5wdXRQcm9wc1Byb3AgPSBfcHJvcHMkaW5wdXRQcm9wcyA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmUHJvcCA9IHByb3BzLmlucHV0UmVmLFxuICAgICAgbWFyZ2luID0gcHJvcHMubWFyZ2luLFxuICAgICAgX3Byb3BzJG11bHRpbGluZSA9IHByb3BzLm11bHRpbGluZSxcbiAgICAgIG11bHRpbGluZSA9IF9wcm9wcyRtdWx0aWxpbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpbGluZSxcbiAgICAgIG5hbWUgPSBwcm9wcy5uYW1lLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgb25Gb2N1cyA9IHByb3BzLm9uRm9jdXMsXG4gICAgICBvbktleURvd24gPSBwcm9wcy5vbktleURvd24sXG4gICAgICBvbktleVVwID0gcHJvcHMub25LZXlVcCxcbiAgICAgIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICByZWFkT25seSA9IHByb3BzLnJlYWRPbmx5LFxuICAgICAgcmVuZGVyU3VmZml4ID0gcHJvcHMucmVuZGVyU3VmZml4LFxuICAgICAgcm93cyA9IHByb3BzLnJvd3MsXG4gICAgICByb3dzTWF4ID0gcHJvcHMucm93c01heCxcbiAgICAgIHJvd3NNaW4gPSBwcm9wcy5yb3dzTWluLFxuICAgICAgc3RhcnRBZG9ybm1lbnQgPSBwcm9wcy5zdGFydEFkb3JubWVudCxcbiAgICAgIF9wcm9wcyR0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdm9pZCAwID8gJ3RleHQnIDogX3Byb3BzJHR5cGUsXG4gICAgICB2YWx1ZVByb3AgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmRBZG9ybm1lbnRcIiwgXCJlcnJvclwiLCBcImZ1bGxXaWR0aFwiLCBcImlkXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJpbnB1dFByb3BzXCIsIFwiaW5wdXRSZWZcIiwgXCJtYXJnaW5cIiwgXCJtdWx0aWxpbmVcIiwgXCJuYW1lXCIsIFwib25CbHVyXCIsIFwib25DaGFuZ2VcIiwgXCJvbkNsaWNrXCIsIFwib25Gb2N1c1wiLCBcIm9uS2V5RG93blwiLCBcIm9uS2V5VXBcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRPbmx5XCIsIFwicmVuZGVyU3VmZml4XCIsIFwicm93c1wiLCBcInJvd3NNYXhcIiwgXCJyb3dzTWluXCIsIFwic3RhcnRBZG9ybm1lbnRcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0pO1xuXG4gIHZhciB2YWx1ZSA9IGlucHV0UHJvcHNQcm9wLnZhbHVlICE9IG51bGwgPyBpbnB1dFByb3BzUHJvcC52YWx1ZSA6IHZhbHVlUHJvcDtcblxuICB2YXIgX1JlYWN0JHVzZVJlZiA9IFJlYWN0LnVzZVJlZih2YWx1ZSAhPSBudWxsKSxcbiAgICAgIGlzQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGhhbmRsZUlucHV0UmVmV2FybmluZyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2Uubm9kZU5hbWUgIT09ICdJTlBVVCcgJiYgIWluc3RhbmNlLmZvY3VzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogWW91IGhhdmUgcHJvdmlkZWQgYSBgaW5wdXRDb21wb25lbnRgIHRvIHRoZSBpbnB1dCBjb21wb25lbnQnLCAndGhhdCBkb2VzIG5vdCBjb3JyZWN0bHkgaGFuZGxlIHRoZSBgaW5wdXRSZWZgIHByb3AuJywgJ01ha2Ugc3VyZSB0aGUgYGlucHV0UmVmYCBwcm9wIGlzIGNhbGxlZCB3aXRoIGEgSFRNTElucHV0RWxlbWVudC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG4gIHZhciBoYW5kbGVJbnB1dFByb3BzUmVmUHJvcCA9IHVzZUZvcmtSZWYoaW5wdXRQcm9wc1Byb3AucmVmLCBoYW5kbGVJbnB1dFJlZldhcm5pbmcpO1xuICB2YXIgaGFuZGxlSW5wdXRSZWZQcm9wID0gdXNlRm9ya1JlZihpbnB1dFJlZlByb3AsIGhhbmRsZUlucHV0UHJvcHNSZWZQcm9wKTtcbiAgdmFyIGhhbmRsZUlucHV0UmVmID0gdXNlRm9ya1JlZihpbnB1dFJlZiwgaGFuZGxlSW5wdXRSZWZQcm9wKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgZm9jdXNlZCA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldEZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobXVpRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuIG11aUZvcm1Db250cm9sLnJlZ2lzdGVyRWZmZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSwgW211aUZvcm1Db250cm9sXSk7XG4gIH1cblxuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsnY29sb3InLCAnZGlzYWJsZWQnLCAnZXJyb3InLCAnaGlkZGVuTGFiZWwnLCAnbWFyZ2luJywgJ3JlcXVpcmVkJywgJ2ZpbGxlZCddXG4gIH0pO1xuICBmY3MuZm9jdXNlZCA9IG11aUZvcm1Db250cm9sID8gbXVpRm9ybUNvbnRyb2wuZm9jdXNlZCA6IGZvY3VzZWQ7IC8vIFRoZSBibHVyIHdvbid0IGZpcmUgd2hlbiB0aGUgZGlzYWJsZWQgc3RhdGUgaXMgc2V0IG9uIGEgZm9jdXNlZCBpbnB1dC5cbiAgLy8gV2UgbmVlZCB0byBib29rIGtlZXAgdGhlIGZvY3VzZWQgc3RhdGUgbWFudWFsbHkuXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW11aUZvcm1Db250cm9sICYmIGRpc2FibGVkICYmIGZvY3VzZWQpIHtcbiAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuXG4gICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgIG9uQmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW211aUZvcm1Db250cm9sLCBkaXNhYmxlZCwgZm9jdXNlZCwgb25CbHVyXSk7XG4gIHZhciBvbkZpbGxlZCA9IG11aUZvcm1Db250cm9sICYmIG11aUZvcm1Db250cm9sLm9uRmlsbGVkO1xuICB2YXIgb25FbXB0eSA9IG11aUZvcm1Db250cm9sICYmIG11aUZvcm1Db250cm9sLm9uRW1wdHk7XG4gIHZhciBjaGVja0RpcnR5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChpc0ZpbGxlZChvYmopKSB7XG4gICAgICBpZiAob25GaWxsZWQpIHtcbiAgICAgICAgb25GaWxsZWQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9uRW1wdHkpIHtcbiAgICAgIG9uRW1wdHkoKTtcbiAgICB9XG4gIH0sIFtvbkZpbGxlZCwgb25FbXB0eV0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzQ29udHJvbGxlZCkge1xuICAgICAgY2hlY2tEaXJ0eSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdmFsdWUsIGNoZWNrRGlydHksIGlzQ29udHJvbGxlZF0pO1xuXG4gIHZhciBoYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIGhhbmRsZUZvY3VzKGV2ZW50KSB7XG4gICAgLy8gRml4IGEgYnVnIHdpdGggSUUgMTEgd2hlcmUgdGhlIGZvY3VzL2JsdXIgZXZlbnRzIGFyZSB0cmlnZ2VyZWRcbiAgICAvLyB3aGlsZSB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG4gICAgaWYgKGZjcy5kaXNhYmxlZCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgIG9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFByb3BzUHJvcC5vbkZvY3VzKSB7XG4gICAgICBpbnB1dFByb3BzUHJvcC5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAobXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25Gb2N1cykge1xuICAgICAgbXVpRm9ybUNvbnRyb2wub25Gb2N1cyhldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZvY3VzZWQodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVCbHVyID0gZnVuY3Rpb24gaGFuZGxlQmx1cihldmVudCkge1xuICAgIGlmIChvbkJsdXIpIHtcbiAgICAgIG9uQmx1cihldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UHJvcHNQcm9wLm9uQmx1cikge1xuICAgICAgaW5wdXRQcm9wc1Byb3Aub25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAobXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25CbHVyKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5vbkJsdXIoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGb2N1c2VkKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGlmICghaXNDb250cm9sbGVkKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldCB8fCBpbnB1dFJlZi5jdXJyZW50O1xuXG4gICAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBFeHBlY3RlZCB2YWxpZCBpbnB1dCB0YXJnZXQuIERpZCB5b3UgdXNlIGEgY3VzdG9tIGBpbnB1dENvbXBvbmVudGAgYW5kIGZvcmdldCB0byBmb3J3YXJkIHJlZnM/IFNlZSBodHRwczovL21hdGVyaWFsLXVpLmNvbS9yL2lucHV0LWNvbXBvbmVudC1yZWYtaW50ZXJmYWNlIGZvciBtb3JlIGluZm8uXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDEpKTtcbiAgICAgIH1cblxuICAgICAgY2hlY2tEaXJ0eSh7XG4gICAgICAgIHZhbHVlOiBlbGVtZW50LnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRQcm9wc1Byb3Aub25DaGFuZ2UpIHtcbiAgICAgIGlucHV0UHJvcHNQcm9wLm9uQ2hhbmdlLmFwcGx5KGlucHV0UHJvcHNQcm9wLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgfSAvLyBQZXJmb3JtIGluIHRoZSB3aWxsVXBkYXRlXG5cblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UuYXBwbHkodm9pZCAwLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9OyAvLyBDaGVjayB0aGUgaW5wdXQgc3RhdGUgb24gbW91bnQsIGluIGNhc2UgaXQgd2FzIGZpbGxlZCBieSB0aGUgdXNlclxuICAvLyBvciBhdXRvIGZpbGxlZCBieSB0aGUgYnJvd3NlciBiZWZvcmUgdGhlIGh5ZHJhdGlvbiAoZm9yIFNTUikuXG5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGNoZWNrRGlydHkoaW5wdXRSZWYuY3VycmVudCk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmIChpbnB1dFJlZi5jdXJyZW50ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIElucHV0Q29tcG9uZW50ID0gaW5wdXRDb21wb25lbnQ7XG5cbiAgdmFyIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7fSwgaW5wdXRQcm9wc1Byb3AsIHtcbiAgICByZWY6IGhhbmRsZUlucHV0UmVmXG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgSW5wdXRDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgIC8vIFJlbmFtZSByZWYgdG8gaW5wdXRSZWYgYXMgd2UgZG9uJ3Qga25vdyB0aGVcbiAgICAgIC8vIHByb3ZpZGVkIGBpbnB1dENvbXBvbmVudGAgc3RydWN0dXJlLlxuICAgICAgaW5wdXRSZWY6IGhhbmRsZUlucHV0UmVmLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sIGlucHV0UHJvcHMsIHtcbiAgICAgIHJlZjogbnVsbFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKG11bHRpbGluZSkge1xuICAgIGlmIChyb3dzICYmICFyb3dzTWF4ICYmICFyb3dzTWluKSB7XG4gICAgICBJbnB1dENvbXBvbmVudCA9ICd0ZXh0YXJlYSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgIHJvd3NNYXg6IHJvd3NNYXhcbiAgICAgIH0sIGlucHV0UHJvcHMpO1xuICAgICAgSW5wdXRDb21wb25lbnQgPSBUZXh0YXJlYUF1dG9zaXplO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnB1dFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgdHlwZTogdHlwZVxuICAgIH0sIGlucHV0UHJvcHMpO1xuICB9XG5cbiAgdmFyIGhhbmRsZUF1dG9GaWxsID0gZnVuY3Rpb24gaGFuZGxlQXV0b0ZpbGwoZXZlbnQpIHtcbiAgICAvLyBQcm92aWRlIGEgZmFrZSB2YWx1ZSBhcyBDaHJvbWUgbWlnaHQgbm90IGxldCB5b3UgYWNjZXNzIGl0IGZvciBzZWN1cml0eSByZWFzb25zLlxuICAgIGNoZWNrRGlydHkoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gJ211aS1hdXRvLWZpbGwtY2FuY2VsJyA/IGlucHV0UmVmLmN1cnJlbnQgOiB7XG4gICAgICB2YWx1ZTogJ3gnXG4gICAgfSk7XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobXVpRm9ybUNvbnRyb2wpIHtcbiAgICAgIG11aUZvcm1Db250cm9sLnNldEFkb3JuZWRTdGFydChCb29sZWFuKHN0YXJ0QWRvcm5tZW50KSk7XG4gICAgfVxuICB9LCBbbXVpRm9ybUNvbnRyb2wsIHN0YXJ0QWRvcm5tZW50XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoZmNzLmNvbG9yIHx8ICdwcmltYXJ5JykpXSwgY2xhc3NOYW1lLCBmY3MuZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgZmNzLmVycm9yICYmIGNsYXNzZXMuZXJyb3IsIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLmZ1bGxXaWR0aCwgZmNzLmZvY3VzZWQgJiYgY2xhc3Nlcy5mb2N1c2VkLCBtdWlGb3JtQ29udHJvbCAmJiBjbGFzc2VzLmZvcm1Db250cm9sLCBtdWx0aWxpbmUgJiYgY2xhc3Nlcy5tdWx0aWxpbmUsIHN0YXJ0QWRvcm5tZW50ICYmIGNsYXNzZXMuYWRvcm5lZFN0YXJ0LCBlbmRBZG9ybm1lbnQgJiYgY2xhc3Nlcy5hZG9ybmVkRW5kLCBmY3MubWFyZ2luID09PSAnZGVuc2UnICYmIGNsYXNzZXMubWFyZ2luRGVuc2UpLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgc3RhcnRBZG9ybm1lbnQsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBudWxsXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0Q29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgXCJhcmlhLWludmFsaWRcIjogZmNzLmVycm9yLFxuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBhcmlhRGVzY3JpYmVkYnksXG4gICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgZGlzYWJsZWQ6IGZjcy5kaXNhYmxlZCxcbiAgICBpZDogaWQsXG4gICAgb25BbmltYXRpb25TdGFydDogaGFuZGxlQXV0b0ZpbGwsXG4gICAgbmFtZTogbmFtZSxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgcmVhZE9ubHk6IHJlYWRPbmx5LFxuICAgIHJlcXVpcmVkOiBmY3MucmVxdWlyZWQsXG4gICAgcm93czogcm93cyxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgb25LZXlEb3duOiBvbktleURvd24sXG4gICAgb25LZXlVcDogb25LZXlVcFxuICB9LCBpbnB1dFByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuaW5wdXQsIGlucHV0UHJvcHNQcm9wLmNsYXNzTmFtZSwgZmNzLmRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIG11bHRpbGluZSAmJiBjbGFzc2VzLmlucHV0TXVsdGlsaW5lLCBmY3MuaGlkZGVuTGFiZWwgJiYgY2xhc3Nlcy5pbnB1dEhpZGRlbkxhYmVsLCBzdGFydEFkb3JubWVudCAmJiBjbGFzc2VzLmlucHV0QWRvcm5lZFN0YXJ0LCBlbmRBZG9ybm1lbnQgJiYgY2xhc3Nlcy5pbnB1dEFkb3JuZWRFbmQsIHR5cGUgPT09ICdzZWFyY2gnICYmIGNsYXNzZXMuaW5wdXRUeXBlU2VhcmNoLCBmY3MubWFyZ2luID09PSAnZGVuc2UnICYmIGNsYXNzZXMuaW5wdXRNYXJnaW5EZW5zZSksXG4gICAgb25CbHVyOiBoYW5kbGVCbHVyLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgb25Gb2N1czogaGFuZGxlRm9jdXNcbiAgfSkpKSwgZW5kQWRvcm5tZW50LCByZW5kZXJTdWZmaXggPyByZW5kZXJTdWZmaXgoX2V4dGVuZHMoe30sIGZjcywge1xuICAgIHN0YXJ0QWRvcm5tZW50OiBzdGFydEFkb3JubWVudFxuICB9KSkgOiBudWxsKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSW5wdXRCYXNlLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gICdhcmlhLWRlc2NyaWJlZGJ5JzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhpcyBwcm9wIGhlbHBzIHVzZXJzIHRvIGZpbGwgZm9ybXMgZmFzdGVyLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGUgbmFtZSBjYW4gYmUgY29uZnVzaW5nLCBhcyBpdCdzIG1vcmUgbGlrZSBhbiBhdXRvZmlsbC5cbiAgICogWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGl0IFtmb2xsb3dpbmcgdGhlIHNwZWNpZmljYXRpb25dKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2F1dG9maWxsKS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCBkdXJpbmcgdGhlIGZpcnN0IG1vdW50LlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBpbnB1dCBpcyBibHVycmVkLlxuICAgKlxuICAgKiBOb3RpY2UgdGhhdCB0aGUgZmlyc3QgYXJndW1lbnQgKGV2ZW50KSBtaWdodCBiZSB1bmRlZmluZWQuXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlVcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICByZW5kZXJTdWZmaXg6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWluOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlJbnB1dEJhc2UnXG59KShJbnB1dEJhc2UpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0lucHV0QmFzZSc7IiwiLy8gU3VwcG9ydHMgZGV0ZXJtaW5hdGlvbiBvZiBpc0NvbnRyb2xsZWQoKS5cbi8vIENvbnRyb2xsZWQgaW5wdXQgYWNjZXB0cyBpdHMgY3VycmVudCB2YWx1ZSBhcyBhIHByb3AuXG4vL1xuLy8gQHNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2Zvcm1zLmh0bWwjY29udHJvbGxlZC1jb21wb25lbnRzXG4vLyBAcGFyYW0gdmFsdWVcbi8vIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHN0cmluZyAoaW5jbHVkaW5nICcnKSBvciBudW1iZXIgKGluY2x1ZGluZyB6ZXJvKVxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbn0gLy8gRGV0ZXJtaW5lIGlmIGZpZWxkIGlzIGVtcHR5IG9yIGZpbGxlZC5cbi8vIFJlc3BvbnNlIGRldGVybWluZXMgaWYgbGFiZWwgaXMgcHJlc2VudGVkIGFib3ZlIGZpZWxkIG9yIGFzIHBsYWNlaG9sZGVyLlxuLy9cbi8vIEBwYXJhbSBvYmpcbi8vIEBwYXJhbSBTU1Jcbi8vIEByZXR1cm5zIHtib29sZWFufSBGYWxzZSB3aGVuIG5vdCBwcmVzZW50IG9yIGVtcHR5IHN0cmluZy5cbi8vICAgICAgICAgICAgICAgICAgICBUcnVlIHdoZW4gYW55IG51bWJlciBvciBzdHJpbmcgd2l0aCBsZW5ndGguXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpbGxlZChvYmopIHtcbiAgdmFyIFNTUiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHJldHVybiBvYmogJiYgKGhhc1ZhbHVlKG9iai52YWx1ZSkgJiYgb2JqLnZhbHVlICE9PSAnJyB8fCBTU1IgJiYgaGFzVmFsdWUob2JqLmRlZmF1bHRWYWx1ZSkgJiYgb2JqLmRlZmF1bHRWYWx1ZSAhPT0gJycpO1xufSAvLyBEZXRlcm1pbmUgaWYgYW4gSW5wdXQgaXMgYWRvcm5lZCBvbiBzdGFydC5cbi8vIEl0J3MgY29ycmVzcG9uZGluZyB0byB0aGUgbGVmdCB3aXRoIExUUi5cbi8vXG4vLyBAcGFyYW0gb2JqXG4vLyBAcmV0dXJucyB7Ym9vbGVhbn0gRmFsc2Ugd2hlbiBubyBhZG9ybm1lbnRzLlxuLy8gICAgICAgICAgICAgICAgICAgIFRydWUgd2hlbiBhZG9ybmVkIGF0IHRoZSBzdGFydC5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWRvcm5lZFN0YXJ0KG9iaikge1xuICByZXR1cm4gb2JqLnN0YXJ0QWRvcm5tZW50O1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGxlZnQnXG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvY3VzZWQ9e3RydWV9YC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGByZXF1aXJlZD17dHJ1ZX1gLiAqL1xuICAgIHJlcXVpcmVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSBhc3RlcmlzayBlbGVtZW50LiAqL1xuICAgIGFzdGVyaXNrOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYEZvcm1Db250cm9sYC4gKi9cbiAgICBmb3JtQ29udHJvbDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgLy8gc2xpZ2h0IGFsdGVyYXRpb24gdG8gc3BlYyBzcGFjaW5nIHRvIG1hdGNoIHZpc3VhbCBzcGVjIHJlc3VsdFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDI0cHgpIHNjYWxlKDEpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge1xuICAgICAgLy8gQ29tcGVuc2F0aW9uIGZvciB0aGUgYElucHV0LmlucHV0RGVuc2VgIHN0eWxlLlxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDIxcHgpIHNjYWxlKDEpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBzaHJpbms9e3RydWV9YC4gKi9cbiAgICBzaHJpbms6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAxLjVweCkgc2NhbGUoMC43NSknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGxlZnQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYGRpc2FibGVBbmltYXRpb249e2ZhbHNlfWAuICovXG4gICAgYW5pbWF0ZWQ6IHtcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2NvbG9yJywgJ3RyYW5zZm9ybSddLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgLiAqL1xuICAgIGZpbGxlZDoge1xuICAgICAgLy8gQ2hyb21lJ3MgYXV0b2ZpbGwgZmVhdHVyZSBnaXZlcyB0aGUgaW5wdXQgZmllbGQgYSB5ZWxsb3cgYmFja2dyb3VuZC5cbiAgICAgIC8vIFNpbmNlIHRoZSBpbnB1dCBmaWVsZCBpcyBiZWhpbmQgdGhlIGxhYmVsIGluIHRoZSBIVE1MIHRyZWUsXG4gICAgICAvLyB0aGUgaW5wdXQgZmllbGQgaXMgZHJhd24gbGFzdCBhbmQgaGlkZXMgdGhlIGxhYmVsIHdpdGggYW4gb3BhcXVlIGJhY2tncm91bmQgY29sb3IuXG4gICAgICAvLyB6SW5kZXg6IDEgd2lsbCByYWlzZSB0aGUgbGFiZWwgYWJvdmUgb3BhcXVlIGJhY2tncm91bmQtY29sb3JzIG9mIGlucHV0LlxuICAgICAgekluZGV4OiAxLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDIwcHgpIHNjYWxlKDEpJyxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTJweCwgMTdweCkgc2NhbGUoMSknXG4gICAgICB9LFxuICAgICAgJyYkc2hyaW5rJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTJweCwgMTBweCkgc2NhbGUoMC43NSknLFxuICAgICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTJweCwgN3B4KSBzY2FsZSgwLjc1KSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIC8vIHNlZSBjb21tZW50IGFib3ZlIG9uIGZpbGxlZC56SW5kZXhcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxNHB4LCAyMHB4KSBzY2FsZSgxKScsXG4gICAgICAnJiRtYXJnaW5EZW5zZSc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDE0cHgsIDEycHgpIHNjYWxlKDEpJ1xuICAgICAgfSxcbiAgICAgICcmJHNocmluayc6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDE0cHgsIC02cHgpIHNjYWxlKDAuNzUpJ1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgSW5wdXRMYWJlbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0TGFiZWwocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkZGlzYWJsZUFuaW1hdGkgPSBwcm9wcy5kaXNhYmxlQW5pbWF0aW9uLFxuICAgICAgZGlzYWJsZUFuaW1hdGlvbiA9IF9wcm9wcyRkaXNhYmxlQW5pbWF0aSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUFuaW1hdGksXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICBzaHJpbmtQcm9wID0gcHJvcHMuc2hyaW5rLFxuICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVBbmltYXRpb25cIiwgXCJtYXJnaW5cIiwgXCJzaHJpbmtcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuICB2YXIgc2hyaW5rID0gc2hyaW5rUHJvcDtcblxuICBpZiAodHlwZW9mIHNocmluayA9PT0gJ3VuZGVmaW5lZCcgJiYgbXVpRm9ybUNvbnRyb2wpIHtcbiAgICBzaHJpbmsgPSBtdWlGb3JtQ29udHJvbC5maWxsZWQgfHwgbXVpRm9ybUNvbnRyb2wuZm9jdXNlZCB8fCBtdWlGb3JtQ29udHJvbC5hZG9ybmVkU3RhcnQ7XG4gIH1cblxuICB2YXIgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHM6IHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sOiBtdWlGb3JtQ29udHJvbCxcbiAgICBzdGF0ZXM6IFsnbWFyZ2luJywgJ3ZhcmlhbnQnXVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1MYWJlbCwgX2V4dGVuZHMoe1xuICAgIFwiZGF0YS1zaHJpbmtcIjogc2hyaW5rLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgbXVpRm9ybUNvbnRyb2wgJiYgY2xhc3Nlcy5mb3JtQ29udHJvbCwgIWRpc2FibGVBbmltYXRpb24gJiYgY2xhc3Nlcy5hbmltYXRlZCwgc2hyaW5rICYmIGNsYXNzZXMuc2hyaW5rLCBmY3MubWFyZ2luID09PSAnZGVuc2UnICYmIGNsYXNzZXMubWFyZ2luRGVuc2UsIHtcbiAgICAgICdmaWxsZWQnOiBjbGFzc2VzLmZpbGxlZCxcbiAgICAgICdvdXRsaW5lZCc6IGNsYXNzZXMub3V0bGluZWRcbiAgICB9W2Zjcy52YXJpYW50XSksXG4gICAgY2xhc3Nlczoge1xuICAgICAgZm9jdXNlZDogY2xhc3Nlcy5mb2N1c2VkLFxuICAgICAgZGlzYWJsZWQ6IGNsYXNzZXMuZGlzYWJsZWQsXG4gICAgICBlcnJvcjogY2xhc3Nlcy5lcnJvcixcbiAgICAgIHJlcXVpcmVkOiBjbGFzc2VzLnJlcXVpcmVkLFxuICAgICAgYXN0ZXJpc2s6IGNsYXNzZXMuYXN0ZXJpc2tcbiAgICB9LFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElucHV0TGFiZWwucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnRzIG9mIHRoZSBgSW5wdXRMYWJlbGAuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZUFuaW1hdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYXBwbHkgZGlzYWJsZWQgY2xhc3MuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCBvZiB0aGlzIGxhYmVsIGlzIGZvY3VzZWQuXG4gICAqL1xuICBmb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZSddKSxcblxuICAvKipcbiAgICogaWYgYHRydWVgLCB0aGUgbGFiZWwgd2lsbCBpbmRpY2F0ZSB0aGF0IHRoZSBpbnB1dCBpcyByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgaXMgc2hydW5rLlxuICAgKi9cbiAgc2hyaW5rOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0TGFiZWwnXG59KShJbnB1dExhYmVsKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbnB1dExhYmVsJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4uL1BvcG92ZXInO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gJy4uL01lbnVMaXN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgc2V0UmVmIGZyb20gJy4uL3V0aWxzL3NldFJlZic7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbnZhciBSVExfT1JJR0lOID0ge1xuICB2ZXJ0aWNhbDogJ3RvcCcsXG4gIGhvcml6b250YWw6ICdyaWdodCdcbn07XG52YXIgTFRSX09SSUdJTiA9IHtcbiAgdmVydGljYWw6ICd0b3AnLFxuICBob3Jpem9udGFsOiAnbGVmdCdcbn07XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50LiAqL1xuICBwYXBlcjoge1xuICAgIC8vIHNwZWNaOiBUaGUgbWF4aW11bSBoZWlnaHQgb2YgYSBzaW1wbGUgbWVudSBzaG91bGQgYmUgb25lIG9yIG1vcmUgcm93cyBsZXNzIHRoYW4gdGhlIHZpZXdcbiAgICAvLyBoZWlnaHQuIFRoaXMgZW5zdXJlcyBhIHRhcGFibGUgYXJlYSBvdXRzaWRlIG9mIHRoZSBzaW1wbGUgbWVudSB3aXRoIHdoaWNoIHRvIGRpc21pc3NcbiAgICAvLyB0aGUgbWVudS5cbiAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSA5NnB4KScsXG4gICAgLy8gQWRkIGlPUyBtb21lbnR1bSBzY3JvbGxpbmcuXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYExpc3RgIGNvbXBvbmVudCB2aWEgYE1lbnVMaXN0YC4gKi9cbiAgbGlzdDoge1xuICAgIC8vIFdlIGRpc2FibGUgdGhlIGZvY3VzIHJpbmcgZm9yIG1vdXNlLCB0b3VjaCBhbmQga2V5Ym9hcmQgdXNlcnMuXG4gICAgb3V0bGluZTogMFxuICB9XG59O1xudmFyIE1lbnUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNZW51KHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhdXRvRm9jdXMgPSBfcHJvcHMkYXV0b0ZvY3VzID09PSB2b2lkIDAgPyB0cnVlIDogX3Byb3BzJGF1dG9Gb2N1cyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXNJdGVtLFxuICAgICAgZGlzYWJsZUF1dG9Gb2N1c0l0ZW0gPSBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVBdXRvRm9jLFxuICAgICAgX3Byb3BzJE1lbnVMaXN0UHJvcHMgPSBwcm9wcy5NZW51TGlzdFByb3BzLFxuICAgICAgTWVudUxpc3RQcm9wcyA9IF9wcm9wcyRNZW51TGlzdFByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRNZW51TGlzdFByb3BzLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJFBhcGVyUHJvcHMgPSBwcm9wcy5QYXBlclByb3BzLFxuICAgICAgUGFwZXJQcm9wcyA9IF9wcm9wcyRQYXBlclByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRQYXBlclByb3BzLFxuICAgICAgUG9wb3ZlckNsYXNzZXMgPSBwcm9wcy5Qb3BvdmVyQ2xhc3NlcyxcbiAgICAgIF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3Byb3BzJHRyYW5zaXRpb25EdXJhLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc2VsZWN0ZWRNZW51JyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF1dG9Gb2N1c1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImRpc2FibGVBdXRvRm9jdXNJdGVtXCIsIFwiTWVudUxpc3RQcm9wc1wiLCBcIm9uQ2xvc2VcIiwgXCJvbkVudGVyaW5nXCIsIFwib3BlblwiLCBcIlBhcGVyUHJvcHNcIiwgXCJQb3BvdmVyQ2xhc3Nlc1wiLCBcInRyYW5zaXRpb25EdXJhdGlvblwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBhdXRvRm9jdXNJdGVtID0gYXV0b0ZvY3VzICYmICFkaXNhYmxlQXV0b0ZvY3VzSXRlbSAmJiBvcGVuO1xuICB2YXIgbWVudUxpc3RBY3Rpb25zUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgY29udGVudEFuY2hvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgZ2V0Q29udGVudEFuY2hvckVsID0gZnVuY3Rpb24gZ2V0Q29udGVudEFuY2hvckVsKCkge1xuICAgIHJldHVybiBjb250ZW50QW5jaG9yUmVmLmN1cnJlbnQ7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gaGFuZGxlRW50ZXJpbmcoZWxlbWVudCwgaXNBcHBlYXJpbmcpIHtcbiAgICBpZiAobWVudUxpc3RBY3Rpb25zUmVmLmN1cnJlbnQpIHtcbiAgICAgIG1lbnVMaXN0QWN0aW9uc1JlZi5jdXJyZW50LmFkanVzdFN0eWxlRm9yU2Nyb2xsYmFyKGVsZW1lbnQsIHRoZW1lKTtcbiAgICB9XG5cbiAgICBpZiAob25FbnRlcmluZykge1xuICAgICAgb25FbnRlcmluZyhlbGVtZW50LCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVMaXN0S2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUxpc3RLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQsICd0YWJLZXlEb3duJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogdGhlIGluZGV4IG9mIHRoZSBpdGVtIHNob3VsZCByZWNlaXZlIGZvY3VzXG4gICAqIGluIGEgYHZhcmlhbnQ9XCJzZWxlY3RlZE1lbnVcImAgaXQncyB0aGUgZmlyc3QgYHNlbGVjdGVkYCBpdGVtXG4gICAqIG90aGVyd2lzZSBpdCdzIHRoZSB2ZXJ5IGZpcnN0IGl0ZW0uXG4gICAqL1xuXG5cbiAgdmFyIGFjdGl2ZUl0ZW1JbmRleCA9IC0xOyAvLyBzaW5jZSB3ZSBpbmplY3QgZm9jdXMgcmVsYXRlZCBwcm9wcyBpbnRvIGNoaWxkcmVuIHdlIGhhdmUgdG8gZG8gYSBsb29rYWhlYWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlcmUgaXMgYSBgc2VsZWN0ZWRgIGl0ZW0uIFdlJ3JlIGxvb2tpbmcgZm9yIHRoZSBsYXN0IGBzZWxlY3RlZGBcbiAgLy8gaXRlbSBhbmQgdXNlIHRoZSBmaXJzdCB2YWxpZCBpdGVtIGFzIGEgZmFsbGJhY2tcblxuICBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgTWVudSBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh2YXJpYW50ICE9PSBcIm1lbnVcIiAmJiBjaGlsZC5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICB2YXIgaXRlbXMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZUl0ZW1JbmRleCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaW5zdGFuY2UpIHtcbiAgICAgICAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgICAgICAgIGNvbnRlbnRBbmNob3JSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgICAgICAgICBzZXRSZWYoY2hpbGQucmVmLCBpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3BvdmVyLCBfZXh0ZW5kcyh7XG4gICAgZ2V0Q29udGVudEFuY2hvckVsOiBnZXRDb250ZW50QW5jaG9yRWwsXG4gICAgY2xhc3NlczogUG9wb3ZlckNsYXNzZXMsXG4gICAgb25DbG9zZTogb25DbG9zZSxcbiAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICBhbmNob3JPcmlnaW46IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBSVExfT1JJR0lOIDogTFRSX09SSUdJTixcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBSVExfT1JJR0lOIDogTFRSX09SSUdJTixcbiAgICBQYXBlclByb3BzOiBfZXh0ZW5kcyh7fSwgUGFwZXJQcm9wcywge1xuICAgICAgY2xhc3NlczogX2V4dGVuZHMoe30sIFBhcGVyUHJvcHMuY2xhc3Nlcywge1xuICAgICAgICByb290OiBjbGFzc2VzLnBhcGVyXG4gICAgICB9KVxuICAgIH0pLFxuICAgIG9wZW46IG9wZW4sXG4gICAgcmVmOiByZWYsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uRHVyYXRpb25cbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51TGlzdCwgX2V4dGVuZHMoe1xuICAgIG9uS2V5RG93bjogaGFuZGxlTGlzdEtleURvd24sXG4gICAgYWN0aW9uczogbWVudUxpc3RBY3Rpb25zUmVmLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzICYmIChhY3RpdmVJdGVtSW5kZXggPT09IC0xIHx8IGRpc2FibGVBdXRvRm9jdXNJdGVtKSxcbiAgICBhdXRvRm9jdXNJdGVtOiBhdXRvRm9jdXNJdGVtLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnRcbiAgfSwgTWVudUxpc3RQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmxpc3QsIE1lbnVMaXN0UHJvcHMuY2xhc3NOYW1lKVxuICB9KSwgaXRlbXMpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTWVudS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgaXQuXG4gICAqIEl0J3MgdXNlZCB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBtZW51LlxuICAgKi9cbiAgYW5jaG9yRWw6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgIChEZWZhdWx0KSB3aWxsIGZvY3VzIHRoZSBgW3JvbGU9XCJtZW51XCJdYCBpZiBubyBmb2N1c2FibGUgY2hpbGQgaXMgZm91bmQuIERpc2FibGVkXG4gICAqIGNoaWxkcmVuIGFyZSBub3QgZm9jdXNhYmxlLiBJZiB5b3Ugc2V0IHRoaXMgcHJvcCB0byBgZmFsc2VgIGZvY3VzIHdpbGwgYmUgcGxhY2VkXG4gICAqIG9uIHRoZSBwYXJlbnQgbW9kYWwgY29udGFpbmVyLiBUaGlzIGhhcyBzZXZlcmUgYWNjZXNzaWJpbGl0eSBpbXBsaWNhdGlvbnNcbiAgICogYW5kIHNob3VsZCBvbmx5IGJlIGNvbnNpZGVyZWQgaWYgeW91IG1hbmFnZSBmb2N1cyBvdGhlcndpc2UuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNZW51IGNvbnRlbnRzLCBub3JtYWxseSBgTWVudUl0ZW1gcy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBXaGVuIG9wZW5pbmcgdGhlIG1lbnUgd2lsbCBub3QgZm9jdXMgdGhlIGFjdGl2ZSBpdGVtIGJ1dCB0aGUgYFtyb2xlPVwibWVudVwiXWBcbiAgICogdW5sZXNzIGBhdXRvRm9jdXNgIGlzIGFsc28gc2V0IHRvIGBmYWxzZWAuIE5vdCB1c2luZyB0aGUgZGVmYXVsdCBtZWFucyBub3RcbiAgICogZm9sbG93aW5nIFdBSS1BUklBIGF1dGhvcmluZyBwcmFjdGljZXMuIFBsZWFzZSBiZSBjb25zaWRlcmF0ZSBhYm91dCBwb3NzaWJsZVxuICAgKiBhY2Nlc3NpYmlsaXR5IGltcGxpY2F0aW9ucy5cbiAgICovXG4gIGRpc2FibGVBdXRvRm9jdXNJdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BNZW51TGlzdGBdKC9hcGkvbWVudS1saXN0LykgZWxlbWVudC5cbiAgICovXG4gIE1lbnVMaXN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6IGBcImVzY2FwZUtleURvd25cImAsIGBcImJhY2tkcm9wQ2xpY2tcImAsIGBcInRhYktleURvd25cImAuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBNZW51IGVudGVycy5cbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNZW51IGhhcyBlbnRlcmVkLlxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIE1lbnUgZXhpdHMuXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNZW51IGhhcyBleGl0ZWQuXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaXMgZXhpdGluZy5cbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1lbnUgaXMgdmlzaWJsZS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIFBhcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIGBjbGFzc2VzYCBwcm9wIGFwcGxpZWQgdG8gdGhlIFtgUG9wb3ZlcmBdKC9hcGkvcG9wb3Zlci8pIGVsZW1lbnQuXG4gICAqL1xuICBQb3BvdmVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgdHJhbnNpdGlvbiBpbiBgbXNgLCBvciAnYXV0bydcbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIFVzZSBgbWVudWAgdG8gcHJldmVudCBzZWxlY3RlZCBpdGVtcyBmcm9tIGltcGFjdGluZyB0aGUgaW5pdGlhbCBmb2N1c1xuICAgKiBhbmQgdGhlIHZlcnRpY2FsIGFsaWdubWVudCByZWxhdGl2ZSB0byB0aGUgYW5jaG9yIGVsZW1lbnQuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydtZW51JywgJ3NlbGVjdGVkTWVudSddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlNZW51J1xufSkoTWVudSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9MaXN0JztcbmltcG9ydCBnZXRTY3JvbGxiYXJTaXplIGZyb20gJy4uL3V0aWxzL2dldFNjcm9sbGJhclNpemUnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5cbmZ1bmN0aW9uIG5leHRJdGVtKGxpc3QsIGl0ZW0sIGRpc2FibGVMaXN0V3JhcCkge1xuICBpZiAobGlzdCA9PT0gaXRlbSkge1xuICAgIHJldHVybiBsaXN0LmZpcnN0Q2hpbGQ7XG4gIH1cblxuICBpZiAoaXRlbSAmJiBpdGVtLm5leHRFbGVtZW50U2libGluZykge1xuICAgIHJldHVybiBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBkaXNhYmxlTGlzdFdyYXAgPyBudWxsIDogbGlzdC5maXJzdENoaWxkO1xufVxuXG5mdW5jdGlvbiBwcmV2aW91c0l0ZW0obGlzdCwgaXRlbSwgZGlzYWJsZUxpc3RXcmFwKSB7XG4gIGlmIChsaXN0ID09PSBpdGVtKSB7XG4gICAgcmV0dXJuIGRpc2FibGVMaXN0V3JhcCA/IGxpc3QuZmlyc3RDaGlsZCA6IGxpc3QubGFzdENoaWxkO1xuICB9XG5cbiAgaWYgKGl0ZW0gJiYgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgcmV0dXJuIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBkaXNhYmxlTGlzdFdyYXAgPyBudWxsIDogbGlzdC5sYXN0Q2hpbGQ7XG59XG5cbmZ1bmN0aW9uIHRleHRDcml0ZXJpYU1hdGNoZXMobmV4dEZvY3VzLCB0ZXh0Q3JpdGVyaWEpIHtcbiAgaWYgKHRleHRDcml0ZXJpYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdGV4dCA9IG5leHRGb2N1cy5pbm5lclRleHQ7XG5cbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGpzZG9tIGRvZXNuJ3Qgc3VwcG9ydCBpbm5lclRleHRcbiAgICB0ZXh0ID0gbmV4dEZvY3VzLnRleHRDb250ZW50O1xuICB9XG5cbiAgdGV4dCA9IHRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRleHRDcml0ZXJpYS5yZXBlYXRpbmcpIHtcbiAgICByZXR1cm4gdGV4dFswXSA9PT0gdGV4dENyaXRlcmlhLmtleXNbMF07XG4gIH1cblxuICByZXR1cm4gdGV4dC5pbmRleE9mKHRleHRDcml0ZXJpYS5rZXlzLmpvaW4oJycpKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gbW92ZUZvY3VzKGxpc3QsIGN1cnJlbnRGb2N1cywgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCB0cmF2ZXJzYWxGdW5jdGlvbiwgdGV4dENyaXRlcmlhKSB7XG4gIHZhciB3cmFwcGVkT25jZSA9IGZhbHNlO1xuICB2YXIgbmV4dEZvY3VzID0gdHJhdmVyc2FsRnVuY3Rpb24obGlzdCwgY3VycmVudEZvY3VzLCBjdXJyZW50Rm9jdXMgPyBkaXNhYmxlTGlzdFdyYXAgOiBmYWxzZSk7XG5cbiAgd2hpbGUgKG5leHRGb2N1cykge1xuICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcC5cbiAgICBpZiAobmV4dEZvY3VzID09PSBsaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGlmICh3cmFwcGVkT25jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZWRPbmNlID0gdHJ1ZTtcbiAgICB9IC8vIFNhbWUgbG9naWMgYXMgdXNlQXV0b2NvbXBsZXRlLmpzXG5cblxuICAgIHZhciBuZXh0Rm9jdXNEaXNhYmxlZCA9IGRpc2FibGVkSXRlbXNGb2N1c2FibGUgPyBmYWxzZSA6IG5leHRGb2N1cy5kaXNhYmxlZCB8fCBuZXh0Rm9jdXMuZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJztcblxuICAgIGlmICghbmV4dEZvY3VzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCAhdGV4dENyaXRlcmlhTWF0Y2hlcyhuZXh0Rm9jdXMsIHRleHRDcml0ZXJpYSkgfHwgbmV4dEZvY3VzRGlzYWJsZWQpIHtcbiAgICAgIC8vIE1vdmUgdG8gdGhlIG5leHQgZWxlbWVudC5cbiAgICAgIG5leHRGb2N1cyA9IHRyYXZlcnNhbEZ1bmN0aW9uKGxpc3QsIG5leHRGb2N1cywgZGlzYWJsZUxpc3RXcmFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEZvY3VzLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBBIHBlcm1hbmVudGx5IGRpc3BsYXllZCBtZW51IGZvbGxvd2luZyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyNtZW51YnV0dG9uLlxuICogSXQncyBleHBvc2VkIHRvIGhlbHAgY3VzdG9taXphdGlvbiBvZiB0aGUgW2BNZW51YF0oL2FwaS9tZW51LykgY29tcG9uZW50LiBJZiB5b3VcbiAqIHVzZSBpdCBzZXBhcmF0ZWx5IHlvdSBuZWVkIHRvIG1vdmUgZm9jdXMgaW50byB0aGUgY29tcG9uZW50IG1hbnVhbGx5LiBPbmNlXG4gKiB0aGUgZm9jdXMgaXMgcGxhY2VkIGluc2lkZSB0aGUgY29tcG9uZW50IGl0IGlzIGZ1bGx5IGtleWJvYXJkIGFjY2Vzc2libGUuXG4gKi9cblxudmFyIE1lbnVMaXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudUxpc3QocHJvcHMsIHJlZikge1xuICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICBfcHJvcHMkYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b0ZvY3VzID0gX3Byb3BzJGF1dG9Gb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b0ZvY3VzLFxuICAgICAgX3Byb3BzJGF1dG9Gb2N1c0l0ZW0gPSBwcm9wcy5hdXRvRm9jdXNJdGVtLFxuICAgICAgYXV0b0ZvY3VzSXRlbSA9IF9wcm9wcyRhdXRvRm9jdXNJdGVtID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvRm9jdXNJdGVtLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZEl0ZW1zRiA9IHByb3BzLmRpc2FibGVkSXRlbXNGb2N1c2FibGUsXG4gICAgICBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlID0gX3Byb3BzJGRpc2FibGVkSXRlbXNGID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZEl0ZW1zRixcbiAgICAgIF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9IHByb3BzLmRpc2FibGVMaXN0V3JhcCxcbiAgICAgIGRpc2FibGVMaXN0V3JhcCA9IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUxpc3RXcmEsXG4gICAgICBvbktleURvd24gPSBwcm9wcy5vbktleURvd24sXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzZWxlY3RlZE1lbnUnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWN0aW9uc1wiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9Gb2N1c0l0ZW1cIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkSXRlbXNGb2N1c2FibGVcIiwgXCJkaXNhYmxlTGlzdFdyYXBcIiwgXCJvbktleURvd25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbGlzdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHRleHRDcml0ZXJpYVJlZiA9IFJlYWN0LnVzZVJlZih7XG4gICAga2V5czogW10sXG4gICAgcmVwZWF0aW5nOiB0cnVlLFxuICAgIHByZXZpb3VzS2V5TWF0Y2hlZDogdHJ1ZSxcbiAgICBsYXN0VGltZTogbnVsbFxuICB9KTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgIGxpc3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2F1dG9Gb2N1c10pO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKGFjdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRqdXN0U3R5bGVGb3JTY3JvbGxiYXI6IGZ1bmN0aW9uIGFkanVzdFN0eWxlRm9yU2Nyb2xsYmFyKGNvbnRhaW5lckVsZW1lbnQsIHRoZW1lKSB7XG4gICAgICAgIC8vIExldCdzIGlnbm9yZSB0aGF0IHBpZWNlIG9mIGxvZ2ljIGlmIHVzZXJzIGFyZSBhbHJlYWR5IG92ZXJyaWRpbmcgdGhlIHdpZHRoXG4gICAgICAgIC8vIG9mIHRoZSBtZW51LlxuICAgICAgICB2YXIgbm9FeHBsaWNpdFdpZHRoID0gIWxpc3RSZWYuY3VycmVudC5zdHlsZS53aWR0aDtcblxuICAgICAgICBpZiAoY29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQgPCBsaXN0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICYmIG5vRXhwbGljaXRXaWR0aCkge1xuICAgICAgICAgIHZhciBzY3JvbGxiYXJTaXplID0gXCJcIi5jb25jYXQoZ2V0U2Nyb2xsYmFyU2l6ZSh0cnVlKSwgXCJweFwiKTtcbiAgICAgICAgICBsaXN0UmVmLmN1cnJlbnQuc3R5bGVbdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0J10gPSBzY3JvbGxiYXJTaXplO1xuICAgICAgICAgIGxpc3RSZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IFwiY2FsYygxMDAlICsgXCIuY29uY2F0KHNjcm9sbGJhclNpemUsIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0UmVmLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIHZhciBsaXN0ID0gbGlzdFJlZi5jdXJyZW50O1xuICAgIHZhciBrZXkgPSBldmVudC5rZXk7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9IC0gd2lsbCBhbHdheXMgYmUgZGVmaW5lZCBzaW5jZSB3ZSBhcmUgaW4gYSBrZXlkb3duIGhhbmRsZXJcbiAgICAgKiBhdHRhY2hlZCB0byBhbiBlbGVtZW50LiBBIGtleWRvd24gZXZlbnQgaXMgZWl0aGVyIGRpc3BhdGNoZWQgdG8gdGhlIGFjdGl2ZUVsZW1lbnRcbiAgICAgKiBvciBkb2N1bWVudC5ib2R5IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC4gT25seSB0aGUgZmlyc3QgY2FzZSB3aWxsXG4gICAgICogdHJpZ2dlciB0aGlzIHNwZWNpZmljIGhhbmRsZXIuXG4gICAgICovXG5cbiAgICB2YXIgY3VycmVudEZvY3VzID0gb3duZXJEb2N1bWVudChsaXN0KS5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIC8vIFByZXZlbnQgc2Nyb2xsIG9mIHRoZSBwYWdlXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIGN1cnJlbnRGb2N1cywgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBuZXh0SXRlbSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVGb2N1cyhsaXN0LCBjdXJyZW50Rm9jdXMsIGRpc2FibGVMaXN0V3JhcCwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgcHJldmlvdXNJdGVtKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0hvbWUnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIG51bGwsIGRpc2FibGVMaXN0V3JhcCwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgbmV4dEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW5kJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVGb2N1cyhsaXN0LCBudWxsLCBkaXNhYmxlTGlzdFdyYXAsIGRpc2FibGVkSXRlbXNGb2N1c2FibGUsIHByZXZpb3VzSXRlbSk7XG4gICAgfSBlbHNlIGlmIChrZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY3JpdGVyaWEgPSB0ZXh0Q3JpdGVyaWFSZWYuY3VycmVudDtcbiAgICAgIHZhciBsb3dlcktleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIGN1cnJUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAgIGlmIChjcml0ZXJpYS5rZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gUmVzZXRcbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gY3JpdGVyaWEubGFzdFRpbWUgPiA1MDApIHtcbiAgICAgICAgICBjcml0ZXJpYS5rZXlzID0gW107XG4gICAgICAgICAgY3JpdGVyaWEucmVwZWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjcml0ZXJpYS5wcmV2aW91c0tleU1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLnJlcGVhdGluZyAmJiBsb3dlcktleSAhPT0gY3JpdGVyaWEua2V5c1swXSkge1xuICAgICAgICAgIGNyaXRlcmlhLnJlcGVhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNyaXRlcmlhLmxhc3RUaW1lID0gY3VyclRpbWU7XG4gICAgICBjcml0ZXJpYS5rZXlzLnB1c2gobG93ZXJLZXkpO1xuICAgICAgdmFyIGtlZXBGb2N1c09uQ3VycmVudCA9IGN1cnJlbnRGb2N1cyAmJiAhY3JpdGVyaWEucmVwZWF0aW5nICYmIHRleHRDcml0ZXJpYU1hdGNoZXMoY3VycmVudEZvY3VzLCBjcml0ZXJpYSk7XG5cbiAgICAgIGlmIChjcml0ZXJpYS5wcmV2aW91c0tleU1hdGNoZWQgJiYgKGtlZXBGb2N1c09uQ3VycmVudCB8fCBtb3ZlRm9jdXMobGlzdCwgY3VycmVudEZvY3VzLCBmYWxzZSwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgbmV4dEl0ZW0sIGNyaXRlcmlhKSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyaXRlcmlhLnByZXZpb3VzS2V5TWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbktleURvd24pIHtcbiAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVPd25SZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgIGxpc3RSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihoYW5kbGVPd25SZWYsIHJlZik7XG4gIC8qKlxuICAgKiB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gc2hvdWxkIHJlY2VpdmUgZm9jdXNcbiAgICogaW4gYSBgdmFyaWFudD1cInNlbGVjdGVkTWVudVwiYCBpdCdzIHRoZSBmaXJzdCBgc2VsZWN0ZWRgIGl0ZW1cbiAgICogb3RoZXJ3aXNlIGl0J3MgdGhlIHZlcnkgZmlyc3QgaXRlbS5cbiAgICovXG5cbiAgdmFyIGFjdGl2ZUl0ZW1JbmRleCA9IC0xOyAvLyBzaW5jZSB3ZSBpbmplY3QgZm9jdXMgcmVsYXRlZCBwcm9wcyBpbnRvIGNoaWxkcmVuIHdlIGhhdmUgdG8gZG8gYSBsb29rYWhlYWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlcmUgaXMgYSBgc2VsZWN0ZWRgIGl0ZW0uIFdlJ3JlIGxvb2tpbmcgZm9yIHRoZSBsYXN0IGBzZWxlY3RlZGBcbiAgLy8gaXRlbSBhbmQgdXNlIHRoZSBmaXJzdCB2YWxpZCBpdGVtIGFzIGEgZmFsbGJhY2tcblxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIE1lbnUgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodmFyaWFudCA9PT0gJ3NlbGVjdGVkTWVudScgJiYgY2hpbGQucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGl0ZW1zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgIHZhciBuZXdDaGlsZFByb3BzID0ge307XG5cbiAgICAgIGlmIChhdXRvRm9jdXNJdGVtKSB7XG4gICAgICAgIG5ld0NoaWxkUHJvcHMuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnByb3BzLnRhYkluZGV4ID09PSB1bmRlZmluZWQgJiYgdmFyaWFudCA9PT0gJ3NlbGVjdGVkTWVudScpIHtcbiAgICAgICAgbmV3Q2hpbGRQcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdDaGlsZFByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdCwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwibWVudVwiLFxuICAgIHJlZjogaGFuZGxlUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICB0YWJJbmRleDogYXV0b0ZvY3VzID8gMCA6IC0xXG4gIH0sIG90aGVyKSwgaXRlbXMpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBNZW51TGlzdC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHdpbGwgZm9jdXMgdGhlIGBbcm9sZT1cIm1lbnVcIl1gIGNvbnRhaW5lciBhbmQgbW92ZSBpbnRvIHRhYiBvcmRlci5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBmb2N1cyB0aGUgZmlyc3QgbWVudWl0ZW0gaWYgYHZhcmlhbnQ9XCJtZW51XCJgIG9yIHNlbGVjdGVkIGl0ZW1cbiAgICogaWYgYHZhcmlhbnQ9XCJzZWxlY3RlZE1lbnVcImAuXG4gICAqL1xuICBhdXRvRm9jdXNJdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWVudUxpc3QgY29udGVudHMsIG5vcm1hbGx5IGBNZW51SXRlbWBzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBhbGxvdyBmb2N1cyBvbiBkaXNhYmxlZCBpdGVtcy5cbiAgICovXG4gIGRpc2FibGVkSXRlbXNGb2N1c2FibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtZW51IGl0ZW1zIHdpbGwgbm90IHdyYXAgZm9jdXMuXG4gICAqL1xuICBkaXNhYmxlTGlzdFdyYXA6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIFVzZSBgbWVudWAgdG8gcHJldmVudCBzZWxlY3RlZCBpdGVtcyBmcm9tIGltcGFjdGluZyB0aGUgaW5pdGlhbCBmb2N1c1xuICAgKiBhbmQgdGhlIHZlcnRpY2FsIGFsaWdubWVudCByZWxhdGl2ZSB0byB0aGUgYW5jaG9yIGVsZW1lbnQuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydtZW51JywgJ3NlbGVjdGVkTWVudSddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0OyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01lbnVMaXN0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE5hdGl2ZVNlbGVjdElucHV0IGZyb20gJy4vTmF0aXZlU2VsZWN0SW5wdXQnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgdXNlRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wvdXNlRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEFycm93RHJvcERvd25JY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9BcnJvd0Ryb3BEb3duJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9JbnB1dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGByb290YCBjbGFzcy4gKi9cbiAgICByb290OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGBzZWxlY3RgIGNsYXNzLiAqL1xuICAgIHNlbGVjdDoge1xuICAgICAgJy1tb3otYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAgIC8vIFJlc2V0XG4gICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgLy8gUmVzZXRcbiAgICAgIC8vIFdoZW4gaW50ZXJhY3RpbmcgcXVpY2tseSwgdGhlIHRleHQgY2FuIGVuZCB1cCBzZWxlY3RlZC5cbiAgICAgIC8vIE5hdGl2ZSBzZWxlY3QgY2FuJ3QgYmUgc2VsZWN0ZWQgZWl0aGVyLlxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAwLFxuICAgICAgLy8gUmVzZXRcbiAgICAgIG1pbldpZHRoOiAxNixcbiAgICAgIC8vIFNvIGl0IGRvZXNuJ3QgY29sbGFwc2UuXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICAvLyBTaG93IHRoYXQgaXQncyBub3QgYW4gdGV4dCBpbnB1dFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/ICdyZ2JhKDAsIDAsIDAsIDAuMDUpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAwIC8vIFJlc2V0IENocm9tZSBzdHlsZVxuXG4gICAgICB9LFxuICAgICAgLy8gUmVtb3ZlIElFIDExIGFycm93XG4gICAgICAnJjo6LW1zLWV4cGFuZCc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICB9LFxuICAgICAgJyZbbXVsdGlwbGVdJzoge1xuICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgICAgfSxcbiAgICAgICcmOm5vdChbbXVsdGlwbGVdKSBvcHRpb24sICY6bm90KFttdWx0aXBsZV0pIG9wdGdyb3VwJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlclxuICAgICAgfSxcbiAgICAgICcmJic6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAyNFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBpZiBgdmFyaWFudD1cImZpbGxlZFwiYC4gKi9cbiAgICBmaWxsZWQ6IHtcbiAgICAgICcmJic6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAzMlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgICcmJic6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAzMlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBgc2VsZWN0TWVudWAgY2xhc3MuICovXG4gICAgc2VsZWN0TWVudToge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAvLyBSZXNldHMgZm9yIG11bHRwaWxlIHNlbGVjdCB3aXRoIGNoaXBzXG4gICAgICBtaW5IZWlnaHQ6ICcxLjE4NzZlbScsXG4gICAgICAvLyBSZXF1aXJlZCBmb3Igc2VsZWN0XFx0ZXh0LWZpZWxkIGhlaWdodCBjb25zaXN0ZW5jeVxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgYGRpc2FibGVkYCBjbGFzcy4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBjb21wb25lbnQuICovXG4gICAgaWNvbjoge1xuICAgICAgLy8gV2UgdXNlIGEgcG9zaXRpb24gYWJzb2x1dGUgb3ZlciBhIGZsZXhib3ggaW4gb3JkZXIgdG8gZm9yd2FyZCB0aGUgcG9pbnRlciBldmVudHNcbiAgICAgIC8vIHRvIHRoZSBpbnB1dCBhbmQgdG8gc3VwcG9ydCB3cmFwcGluZyB0YWdzLi5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6ICdjYWxjKDUwJSAtIDEycHgpJyxcbiAgICAgIC8vIENlbnRlciB2ZXJ0aWNhbGx5XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAvLyBEb24ndCBibG9jayBwb2ludGVyIGV2ZW50cyBvbiB0aGUgc2VsZWN0IHVuZGVyIHRoZSBpY29uLlxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmFjdGl2ZSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uZGlzYWJsZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gY29tcG9uZW50IGlmIHRoZSBwb3B1cCBpcyBvcGVuLiAqL1xuICAgIGljb25PcGVuOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gY29tcG9uZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgLiAqL1xuICAgIGljb25GaWxsZWQ6IHtcbiAgICAgIHJpZ2h0OiA3XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIGNvbXBvbmVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIGljb25PdXRsaW5lZDoge1xuICAgICAgcmlnaHQ6IDdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHVuZGVybHlpbmcgbmF0aXZlIGlucHV0IGNvbXBvbmVudC4gKi9cbiAgICBuYXRpdmVJbnB1dDoge1xuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9XG4gIH07XG59O1xudmFyIGRlZmF1bHRJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBudWxsKTtcbi8qKlxuICogQW4gYWx0ZXJuYXRpdmUgdG8gYDxTZWxlY3QgbmF0aXZlIC8+YCB3aXRoIGEgbXVjaCBzbWFsbGVyIGJ1bmRsZSBzaXplIGZvb3RwcmludC5cbiAqL1xuXG52YXIgTmF0aXZlU2VsZWN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTmF0aXZlU2VsZWN0KHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIF9wcm9wcyRJY29uQ29tcG9uZW50ID0gcHJvcHMuSWNvbkNvbXBvbmVudCxcbiAgICAgIEljb25Db21wb25lbnQgPSBfcHJvcHMkSWNvbkNvbXBvbmVudCA9PT0gdm9pZCAwID8gQXJyb3dEcm9wRG93bkljb24gOiBfcHJvcHMkSWNvbkNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRpbnB1dCA9IHByb3BzLmlucHV0LFxuICAgICAgaW5wdXQgPSBfcHJvcHMkaW5wdXQgPT09IHZvaWQgMCA/IGRlZmF1bHRJbnB1dCA6IF9wcm9wcyRpbnB1dCxcbiAgICAgIGlucHV0UHJvcHMgPSBwcm9wcy5pbnB1dFByb3BzLFxuICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiSWNvbkNvbXBvbmVudFwiLCBcImlucHV0XCIsIFwiaW5wdXRQcm9wc1wiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBtdWlGb3JtQ29udHJvbCA9IHVzZUZvcm1Db250cm9sKCk7XG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWyd2YXJpYW50J11cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGlucHV0LCBfZXh0ZW5kcyh7XG4gICAgLy8gTW9zdCBvZiB0aGUgbG9naWMgaXMgaW1wbGVtZW50ZWQgaW4gYE5hdGl2ZVNlbGVjdElucHV0YC5cbiAgICAvLyBUaGUgYFNlbGVjdGAgY29tcG9uZW50IGlzIGEgc2ltcGxlIEFQSSB3cmFwcGVyIHRvIGV4cG9zZSBzb21ldGhpbmcgYmV0dGVyIHRvIHBsYXkgd2l0aC5cbiAgICBpbnB1dENvbXBvbmVudDogTmF0aXZlU2VsZWN0SW5wdXQsXG4gICAgaW5wdXRQcm9wczogX2V4dGVuZHMoe1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY2xhc3NlczogY2xhc3NlcyxcbiAgICAgIEljb25Db21wb25lbnQ6IEljb25Db21wb25lbnQsXG4gICAgICB2YXJpYW50OiBmY3MudmFyaWFudCxcbiAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgIH0sIGlucHV0UHJvcHMsIGlucHV0ID8gaW5wdXQucHJvcHMuaW5wdXRQcm9wcyA6IHt9KSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBOYXRpdmVTZWxlY3QucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIG9wdGlvbiBlbGVtZW50cyB0byBwb3B1bGF0ZSB0aGUgc2VsZWN0IHdpdGguXG4gICAqIENhbiBiZSBzb21lIGA8b3B0aW9uPmAgZWxlbWVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGljb24gdGhhdCBkaXNwbGF5cyB0aGUgYXJyb3cuXG4gICAqL1xuICBJY29uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIEFuIGBJbnB1dGAgZWxlbWVudDsgZG9lcyBub3QgaGF2ZSB0byBiZSBhIG1hdGVyaWFsLXVpIHNwZWNpZmljIGBJbnB1dGAuXG4gICAqL1xuICBpbnB1dDogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZXMgYXBwbGllZCB0byB0aGUgYHNlbGVjdGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLiBUaGUgRE9NIEFQSSBjYXN0cyB0aGlzIHRvIGEgc3RyaW5nLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbk5hdGl2ZVNlbGVjdC5tdWlOYW1lID0gJ1NlbGVjdCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTmF0aXZlU2VsZWN0J1xufSkoTmF0aXZlU2VsZWN0KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBOYXRpdmVTZWxlY3RJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdGl2ZVNlbGVjdElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIEljb25Db21wb25lbnQgPSBwcm9wcy5JY29uQ29tcG9uZW50LFxuICAgICAgaW5wdXRSZWYgPSBwcm9wcy5pbnB1dFJlZixcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFJlZlwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIC8vIFRPRE8gdjU6IG1lcmdlIHJvb3QgYW5kIHNlbGVjdFxuICAgIGNsYXNzZXMuc2VsZWN0LCBjbGFzc2VzW3ZhcmlhbnRdLCBjbGFzc05hbWUsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICByZWY6IGlucHV0UmVmIHx8IHJlZlxuICB9LCBvdGhlcikpLCBwcm9wcy5tdWx0aXBsZSA/IG51bGwgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQ29tcG9uZW50LCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuaWNvbiwgY2xhc3Nlc1tcImljb25cIi5jb25jYXQoY2FwaXRhbGl6ZSh2YXJpYW50KSldLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKVxuICB9KSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE5hdGl2ZVNlbGVjdElucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPG9wdGlvbj5gIGVsZW1lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSBzZWxlY3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFVzZSB0aGF0IHByb3AgdG8gcGFzcyBhIHJlZiB0byB0aGUgbmF0aXZlIHNlbGVjdCBlbGVtZW50LlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBzZWxlY3RgIG9yIGhpZGRlbiBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZS5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydzdGFuZGFyZCcsICdvdXRsaW5lZCcsICdmaWxsZWQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBOYXRpdmVTZWxlY3RJbnB1dDsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiAtNSxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwYWRkaW5nOiAnMCA4cHgnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnaW5oZXJpdCcsXG4gICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBsZWdlbmQgZWxlbWVudCB3aGVuIGBsYWJlbFdpZHRoYCBpcyBwcm92aWRlZC4gKi9cbiAgICBsZWdlbmQ6IHtcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMXB4JyxcbiAgICAgIC8vIHN5bmMgd2l0aCBgaGVpZ2h0YCBpbiBgbGVnZW5kYCBzdHlsZXNcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxNTAsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBsZWdlbmQgZWxlbWVudC4gKi9cbiAgICBsZWdlbmRMYWJlbGxlZDoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBoZWlnaHQ6IDExLFxuICAgICAgLy8gc3luYyB3aXRoIGBsaW5lSGVpZ2h0YCBpbiBgbGVnZW5kYCBzdHlsZXNcbiAgICAgIGZvbnRTaXplOiAnMC43NWVtJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgICAgbWF4V2lkdGg6IDAuMDEsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ21heC13aWR0aCcsIHtcbiAgICAgICAgZHVyYXRpb246IDUwLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICB9KSxcbiAgICAgICcmID4gc3Bhbic6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDUsXG4gICAgICAgIHBhZGRpbmdSaWdodDogNSxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxlZ2VuZCBlbGVtZW50IGlzIG5vdGNoZWQuICovXG4gICAgbGVnZW5kTm90Y2hlZDoge1xuICAgICAgbWF4V2lkdGg6IDEwMDAsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ21heC13aWR0aCcsIHtcbiAgICAgICAgZHVyYXRpb246IDEwMCxcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dCxcbiAgICAgICAgZGVsYXk6IDUwXG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIE5vdGNoZWRPdXRsaW5lID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTm90Y2hlZE91dGxpbmUocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIGxhYmVsV2lkdGhQcm9wID0gcHJvcHMubGFiZWxXaWR0aCxcbiAgICAgIG5vdGNoZWQgPSBwcm9wcy5ub3RjaGVkLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJsYWJlbFwiLCBcImxhYmVsV2lkdGhcIiwgXCJub3RjaGVkXCIsIFwic3R5bGVcIl0pO1xuXG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBhbGlnbiA9IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gIGlmIChsYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIiwgX2V4dGVuZHMoe1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICAgIHJlZjogcmVmLFxuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5sZWdlbmRMYWJlbGxlZCwgbm90Y2hlZCAmJiBjbGFzc2VzLmxlZ2VuZE5vdGNoZWQpXG4gICAgfSwgbGFiZWwgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgbGFiZWwpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgIF9faHRtbDogJyYjODIwMzsnXG4gICAgICB9XG4gICAgfSkpKTtcbiAgfVxuXG4gIHZhciBsYWJlbFdpZHRoID0gbGFiZWxXaWR0aFByb3AgPiAwID8gbGFiZWxXaWR0aFByb3AgKiAwLjc1ICsgOCA6IDAuMDE7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgc3R5bGU6IF9leHRlbmRzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJwYWRkaW5nXCIuY29uY2F0KGNhcGl0YWxpemUoYWxpZ24pKSwgOCksIHN0eWxlKSxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsZWdlbmRcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5sZWdlbmQsXG4gICAgc3R5bGU6IHtcbiAgICAgIC8vIElFIDExOiBmaWVsZHNldCB3aXRoIGxlZ2VuZCBkb2VzIG5vdCByZW5kZXJcbiAgICAgIC8vIGEgYm9yZGVyIHJhZGl1cy4gVGhpcyBtYWludGFpbnMgY29uc2lzdGVuY3lcbiAgICAgIC8vIGJ5IGFsd2F5cyBoYXZpbmcgYSBsZWdlbmQgcmVuZGVyZWRcbiAgICAgIHdpZHRoOiBub3RjaGVkID8gbGFiZWxXaWR0aCA6IDAuMDFcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogJyYjODIwMzsnXG4gICAgfVxuICB9KSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBOb3RjaGVkT3V0bGluZS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGxhYmVsLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGxhYmVsLlxuICAgKi9cbiAgbGFiZWxXaWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBvdXRsaW5lIGlzIG5vdGNoZWQgdG8gYWNjb21tb2RhdGUgdGhlIGxhYmVsLlxuICAgKi9cbiAgbm90Y2hlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnUHJpdmF0ZU5vdGNoZWRPdXRsaW5lJ1xufSkoTm90Y2hlZE91dGxpbmUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IElucHV0QmFzZSBmcm9tICcuLi9JbnB1dEJhc2UnO1xuaW1wb3J0IE5vdGNoZWRPdXRsaW5lIGZyb20gJy4vTm90Y2hlZE91dGxpbmUnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGJvcmRlckNvbG9yID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ3JnYmEoMCwgMCwgMCwgMC4yMyknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMyknO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgICcmOmhvdmVyICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5XG4gICAgICB9LFxuICAgICAgLy8gUmVzZXQgb24gdG91Y2ggZGV2aWNlcywgaXQgZG9lc24ndCBhZGQgc3BlY2lmaWNpdHlcbiAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgJyY6aG92ZXIgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZm9jdXNlZCAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgYm9yZGVyV2lkdGg6IDJcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvciAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb2xvciBpcyBzZWNvbmRhcnkuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgICcmJGZvY3VzZWQgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRTdGFydDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDE0XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVuZEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgYWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAxNFxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIG11bHRpbGluZToge1xuICAgICAgcGFkZGluZzogJzE4LjVweCAxNHB4JyxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiAxMC41LFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAxMC41XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgTm90Y2hlZE91dGxpbmVgIGVsZW1lbnQuICovXG4gICAgbm90Y2hlZE91dGxpbmU6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvclxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7XG4gICAgICBwYWRkaW5nOiAnMTguNXB4IDE0cHgnLFxuICAgICAgJyY6LXdlYmtpdC1hdXRvZmlsbCc6IHtcbiAgICAgICAgV2Via2l0Qm94U2hhZG93OiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJzAgMCAwIDEwMHB4ICMyNjY3OTggaW5zZXQnLFxuICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJyNmZmYnLFxuICAgICAgICBjYXJldENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJyNmZmYnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBpbnB1dE1hcmdpbkRlbnNlOiB7XG4gICAgICBwYWRkaW5nVG9wOiAxMC41LFxuICAgICAgcGFkZGluZ0JvdHRvbTogMTAuNVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBpbnB1dE11bHRpbGluZToge1xuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBzdGFydEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgaW5wdXRBZG9ybmVkU3RhcnQ6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYGVuZEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgaW5wdXRBZG9ybmVkRW5kOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IDBcbiAgICB9XG4gIH07XG59O1xudmFyIE91dGxpbmVkSW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBPdXRsaW5lZElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgX3Byb3BzJGxhYmVsV2lkdGggPSBwcm9wcy5sYWJlbFdpZHRoLFxuICAgICAgbGFiZWxXaWR0aCA9IF9wcm9wcyRsYWJlbFdpZHRoID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJGxhYmVsV2lkdGgsXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgbm90Y2hlZCA9IHByb3BzLm5vdGNoZWQsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJmdWxsV2lkdGhcIiwgXCJpbnB1dENvbXBvbmVudFwiLCBcImxhYmVsXCIsIFwibGFiZWxXaWR0aFwiLCBcIm11bHRpbGluZVwiLCBcIm5vdGNoZWRcIiwgXCJ0eXBlXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRCYXNlLCBfZXh0ZW5kcyh7XG4gICAgcmVuZGVyU3VmZml4OiBmdW5jdGlvbiByZW5kZXJTdWZmaXgoc3RhdGUpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOb3RjaGVkT3V0bGluZSwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMubm90Y2hlZE91dGxpbmUsXG4gICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgbGFiZWxXaWR0aDogbGFiZWxXaWR0aCxcbiAgICAgICAgbm90Y2hlZDogdHlwZW9mIG5vdGNoZWQgIT09ICd1bmRlZmluZWQnID8gbm90Y2hlZCA6IEJvb2xlYW4oc3RhdGUuc3RhcnRBZG9ybm1lbnQgfHwgc3RhdGUuZmlsbGVkIHx8IHN0YXRlLmZvY3VzZWQpXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNsYXNzZXM6IF9leHRlbmRzKHt9LCBjbGFzc2VzLCB7XG4gICAgICByb290OiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlcy51bmRlcmxpbmUpLFxuICAgICAgbm90Y2hlZE91dGxpbmU6IG51bGxcbiAgICB9KSxcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBpbnB1dENvbXBvbmVudDogaW5wdXRDb21wb25lbnQsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBPdXRsaW5lZElucHV0LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBoZWxwcyB1c2VycyB0byBmaWxsIGZvcm1zIGZhc3RlciwgZXNwZWNpYWxseSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhlIG5hbWUgY2FuIGJlIGNvbmZ1c2luZywgYXMgaXQncyBtb3JlIGxpa2UgYW4gYXV0b2ZpbGwuXG4gICAqIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpdCBbZm9sbG93aW5nIHRoZSBzcGVjaWZpY2F0aW9uXShodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNhdXRvZmlsbCkuXG4gICAqL1xuICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQgZHVyaW5nIHRoZSBmaXJzdCBtb3VudC5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBgaW5wdXRgIGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBlbmRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGluZGljYXRlIGFuIGVycm9yLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgaW5wdXRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQYXNzIGEgcmVmIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogcmVmVHlwZSxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIG9mIHRoZSBpbnB1dC4gSXQgaXMgb25seSB1c2VkIGZvciBsYXlvdXQuIFRoZSBhY3R1YWwgbGFiZWxsaW5nXG4gICAqIGlzIGhhbmRsZWQgYnkgYElucHV0TGFiZWxgLiBJZiBzcGVjaWZpZWQgYGxhYmVsV2lkdGhgIGlzIGlnbm9yZWQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbGFiZWwuIElzIGlnbm9yZWQgaWYgYGxhYmVsYCBpcyBwcm92aWRlZC4gUHJlZmVyIGBsYWJlbGBcbiAgICogaWYgdGhlIGlucHV0IGxhYmVsIGFwcGVhcnMgd2l0aCBhIHN0cmlrZSB0aHJvdWdoLlxuICAgKi9cbiAgbGFiZWxXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZScsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG91dGxpbmUgaXMgbm90Y2hlZCB0byBhY2NvbW1vZGF0ZSB0aGUgbGFiZWwuXG4gICAqL1xuICBub3RjaGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBTdGFydCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHN0YXJ0QWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5PdXRsaW5lZElucHV0Lm11aU5hbWUgPSAnSW5wdXQnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aU91dGxpbmVkSW5wdXQnXG59KShPdXRsaW5lZElucHV0KTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9PdXRsaW5lZElucHV0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzLCBlbGVtZW50VHlwZUFjY2VwdGluZ1JlZiwgcmVmVHlwZSwgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IG93bmVyV2luZG93IGZyb20gJy4uL3V0aWxzL293bmVyV2luZG93JztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XG5pbXBvcnQgR3JvdyBmcm9tICcuLi9Hcm93JztcbmltcG9ydCBQYXBlciBmcm9tICcuLi9QYXBlcic7XG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0VG9wKHJlY3QsIHZlcnRpY2FsKSB7XG4gIHZhciBvZmZzZXQgPSAwO1xuXG4gIGlmICh0eXBlb2YgdmVydGljYWwgPT09ICdudW1iZXInKSB7XG4gICAgb2Zmc2V0ID0gdmVydGljYWw7XG4gIH0gZWxzZSBpZiAodmVydGljYWwgPT09ICdjZW50ZXInKSB7XG4gICAgb2Zmc2V0ID0gcmVjdC5oZWlnaHQgLyAyO1xuICB9IGVsc2UgaWYgKHZlcnRpY2FsID09PSAnYm90dG9tJykge1xuICAgIG9mZnNldCA9IHJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRMZWZ0KHJlY3QsIGhvcml6b250YWwpIHtcbiAgdmFyIG9mZnNldCA9IDA7XG5cbiAgaWYgKHR5cGVvZiBob3Jpem9udGFsID09PSAnbnVtYmVyJykge1xuICAgIG9mZnNldCA9IGhvcml6b250YWw7XG4gIH0gZWxzZSBpZiAoaG9yaXpvbnRhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICBvZmZzZXQgPSByZWN0LndpZHRoIC8gMjtcbiAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSAncmlnaHQnKSB7XG4gICAgb2Zmc2V0ID0gcmVjdC53aWR0aDtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zZm9ybU9yaWdpblZhbHVlKHRyYW5zZm9ybU9yaWdpbikge1xuICByZXR1cm4gW3RyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsLCB0cmFuc2Zvcm1PcmlnaW4udmVydGljYWxdLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChuLCBcInB4XCIpIDogbjtcbiAgfSkuam9pbignICcpO1xufSAvLyBTdW0gdGhlIHNjcm9sbFRvcCBiZXR3ZWVuIHR3byBlbGVtZW50cy5cblxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQocGFyZW50LCBjaGlsZCkge1xuICB2YXIgZWxlbWVudCA9IGNoaWxkO1xuICB2YXIgc2Nyb2xsVG9wID0gMDtcblxuICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50ICE9PSBwYXJlbnQpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIHNjcm9sbFRvcCArPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgfVxuXG4gIHJldHVybiBzY3JvbGxUb3A7XG59XG5cbmZ1bmN0aW9uIGdldEFuY2hvckVsKGFuY2hvckVsKSB7XG4gIHJldHVybiB0eXBlb2YgYW5jaG9yRWwgPT09ICdmdW5jdGlvbicgPyBhbmNob3JFbCgpIDogYW5jaG9yRWw7XG59XG5cbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7fSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFBhcGVyYCBjb21wb25lbnQuICovXG4gIHBhcGVyOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAvLyBTbyB3ZSBzZWUgdGhlIHBvcG92ZXIgd2hlbiBpdCdzIGVtcHR5LlxuICAgIC8vIEl0J3MgbW9zdCBsaWtlbHkgb24gaXNzdWUgb24gdXNlcmxhbmQuXG4gICAgbWluV2lkdGg6IDE2LFxuICAgIG1pbkhlaWdodDogMTYsXG4gICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSAzMnB4KScsXG4gICAgbWF4SGVpZ2h0OiAnY2FsYygxMDAlIC0gMzJweCknLFxuICAgIC8vIFdlIGRpc2FibGUgdGhlIGZvY3VzIHJpbmcgZm9yIG1vdXNlLCB0b3VjaCBhbmQga2V5Ym9hcmQgdXNlcnMuXG4gICAgb3V0bGluZTogMFxuICB9XG59O1xudmFyIFBvcG92ZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQb3BvdmVyKHByb3BzLCByZWYpIHtcbiAgdmFyIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIGFuY2hvckVsID0gcHJvcHMuYW5jaG9yRWwsXG4gICAgICBfcHJvcHMkYW5jaG9yT3JpZ2luID0gcHJvcHMuYW5jaG9yT3JpZ2luLFxuICAgICAgYW5jaG9yT3JpZ2luID0gX3Byb3BzJGFuY2hvck9yaWdpbiA9PT0gdm9pZCAwID8ge1xuICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICBob3Jpem9udGFsOiAnbGVmdCdcbiAgfSA6IF9wcm9wcyRhbmNob3JPcmlnaW4sXG4gICAgICBhbmNob3JQb3NpdGlvbiA9IHByb3BzLmFuY2hvclBvc2l0aW9uLFxuICAgICAgX3Byb3BzJGFuY2hvclJlZmVyZW5jID0gcHJvcHMuYW5jaG9yUmVmZXJlbmNlLFxuICAgICAgYW5jaG9yUmVmZXJlbmNlID0gX3Byb3BzJGFuY2hvclJlZmVyZW5jID09PSB2b2lkIDAgPyAnYW5jaG9yRWwnIDogX3Byb3BzJGFuY2hvclJlZmVyZW5jLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29udGFpbmVyUHJvcCA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIF9wcm9wcyRlbGV2YXRpb24gPSBwcm9wcy5lbGV2YXRpb24sXG4gICAgICBlbGV2YXRpb24gPSBfcHJvcHMkZWxldmF0aW9uID09PSB2b2lkIDAgPyA4IDogX3Byb3BzJGVsZXZhdGlvbixcbiAgICAgIGdldENvbnRlbnRBbmNob3JFbCA9IHByb3BzLmdldENvbnRlbnRBbmNob3JFbCxcbiAgICAgIF9wcm9wcyRtYXJnaW5UaHJlc2hvbCA9IHByb3BzLm1hcmdpblRocmVzaG9sZCxcbiAgICAgIG1hcmdpblRocmVzaG9sZCA9IF9wcm9wcyRtYXJnaW5UaHJlc2hvbCA9PT0gdm9pZCAwID8gMTYgOiBfcHJvcHMkbWFyZ2luVGhyZXNob2wsXG4gICAgICBvbkVudGVyID0gcHJvcHMub25FbnRlcixcbiAgICAgIG9uRW50ZXJlZCA9IHByb3BzLm9uRW50ZXJlZCxcbiAgICAgIG9uRW50ZXJpbmcgPSBwcm9wcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0ID0gcHJvcHMub25FeGl0LFxuICAgICAgb25FeGl0ZWQgPSBwcm9wcy5vbkV4aXRlZCxcbiAgICAgIG9uRXhpdGluZyA9IHByb3BzLm9uRXhpdGluZyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJFBhcGVyUHJvcHMgPSBwcm9wcy5QYXBlclByb3BzLFxuICAgICAgUGFwZXJQcm9wcyA9IF9wcm9wcyRQYXBlclByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRQYXBlclByb3BzLFxuICAgICAgX3Byb3BzJHRyYW5zZm9ybU9yaWdpID0gcHJvcHMudHJhbnNmb3JtT3JpZ2luLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luID0gX3Byb3BzJHRyYW5zZm9ybU9yaWdpID09PSB2b2lkIDAgPyB7XG4gICAgdmVydGljYWw6ICd0b3AnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9IDogX3Byb3BzJHRyYW5zZm9ybU9yaWdpLFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Db21wID0gcHJvcHMuVHJhbnNpdGlvbkNvbXBvbmVudCxcbiAgICAgIFRyYW5zaXRpb25Db21wb25lbnQgPSBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPT09IHZvaWQgMCA/IEdyb3cgOiBfcHJvcHMkVHJhbnNpdGlvbkNvbXAsXG4gICAgICBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPSBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb25Qcm9wID0gX3Byb3BzJHRyYW5zaXRpb25EdXJhID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcHJvcHMkdHJhbnNpdGlvbkR1cmEsXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvblByb3AgPSBwcm9wcy5UcmFuc2l0aW9uUHJvcHMsXG4gICAgICBUcmFuc2l0aW9uUHJvcHMgPSBfcHJvcHMkVHJhbnNpdGlvblByb3AgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFRyYW5zaXRpb25Qcm9wLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFjdGlvblwiLCBcImFuY2hvckVsXCIsIFwiYW5jaG9yT3JpZ2luXCIsIFwiYW5jaG9yUG9zaXRpb25cIiwgXCJhbmNob3JSZWZlcmVuY2VcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb250YWluZXJcIiwgXCJlbGV2YXRpb25cIiwgXCJnZXRDb250ZW50QW5jaG9yRWxcIiwgXCJtYXJnaW5UaHJlc2hvbGRcIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwib3BlblwiLCBcIlBhcGVyUHJvcHNcIiwgXCJ0cmFuc2Zvcm1PcmlnaW5cIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCIsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCIsIFwiVHJhbnNpdGlvblByb3BzXCJdKTtcblxuICB2YXIgcGFwZXJSZWYgPSBSZWFjdC51c2VSZWYoKTsgLy8gUmV0dXJucyB0aGUgdG9wL2xlZnQgb2Zmc2V0IG9mIHRoZSBwb3NpdGlvblxuICAvLyB0byBhdHRhY2ggdG8gb24gdGhlIGFuY2hvciBlbGVtZW50IChvciBib2R5IGlmIG5vbmUgaXMgcHJvdmlkZWQpXG5cbiAgdmFyIGdldEFuY2hvck9mZnNldCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjb250ZW50QW5jaG9yT2Zmc2V0KSB7XG4gICAgaWYgKGFuY2hvclJlZmVyZW5jZSA9PT0gJ2FuY2hvclBvc2l0aW9uJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFhbmNob3JQb3NpdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBZb3UgbmVlZCB0byBwcm92aWRlIGEgYGFuY2hvclBvc2l0aW9uYCBwcm9wIHdoZW4gdXNpbmcgJyArICc8UG9wb3ZlciBhbmNob3JSZWZlcmVuY2U9XCJhbmNob3JQb3NpdGlvblwiIC8+LicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbmNob3JQb3NpdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgcmVzb2x2ZWRBbmNob3JFbCA9IGdldEFuY2hvckVsKGFuY2hvckVsKTsgLy8gSWYgYW4gYW5jaG9yIGVsZW1lbnQgd2Fzbid0IHByb3ZpZGVkLCBqdXN0IHVzZSB0aGUgcGFyZW50IGJvZHkgZWxlbWVudCBvZiB0aGlzIFBvcG92ZXJcblxuICAgIHZhciBhbmNob3JFbGVtZW50ID0gcmVzb2x2ZWRBbmNob3JFbCAmJiByZXNvbHZlZEFuY2hvckVsLm5vZGVUeXBlID09PSAxID8gcmVzb2x2ZWRBbmNob3JFbCA6IG93bmVyRG9jdW1lbnQocGFwZXJSZWYuY3VycmVudCkuYm9keTtcbiAgICB2YXIgYW5jaG9yUmVjdCA9IGFuY2hvckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGJveCA9IGFuY2hvckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmIGJveC50b3AgPT09IDAgJiYgYm94LmxlZnQgPT09IDAgJiYgYm94LnJpZ2h0ID09PSAwICYmIGJveC5ib3R0b20gPT09IDApIHtcbiAgICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IFRoZSBgYW5jaG9yRWxgIHByb3AgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudCBpcyBpbnZhbGlkLicsICdUaGUgYW5jaG9yIGVsZW1lbnQgc2hvdWxkIGJlIHBhcnQgb2YgdGhlIGRvY3VtZW50IGxheW91dC4nLCBcIk1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBwcmVzZW50IGluIHRoZSBkb2N1bWVudCBvciB0aGF0IGl0J3Mgbm90IGRpc3BsYXkgbm9uZS5cIl0uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhbmNob3JWZXJ0aWNhbCA9IGNvbnRlbnRBbmNob3JPZmZzZXQgPT09IDAgPyBhbmNob3JPcmlnaW4udmVydGljYWwgOiAnY2VudGVyJztcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBhbmNob3JSZWN0LnRvcCArIGdldE9mZnNldFRvcChhbmNob3JSZWN0LCBhbmNob3JWZXJ0aWNhbCksXG4gICAgICBsZWZ0OiBhbmNob3JSZWN0LmxlZnQgKyBnZXRPZmZzZXRMZWZ0KGFuY2hvclJlY3QsIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsKVxuICAgIH07XG4gIH0sIFthbmNob3JFbCwgYW5jaG9yT3JpZ2luLmhvcml6b250YWwsIGFuY2hvck9yaWdpbi52ZXJ0aWNhbCwgYW5jaG9yUG9zaXRpb24sIGFuY2hvclJlZmVyZW5jZV0pOyAvLyBSZXR1cm5zIHRoZSB2ZXJ0aWNhbCBvZmZzZXQgb2YgaW5uZXIgY29udGVudCB0byBhbmNob3IgdGhlIHRyYW5zZm9ybSBvbiBpZiBwcm92aWRlZFxuXG4gIHZhciBnZXRDb250ZW50QW5jaG9yT2Zmc2V0ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgY29udGVudEFuY2hvck9mZnNldCA9IDA7XG5cbiAgICBpZiAoZ2V0Q29udGVudEFuY2hvckVsICYmIGFuY2hvclJlZmVyZW5jZSA9PT0gJ2FuY2hvckVsJykge1xuICAgICAgdmFyIGNvbnRlbnRBbmNob3JFbCA9IGdldENvbnRlbnRBbmNob3JFbChlbGVtZW50KTtcblxuICAgICAgaWYgKGNvbnRlbnRBbmNob3JFbCAmJiBlbGVtZW50LmNvbnRhaW5zKGNvbnRlbnRBbmNob3JFbCkpIHtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50LCBjb250ZW50QW5jaG9yRWwpO1xuICAgICAgICBjb250ZW50QW5jaG9yT2Zmc2V0ID0gY29udGVudEFuY2hvckVsLm9mZnNldFRvcCArIGNvbnRlbnRBbmNob3JFbC5jbGllbnRIZWlnaHQgLyAyIC0gc2Nyb2xsVG9wIHx8IDA7XG4gICAgICB9IC8vICE9IHRoZSBkZWZhdWx0IHZhbHVlXG5cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFuY2hvck9yaWdpbi52ZXJ0aWNhbCAhPT0gJ3RvcCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFlvdSBjYW4gbm90IGNoYW5nZSB0aGUgZGVmYXVsdCBgYW5jaG9yT3JpZ2luLnZlcnRpY2FsYCB2YWx1ZSAnLCAnd2hlbiBhbHNvIHByb3ZpZGluZyB0aGUgYGdldENvbnRlbnRBbmNob3JFbGAgcHJvcCB0byB0aGUgcG9wb3ZlciBjb21wb25lbnQuJywgJ09ubHkgdXNlIG9uZSBvZiB0aGUgdHdvIHByb3BzLicsICdTZXQgYGdldENvbnRlbnRBbmNob3JFbGAgdG8gYG51bGwgfCB1bmRlZmluZWRgJyArICcgb3IgbGVhdmUgYGFuY2hvck9yaWdpbi52ZXJ0aWNhbGAgdW5jaGFuZ2VkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50QW5jaG9yT2Zmc2V0O1xuICB9LCBbYW5jaG9yT3JpZ2luLnZlcnRpY2FsLCBhbmNob3JSZWZlcmVuY2UsIGdldENvbnRlbnRBbmNob3JFbF0pOyAvLyBSZXR1cm4gdGhlIGJhc2UgdHJhbnNmb3JtIG9yaWdpbiB1c2luZyB0aGUgZWxlbWVudFxuICAvLyBhbmQgdGFraW5nIHRoZSBjb250ZW50IGFuY2hvciBvZmZzZXQgaW50byBhY2NvdW50IGlmIGluIHVzZVxuXG4gIHZhciBnZXRUcmFuc2Zvcm1PcmlnaW4gPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZWxlbVJlY3QpIHtcbiAgICB2YXIgY29udGVudEFuY2hvck9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICByZXR1cm4ge1xuICAgICAgdmVydGljYWw6IGdldE9mZnNldFRvcChlbGVtUmVjdCwgdHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsKSArIGNvbnRlbnRBbmNob3JPZmZzZXQsXG4gICAgICBob3Jpem9udGFsOiBnZXRPZmZzZXRMZWZ0KGVsZW1SZWN0LCB0cmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbClcbiAgICB9O1xuICB9LCBbdHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwsIHRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbF0pO1xuICB2YXIgZ2V0UG9zaXRpb25pbmdTdHlsZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHBhcmVudCBoYXMgcmVxdWVzdGVkIGFuY2hvcmluZyBvbiBhbiBpbm5lciBjb250ZW50IG5vZGVcbiAgICB2YXIgY29udGVudEFuY2hvck9mZnNldCA9IGdldENvbnRlbnRBbmNob3JPZmZzZXQoZWxlbWVudCk7XG4gICAgdmFyIGVsZW1SZWN0ID0ge1xuICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgfTsgLy8gR2V0IHRoZSB0cmFuc2Zvcm0gb3JpZ2luIHBvaW50IG9uIHRoZSBlbGVtZW50IGl0c2VsZlxuXG4gICAgdmFyIGVsZW1UcmFuc2Zvcm1PcmlnaW4gPSBnZXRUcmFuc2Zvcm1PcmlnaW4oZWxlbVJlY3QsIGNvbnRlbnRBbmNob3JPZmZzZXQpO1xuXG4gICAgaWYgKGFuY2hvclJlZmVyZW5jZSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IG51bGwsXG4gICAgICAgIGxlZnQ6IG51bGwsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogZ2V0VHJhbnNmb3JtT3JpZ2luVmFsdWUoZWxlbVRyYW5zZm9ybU9yaWdpbilcbiAgICAgIH07XG4gICAgfSAvLyBHZXQgdGhlIG9mZnNldCBvZiBvZiB0aGUgYW5jaG9yaW5nIGVsZW1lbnRcblxuXG4gICAgdmFyIGFuY2hvck9mZnNldCA9IGdldEFuY2hvck9mZnNldChjb250ZW50QW5jaG9yT2Zmc2V0KTsgLy8gQ2FsY3VsYXRlIGVsZW1lbnQgcG9zaXRpb25pbmdcblxuICAgIHZhciB0b3AgPSBhbmNob3JPZmZzZXQudG9wIC0gZWxlbVRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbDtcbiAgICB2YXIgbGVmdCA9IGFuY2hvck9mZnNldC5sZWZ0IC0gZWxlbVRyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsO1xuICAgIHZhciBib3R0b20gPSB0b3AgKyBlbGVtUmVjdC5oZWlnaHQ7XG4gICAgdmFyIHJpZ2h0ID0gbGVmdCArIGVsZW1SZWN0LndpZHRoOyAvLyBVc2UgdGhlIHBhcmVudCB3aW5kb3cgb2YgdGhlIGFuY2hvckVsIGlmIHByb3ZpZGVkXG5cbiAgICB2YXIgY29udGFpbmVyV2luZG93ID0gb3duZXJXaW5kb3coZ2V0QW5jaG9yRWwoYW5jaG9yRWwpKTsgLy8gV2luZG93IHRocmVzaG9sZHMgdGFraW5nIHJlcXVpcmVkIG1hcmdpbiBpbnRvIGFjY291bnRcblxuICAgIHZhciBoZWlnaHRUaHJlc2hvbGQgPSBjb250YWluZXJXaW5kb3cuaW5uZXJIZWlnaHQgLSBtYXJnaW5UaHJlc2hvbGQ7XG4gICAgdmFyIHdpZHRoVGhyZXNob2xkID0gY29udGFpbmVyV2luZG93LmlubmVyV2lkdGggLSBtYXJnaW5UaHJlc2hvbGQ7IC8vIENoZWNrIGlmIHRoZSB2ZXJ0aWNhbCBheGlzIG5lZWRzIHNoaWZ0aW5nXG5cbiAgICBpZiAodG9wIDwgbWFyZ2luVGhyZXNob2xkKSB7XG4gICAgICB2YXIgZGlmZiA9IHRvcCAtIG1hcmdpblRocmVzaG9sZDtcbiAgICAgIHRvcCAtPSBkaWZmO1xuICAgICAgZWxlbVRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbCArPSBkaWZmO1xuICAgIH0gZWxzZSBpZiAoYm90dG9tID4gaGVpZ2h0VGhyZXNob2xkKSB7XG4gICAgICB2YXIgX2RpZmYgPSBib3R0b20gLSBoZWlnaHRUaHJlc2hvbGQ7XG5cbiAgICAgIHRvcCAtPSBfZGlmZjtcbiAgICAgIGVsZW1UcmFuc2Zvcm1PcmlnaW4udmVydGljYWwgKz0gX2RpZmY7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChlbGVtUmVjdC5oZWlnaHQgPiBoZWlnaHRUaHJlc2hvbGQgJiYgZWxlbVJlY3QuaGVpZ2h0ICYmIGhlaWdodFRocmVzaG9sZCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBwb3BvdmVyIGNvbXBvbmVudCBpcyB0b28gdGFsbC4nLCBcIlNvbWUgcGFydCBvZiBpdCBjYW4gbm90IGJlIHNlZW4gb24gdGhlIHNjcmVlbiAoXCIuY29uY2F0KGVsZW1SZWN0LmhlaWdodCAtIGhlaWdodFRocmVzaG9sZCwgXCJweCkuXCIpLCAnUGxlYXNlIGNvbnNpZGVyIGFkZGluZyBhIGBtYXgtaGVpZ2h0YCB0byBpbXByb3ZlIHRoZSB1c2VyLWV4cGVyaWVuY2UuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH0gLy8gQ2hlY2sgaWYgdGhlIGhvcml6b250YWwgYXhpcyBuZWVkcyBzaGlmdGluZ1xuXG5cbiAgICBpZiAobGVmdCA8IG1hcmdpblRocmVzaG9sZCkge1xuICAgICAgdmFyIF9kaWZmMiA9IGxlZnQgLSBtYXJnaW5UaHJlc2hvbGQ7XG5cbiAgICAgIGxlZnQgLT0gX2RpZmYyO1xuICAgICAgZWxlbVRyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsICs9IF9kaWZmMjtcbiAgICB9IGVsc2UgaWYgKHJpZ2h0ID4gd2lkdGhUaHJlc2hvbGQpIHtcbiAgICAgIHZhciBfZGlmZjMgPSByaWdodCAtIHdpZHRoVGhyZXNob2xkO1xuXG4gICAgICBsZWZ0IC09IF9kaWZmMztcbiAgICAgIGVsZW1UcmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCArPSBfZGlmZjM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogXCJcIi5jb25jYXQoTWF0aC5yb3VuZCh0b3ApLCBcInB4XCIpLFxuICAgICAgbGVmdDogXCJcIi5jb25jYXQoTWF0aC5yb3VuZChsZWZ0KSwgXCJweFwiKSxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogZ2V0VHJhbnNmb3JtT3JpZ2luVmFsdWUoZWxlbVRyYW5zZm9ybU9yaWdpbilcbiAgICB9O1xuICB9LCBbYW5jaG9yRWwsIGFuY2hvclJlZmVyZW5jZSwgZ2V0QW5jaG9yT2Zmc2V0LCBnZXRDb250ZW50QW5jaG9yT2Zmc2V0LCBnZXRUcmFuc2Zvcm1PcmlnaW4sIG1hcmdpblRocmVzaG9sZF0pO1xuICB2YXIgc2V0UG9zaXRpb25pbmdTdHlsZXMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBwYXBlclJlZi5jdXJyZW50O1xuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvc2l0aW9uaW5nID0gZ2V0UG9zaXRpb25pbmdTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChwb3NpdGlvbmluZy50b3AgIT09IG51bGwpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gcG9zaXRpb25pbmcudG9wO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbmluZy5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBwb3NpdGlvbmluZy5sZWZ0O1xuICAgIH1cblxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gcG9zaXRpb25pbmcudHJhbnNmb3JtT3JpZ2luO1xuICB9LCBbZ2V0UG9zaXRpb25pbmdTdHlsZV0pO1xuXG4gIHZhciBoYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyaW5nKGVsZW1lbnQsIGlzQXBwZWFyaW5nKSB7XG4gICAgaWYgKG9uRW50ZXJpbmcpIHtcbiAgICAgIG9uRW50ZXJpbmcoZWxlbWVudCwgaXNBcHBlYXJpbmcpO1xuICAgIH1cblxuICAgIHNldFBvc2l0aW9uaW5nU3R5bGVzKCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBhcGVyUmVmID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgLy8gI1N0cmljdE1vZGUgcmVhZHlcbiAgICBwYXBlclJlZi5jdXJyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoaW5zdGFuY2UpO1xuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHNldFBvc2l0aW9uaW5nU3R5bGVzKCk7XG4gICAgfVxuICB9KTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShhY3Rpb24sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb3BlbiA/IHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgc2V0UG9zaXRpb25pbmdTdHlsZXMoKTtcbiAgICAgIH1cbiAgICB9IDogbnVsbDtcbiAgfSwgW29wZW4sIHNldFBvc2l0aW9uaW5nU3R5bGVzXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVSZXNpemUgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRQb3NpdGlvbmluZ1N0eWxlcygpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGVSZXNpemUuY2xlYXIoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtvcGVuLCBzZXRQb3NpdGlvbmluZ1N0eWxlc10pO1xuICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uUHJvcDtcblxuICBpZiAodHJhbnNpdGlvbkR1cmF0aW9uUHJvcCA9PT0gJ2F1dG8nICYmICFUcmFuc2l0aW9uQ29tcG9uZW50Lm11aVN1cHBvcnRBdXRvKSB7XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB9IC8vIElmIHRoZSBjb250YWluZXIgcHJvcCBpcyBwcm92aWRlZCwgdXNlIHRoYXRcbiAgLy8gSWYgdGhlIGFuY2hvckVsIHByb3AgaXMgcHJvdmlkZWQsIHVzZSBpdHMgcGFyZW50IGJvZHkgZWxlbWVudCBhcyB0aGUgY29udGFpbmVyXG4gIC8vIElmIG5laXRoZXIgYXJlIHByb3ZpZGVkIGxldCB0aGUgTW9kYWwgdGFrZSBjYXJlIG9mIGNob29zaW5nIHRoZSBjb250YWluZXJcblxuXG4gIHZhciBjb250YWluZXIgPSBjb250YWluZXJQcm9wIHx8IChhbmNob3JFbCA/IG93bmVyRG9jdW1lbnQoZ2V0QW5jaG9yRWwoYW5jaG9yRWwpKS5ib2R5IDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsLCBfZXh0ZW5kcyh7XG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgb3Blbjogb3BlbixcbiAgICByZWY6IHJlZixcbiAgICBCYWNrZHJvcFByb3BzOiB7XG4gICAgICBpbnZpc2libGU6IHRydWVcbiAgICB9LFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSlcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgYXBwZWFyOiB0cnVlLFxuICAgIGluOiBvcGVuLFxuICAgIG9uRW50ZXI6IG9uRW50ZXIsXG4gICAgb25FbnRlcmVkOiBvbkVudGVyZWQsXG4gICAgb25FeGl0OiBvbkV4aXQsXG4gICAgb25FeGl0ZWQ6IG9uRXhpdGVkLFxuICAgIG9uRXhpdGluZzogb25FeGl0aW5nLFxuICAgIHRpbWVvdXQ6IHRyYW5zaXRpb25EdXJhdGlvblxuICB9LCBUcmFuc2l0aW9uUHJvcHMsIHtcbiAgICBvbkVudGVyaW5nOiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oaGFuZGxlRW50ZXJpbmcsIFRyYW5zaXRpb25Qcm9wcy5vbkVudGVyaW5nKVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXIsIF9leHRlbmRzKHtcbiAgICBlbGV2YXRpb246IGVsZXZhdGlvbixcbiAgICByZWY6IGhhbmRsZVBhcGVyUmVmXG4gIH0sIFBhcGVyUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5wYXBlciwgUGFwZXJQcm9wcy5jbGFzc05hbWUpXG4gIH0pLCBjaGlsZHJlbikpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBBIHJlZiBmb3IgaW1wZXJhdGl2ZSBhY3Rpb25zLlxuICAgKiBJdCBjdXJyZW50bHkgb25seSBzdXBwb3J0cyB1cGRhdGVQb3NpdGlvbigpIGFjdGlvbi5cbiAgICovXG4gIGFjdGlvbjogcmVmVHlwZSxcblxuICAvKipcbiAgICogQSBIVE1MIGVsZW1lbnQsIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGl0LlxuICAgKiBJdCdzIHVzZWQgdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGFuY2hvckVsOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5mdW5jXSksIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5vcGVuICYmICghcHJvcHMuYW5jaG9yUmVmZXJlbmNlIHx8IHByb3BzLmFuY2hvclJlZmVyZW5jZSA9PT0gJ2FuY2hvckVsJykpIHtcbiAgICAgIHZhciByZXNvbHZlZEFuY2hvckVsID0gZ2V0QW5jaG9yRWwocHJvcHMuYW5jaG9yRWwpO1xuXG4gICAgICBpZiAocmVzb2x2ZWRBbmNob3JFbCAmJiByZXNvbHZlZEFuY2hvckVsLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHZhciBib3ggPSByZXNvbHZlZEFuY2hvckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmIGJveC50b3AgPT09IDAgJiYgYm94LmxlZnQgPT09IDAgJiYgYm94LnJpZ2h0ID09PSAwICYmIGJveC5ib3R0b20gPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgYW5jaG9yRWxgIHByb3AgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudCBpcyBpbnZhbGlkLicsICdUaGUgYW5jaG9yIGVsZW1lbnQgc2hvdWxkIGJlIHBhcnQgb2YgdGhlIGRvY3VtZW50IGxheW91dC4nLCBcIk1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBwcmVzZW50IGluIHRoZSBkb2N1bWVudCBvciB0aGF0IGl0J3Mgbm90IGRpc3BsYXkgbm9uZS5cIl0uam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgYW5jaG9yRWxgIHByb3AgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudCBpcyBpbnZhbGlkLicsIFwiSXQgc2hvdWxkIGJlIGFuIEVsZW1lbnQgaW5zdGFuY2UgYnV0IGl0J3MgYFwiLmNvbmNhdChyZXNvbHZlZEFuY2hvckVsLCBcImAgaW5zdGVhZC5cIildLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvaW50IG9uIHRoZSBhbmNob3Igd2hlcmUgdGhlIHBvcG92ZXInc1xuICAgKiBgYW5jaG9yRWxgIHdpbGwgYXR0YWNoIHRvLiBUaGlzIGlzIG5vdCB1c2VkIHdoZW4gdGhlXG4gICAqIGFuY2hvclJlZmVyZW5jZSBpcyAnYW5jaG9yUG9zaXRpb24nLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKiB2ZXJ0aWNhbDogW3RvcCwgY2VudGVyLCBib3R0b21dO1xuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgY2VudGVyLCByaWdodF0uXG4gICAqL1xuICBhbmNob3JPcmlnaW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaG9yaXpvbnRhbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnY2VudGVyJywgJ2xlZnQnLCAncmlnaHQnXSksIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydib3R0b20nLCAnY2VudGVyJywgJ3RvcCddKSwgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWRcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvc2l0aW9uIHRoYXQgbWF5IGJlIHVzZWRcbiAgICogdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICogVGhlIGNvb3JkaW5hdGVzIGFyZSByZWxhdGl2ZSB0b1xuICAgKiB0aGUgYXBwbGljYXRpb24ncyBjbGllbnQgYXJlYS5cbiAgICovXG4gIGFuY2hvclBvc2l0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB0b3A6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9KSxcblxuICAvKipcbiAgICogVGhpcyBkZXRlcm1pbmVzIHdoaWNoIGFuY2hvciBwcm9wIHRvIHJlZmVyIHRvIHRvIHNldFxuICAgKiB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBhbmNob3JSZWZlcmVuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2FuY2hvckVsJywgJ2FuY2hvclBvc2l0aW9uJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgY29tcG9uZW50IGluc3RhbmNlLCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLlxuICAgKiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBwYXNzZWQgdG8gdGhlIE1vZGFsIGNvbXBvbmVudC5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgaXQgdXNlcyB0aGUgYm9keSBvZiB0aGUgYW5jaG9yRWwncyB0b3AtbGV2ZWwgZG9jdW1lbnQgb2JqZWN0LFxuICAgKiBzbyBpdCdzIHNpbXBseSBgZG9jdW1lbnQuYm9keWAgbW9zdCBvZiB0aGUgdGltZS5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLm9uZU9mVHlwZShbSFRNTEVsZW1lbnRUeXBlLCBQcm9wVHlwZXMuaW5zdGFuY2VPZihSZWFjdC5Db21wb25lbnQpLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8qKlxuICAgKiBUaGUgZWxldmF0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgZWxldmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiBvcmRlciB0byByZXRyaWV2ZSB0aGUgY29udGVudCBhbmNob3IgZWxlbWVudC5cbiAgICogSXQncyB0aGUgb3Bwb3NpdGUgb2YgdGhlIGBhbmNob3JFbGAgcHJvcC5cbiAgICogVGhlIGNvbnRlbnQgYW5jaG9yIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGVsZW1lbnQgaW5zaWRlIHRoZSBwb3BvdmVyLlxuICAgKiBJdCdzIHVzZWQgdG8gY29ycmVjdGx5IHNjcm9sbCBhbmQgc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICogVGhlIHBvc2l0aW9uaW5nIHN0cmF0ZWd5IHRyaWVzIHRvIG1ha2UgdGhlIGNvbnRlbnQgYW5jaG9yIGVsZW1lbnQganVzdCBhYm92ZSB0aGVcbiAgICogYW5jaG9yIGVsZW1lbnQuXG4gICAqL1xuICBnZXRDb250ZW50QW5jaG9yRWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgaG93IGNsb3NlIHRvIHRoZSBlZGdlIG9mIHRoZSB3aW5kb3cgdGhlIHBvcG92ZXIgY2FuIGFwcGVhci5cbiAgICovXG4gIG1hcmdpblRocmVzaG9sZDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGVudGVyZWQuXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZW50ZXJpbmcuXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZXhpdGluZy5cbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgZXhpdGVkLlxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgZXhpdGluZy5cbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHBvcG92ZXIgaXMgdmlzaWJsZS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgUGFwZXJgXSgvYXBpL3BhcGVyLykgZWxlbWVudC5cbiAgICovXG4gIFBhcGVyUHJvcHM6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5zaGFwZSh7XG4gICAgY29tcG9uZW50OiBlbGVtZW50VHlwZUFjY2VwdGluZ1JlZlxuICB9KSxcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIHBvcG92ZXIgd2hpY2hcbiAgICogd2lsbCBhdHRhY2ggdG8gdGhlIGFuY2hvcidzIG9yaWdpbi5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tLCB4KHB4KV07XG4gICAqIGhvcml6b250YWw6IFtsZWZ0LCBjZW50ZXIsIHJpZ2h0LCB4KHB4KV0uXG4gICAqL1xuICB0cmFuc2Zvcm1PcmlnaW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaG9yaXpvbnRhbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnY2VudGVyJywgJ2xlZnQnLCAncmlnaHQnXSksIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydib3R0b20nLCAnY2VudGVyJywgJ3RvcCddKSwgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWRcbiAgfSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHRyYW5zaXRpb24uXG4gICAqIFtGb2xsb3cgdGhpcyBndWlkZV0oL2NvbXBvbmVudHMvdHJhbnNpdGlvbnMvI3RyYW5zaXRpb25jb21wb25lbnQtcHJvcCkgdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgcmVxdWlyZW1lbnRzIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIFRyYW5zaXRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogU2V0IHRvICdhdXRvJyB0byBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZSB0cmFuc2l0aW9uIHRpbWUgYmFzZWQgb24gaGVpZ2h0LlxuICAgKi9cbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFwcGVhcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBleGl0OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXSksXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgVHJhbnNpdGlvbmBdKGh0dHA6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC90cmFuc2l0aW9uI1RyYW5zaXRpb24tcHJvcHMpIGVsZW1lbnQuXG4gICAqL1xuICBUcmFuc2l0aW9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3Rcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUG9wb3Zlcidcbn0pKFBvcG92ZXIpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1BvcG92ZXInOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBTZWxlY3RJbnB1dCBmcm9tICcuL1NlbGVjdElucHV0JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IHsgc3R5bGVzIGFzIG5hdGl2ZVNlbGVjdFN0eWxlcyB9IGZyb20gJy4uL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3QnO1xuaW1wb3J0IE5hdGl2ZVNlbGVjdElucHV0IGZyb20gJy4uL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3RJbnB1dCc7XG5pbXBvcnQgRmlsbGVkSW5wdXQgZnJvbSAnLi4vRmlsbGVkSW5wdXQnO1xuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSAnLi4vT3V0bGluZWRJbnB1dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IG5hdGl2ZVNlbGVjdFN0eWxlcztcblxudmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgbnVsbCk7XG5cbnZhciBfcmVmMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZpbGxlZElucHV0LCBudWxsKTtcblxudmFyIFNlbGVjdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNlbGVjdChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYXV0b1dpZHRoID0gcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgYXV0b1dpZHRoID0gX3Byb3BzJGF1dG9XaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b1dpZHRoLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGRpc3BsYXlFbXB0eSA9IHByb3BzLmRpc3BsYXlFbXB0eSxcbiAgICAgIGRpc3BsYXlFbXB0eSA9IF9wcm9wcyRkaXNwbGF5RW1wdHkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc3BsYXlFbXB0eSxcbiAgICAgIF9wcm9wcyRJY29uQ29tcG9uZW50ID0gcHJvcHMuSWNvbkNvbXBvbmVudCxcbiAgICAgIEljb25Db21wb25lbnQgPSBfcHJvcHMkSWNvbkNvbXBvbmVudCA9PT0gdm9pZCAwID8gQXJyb3dEcm9wRG93bkljb24gOiBfcHJvcHMkSWNvbkNvbXBvbmVudCxcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBpbnB1dCA9IHByb3BzLmlucHV0LFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWxJZCA9IHByb3BzLmxhYmVsSWQsXG4gICAgICBfcHJvcHMkbGFiZWxXaWR0aCA9IHByb3BzLmxhYmVsV2lkdGgsXG4gICAgICBsYWJlbFdpZHRoID0gX3Byb3BzJGxhYmVsV2lkdGggPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkbGFiZWxXaWR0aCxcbiAgICAgIE1lbnVQcm9wcyA9IHByb3BzLk1lbnVQcm9wcyxcbiAgICAgIF9wcm9wcyRtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgbXVsdGlwbGUgPSBfcHJvcHMkbXVsdGlwbGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpcGxlLFxuICAgICAgX3Byb3BzJG5hdGl2ZSA9IHByb3BzLm5hdGl2ZSxcbiAgICAgIG5hdGl2ZSA9IF9wcm9wcyRuYXRpdmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG5hdGl2ZSxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgb25PcGVuID0gcHJvcHMub25PcGVuLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICByZW5kZXJWYWx1ZSA9IHByb3BzLnJlbmRlclZhbHVlLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzID0gcHJvcHMuU2VsZWN0RGlzcGxheVByb3BzLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudFByb3BzID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvV2lkdGhcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJkaXNwbGF5RW1wdHlcIiwgXCJJY29uQ29tcG9uZW50XCIsIFwiaWRcIiwgXCJpbnB1dFwiLCBcImlucHV0UHJvcHNcIiwgXCJsYWJlbFwiLCBcImxhYmVsSWRcIiwgXCJsYWJlbFdpZHRoXCIsIFwiTWVudVByb3BzXCIsIFwibXVsdGlwbGVcIiwgXCJuYXRpdmVcIiwgXCJvbkNsb3NlXCIsIFwib25PcGVuXCIsIFwib3BlblwiLCBcInJlbmRlclZhbHVlXCIsIFwiU2VsZWN0RGlzcGxheVByb3BzXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIGlucHV0Q29tcG9uZW50ID0gbmF0aXZlID8gTmF0aXZlU2VsZWN0SW5wdXQgOiBTZWxlY3RJbnB1dDtcbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ3ZhcmlhbnQnXVxuICB9KTtcbiAgdmFyIHZhcmlhbnQgPSBmY3MudmFyaWFudCB8fCB2YXJpYW50UHJvcHM7XG4gIHZhciBJbnB1dENvbXBvbmVudCA9IGlucHV0IHx8IHtcbiAgICBzdGFuZGFyZDogX3JlZixcbiAgICBvdXRsaW5lZDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0bGluZWRJbnB1dCwge1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgbGFiZWxXaWR0aDogbGFiZWxXaWR0aFxuICAgIH0pLFxuICAgIGZpbGxlZDogX3JlZjJcbiAgfVt2YXJpYW50XTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAvLyBNb3N0IG9mIHRoZSBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiBgU2VsZWN0SW5wdXRgLlxuICAgIC8vIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgaXMgYSBzaW1wbGUgQVBJIHdyYXBwZXIgdG8gZXhwb3NlIHNvbWV0aGluZyBiZXR0ZXIgdG8gcGxheSB3aXRoLlxuICAgIGlucHV0Q29tcG9uZW50OiBpbnB1dENvbXBvbmVudCxcbiAgICBpbnB1dFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBJY29uQ29tcG9uZW50OiBJY29uQ29tcG9uZW50LFxuICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIC8vIFdlIHJlbmRlciBhIHNlbGVjdC4gV2UgY2FuIGlnbm9yZSB0aGUgdHlwZSBwcm92aWRlZCBieSB0aGUgYElucHV0YC5cbiAgICAgIG11bHRpcGxlOiBtdWx0aXBsZVxuICAgIH0sIG5hdGl2ZSA/IHtcbiAgICAgIGlkOiBpZFxuICAgIH0gOiB7XG4gICAgICBhdXRvV2lkdGg6IGF1dG9XaWR0aCxcbiAgICAgIGRpc3BsYXlFbXB0eTogZGlzcGxheUVtcHR5LFxuICAgICAgbGFiZWxJZDogbGFiZWxJZCxcbiAgICAgIE1lbnVQcm9wczogTWVudVByb3BzLFxuICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgIG9uT3Blbjogb25PcGVuLFxuICAgICAgb3Blbjogb3BlbixcbiAgICAgIHJlbmRlclZhbHVlOiByZW5kZXJWYWx1ZSxcbiAgICAgIFNlbGVjdERpc3BsYXlQcm9wczogX2V4dGVuZHMoe1xuICAgICAgICBpZDogaWRcbiAgICAgIH0sIFNlbGVjdERpc3BsYXlQcm9wcylcbiAgICB9LCBpbnB1dFByb3BzLCB7XG4gICAgICBjbGFzc2VzOiBpbnB1dFByb3BzID8gbWVyZ2VDbGFzc2VzKHtcbiAgICAgICAgYmFzZUNsYXNzZXM6IGNsYXNzZXMsXG4gICAgICAgIG5ld0NsYXNzZXM6IGlucHV0UHJvcHMuY2xhc3NlcyxcbiAgICAgICAgQ29tcG9uZW50OiBTZWxlY3RcbiAgICAgIH0pIDogY2xhc3Nlc1xuICAgIH0sIGlucHV0ID8gaW5wdXQucHJvcHMuaW5wdXRQcm9wcyA6IHt9KSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTZWxlY3QucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlIGl0ZW1zIGluc2lkZSB0aGVcbiAgICogbWVudSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgYXQgbGVhc3QgdGhlIHdpZHRoIG9mIHRoZSBzZWxlY3QgaW5wdXQuXG4gICAqL1xuICBhdXRvV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYE1lbnVJdGVtYCB3aGVuIGBuYXRpdmVgIGlzIGZhbHNlIGFuZCBgb3B0aW9uYCB3aGVuIGBuYXRpdmVgIGlzIHRydWUuXG4gICAqXG4gICAqIOKaoO+4j1RoZSBgTWVudUl0ZW1gIGVsZW1lbnRzICoqbXVzdCoqIGJlIGRpcmVjdCBkZXNjZW5kYW50cyB3aGVuIGBuYXRpdmVgIGlzIGZhbHNlLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB2YWx1ZSBpcyBkaXNwbGF5ZWQgZXZlbiBpZiBubyBpdGVtcyBhcmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEluIG9yZGVyIHRvIGRpc3BsYXkgYSBtZWFuaW5nZnVsIHZhbHVlLCBhIGZ1bmN0aW9uIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGByZW5kZXJWYWx1ZWAgcHJvcCB3aGljaCByZXR1cm5zIHRoZSB2YWx1ZSB0byBiZSBkaXNwbGF5ZWQgd2hlbiBubyBpdGVtcyBhcmUgc2VsZWN0ZWQuXG4gICAqIFlvdSBjYW4gb25seSB1c2UgaXQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICovXG4gIGRpc3BsYXlFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgYGlkYCBvZiB0aGUgd3JhcHBlciBlbGVtZW50IG9yIHRoZSBgc2VsZWN0YCBlbGVtZW50IHdoZW4gYG5hdGl2ZWAuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQW4gYElucHV0YCBlbGVtZW50OyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgbWF0ZXJpYWwtdWkgc3BlY2lmaWMgYElucHV0YC5cbiAgICovXG4gIGlucHV0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIFdoZW4gYG5hdGl2ZWAgaXMgYHRydWVgLCB0aGUgYXR0cmlidXRlcyBhcmUgYXBwbGllZCBvbiB0aGUgYHNlbGVjdGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFNlZSBbT3V0bGluZWRJbnB1dCNsYWJlbF0oL2FwaS9vdXRsaW5lZC1pbnB1dC8jcHJvcHMpXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiBhbiBlbGVtZW50IHRoYXQgYWN0cyBhcyBhbiBhZGRpdGlvbmFsIGxhYmVsLiBUaGUgU2VsZWN0IHdpbGxcbiAgICogYmUgbGFiZWxsZWQgYnkgdGhlIGFkZGl0aW9uYWwgbGFiZWwgYW5kIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICovXG4gIGxhYmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFNlZSBbT3V0bGluZWRJbnB1dCNsYWJlbF0oL2FwaS9vdXRsaW5lZC1pbnB1dC8jcHJvcHMpXG4gICAqL1xuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBlbGVtZW50LlxuICAgKi9cbiAgTWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0IG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIHVzaW5nIGEgbmF0aXZlIGBzZWxlY3RgIGVsZW1lbnQuXG4gICAqL1xuICBuYXRpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKGFueSkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbY2hpbGRdIFRoZSByZWFjdCBlbGVtZW50IHRoYXQgd2FzIHNlbGVjdGVkIHdoZW4gYG5hdGl2ZWAgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBvcGVuZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ29udHJvbCBgc2VsZWN0YCBvcGVuIHN0YXRlLlxuICAgKiBZb3UgY2FuIG9ubHkgdXNlIGl0IHdoZW4gdGhlIGBuYXRpdmVgIHByb3AgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICogWW91IGNhbiBvbmx5IHVzZSBpdCB3aGVuIHRoZSBgbmF0aXZlYCBwcm9wIGlzIGBmYWxzZWAgKGRlZmF1bHQpLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGB2YWx1ZWAgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogQHJldHVybnMge1JlYWN0Tm9kZX1cbiAgICovXG4gIHJlbmRlclZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgY2xpY2thYmxlIGRpdiBlbGVtZW50LlxuICAgKi9cbiAgU2VsZWN0RGlzcGxheVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuIFByb3ZpZGluZyBhbiBlbXB0eSBzdHJpbmcgd2lsbCBzZWxlY3Qgbm8gb3B0aW9ucy5cbiAgICogVGhpcyBwcm9wIGlzIHJlcXVpcmVkIHdoZW4gdGhlIGBuYXRpdmVgIHByb3AgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqIFNldCB0byBhbiBlbXB0eSBzdHJpbmcgYCcnYCBpZiB5b3UgZG9uJ3Qgd2FudCBhbnkgb2YgdGhlIGF2YWlsYWJsZSBvcHRpb25zIHRvIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IGl0IG11c3QgaGF2ZSByZWZlcmVuY2UgZXF1YWxpdHkgd2l0aCB0aGUgb3B0aW9uIGluIG9yZGVyIHRvIGJlIHNlbGVjdGVkLlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgbm90IGFuIG9iamVjdCwgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBtdXN0IG1hdGNoIHdpdGggdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb3B0aW9uIGluIG9yZGVyIHRvIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcblNlbGVjdC5tdWlOYW1lID0gJ1NlbGVjdCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpU2VsZWN0J1xufSkoU2VsZWN0KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUvTWVudSc7XG5pbXBvcnQgeyBpc0ZpbGxlZCB9IGZyb20gJy4uL0lucHV0QmFzZS91dGlscyc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCB1c2VDb250cm9sbGVkIGZyb20gJy4uL3V0aWxzL3VzZUNvbnRyb2xsZWQnO1xuXG5mdW5jdGlvbiBhcmVFcXVhbFZhbHVlcyhhLCBiKSB7XG4gIGlmIChfdHlwZW9mKGIpID09PSAnb2JqZWN0JyAmJiBiICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkoZGlzcGxheSkge1xuICByZXR1cm4gZGlzcGxheSA9PSBudWxsIHx8IHR5cGVvZiBkaXNwbGF5ID09PSAnc3RyaW5nJyAmJiAhZGlzcGxheS50cmltKCk7XG59XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuXG52YXIgU2VsZWN0SW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTZWxlY3RJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b1dpZHRoID0gcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc3BsYXlFbXB0eSA9IHByb3BzLmRpc3BsYXlFbXB0eSxcbiAgICAgIEljb25Db21wb25lbnQgPSBwcm9wcy5JY29uQ29tcG9uZW50LFxuICAgICAgaW5wdXRSZWZQcm9wID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBsYWJlbElkID0gcHJvcHMubGFiZWxJZCxcbiAgICAgIF9wcm9wcyRNZW51UHJvcHMgPSBwcm9wcy5NZW51UHJvcHMsXG4gICAgICBNZW51UHJvcHMgPSBfcHJvcHMkTWVudVByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRNZW51UHJvcHMsXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgbmFtZSA9IHByb3BzLm5hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uT3BlbiA9IHByb3BzLm9uT3BlbixcbiAgICAgIG9wZW5Qcm9wID0gcHJvcHMub3BlbixcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZW5kZXJWYWx1ZSA9IHByb3BzLnJlbmRlclZhbHVlLFxuICAgICAgX3Byb3BzJFNlbGVjdERpc3BsYXlQID0gcHJvcHMuU2VsZWN0RGlzcGxheVByb3BzLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzID0gX3Byb3BzJFNlbGVjdERpc3BsYXlQID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRTZWxlY3REaXNwbGF5UCxcbiAgICAgIHRhYkluZGV4UHJvcCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB2YWx1ZVByb3AgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWEtbGFiZWxcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvV2lkdGhcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImRpc3BsYXlFbXB0eVwiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFJlZlwiLCBcImxhYmVsSWRcIiwgXCJNZW51UHJvcHNcIiwgXCJtdWx0aXBsZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xvc2VcIiwgXCJvbkZvY3VzXCIsIFwib25PcGVuXCIsIFwib3BlblwiLCBcInJlYWRPbmx5XCIsIFwicmVuZGVyVmFsdWVcIiwgXCJTZWxlY3REaXNwbGF5UHJvcHNcIiwgXCJ0YWJJbmRleFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZCA9IHVzZUNvbnRyb2xsZWQoe1xuICAgIGNvbnRyb2xsZWQ6IHZhbHVlUHJvcCxcbiAgICBkZWZhdWx0OiBkZWZhdWx0VmFsdWUsXG4gICAgbmFtZTogJ1NlbGVjdCdcbiAgfSksXG4gICAgICBfdXNlQ29udHJvbGxlZDIgPSBfc2xpY2VkVG9BcnJheShfdXNlQ29udHJvbGxlZCwgMiksXG4gICAgICB2YWx1ZSA9IF91c2VDb250cm9sbGVkMlswXSxcbiAgICAgIHNldFZhbHVlID0gX3VzZUNvbnRyb2xsZWQyWzFdO1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBkaXNwbGF5Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldERpc3BsYXlOb2RlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKG9wZW5Qcm9wICE9IG51bGwpLFxuICAgICAgaXNPcGVuQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKCksXG4gICAgICBtZW51TWluV2lkdGhTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRNZW51TWluV2lkdGhTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBvcGVuU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGUzWzBdLFxuICAgICAgc2V0T3BlblN0YXRlID0gX1JlYWN0JHVzZVN0YXRlM1sxXTtcblxuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihyZWYsIGlucHV0UmVmUHJvcCk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoaGFuZGxlUmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgZGlzcGxheU5vZGUuZm9jdXMoKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgfSwgW2Rpc3BsYXlOb2RlLCB2YWx1ZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhdXRvRm9jdXMgJiYgZGlzcGxheU5vZGUpIHtcbiAgICAgIGRpc3BsYXlOb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYXV0b0ZvY3VzLCBkaXNwbGF5Tm9kZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChkaXNwbGF5Tm9kZSkge1xuICAgICAgdmFyIGxhYmVsID0gb3duZXJEb2N1bWVudChkaXNwbGF5Tm9kZSkuZ2V0RWxlbWVudEJ5SWQobGFiZWxJZCk7XG5cbiAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKGdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICBkaXNwbGF5Tm9kZS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2xhYmVsSWQsIGRpc3BsYXlOb2RlXSk7XG5cbiAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShvcGVuLCBldmVudCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBpZiAob25PcGVuKSB7XG4gICAgICAgIG9uT3BlbihldmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIWlzT3BlbkNvbnRyb2xsZWQpIHtcbiAgICAgIHNldE1lbnVNaW5XaWR0aFN0YXRlKGF1dG9XaWR0aCA/IG51bGwgOiBkaXNwbGF5Tm9kZS5jbGllbnRXaWR0aCk7XG4gICAgICBzZXRPcGVuU3RhdGUob3Blbik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdC1jbGlja1xuICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEhpamFjayB0aGUgZGVmYXVsdCBmb2N1cyBiZWhhdmlvci5cblxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwbGF5Tm9kZS5mb2N1cygpO1xuICAgIHVwZGF0ZSh0cnVlLCBldmVudCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2UoZXZlbnQpIHtcbiAgICB1cGRhdGUoZmFsc2UsIGV2ZW50KTtcbiAgfTtcblxuICB2YXIgY2hpbGRyZW5BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pOyAvLyBTdXBwb3J0IGF1dG9maWxsLlxuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgaW5kZXggPSBjaGlsZHJlbkFycmF5Lm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICB9KS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5BcnJheVtpbmRleF07XG4gICAgc2V0VmFsdWUoY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSXRlbUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlSXRlbUNsaWNrKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICB1cGRhdGUoZmFsc2UsIGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1ZhbHVlO1xuXG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLnNsaWNlKCkgOiBbXTtcbiAgICAgICAgdmFyIGl0ZW1JbmRleCA9IHZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgbmV3VmFsdWUucHVzaChjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY2hpbGQucHJvcHMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuXG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpOyAvLyBQcmVhY3Qgc3VwcG9ydCwgdGFyZ2V0IGlzIHJlYWQgb25seSBwcm9wZXJ0eSBvbiBhIG5hdGl2ZSBldmVudC5cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvbkNoYW5nZShldmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFyZWFkT25seSkge1xuICAgICAgdmFyIHZhbGlkS2V5cyA9IFsnICcsICdBcnJvd1VwJywgJ0Fycm93RG93bicsIC8vIFRoZSBuYXRpdmUgc2VsZWN0IGRvZXNuJ3QgcmVzcG9uZCB0byBlbnRlciBvbiBNYWNPUywgYnV0IGl0J3MgcmVjb21tZW5kZWQgYnlcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvZXhhbXBsZXMvbGlzdGJveC9saXN0Ym94LWNvbGxhcHNpYmxlLmh0bWxcbiAgICAgICdFbnRlciddO1xuXG4gICAgICBpZiAodmFsaWRLZXlzLmluZGV4T2YoZXZlbnQua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdXBkYXRlKHRydWUsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIG9wZW4gPSBkaXNwbGF5Tm9kZSAhPT0gbnVsbCAmJiAoaXNPcGVuQ29udHJvbGxlZCA/IG9wZW5Qcm9wIDogb3BlblN0YXRlKTtcblxuICB2YXIgaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICAvLyBpZiBvcGVuIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblxuICAgIGlmICghb3BlbiAmJiBvbkJsdXIpIHtcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTsgLy8gUHJlYWN0IHN1cHBvcnQsIHRhcmdldCBpcyByZWFkIG9ubHkgcHJvcGVydHkgb24gYSBuYXRpdmUgZXZlbnQuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGUgb3RoZXJbJ2FyaWEtaW52YWxpZCddO1xuICB2YXIgZGlzcGxheTtcbiAgdmFyIGRpc3BsYXlTaW5nbGU7XG4gIHZhciBkaXNwbGF5TXVsdGlwbGUgPSBbXTtcbiAgdmFyIGNvbXB1dGVEaXNwbGF5ID0gZmFsc2U7XG4gIHZhciBmb3VuZE1hdGNoID0gZmFsc2U7IC8vIE5vIG5lZWQgdG8gZGlzcGxheSBhbnkgdmFsdWUgaWYgdGhlIGZpZWxkIGlzIGVtcHR5LlxuXG4gIGlmIChpc0ZpbGxlZCh7XG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pIHx8IGRpc3BsYXlFbXB0eSkge1xuICAgIGlmIChyZW5kZXJWYWx1ZSkge1xuICAgICAgZGlzcGxheSA9IHJlbmRlclZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZURpc3BsYXkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpdGVtcyA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIFNlbGVjdCBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzZWxlY3RlZDtcblxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGB2YWx1ZWAgcHJvcCBtdXN0IGJlIGFuIGFycmF5IHdoZW4gdXNpbmcgdGhlIGBTZWxlY3RgIGNvbXBvbmVudCB3aXRoIGBtdWx0aXBsZWAuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDIpKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWQgPSB2YWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBhcmVFcXVhbFZhbHVlcyh2LCBjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNlbGVjdGVkICYmIGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgICAgIGRpc3BsYXlNdWx0aXBsZS5wdXNoKGNoaWxkLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWQgPSBhcmVFcXVhbFZhbHVlcyh2YWx1ZSwgY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgY29tcHV0ZURpc3BsYXkpIHtcbiAgICAgICAgZGlzcGxheVNpbmdsZSA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogc2VsZWN0ZWQgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVJdGVtQ2xpY2soY2hpbGQpLFxuICAgICAgb25LZXlVcDogZnVuY3Rpb24gb25LZXlVcChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAvLyBvdGhlcndpc2Ugb3VyIE1lbnVJdGVtcyBkaXNwYXRjaGVzIGEgY2xpY2sgZXZlbnRcbiAgICAgICAgICAvLyBpdCdzIG5vdCBiZWhhdmlvciBvZiB0aGUgbmF0aXZlIDxvcHRpb24+IGFuZCBjYXVzZXNcbiAgICAgICAgICAvLyB0aGUgc2VsZWN0IHRvIGNsb3NlIGltbWVkaWF0ZWx5IHNpbmNlIHdlIG9wZW4gb24gc3BhY2Uga2V5ZG93blxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQucHJvcHMub25LZXlVcCkge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgLy8gVGhlIHZhbHVlIGlzIG1vc3QgbGlrZWx5IG5vdCBhIHZhbGlkIEhUTUwgYXR0cmlidXRlLlxuICAgICAgJ2RhdGEtdmFsdWUnOiBjaGlsZC5wcm9wcy52YWx1ZSAvLyBJbnN0ZWFkLCB3ZSBwcm92aWRlIGl0IGFzIGEgZGF0YSBhdHRyaWJ1dGUuXG5cbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFmb3VuZE1hdGNoICYmICFtdWx0aXBsZSAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogWW91IGhhdmUgcHJvdmlkZWQgYW4gb3V0LW9mLXJhbmdlIHZhbHVlIGBcIi5jb25jYXQodmFsdWUsIFwiYCBmb3IgdGhlIHNlbGVjdCBcIikuY29uY2F0KG5hbWUgPyBcIihuYW1lPVxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiKSBcIikgOiAnJywgXCJjb21wb25lbnQuXCIpLCBcIkNvbnNpZGVyIHByb3ZpZGluZyBhIHZhbHVlIHRoYXQgbWF0Y2hlcyBvbmUgb2YgdGhlIGF2YWlsYWJsZSBvcHRpb25zIG9yICcnLlwiLCBcIlRoZSBhdmFpbGFibGUgdmFsdWVzIGFyZSBcIi5jb25jYXQodmFsdWVzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICE9IG51bGw7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiBcImBcIi5jb25jYXQoeCwgXCJgXCIpO1xuICAgICAgICB9KS5qb2luKCcsICcpIHx8ICdcIlwiJywgXCIuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW2ZvdW5kTWF0Y2gsIGNoaWxkcmVuQXJyYXksIG11bHRpcGxlLCBuYW1lLCB2YWx1ZV0pO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9IG11bHRpcGxlID8gZGlzcGxheU11bHRpcGxlLmpvaW4oJywgJykgOiBkaXNwbGF5U2luZ2xlO1xuICB9IC8vIEF2b2lkIHBlcmZvcm1pbmcgYSBsYXlvdXQgY29tcHV0YXRpb24gaW4gdGhlIHJlbmRlciBtZXRob2QuXG5cblxuICB2YXIgbWVudU1pbldpZHRoID0gbWVudU1pbldpZHRoU3RhdGU7XG5cbiAgaWYgKCFhdXRvV2lkdGggJiYgaXNPcGVuQ29udHJvbGxlZCAmJiBkaXNwbGF5Tm9kZSkge1xuICAgIG1lbnVNaW5XaWR0aCA9IGRpc3BsYXlOb2RlLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgdmFyIHRhYkluZGV4O1xuXG4gIGlmICh0eXBlb2YgdGFiSW5kZXhQcm9wICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRhYkluZGV4ID0gdGFiSW5kZXhQcm9wO1xuICB9IGVsc2Uge1xuICAgIHRhYkluZGV4ID0gZGlzYWJsZWQgPyBudWxsIDogMDtcbiAgfVxuXG4gIHZhciBidXR0b25JZCA9IFNlbGVjdERpc3BsYXlQcm9wcy5pZCB8fCAobmFtZSA/IFwibXVpLWNvbXBvbmVudC1zZWxlY3QtXCIuY29uY2F0KG5hbWUpIDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgLy8gVE9ETyB2NTogbWVyZ2Ugcm9vdCBhbmQgc2VsZWN0XG4gICAgY2xhc3Nlcy5zZWxlY3QsIGNsYXNzZXMuc2VsZWN0TWVudSwgY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKSxcbiAgICByZWY6IHNldERpc3BsYXlOb2RlLFxuICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogb3BlbiA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJsaXN0Ym94XCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBbbGFiZWxJZCwgYnV0dG9uSWRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJykgfHwgdW5kZWZpbmVkLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICBvbk1vdXNlRG93bjogZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyBudWxsIDogaGFuZGxlTW91c2VEb3duLFxuICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICBvbkZvY3VzOiBvbkZvY3VzXG4gIH0sIFNlbGVjdERpc3BsYXlQcm9wcywge1xuICAgIC8vIFRoZSBpZCBpcyByZXF1aXJlZCBmb3IgcHJvcGVyIGExMXlcbiAgICBpZDogYnV0dG9uSWRcbiAgfSksIGlzRW1wdHkoZGlzcGxheSkgP1xuICAvKiNfX1BVUkVfXyovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6ICcmIzgyMDM7J1xuICAgIH1cbiAgfSkgOiBkaXNwbGF5KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfZXh0ZW5kcyh7XG4gICAgdmFsdWU6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCcpIDogdmFsdWUsXG4gICAgbmFtZTogbmFtZSxcbiAgICByZWY6IGlucHV0UmVmLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMubmF0aXZlSW5wdXQsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXNcbiAgfSwgb3RoZXIpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmljb24sIGNsYXNzZXNbXCJpY29uXCIuY29uY2F0KGNhcGl0YWxpemUodmFyaWFudCkpXSwgb3BlbiAmJiBjbGFzc2VzLmljb25PcGVuLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgX2V4dGVuZHMoe1xuICAgIGlkOiBcIm1lbnUtXCIuY29uY2F0KG5hbWUgfHwgJycpLFxuICAgIGFuY2hvckVsOiBkaXNwbGF5Tm9kZSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIG9uQ2xvc2U6IGhhbmRsZUNsb3NlXG4gIH0sIE1lbnVQcm9wcywge1xuICAgIE1lbnVMaXN0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkLFxuICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgZGlzYWJsZUxpc3RXcmFwOiB0cnVlXG4gICAgfSwgTWVudVByb3BzLk1lbnVMaXN0UHJvcHMpLFxuICAgIFBhcGVyUHJvcHM6IF9leHRlbmRzKHt9LCBNZW51UHJvcHMuUGFwZXJQcm9wcywge1xuICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgbWluV2lkdGg6IG1lbnVNaW5XaWR0aFxuICAgICAgfSwgTWVudVByb3BzLlBhcGVyUHJvcHMgIT0gbnVsbCA/IE1lbnVQcm9wcy5QYXBlclByb3BzLnN0eWxlIDogbnVsbClcbiAgICB9KVxuICB9KSwgaXRlbXMpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU2VsZWN0SW5wdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlciB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgaXRlbXMgaW5zaWRlIHRoZVxuICAgKiBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCBiZSBhdCBsZWFzdCB0aGUgd2lkdGggb2YgdGhlIHNlbGVjdCBpbnB1dC5cbiAgICovXG4gIGF1dG9XaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPE1lbnVJdGVtPmAgZWxlbWVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWxlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBkaXNwbGF5ZWQgZXZlbiBpZiBpdHMgdmFsdWUgaXMgZW1wdHkuXG4gICAqL1xuICBkaXNwbGF5RW1wdHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJbXBlcmF0aXZlIGhhbmRsZSBpbXBsZW1lbnRpbmcgYHsgdmFsdWU6IFQsIG5vZGU6IEhUTUxFbGVtZW50LCBmb2N1cygpOiB2b2lkIH1gXG4gICAqIEVxdWl2YWxlbnQgdG8gYHJlZmBcbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgYW4gZWxlbWVudCB0aGF0IGFjdHMgYXMgYW4gYWRkaXRpb25hbCBsYWJlbC4gVGhlIFNlbGVjdCB3aWxsXG4gICAqIGJlIGxhYmVsbGVkIGJ5IHRoZSBhZGRpdGlvbmFsIGxhYmVsIGFuZCB0aGUgc2VsZWN0ZWQgdmFsdWUuXG4gICAqL1xuICBsYWJlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBlbGVtZW50LlxuICAgKi9cbiAgTWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0IG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgc2VsZWN0YCBvciBoaWRkZW4gYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChhbnkpLlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2NoaWxkXSBUaGUgcmVhY3QgZWxlbWVudCB0aGF0IHdhcyBzZWxlY3RlZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBvcGVuZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ29udHJvbCBgc2VsZWN0YCBvcGVuIHN0YXRlLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBgdmFsdWVgIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XG4gICAqL1xuICByZW5kZXJWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIGNsaWNrYWJsZSBkaXYgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdERpc3BsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YW5kYXJkJywgJ291dGxpbmVkJywgJ2ZpbGxlZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdElucHV0OyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlbGVjdCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IEZpbGxlZElucHV0IGZyb20gJy4uL0ZpbGxlZElucHV0JztcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJy4uL091dGxpbmVkSW5wdXQnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vSW5wdXRMYWJlbCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJy4uL0Zvcm1IZWxwZXJUZXh0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbnZhciB2YXJpYW50Q29tcG9uZW50ID0ge1xuICBzdGFuZGFyZDogSW5wdXQsXG4gIGZpbGxlZDogRmlsbGVkSW5wdXQsXG4gIG91dGxpbmVkOiBPdXRsaW5lZElucHV0XG59O1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHt9XG59O1xuLyoqXG4gKiBUaGUgYFRleHRGaWVsZGAgaXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGZvciB0aGUgbW9zdCBjb21tb24gY2FzZXMgKDgwJSkuXG4gKiBJdCBjYW5ub3QgYmUgYWxsIHRoaW5ncyB0byBhbGwgcGVvcGxlLCBvdGhlcndpc2UgdGhlIEFQSSB3b3VsZCBncm93IG91dCBvZiBjb250cm9sLlxuICpcbiAqICMjIEFkdmFuY2VkIENvbmZpZ3VyYXRpb25cbiAqXG4gKiBJdCdzIGltcG9ydGFudCB0byB1bmRlcnN0YW5kIHRoYXQgdGhlIHRleHQgZmllbGQgaXMgYSBzaW1wbGUgYWJzdHJhY3Rpb25cbiAqIG9uIHRvcCBvZiB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHM6XG4gKlxuICogLSBbRm9ybUNvbnRyb2xdKC9hcGkvZm9ybS1jb250cm9sLylcbiAqIC0gW0lucHV0TGFiZWxdKC9hcGkvaW5wdXQtbGFiZWwvKVxuICogLSBbRmlsbGVkSW5wdXRdKC9hcGkvZmlsbGVkLWlucHV0LylcbiAqIC0gW091dGxpbmVkSW5wdXRdKC9hcGkvb3V0bGluZWQtaW5wdXQvKVxuICogLSBbSW5wdXRdKC9hcGkvaW5wdXQvKVxuICogLSBbRm9ybUhlbHBlclRleHRdKC9hcGkvZm9ybS1oZWxwZXItdGV4dC8pXG4gKlxuICogSWYgeW91IHdpc2ggdG8gYWx0ZXIgdGhlIHByb3BzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCwgeW91IGNhbiBkbyBzbyBhcyBmb2xsb3dzOlxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAqICAgc3RlcDogMzAwLFxuICogfTtcbiAqXG4gKiByZXR1cm4gPFRleHRGaWVsZCBpZD1cInRpbWVcIiB0eXBlPVwidGltZVwiIGlucHV0UHJvcHM9e2lucHV0UHJvcHN9IC8+O1xuICogYGBgXG4gKlxuICogRm9yIGFkdmFuY2VkIGNhc2VzLCBwbGVhc2UgbG9vayBhdCB0aGUgc291cmNlIG9mIFRleHRGaWVsZCBieSBjbGlja2luZyBvbiB0aGVcbiAqIFwiRWRpdCB0aGlzIHBhZ2VcIiBidXR0b24gYWJvdmUuIENvbnNpZGVyIGVpdGhlcjpcbiAqXG4gKiAtIHVzaW5nIHRoZSB1cHBlciBjYXNlIHByb3BzIGZvciBwYXNzaW5nIHZhbHVlcyBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50c1xuICogLSB1c2luZyB0aGUgdW5kZXJseWluZyBjb21wb25lbnRzIGRpcmVjdGx5IGFzIHNob3duIGluIHRoZSBkZW1vc1xuICovXG5cbnZhciBUZXh0RmllbGQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUZXh0RmllbGQocHJvcHMsIHJlZikge1xuICB2YXIgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgX3Byb3BzJGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGF1dG9Gb2N1cyA9IF9wcm9wcyRhdXRvRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9Gb2N1cyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdwcmltYXJ5JyA6IF9wcm9wcyRjb2xvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBGb3JtSGVscGVyVGV4dFByb3BzID0gcHJvcHMuRm9ybUhlbHBlclRleHRQcm9wcyxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBoZWxwZXJUZXh0ID0gcHJvcHMuaGVscGVyVGV4dCxcbiAgICAgIGhpZGRlbkxhYmVsID0gcHJvcHMuaGlkZGVuTGFiZWwsXG4gICAgICBpZCA9IHByb3BzLmlkLFxuICAgICAgSW5wdXRMYWJlbFByb3BzID0gcHJvcHMuSW5wdXRMYWJlbFByb3BzLFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBJbnB1dFByb3BzID0gcHJvcHMuSW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgX3Byb3BzJG11bHRpbGluZSA9IHByb3BzLm11bHRpbGluZSxcbiAgICAgIG11bHRpbGluZSA9IF9wcm9wcyRtdWx0aWxpbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpbGluZSxcbiAgICAgIG5hbWUgPSBwcm9wcy5uYW1lLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIF9wcm9wcyRyZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgcmVxdWlyZWQgPSBfcHJvcHMkcmVxdWlyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHJlcXVpcmVkLFxuICAgICAgcm93cyA9IHByb3BzLnJvd3MsXG4gICAgICByb3dzTWF4ID0gcHJvcHMucm93c01heCxcbiAgICAgIF9wcm9wcyRzZWxlY3QgPSBwcm9wcy5zZWxlY3QsXG4gICAgICBzZWxlY3QgPSBfcHJvcHMkc2VsZWN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRzZWxlY3QsXG4gICAgICBTZWxlY3RQcm9wcyA9IHByb3BzLlNlbGVjdFByb3BzLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiRm9ybUhlbHBlclRleHRQcm9wc1wiLCBcImZ1bGxXaWR0aFwiLCBcImhlbHBlclRleHRcIiwgXCJoaWRkZW5MYWJlbFwiLCBcImlkXCIsIFwiSW5wdXRMYWJlbFByb3BzXCIsIFwiaW5wdXRQcm9wc1wiLCBcIklucHV0UHJvcHNcIiwgXCJpbnB1dFJlZlwiLCBcImxhYmVsXCIsIFwibXVsdGlsaW5lXCIsIFwibmFtZVwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25Gb2N1c1wiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVxdWlyZWRcIiwgXCJyb3dzXCIsIFwicm93c01heFwiLCBcInNlbGVjdFwiLCBcIlNlbGVjdFByb3BzXCIsIFwidHlwZVwiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoc2VsZWN0ICYmICFjaGlsZHJlbikge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBjaGlsZHJlbmAgbXVzdCBiZSBwYXNzZWQgd2hlbiB1c2luZyB0aGUgYFRleHRGaWVsZGAgY29tcG9uZW50IHdpdGggYHNlbGVjdGAuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIElucHV0TW9yZSA9IHt9O1xuXG4gIGlmICh2YXJpYW50ID09PSAnb3V0bGluZWQnKSB7XG4gICAgaWYgKElucHV0TGFiZWxQcm9wcyAmJiB0eXBlb2YgSW5wdXRMYWJlbFByb3BzLnNocmluayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIElucHV0TW9yZS5ub3RjaGVkID0gSW5wdXRMYWJlbFByb3BzLnNocmluaztcbiAgICB9XG5cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHZhciBfSW5wdXRMYWJlbFByb3BzJHJlcXU7XG5cbiAgICAgIHZhciBkaXNwbGF5UmVxdWlyZWQgPSAoX0lucHV0TGFiZWxQcm9wcyRyZXF1ID0gSW5wdXRMYWJlbFByb3BzID09PSBudWxsIHx8IElucHV0TGFiZWxQcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogSW5wdXRMYWJlbFByb3BzLnJlcXVpcmVkKSAhPT0gbnVsbCAmJiBfSW5wdXRMYWJlbFByb3BzJHJlcXUgIT09IHZvaWQgMCA/IF9JbnB1dExhYmVsUHJvcHMkcmVxdSA6IHJlcXVpcmVkO1xuICAgICAgSW5wdXRNb3JlLmxhYmVsID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGxhYmVsLCBkaXNwbGF5UmVxdWlyZWQgJiYgXCJcXHhBMCpcIik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdCkge1xuICAgIC8vIHVuc2V0IGRlZmF1bHRzIGZyb20gdGV4dGJveCBpbnB1dHNcbiAgICBpZiAoIVNlbGVjdFByb3BzIHx8ICFTZWxlY3RQcm9wcy5uYXRpdmUpIHtcbiAgICAgIElucHV0TW9yZS5pZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBJbnB1dE1vcmVbJ2FyaWEtZGVzY3JpYmVkYnknXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBoZWxwZXJUZXh0SWQgPSBoZWxwZXJUZXh0ICYmIGlkID8gXCJcIi5jb25jYXQoaWQsIFwiLWhlbHBlci10ZXh0XCIpIDogdW5kZWZpbmVkO1xuICB2YXIgaW5wdXRMYWJlbElkID0gbGFiZWwgJiYgaWQgPyBcIlwiLmNvbmNhdChpZCwgXCItbGFiZWxcIikgOiB1bmRlZmluZWQ7XG4gIHZhciBJbnB1dENvbXBvbmVudCA9IHZhcmlhbnRDb21wb25lbnRbdmFyaWFudF07XG4gIHZhciBJbnB1dEVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBoZWxwZXJUZXh0SWQsXG4gICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgbmFtZTogbmFtZSxcbiAgICByb3dzOiByb3dzLFxuICAgIHJvd3NNYXg6IHJvd3NNYXgsXG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaWQ6IGlkLFxuICAgIGlucHV0UmVmOiBpbnB1dFJlZixcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgaW5wdXRQcm9wczogaW5wdXRQcm9wc1xuICB9LCBJbnB1dE1vcmUsIElucHV0UHJvcHMpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgZXJyb3I6IGVycm9yLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGhpZGRlbkxhYmVsOiBoaWRkZW5MYWJlbCxcbiAgICByZWY6IHJlZixcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnRcbiAgfSwgb3RoZXIpLCBsYWJlbCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dExhYmVsLCBfZXh0ZW5kcyh7XG4gICAgaHRtbEZvcjogaWQsXG4gICAgaWQ6IGlucHV0TGFiZWxJZFxuICB9LCBJbnB1dExhYmVsUHJvcHMpLCBsYWJlbCksIHNlbGVjdCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBoZWxwZXJUZXh0SWQsXG4gICAgaWQ6IGlkLFxuICAgIGxhYmVsSWQ6IGlucHV0TGFiZWxJZCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaW5wdXQ6IElucHV0RWxlbWVudFxuICB9LCBTZWxlY3RQcm9wcyksIGNoaWxkcmVuKSA6IElucHV0RWxlbWVudCwgaGVscGVyVGV4dCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtSGVscGVyVGV4dCwgX2V4dGVuZHMoe1xuICAgIGlkOiBoZWxwZXJUZXh0SWRcbiAgfSwgRm9ybUhlbHBlclRleHRQcm9wcyksIGhlbHBlclRleHQpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGV4dEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBoZWxwcyB1c2VycyB0byBmaWxsIGZvcm1zIGZhc3RlciwgZXNwZWNpYWxseSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhlIG5hbWUgY2FuIGJlIGNvbmZ1c2luZywgYXMgaXQncyBtb3JlIGxpa2UgYW4gYXV0b2ZpbGwuXG4gICAqIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpdCBbZm9sbG93aW5nIHRoZSBzcGVjaWZpY2F0aW9uXShodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNhdXRvZmlsbCkuXG4gICAqL1xuICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQgZHVyaW5nIHRoZSBmaXJzdCBtb3VudC5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYEZvcm1IZWxwZXJUZXh0YF0oL2FwaS9mb3JtLWhlbHBlci10ZXh0LykgZWxlbWVudC5cbiAgICovXG4gIEZvcm1IZWxwZXJUZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGhlbHBlciB0ZXh0IGNvbnRlbnQuXG4gICAqL1xuICBoZWxwZXJUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaGlkZGVuTGFiZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogVXNlIHRoaXMgcHJvcCB0byBtYWtlIGBsYWJlbGAgYW5kIGBoZWxwZXJUZXh0YCBhY2Nlc3NpYmxlIGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYElucHV0TGFiZWxgXSgvYXBpL2lucHV0LWxhYmVsLykgZWxlbWVudC5cbiAgICovXG4gIElucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBJbnB1dCBlbGVtZW50LlxuICAgKiBJdCB3aWxsIGJlIGEgW2BGaWxsZWRJbnB1dGBdKC9hcGkvZmlsbGVkLWlucHV0LyksXG4gICAqIFtgT3V0bGluZWRJbnB1dGBdKC9hcGkvb3V0bGluZWQtaW5wdXQvKSBvciBbYElucHV0YF0oL2FwaS9pbnB1dC8pXG4gICAqIGNvbXBvbmVudCBkZXBlbmRpbmcgb24gdGhlIGB2YXJpYW50YCBwcm9wIHZhbHVlLlxuICAgKi9cbiAgSW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50LlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgIG9yIGBub3JtYWxgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nIG9mIHRoaXMgYW5kIGNvbnRhaW5lZCBjb21wb25lbnRzLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZScsICdub25lJywgJ25vcm1hbCddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZCBpbnN0ZWFkIG9mIGFuIGlucHV0LlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIGlzIGRpc3BsYXllZCBhcyByZXF1aXJlZCBhbmQgdGhlIGBpbnB1dGAgZWxlbWVudGAgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIFtgU2VsZWN0YF0oL2FwaS9zZWxlY3QvKSBlbGVtZW50IHdoaWxlIHBhc3NpbmcgdGhlIElucHV0IGVsZW1lbnQgdG8gYFNlbGVjdGAgYXMgYGlucHV0YCBwYXJhbWV0ZXIuXG4gICAqIElmIHRoaXMgb3B0aW9uIGlzIHNldCB5b3UgbXVzdCBwYXNzIHRoZSBvcHRpb25zIG9mIHRoZSBzZWxlY3QgYXMgY2hpbGRyZW4uXG4gICAqL1xuICBzZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFNlbGVjdGBdKC9hcGkvc2VsZWN0LykgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUZXh0RmllbGQnXG59KShUZXh0RmllbGQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RleHRGaWVsZCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtwcm9wZXJ0eV0sIDEwKSB8fCAwO1xufVxuXG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbnZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzaGFkb3cgdGV4dGFyZWEgZWxlbWVudC4gKi9cbiAgc2hhZG93OiB7XG4gICAgLy8gVmlzaWJpbGl0eSBuZWVkZWQgdG8gaGlkZSB0aGUgZXh0cmEgdGV4dCBhcmVhIG9uIGlQYWRzXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgLy8gUmVtb3ZlIGZyb20gdGhlIGNvbnRlbnQgZmxvd1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIC8vIElnbm9yZSB0aGUgc2Nyb2xsYmFyIHdpZHRoXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGhlaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAvLyBDcmVhdGUgYSBuZXcgbGF5ZXIsIGluY3JlYXNlIHRoZSBpc29sYXRpb24gb2YgdGhlIGNvbXB1dGVkIHZhbHVlc1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXG4gIH1cbn07XG52YXIgVGV4dGFyZWFBdXRvc2l6ZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHRhcmVhQXV0b3NpemUocHJvcHMsIHJlZikge1xuICB2YXIgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHJvd3MgPSBwcm9wcy5yb3dzLFxuICAgICAgcm93c01heCA9IHByb3BzLnJvd3NNYXgsXG4gICAgICBfcHJvcHMkcm93c01pbiA9IHByb3BzLnJvd3NNaW4sXG4gICAgICByb3dzTWluUHJvcCA9IF9wcm9wcyRyb3dzTWluID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJHJvd3NNaW4sXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJvbkNoYW5nZVwiLCBcInJvd3NcIiwgXCJyb3dzTWF4XCIsIFwicm93c01pblwiLCBcInN0eWxlXCIsIFwidmFsdWVcIl0pO1xuXG4gIHZhciByb3dzTWluID0gcm93cyB8fCByb3dzTWluUHJvcDtcblxuICB2YXIgX1JlYWN0JHVzZVJlZiA9IFJlYWN0LnVzZVJlZih2YWx1ZSAhPSBudWxsKSxcbiAgICAgIGlzQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKHJlZiwgaW5wdXRSZWYpO1xuICB2YXIgc2hhZG93UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgcmVuZGVycyA9IFJlYWN0LnVzZVJlZigwKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoe30pLFxuICAgICAgc3RhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgc3luY0hlaWdodCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBpbnB1dFJlZi5jdXJyZW50O1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaW5wdXQpO1xuICAgIHZhciBpbnB1dFNoYWxsb3cgPSBzaGFkb3dSZWYuY3VycmVudDtcbiAgICBpbnB1dFNoYWxsb3cuc3R5bGUud2lkdGggPSBjb21wdXRlZFN0eWxlLndpZHRoO1xuICAgIGlucHV0U2hhbGxvdy52YWx1ZSA9IGlucHV0LnZhbHVlIHx8IHByb3BzLnBsYWNlaG9sZGVyIHx8ICd4JztcblxuICAgIGlmIChpbnB1dFNoYWxsb3cudmFsdWUuc2xpY2UoLTEpID09PSAnXFxuJykge1xuICAgICAgLy8gQ2VydGFpbiBmb250cyB3aGljaCBvdmVyZmxvdyB0aGUgbGluZSBoZWlnaHQgd2lsbCBjYXVzZSB0aGUgdGV4dGFyZWFcbiAgICAgIC8vIHRvIHJlcG9ydCBhIGRpZmZlcmVudCBzY3JvbGxIZWlnaHQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGxhc3QgbGluZVxuICAgICAgLy8gaXMgZW1wdHkuIE1ha2UgaXQgbm9uLWVtcHR5IHRvIGF2b2lkIHRoaXMgaXNzdWUuXG4gICAgICBpbnB1dFNoYWxsb3cudmFsdWUgKz0gJyAnO1xuICAgIH1cblxuICAgIHZhciBib3hTaXppbmcgPSBjb21wdXRlZFN0eWxlWydib3gtc2l6aW5nJ107XG4gICAgdmFyIHBhZGRpbmcgPSBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdwYWRkaW5nLWJvdHRvbScpICsgZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAncGFkZGluZy10b3AnKTtcbiAgICB2YXIgYm9yZGVyID0gZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAnYm9yZGVyLWJvdHRvbS13aWR0aCcpICsgZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAnYm9yZGVyLXRvcC13aWR0aCcpOyAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBpbm5lciBjb250ZW50XG5cbiAgICB2YXIgaW5uZXJIZWlnaHQgPSBpbnB1dFNoYWxsb3cuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZzsgLy8gTWVhc3VyZSBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvd1xuXG4gICAgaW5wdXRTaGFsbG93LnZhbHVlID0gJ3gnO1xuICAgIHZhciBzaW5nbGVSb3dIZWlnaHQgPSBpbnB1dFNoYWxsb3cuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZzsgLy8gVGhlIGhlaWdodCBvZiB0aGUgb3V0ZXIgY29udGVudFxuXG4gICAgdmFyIG91dGVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAocm93c01pbikge1xuICAgICAgb3V0ZXJIZWlnaHQgPSBNYXRoLm1heChOdW1iZXIocm93c01pbikgKiBzaW5nbGVSb3dIZWlnaHQsIG91dGVySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAocm93c01heCkge1xuICAgICAgb3V0ZXJIZWlnaHQgPSBNYXRoLm1pbihOdW1iZXIocm93c01heCkgKiBzaW5nbGVSb3dIZWlnaHQsIG91dGVySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBvdXRlckhlaWdodCA9IE1hdGgubWF4KG91dGVySGVpZ2h0LCBzaW5nbGVSb3dIZWlnaHQpOyAvLyBUYWtlIHRoZSBib3ggc2l6aW5nIGludG8gYWNjb3VudCBmb3IgYXBwbHlpbmcgdGhpcyB2YWx1ZSBhcyBhIHN0eWxlLlxuXG4gICAgdmFyIG91dGVySGVpZ2h0U3R5bGUgPSBvdXRlckhlaWdodCArIChib3hTaXppbmcgPT09ICdib3JkZXItYm94JyA/IHBhZGRpbmcgKyBib3JkZXIgOiAwKTtcbiAgICB2YXIgb3ZlcmZsb3cgPSBNYXRoLmFicyhvdXRlckhlaWdodCAtIGlubmVySGVpZ2h0KSA8PSAxO1xuICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIC8vIE5lZWQgYSBsYXJnZSBlbm91Z2ggZGlmZmVyZW5jZSB0byB1cGRhdGUgdGhlIGhlaWdodC5cbiAgICAgIC8vIFRoaXMgcHJldmVudHMgaW5maW5pdGUgcmVuZGVyaW5nIGxvb3AuXG4gICAgICBpZiAocmVuZGVycy5jdXJyZW50IDwgMjAgJiYgKG91dGVySGVpZ2h0U3R5bGUgPiAwICYmIE1hdGguYWJzKChwcmV2U3RhdGUub3V0ZXJIZWlnaHRTdHlsZSB8fCAwKSAtIG91dGVySGVpZ2h0U3R5bGUpID4gMSB8fCBwcmV2U3RhdGUub3ZlcmZsb3cgIT09IG92ZXJmbG93KSkge1xuICAgICAgICByZW5kZXJzLmN1cnJlbnQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvdmVyZmxvdzogb3ZlcmZsb3csXG4gICAgICAgICAgb3V0ZXJIZWlnaHRTdHlsZTogb3V0ZXJIZWlnaHRTdHlsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVuZGVycy5jdXJyZW50ID09PSAyMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVG9vIG1hbnkgcmUtcmVuZGVycy4gVGhlIGxheW91dCBpcyB1bnN0YWJsZS4nLCAnVGV4dGFyZWFBdXRvc2l6ZSBsaW1pdHMgdGhlIG51bWJlciBvZiByZW5kZXJzIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICB9KTtcbiAgfSwgW3Jvd3NNYXgsIHJvd3NNaW4sIHByb3BzLnBsYWNlaG9sZGVyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbmRlcnMuY3VycmVudCA9IDA7XG4gICAgICBzeW5jSGVpZ2h0KCk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW3N5bmNIZWlnaHRdKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHN5bmNIZWlnaHQoKTtcbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVuZGVycy5jdXJyZW50ID0gMDtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHJlbmRlcnMuY3VycmVudCA9IDA7XG5cbiAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgc3luY0hlaWdodCgpO1xuICAgIH1cblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgX2V4dGVuZHMoe1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHJlZjogaGFuZGxlUmVmIC8vIEFwcGx5IHRoZSByb3dzIHByb3AgdG8gZ2V0IGEgXCJjb3JyZWN0XCIgZmlyc3QgU1NSIHBhaW50XG4gICAgLFxuICAgIHJvd3M6IHJvd3NNaW4sXG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIGhlaWdodDogc3RhdGUub3V0ZXJIZWlnaHRTdHlsZSxcbiAgICAgIC8vIE5lZWQgYSBsYXJnZSBlbm91Z2ggZGlmZmVyZW5jZSB0byBhbGxvdyBzY3JvbGxpbmcuXG4gICAgICAvLyBUaGlzIHByZXZlbnRzIGluZmluaXRlIHJlbmRlcmluZyBsb29wLlxuICAgICAgb3ZlcmZsb3c6IHN0YXRlLm92ZXJmbG93ID8gJ2hpZGRlbicgOiBudWxsXG4gICAgfSwgc3R5bGUpXG4gIH0sIG90aGVyKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICByZWY6IHNoYWRvd1JlZixcbiAgICB0YWJJbmRleDogLTEsXG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZXMuc2hhZG93LCBzdHlsZSlcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUZXh0YXJlYUF1dG9zaXplLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVXNlIGByb3dzTWluYCBpbnN0ZWFkLiBUaGUgcHJvcCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5LlxuICAgKi9cbiAgcm93c01pbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUF1dG9zaXplOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RleHRhcmVhQXV0b3NpemUnOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcgMTBsNSA1IDUtNXpcIlxufSksICdBcnJvd0Ryb3BEb3duJyk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXIgUGFnZTwvaDE+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiIGxhYmVsPVwiT3V0bGluZWRcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==