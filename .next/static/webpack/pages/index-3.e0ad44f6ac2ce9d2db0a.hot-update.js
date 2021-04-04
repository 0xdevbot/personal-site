webpackHotUpdate_N_E("pages/index-3",{

/***/ "./components/slider-three.js":
/*!************************************!*\
  !*** ./components/slider-three.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_orion_dev_personal_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data */ "./data/index.js");



var _jsxFileName = "C:\\Users\\orion\\dev\\personal-site\\components\\slider-three.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_orion_dev_personal_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_5__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_5__["EffectFade"]]);

var SliderThree = function SliderThree() {
  var mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev"
    },
    autoplay: {
      delay: 5000
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: "main-slider",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_4__["Swiper"], _objectSpread(_objectSpread({}, mainSlideOptions), {}, {
      children: [_data__WEBPACK_IMPORTED_MODULE_7__["SliderThreeData"].map(function (_ref, index) {
        var image = _ref.image,
            subTitle = _ref.subTitle,
            title = _ref.title,
            button = _ref.button;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(swiper_react__WEBPACK_IMPORTED_MODULE_4__["SwiperSlide"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "image-layer",
            style: {
              backgroundImage: './assets/images/home_1/pexels-startup-stock-photos-7367.jpg'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
                lg: 12,
                className: "text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
                  className: "main-slider__subtext",
                  children: subTitle
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                  className: "main-slider__title",
                  children: title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: button.url,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    className: "common_btn",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                      children: button.label
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "swiper-button-prev",
        id: "main-slider-prev",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
          className: "fa fa-angle-left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "swiper-button-next",
        id: "main-slider-next",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
          className: "fa fa-angle-right"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_c = SliderThree;
/* harmony default export */ __webpack_exports__["default"] = (SliderThree);

var _c;

$RefreshReg$(_c, "SliderThree");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlkZXItdGhyZWUuanMiXSwibmFtZXMiOlsiU3dpcGVyQ29yZSIsInVzZSIsIkF1dG9wbGF5IiwiTmF2aWdhdGlvbiIsIkVmZmVjdEZhZGUiLCJTbGlkZXJUaHJlZSIsIm1haW5TbGlkZU9wdGlvbnMiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsImVmZmVjdCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJhdXRvcGxheSIsImRlbGF5IiwiU2xpZGVyVGhyZWVEYXRhIiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsInN1YlRpdGxlIiwidGl0bGUiLCJidXR0b24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmwiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsOENBQVUsQ0FBQ0MsR0FBWCxDQUFlLENBQUNDLCtDQUFELEVBQVdDLGlEQUFYLEVBQXVCQyxpREFBdkIsQ0FBZjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLE1BQU1DLGdCQUFnQixHQUFHO0FBQ3ZCQyxpQkFBYSxFQUFFLENBRFE7QUFFdkJDLFFBQUksRUFBRSxJQUZpQjtBQUd2QkMsVUFBTSxFQUFFLE1BSGU7QUFJdkJDLGNBQVUsRUFBRTtBQUNWQyxZQUFNLEVBQUUsbUJBREU7QUFFVkMsWUFBTSxFQUFFO0FBRkUsS0FKVztBQVF2QkMsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRTtBQURDO0FBUmEsR0FBekI7QUFZQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyxhQUFuQjtBQUFBLDJCQUNFLHFFQUFDLG1EQUFELGtDQUFZUixnQkFBWjtBQUFBLGlCQUNHUyxxREFBZSxDQUFDQyxHQUFoQixDQUFvQixnQkFBcUNDLEtBQXJDO0FBQUEsWUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsWUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsWUFBb0JDLEtBQXBCLFFBQW9CQSxLQUFwQjtBQUFBLFlBQTJCQyxNQUEzQixRQUEyQkEsTUFBM0I7QUFBQSw0QkFDakIscUVBQUMsd0RBQUQ7QUFBQSxrQ0FDRTtBQUNJLHFCQUFTLEVBQUMsYUFEZDtBQUVJLGlCQUFLLEVBQUU7QUFBRUMsNkJBQWUsRUFBRTtBQUFuQjtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSxxRUFBQyx5REFBRDtBQUFBLG1DQUNFLHFFQUFDLG1EQUFEO0FBQUEscUNBQ0UscUVBQUMsbURBQUQ7QUFBSyxrQkFBRSxFQUFFLEVBQVQ7QUFBYSx5QkFBUyxFQUFDLGFBQXZCO0FBQUEsd0NBQ0U7QUFBRywyQkFBUyxFQUFDLHNCQUFiO0FBQUEsNEJBQXFDSDtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBSSwyQkFBUyxFQUFDLG9CQUFkO0FBQUEsNEJBQW9DQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFFQyxNQUFNLENBQUNFLEdBQW5CO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxjQUFaO0FBQUEsMkNBQ0U7QUFBQSxnQ0FBT0YsTUFBTSxDQUFDRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBLFdBQWtCUCxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQXBCLENBREgsZUFzQkU7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQW9DLFVBQUUsRUFBQyxrQkFBdkM7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQXlCRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBb0MsVUFBRSxFQUFDLGtCQUF2QztBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThERCxDQTNFRDs7S0FBTVosVztBQTZFU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXgtMy5lMGFkNDRmNmFjMmNlOWQyZGIwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBTd2lwZXJDb3JlLCB7IEF1dG9wbGF5LCBOYXZpZ2F0aW9uLCBFZmZlY3RGYWRlIH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IFNsaWRlclRocmVlRGF0YSB9IGZyb20gXCJAL2RhdGFcIjtcblN3aXBlckNvcmUudXNlKFtBdXRvcGxheSwgTmF2aWdhdGlvbiwgRWZmZWN0RmFkZV0pO1xuXG5jb25zdCBTbGlkZXJUaHJlZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpblNsaWRlT3B0aW9ucyA9IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIGxvb3A6IHRydWUsXG4gICAgZWZmZWN0OiBcImZhZGVcIixcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiI21haW4tc2xpZGVyLW5leHRcIixcbiAgICAgIHByZXZFbDogXCIjbWFpbi1zbGlkZXItcHJldlwiXG4gICAgfSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDUwMDBcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpbi1zbGlkZXJcIj5cbiAgICAgIDxTd2lwZXIgey4uLm1haW5TbGlkZU9wdGlvbnN9PlxuICAgICAgICB7U2xpZGVyVGhyZWVEYXRhLm1hcCgoeyBpbWFnZSwgc3ViVGl0bGUsIHRpdGxlLCBidXR0b24gfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAnLi9hc3NldHMvaW1hZ2VzL2hvbWVfMS9wZXhlbHMtc3RhcnR1cC1zdG9jay1waG90b3MtNzM2Ny5qcGcnIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPENvbCBsZz17MTJ9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyX19zdWJ0ZXh0XCI+e3N1YlRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyX190aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtidXR0b24udXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Bjb21tb25fYnRuYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YnV0dG9uLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tcHJldlwiIGlkPVwibWFpbi1zbGlkZXItcHJldlwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tbmV4dFwiIGlkPVwibWFpbi1zbGlkZXItbmV4dFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3dpcGVyPlxuICAgICAgey8qPFN3aXBlciB7Li4ubWFpblNsaWRlT3B0aW9uc30+Ki99XG4gICAgICB7LyogIHtTbGlkZXJUaHJlZURhdGEubWFwKCh7IGltYWdlLCBzdWJUaXRsZSwgdGl0bGUsIGJ1dHRvbiB9LCBpbmRleCkgPT4gKCovfVxuICAgICAgey8qICAgIDxTd2lwZXJTbGlkZSBrZXk9e2luZGV4fT4qL31cbiAgICAgIHsvKiAgICAgIDxkaXYqL31cbiAgICAgIHsvKiAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UtbGF5ZXJcIiovfVxuICAgICAgey8qICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCB9fSovfVxuICAgICAgey8qICAgICAgPjwvZGl2PiovfVxuICAgICAgey8qICAgICAgPENvbnRhaW5lcj4qL31cbiAgICAgIHsvKiAgICAgICAgPFJvdz4qL31cbiAgICAgIHsvKiAgICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4qL31cbiAgICAgIHsvKiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW4tc2xpZGVyX19zdWJ0ZXh0XCI+e3N1YlRpdGxlfTwvcD4qL31cbiAgICAgIHsvKiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYWluLXNsaWRlcl9fdGl0bGVcIj57dGl0bGV9PC9oMz4qL31cbiAgICAgIHsvKiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2J1dHRvbi51cmx9PiovfVxuICAgICAgey8qICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Bjb21tb25fYnRuYH0+Ki99XG4gICAgICB7LyogICAgICAgICAgICAgICAgPHNwYW4+e2J1dHRvbi5sYWJlbH08L3NwYW4+Ki99XG4gICAgICB7LyogICAgICAgICAgICAgIDwvYT4qL31cbiAgICAgIHsvKiAgICAgICAgICAgIDwvTGluaz4qL31cbiAgICAgIHsvKiAgICAgICAgICA8L0NvbD4qL31cbiAgICAgIHsvKiAgICAgICAgPC9Sb3c+Ki99XG4gICAgICB7LyogICAgICA8L0NvbnRhaW5lcj4qL31cbiAgICAgIHsvKiAgICA8L1N3aXBlclNsaWRlPiovfVxuICAgICAgey8qICApKX0qL31cbiAgICAgIHsvKiAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLXByZXZcIiBpZD1cIm1haW4tc2xpZGVyLXByZXZcIj4qL31cbiAgICAgIHsvKiAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPiovfVxuICAgICAgey8qICA8L2Rpdj4qL31cbiAgICAgIHsvKiAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItYnV0dG9uLW5leHRcIiBpZD1cIm1haW4tc2xpZGVyLW5leHRcIj4qL31cbiAgICAgIHsvKiAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT4qL31cbiAgICAgIHsvKiAgPC9kaXY+Ki99XG4gICAgICB7Lyo8L1N3aXBlcj4qL31cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJUaHJlZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=